import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { CheckIcon  } from '@heroicons/react/outline';
import axios from "axios";
require('dotenv').config();

const config = {
  headers: {
    'Accept': 'application/json',
    'Content-type': 'application/json',
  }
}

const configValue : string = (process.env.REACT_APP_WHS as string);

export default function ContactSections() {
  const [data, setData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = React.useRef(0);

  useEffect(() => {
    clearTimeout(timer.current);
   
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({
       ...data,
       [event.target.name] : event.target.value
    })
  }
  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setData({
       ...data,
       [event.target.name] : event.target.value
    })
  }

  const submitForm  = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!data.name || !data.email || !data.message) return alert('Agrege sus datos para poder contactarme.');

     if (!loading) {
      
      setLoading(true);
      
       timer.current = window.setTimeout(async () => {
         setLoading(false);
         setSuccess(true);
         await axios.post(configValue, {
           username: 'Email',
           embeds: [{
             "description": `**__Hola quiero contactarte__**\n\n**Nombre:** ${data.name}\n**Email:** ${data.email}\n**Mensaje:** ${data.message}`,
             "color": '15277667'
           }]
         }, config);
     
         setData({
           name: '',
           email: '',
           message: ''
         })
   
       }, 3000);

     }

  }

  return (
    <section className="text-gray-400 bg-gray-900 body-font relative">

      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">

        <div className="lg:w-2/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-2xl font-medium title-font mb-2 text-gray tracking-widest">CONTACT ME</h2>
            <p className="lg:w-2/3  leading-relaxed text-base mb-6">Let's develop cool projects together!</p>
            <form className="row" onSubmit={submitForm}>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-400">Name</label>
                
                <input type="text" id="name" name="name" onChange={handleInputChange} className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-400">Email</label>
                <input type="email" id="email" name="email" onChange={handleInputChange} className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-400">Message</label>
                <textarea id="message" name="message" onChange={handleTextAreaChange} className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>

             <button type="submit" className="text-white w-full bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
               {!success && !loading && 'Send'}
               {loading && 'Sending ...'}
               {success && <CheckIcon className="h-6 w-6 text-green-500 m-auto" aria-hidden="true"/>}
              </button>
              
            </form>
        </div>

        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          
          <div className="bg-gray-800 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6 mb-4">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">YOUTUBE</h2>
              <a href="https://www.youtube.com/cratermaik" className="text-indigo-400 leading-relaxed" target="_blank" rel="noopener noreferrer">u/CraterMaik</a>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
              <a href="mailto:cratermaik@gmail.com" className="text-indigo-400 leading-relaxed">cratermaik@gmail.com</a>
              
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL PORTALMYBOT</h2>
              <a href="mailto:team@portalmybot.com" className="text-indigo-400 leading-relaxed">team@portalmybot.com</a>
              
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">DISCORD</h2>
              <a href="https://discord.com/channels/@me/253727823972401153" target="_blank" rel="noopener noreferrer" className="text-indigo-400 leading-relaxed">@CraterMaik</a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}