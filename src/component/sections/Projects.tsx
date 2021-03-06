import { Link } from 'react-router-dom';
import Card from '../projects/card';

export default function ProjectSections() {
  return (
   <section className="text-gray-400 bg-gray-900 body-font">
     <div className="container px-5 py-24 mx-auto flex flex-wrap">
       <div className="flex flex-wrap -m-4">
         <div className="p-4 lg:w-1/2 md:w-full">
           <div className="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
              <div className="sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center flex-shrink-0">
               <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://i.imgur.com/GDvZeuv.png" />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">MyBOT List</h2>
                <p className="leading-relaxed text-base">List of public Discord Bots in Spanish, discover new Bots developed by members of the MyBOT Team community.</p>
                <div className="flex space-x-2 py-2 mb-2">
                  <div className="flex items-center space-x-1 text-sm font-medium px-2 bg-green-500 text-white rounded-full truncate">
                    <div className="bg-white w-1 h-1 rounded-full"></div>
                    <div>REACTJS</div>
                  </div>
                  <div className="hidden sm:flex items-center space-x-1 text-sm lg:hidden font-medium px-2 bg-green-500 text-white rounded-full truncate">
                    <div className="bg-white w-1 h-1 rounded-full"></div>
                    <div>API LARAVEL</div>
                  </div>
                  <div className="flex items-center space-x-1 text-sm font-medium px-2 bg-green-500 text-white rounded-full truncate">
                    <div className="bg-white w-1 h-1 rounded-full"></div>
                    <div>MySQL</div>
                  </div>
                </div>
                <a
                  href="https://portalmybot.com/list" target="_blank" rel="noopener noreferrer"
                  className="inline-block text-center bg-gradient-to-r from-pink-400 to-blue-500 rounded-md py-2 px-4 font-medium text-white hover:from-blue-400 hover:to-pink-400"
                >
                    View Project
                </a>
              </div>
           </div>
         </div>
         <Card />
         <Card />
         <Card />
         <div className="p-4 lg:w-1/2 md:w-full">
           <div className="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
              <div className="sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center flex-shrink-0">
               <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://i.imgur.com/Sr9GkWQ.png" />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">MyBOT Dashboard</h2>
                <p className="leading-relaxed text-base">Dashboard for portalmybot user profiles with statistics for points, achievements, codes and followers.</p>
                <div className="flex space-x-2 py-2 mb-2">
                  <div className="flex items-center space-x-1 text-sm font-medium px-2 bg-green-500 text-white rounded-full ">
                    <div className="bg-white w-1 h-1 rounded-full"></div>
                    <div>PHP</div>
                  </div>
                  <div className="flex items-center space-x-1 text-sm font-medium px-2 bg-green-500 text-white rounded-full ">
                    <div className="bg-white w-1 h-1 rounded-full"></div>
                    <div>MySQL</div>
                  </div>
                  <div className="hidden md:flex lg:hidden items-center space-x-1 text-sm font-medium px-2 bg-green-500 text-white rounded-full ">
                    <div className="bg-white w-1 h-1 rounded-full"></div>
                    <div>Discord API</div>
                  </div>
                </div>
                <a
                  href="https://portalmybot.com/dashboard" target="_blank" rel="noopener noreferrer"
                  className="inline-block text-center bg-gradient-to-r from-pink-400 to-blue-500 rounded-md py-2 px-4 font-medium text-white hover:from-blue-400 hover:to-pink-400"
                >
                    View Project
                </a>
              </div>
           </div>
         </div>
         <div className="p-4 lg:w-1/2 md:w-full">
           <div className="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
              <div className="sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center flex-shrink-0">
               <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://i.imgur.com/fnRh3ms.png" />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">Portal Discord</h2>
                <p className="leading-relaxed text-base">A simple web template with the design of the interface of discord app.</p>
                <div className="flex space-x-2 py-2 mb-2">
                  <div className="flex items-center space-x-1 text-sm font-medium px-2 bg-green-500 text-white rounded-full ">
                    <div className="bg-white w-1 h-1 rounded-full"></div>
                    <div>HTML5</div>
                  </div>
                  <div className="flex items-center space-x-1 text-sm font-medium px-2 bg-green-500 text-white rounded-full ">
                    <div className="bg-white w-1 h-1 rounded-full"></div>
                    <div>JQuery</div>
                  </div>
                  <div className="hidden md:flex lg:hidden items-center space-x-1 text-sm font-medium px-2 bg-green-500 text-white rounded-full ">
                    <div className="bg-white w-1 h-1 rounded-full"></div>
                    <div>Materialize CSS</div>
                  </div>
                </div>
                <a
                  href="https://portaldiscord.glitch.me/" target="_blank" rel="noopener noreferrer"
                  className="inline-block text-center bg-gradient-to-r from-pink-400 to-blue-500 rounded-md py-2 px-4 font-medium text-white hover:from-blue-400 hover:to-pink-400"
                >
                    View Project
                </a>
              </div>
           </div>
         </div>
         <div className="p-4 lg:w-1/2 md:w-full">
           <div className="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
              <div className="sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center flex-shrink-0">
               <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://i.imgur.com/hZYlkUA.png" />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">MyPRO</h2>
                <p className="leading-relaxed text-base">Project listing platform for discord users, where you can share your best developed projects.</p>
                <div className="flex space-x-2 py-2 mb-2">
                  <div className="flex items-center space-x-1 text-sm font-medium px-2 bg-green-500 text-white rounded-full ">
                    <div className="bg-white w-1 h-1 rounded-full"></div>
                    <div>NODEJS</div>
                  </div>
                  <div className="flex items-center lg:hidden space-x-1 text-sm font-medium px-2 bg-green-500 text-white rounded-full ">
                    <div className="bg-white w-1 h-1 rounded-full"></div>
                    <div>EXPRESS</div>
                  </div>
                  <div className="hidden md:flex lg:hidden items-center space-x-1 text-sm font-medium px-2 bg-green-500 text-white rounded-full ">
                    <div className="bg-white w-1 h-1 rounded-full"></div>
                    <div>BOOTSTRAP</div>
                  </div>
                </div>
                <a
                  href="https://mypro-discord.glitch.me/" target="_blank" rel="noopener noreferrer"
                  className="inline-block text-center bg-gradient-to-r from-pink-400 to-blue-500 rounded-md py-2 px-4 font-medium text-white hover:from-blue-400 hover:to-pink-400"
                >
                    View Project
                </a>
              </div>
           </div>
         </div>
         <div className="p-4 lg:w-1/2 md:w-full">
           <div className="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
              <div className="sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center flex-shrink-0">
               <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://i.imgur.com/FWltKjm.png" />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">MyDASH</h2>
                <p className="leading-relaxed text-base">Application to control data and profiles through the use of Discord bots.</p>
                <div className="flex space-x-2 py-2 mb-2">
                  <div className="flex items-center space-x-1 text-sm font-medium px-2 bg-green-500 text-white rounded-full ">
                    <div className="bg-white w-1 h-1 rounded-full"></div>
                    <div>NODEJS</div>
                  </div>
                  <div className="hidden md:flex lg:hidden items-center space-x-1 text-sm font-medium px-2 bg-green-500 text-white rounded-full ">
                    <div className="bg-white w-1 h-1 rounded-full"></div>
                    <div>EXPRESS</div>
                  </div>
                  <div className="flex items-center lg:hidden space-x-1 text-sm font-medium px-2 bg-green-500 text-white rounded-full ">
                    <div className="bg-white w-1 h-1 rounded-full"></div>
                    <div>SQLite</div>
                  </div>
                </div>
                <a
                  href="https://github.com/CraterMaik/myDash" target="_blank" rel="noopener noreferrer"
                  className="inline-block text-center bg-gradient-to-r from-pink-400 to-blue-500 rounded-md py-2 px-4 font-medium text-white hover:from-blue-400 hover:to-pink-400"
                >
                    View Project
                </a>
              </div>
           </div>
         </div>
         <div className="p-4 lg:w-1/2 md:w-full">
           <div className="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
              <div className="sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center flex-shrink-0">
               <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://i.imgur.com/2MRI90w.png" />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">DIIMG</h2>
                <p className="leading-relaxed text-base">Host your images without having to register.</p>
                <div className="flex space-x-2 py-2 mb-2">
                  <div className="flex items-center space-x-1 text-sm font-medium px-2 bg-green-500 text-white rounded-full ">
                    <div className="bg-white w-1 h-1 rounded-full"></div>
                    <div>NODEJS</div>
                  </div>
                  <div className="hidden md:flex lg:hidden items-center space-x-1 text-sm font-medium px-2 bg-green-500 text-white rounded-full ">
                    <div className="bg-white w-1 h-1 rounded-full"></div>
                    <div>EXPRESS</div>
                  </div>
                  <div className="flex items-center lg:hidden space-x-1 text-sm font-medium px-2 bg-green-500 text-white rounded-full ">
                    <div className="bg-white w-1 h-1 rounded-full"></div>
                    <div>JQUERY</div>
                  </div>
                </div>
                <a
                  href="https://diimg.glitch.me/" target="_blank" rel="noopener noreferrer"
                  className="inline-block text-center bg-gradient-to-r from-pink-400 to-blue-500 rounded-md py-2 px-4 font-medium text-white hover:from-blue-400 hover:to-pink-400"
                >
                    View Project
                </a>
              </div>
           </div>
         </div>
         <div className="p-4 lg:w-1/2 md:w-full">
           <div className="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
              <div className="sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center flex-shrink-0">
               <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://i.imgur.com/dgntbT3.png" />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">IMAGIX</h2>
                <p className="leading-relaxed text-base">Imagix is ??????a framework for jimp to manipulate images in a simpler and cleaner way.</p>
                <div className="flex space-x-2 py-2 mb-2">
                  <div className="hidden md:flex items-center space-x-1 text-sm font-medium px-2 bg-green-500 text-white rounded-full ">
                    <div className="bg-white w-1 h-1 rounded-full"></div>
                    <div>NODEJS</div>
                  </div>
                  <div className="flex items-center lg:hidden space-x-1 text-sm font-medium px-2 bg-green-500 text-white rounded-full ">
                    <div className="bg-white w-1 h-1 rounded-full"></div>
                    <div>JIMP</div>
                  </div>
                  <div className="flex items-center space-x-1 text-sm font-medium px-2 bg-green-500 text-white rounded-full ">
                    <div className="bg-white w-1 h-1 rounded-full"></div>
                    <div>NPM</div>
                  </div>
                  
                </div>
                <a
                  href="https://www.npmjs.com/package/imagix" target="_blank" rel="noopener noreferrer"
                  className="inline-block text-center bg-gradient-to-r from-pink-400 to-blue-500 rounded-md py-2 px-4 font-medium text-white hover:from-blue-400 hover:to-pink-400"
                >
                    View Project
                </a>
              </div>
           </div>
         </div>
         
         <div className="flex mx-auto my-4">
            <Link
             to={'/projects'}
             className="inline-block text-center ml-2 bg-pink-500 rounded-md py-3 px-8 font-medium text-white hover:bg-pink-700"
            >
              More projects
            </Link>
         </div>
       </div>
     </div>
   </section>

  )
}
