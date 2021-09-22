export default function ProjectCard() {
  return (
          <div className="p-4 lg:w-1/2 sm:w-full">
           <div className="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
              <div className="sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center flex-shrink-0">
               <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://i.imgur.com/FAxHhw2.png" />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">MyBOT Codes</h2>
                <p className="leading-relaxed text-base">Sample code list for bot functions, web app and Discord servers.</p>
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
                    <div>NGINX</div>
                  </div>
                </div>
                <a
                  href="https://portalmybot.com/codes" target="_blank" rel="noopener noreferrer"
                  className="inline-block text-center bg-gradient-to-r from-pink-400 to-blue-500 rounded-md py-2 px-4 font-medium text-white hover:from-blue-400 hover:to-pink-400"
                >
                    View Project
                </a>
              </div>
           </div>
         </div>
  )
}