

const page = () => {
    const tips=[
        { "tip": "Use a strong password with 12+ characters, including letters, numbers, and symbols.", "emoji": "🔐" },
        { "tip": "Do not reuse passwords across multiple sites.", "emoji": "🚫" },
        { "tip": "Use a password manager like BitAegiris to securely store passwords.", "emoji": "🗄️" },
        { "tip": "Enable two-factor authentication (2FA) for an extra security layer.", "emoji": "📲" },
        { "tip": "Prefer an authenticator app (Google Authenticator, Authy) over SMS for 2FA.", "emoji": "✅" },
        { "tip": "Avoid clicking on suspicious links or downloading unknown attachments.", "emoji": "⚠️" },
        { "tip": "Always verify the website URL before entering credentials.", "emoji": "🔍" },
        { "tip": "Do not provide login details in response to unexpected emails.", "emoji": "📩" },
        { "tip": "Keep your browser, operating system, and apps updated regularly.", "emoji": "🔄" },
        { "tip": "Use reputable antivirus software and enable firewalls.", "emoji": "🛡️" },
        { "tip": "Always log out from public or shared devices after use.", "emoji": "🚪" },
        { "tip": "Only use the 'Remember Me' option on personal devices.", "emoji": "💾" },
        { "tip": "Regularly review your account login history for unusual activity.", "emoji": "📊" },
        { "tip": "Change your password immediately if you notice suspicious activity.", "emoji": "🔄🔐" },
        { "tip": "Avoid logging in on public Wi-Fi without using a VPN.", "emoji": "📶🔒" },
        { "tip": "Ensure websites use HTTPS before entering sensitive information.", "emoji": "🌐🔒" },
        { "tip": "Report any security vulnerabilities or suspicious activity to the website.", "emoji": "📝" },
        { "tip": "Check if the website provides a security contact for reporting concerns.", "emoji": "📞" }
      ]
  return (
    <div className='w-[100%] h-[100%] flex flex-col justify-center my-8 p-8 items-center'>
      <h1 className="text-3xl font-bold">Protect Your Account: Best Security Practices</h1>
      <div className="flex  gap-16 w-[80%] h-[100%] justify-center items-center flex-wrap">
{
tips.map((item) => {
  return <div className="card text-xl sm:w-[40%] w-[80%] xl:w-[20%] xl:h-[20%] h-[80%] sm:h-[40%]  flex justify-center text-center items-center p-4 rounded-xl border flex-col shadow-xl shadow-blue-100" key={item.tip}><span>{item.emoji}</span><span>{item.tip}</span></div>
}
)
}

      </div>
    </div>
  )
}

export default page
