import GithubIcon from 'simple-icons/icons/github';
import TwitterIcon from 'simple-icons/icons/twitter';
import AtandtIcon from 'simple-icons/icons/atandt';
import DiscordIcon from 'simple-icons/icons/discord';

export default function ProjectSections() {
  return (
   <section className="text-gray-400 bg-gray-900 body-font">
     <div className="container px-5 py-20 mx-auto">
      <div className="flex flex-col text-center w-full mb-2">
        <h2 className="text-2xl font-medium title-font mb-2 text-gray tracking-widest">DEVELOPED PROJECTS</h2>
       
      </div>
     </div>
     <div className="container px-5 pb-12 mx-auto flex flex-wrap">
       <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-4">
            <h1 className="title-font font-medium text-3xl mb-2 text-white">Portal MyBOT</h1>
            <div className="leading-relaxed mb-1">Portal MyBOT It is a platform with different guides and tools in Spanish, aimed at developing bots and content for Discord communities.</div>
            <div className="flex space-x-2 py-2 mb-4">

              <div className="flex items-center space-x-1 text-sm font-semibold px-2 bg-green-500 text-white rounded-full">
                <div className="bg-white w-1 h-1 rounded-full"></div>
                <div>PHP</div>
              </div>
              <div className="hidden md:flex items-center space-x-1 text-sm font-semibold px-2 bg-green-500 text-white rounded-full">
                <div className="bg-white w-1 h-1 rounded-full"></div>
                <div>NGINX</div>
              </div>
              <div className="hidden md:flex items-center space-x-1 text-sm font-semibold px-2 bg-green-500 text-white rounded-full">
                <div className="bg-white w-1 h-1 rounded-full"></div>
                <div>MYSQL</div>
              </div>
              <div className="flex items-center space-x-1 text-sm font-semibold px-2 bg-green-500 text-white rounded-full">
                <div className="bg-white w-1 h-1 rounded-full"></div>
                <div>JS</div>
              </div>
              <div className="flex items-center space-x-1 text-sm font-semibold px-2 bg-green-500 text-white rounded-full">
                <div className="bg-white w-1 h-1 rounded-full"></div>
                <div>HTML</div>
              </div>
              <div className="flex items-center space-x-1 text-sm  font-semibold px-2 bg-green-500 text-white rounded-full">
                <div className="bg-white w-1 h-1 rounded-full"></div>
                <div>CSS</div>
              </div>
              
            </div>
            <a
              href="https://portalmybot.com" target="_blank" rel="noopener noreferrer"
              className="inline-block text-center bg-gradient-to-r from-pink-400 to-blue-500 rounded-md py-2 px-6 font-medium text-white hover:from-blue-400 hover:to-pink-400"
            >
                View Project
            </a>
            <div className="mt-4">
              <button className="p-1 rounded-full focus:outline-none transition delay-100">
                <a href="https://portalmybot.com/" target="_blank" rel="noopener noreferrer">
                  <svg role="img" width="32" className="fill-current text-white hover:text-blue-500 transition delay-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{AtandtIcon.title}</title><path d={AtandtIcon.path}/></svg>
                </a>
              </button>
              <button className="p-1 rounded-full focus:outline-none transition delay-100">
                <a href="https://github.com/portalmybot" target="_blank" rel="noopener noreferrer">
                  <svg role="img" width="32" className="fill-current text-white hover:text-blue-500 transition delay-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{GithubIcon.title}</title><path d={GithubIcon.path}/></svg>
                </a>
              </button>
              <button className="p-1 rounded-full focus:outline-none transition delay-100">
                <a href="https://twitter.com/portalmybot" target="_blank" rel="noopener noreferrer">
                  <svg role="img" width="32" className="fill-current text-white hover:text-blue-500 transition delay-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{TwitterIcon.title}</title><path d={TwitterIcon.path}/></svg>
                </a>
              </button>
              <button className="p-1 rounded-full focus:outline-none transition delay-100">
                <a href="https://portalmybot.com/discord" target="_blank" rel="noopener noreferrer">
                  <svg role="img" width="32" className="fill-current text-white hover:text-blue-500 transition delay-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{DiscordIcon.title}</title><path d={DiscordIcon.path}/></svg>
                </a>
              </button>
            </div>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-white">+17K</h2>
            <p className="leading-relaxed">Users</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-white">+800</h2>
            <p className="leading-relaxed">Codes</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-white">+300</h2>
            <p className="leading-relaxed">Bots</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-white">+5K</h2>
            <p className="leading-relaxed">in Discord</p>
          </div>
        </div>
         <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <img className="object-cover object-center w-full h-full" src="https://i.imgur.com/lD8oSRr.png" alt="project PortalMyBOT" />
        </div>
     </div>
   </section>
  )
}
