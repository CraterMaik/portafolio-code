import GithubIcon from 'simple-icons/icons/github';
import TwitterIcon from 'simple-icons/icons/twitter';
import AtandtIcon from 'simple-icons/icons/atandt';
import DiscordIcon from 'simple-icons/icons/discord';

export default function ProjectSections() {
  return (
   <section className="text-gray-400 bg-gray-900 body-font">
     <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-2">
        <h1 className="text-2xl font-medium title-font mb-2 text-gray tracking-widest">DEVELOPED PROJECTS</h1>
       {/*  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
      </div>
     </div>
     <div className="container px-5 pb-12 mx-auto flex flex-wrap">
       <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-4">
            <h1 className="title-font font-medium text-3xl mb-2 text-white">Portal MyBOT</h1>
            <div className="leading-relaxed">Portal MyBOT It is a platform with different guides and tools in Spanish, aimed at developing bots and content for discord communities. <a className="text-pink-400 hover:text-pink-500" href="https://portalmybot.com" target="_blank" rel="noopener noreferrer">portalmybot.com</a></div>
            <div className="mt-6">
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
