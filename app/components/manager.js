"use client"

import crypto from "crypto";
import bcrypt from 'bcryptjs'
import { Button } from '@/components/ui/button'
import React, { useState, useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { Getting } from '../functions/privatemetadata'
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

import { ToastContainer, toast } from 'react-toastify';

import Image from 'next/image'

const Manager = () => {
    const User = useUser();
    const [form, setForm] = useState({ website: "", username: "", password: "", mastercode: "" });
    const [mastercode, setMastercode] = useState('');
    const [passwordarray, setPasswordarray] = useState([]);
    const [show, setShow] = useState(false);
    
    const check = async () => {
        try {
            const userMetadata = await Getting();
            if (!userMetadata || !userMetadata.key) {
                console.error("Encryption key missing from user metadata");
                toast.error("Encryption key missing. Please try again.");
                       }
    
            const storedKey = Buffer.from(userMetadata.key, "hex");
            const algorithm = "aes-256-cbc";
    
            const isValid = await bcrypt.compare(mastercode, userMetadata.Mastercode);
            if (!isValid) {
                toast.error("Invalid mastercode");
                
            }
    
    
            let decryptedPasswords = passwordarray.map(element => {
                try {
                    if ( !element.iv ) {
                    setShow(true) 
                    }
    
                    const providedIv = Buffer.from(element.iv, "hex");
                    const decipher = crypto.createDecipheriv(algorithm, storedKey, providedIv);
    
                    let decrypted = decipher.update(element.password, "hex", "utf8");
                    decrypted += decipher.final("utf8");
    
                    return { ...element, password: decrypted };
                } catch (error) {
                    console.error("Error decrypting password:", error);
                    return element; // Keep original if decryption fails
                }
            });
    
            setShow(true);
            setPasswordarray(decryptedPasswords);
            toast("Decrypted successfully");
        } catch (error) {
            console.error("Error in check function:", error);
            toast.error("Something went wrong. Please try again.");
        }
    };
    const deletePassword = async (id) => {
        try {
            const response = await fetch("https://bitaegiris.vercel.app/api/delete", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id })
            });
            const result = await response.json();

            if (result.success) {
                setPasswordarray(prevPasswords => prevPasswords.filter(item => item.id !== id));
                toast("Password Deleted Successfully");
            } else {
                toast.error("Error deleting password: " + result.message);
            }
        } catch (error) {
            console.error("Delete request failed:", error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://bitaegiris.vercel.app/api/get");
            const data = await res.json();
            if(data&&data.body){
            setPasswordarray(data.body);
            }
        };
        fetchData();
    }, []);

    const Submit = () => {
        const newPassword = { ...form, id: uuidv4() };
        setPasswordarray(prevPasswords => [...prevPasswords, newPassword]);

        const raw = JSON.stringify({
            ...newPassword,
            password: form.mastercode + 'V@u|t!y' + form.password,
            user: User?.user?.id
        });

        fetch("https://bitaegiris.vercel.app/api", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: raw
        }).then(() => {
            setForm({ website: "", username: "", password: "", mastercode: "" });
            toast("Password added successfully");
        }).catch(error => console.error(error));
    };
       
    return (  <div className="flex flex-col border text-center justify-center items-center w-[100%] h-[100%]">
            <div className="flex text-3xl font-bold my-8text-blue-800 my-8"> Welcome to password manager we are most securest password saver:</div>
            <div className="input my-16  w-[100%] flex-col flex  justify-center items-center text-center gap-4">
                <h1 className="flex text-center  text-xl font-bold 2">Enter Your Credentials:</h1>
                <div className="flex  inputwebsiteandusername sm:flex-row flex-col justify-center items-center w-[100%]">            <div className="inputwebsite sm:flex-row flex-col  sm:w-[40%] w-[80%] gap-4 flex  p-2">
                    <label htmlFor="website">Website Url:</label>
                    <input type="text" name="website" id="website" className='sm:w-[80%] w-[100%] border border-black rounded-2xl p-2 text-xs' value={form.website} onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} placeholder="Enter Your Webiste Url" />
                </div>
                    <div className="inputusername  sm:flex-row flex-col gap-4 flex p-2 sm:w-[30%] w-[80%]" >
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" id="username" className=' w-[100%] border border-black rounded-2xl p-2 text-xs sm:w-[80%]' value={form.username} onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} placeholder="Enter Your Username" />
                    </div>
                </div>

                <div className="password sm:flex-row flex-col gap-4 p-2 flex sm:w-[30%] w-[80%] ">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" value={form.password} onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} className=' w-[100%] border border-black rounded-2xl p-2 text-xs sm:w-[80%]' placeholder="Enter Your Password" />
                </div>
            </div>
            <Button onClick={() => Submit()} className='sm:w-[30%] w-[70%] rounded-xl'>Submit</Button>
            <div className="checkingmastercode my-16 sm:flex-row flex-col sm:w-[50%] w-[70%] font-bold text-xl flex gap-2 justify-center items-center">
                <label htmlFor="mastercode">Mastercode:</label>
                <input type="text" name="mastercode" id="mastercode" value={mastercode} placeholder='Enter Your Saved Mastercode' className='w-[100%] border border-black rounded-2xl p-2 text-xs sm:w-[80%]' onChange={(e) => setMastercode(e.target.value)} />
                <Button className='sm:w-[30%] w-[70%] rounded-xl' onClick={() => check()}>See Password</Button>
            </div>
            <div className="output font-bold gap-2 w-[100%] flex flex-col justify-center items-center">
                {passwordarray.map((item) => {
                    return <div key={item.id} className="output gap-6 shadow-xl shadow-blue-100 flex justify-evenly items-center w-[80%] rounded-md  py-4 bg-blue-50 border-white border-2 flex-wrap">
                        <Link href={item.website}>{item.website}</Link>
                        <span>{item.username}</span>
                        <span>
    {show ? item.password.includes('V@u|t!y') 
        ? item.password.split('V@u|t!y')[1] 
        : item.password:".........."}
</span>
                     <button className='bg-blue-50' onClick={() => deletePassword(item.id)}><Image src='/delete.png' className='bg-blue-50' width={30} height={30}alt='delete'></Image ></button>
                          </div>})}

            </div>
        </div>
    )
    }

export default Manager
