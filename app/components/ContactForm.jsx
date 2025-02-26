"use client"
import { useState } from "react"
export default function ContactForm(){
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [content, setContent] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email);
        console.log(phone);
        console.log(content);
    }
    return (
        <form action="" onSubmit={handleSubmit} className="mx-auto w-3/4 flex flex-col gap-5 h-full">

          <input className="w-2/5 p-5 border-[1px] border-primary-dark rounded-md mx-auto outline-none" type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
      

          <input className="w-2/5 p-5 border-[1px] border-primary-dark rounded-md mx-auto outline-none" type="text" name="phone" placeholder="Téléphone" onChange={(e) => setPhone(e.target.value)} value={phone}/>
    
       
          <textarea className="p-5 border-[1px] border-primary-dark outline-none rounded-md resize-none" placeholder="Votre demande" name="content" id="content" rows={10} cols={100} onChange={(e) => setContent(e.target.value)} value={content}></textarea>
        
        <button className="bg-primary-dark text-white rounded-md text-center  w-2/5 py-5 mx-auto mt-5" type="submit">Envoyer</button>
       </form>
    )
}