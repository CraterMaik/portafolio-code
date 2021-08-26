import GithubIcon from 'simple-icons/icons/github';
import AtandtIcon from 'simple-icons/icons/atandt';
/* const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  
] */

export default function ProjectSections() {
  return (
   <section className="text-white bg-gray-900">
    
    <div className="flex flex-wrap mx-12">
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://i.imgur.com/GDvZeuv.png" />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-white">MyBOT List</h2>
            <h3 className="text-gray-500 mb-3">Discord Bot List</h3>
            <p className="mb-4">List of public Discord Bots in Spanish, discover new Bots developed by members of the MyBOT Team community.</p>
            <span className="inline-flex">
              <a href="https://portalmybot.com/list" target="_blank" rel="noopener noreferrer" className="mr-2">
                <svg role="img" width="28" className="fill-current text-white hover:text-blue-500 transition delay-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{AtandtIcon.title}</title><path d={AtandtIcon.path}/></svg>
              </a>
              <a href="https://github.com/portalmybot" target="_blank" rel="noopener noreferrer">
                <svg role="img" width="28" className="fill-current text-white hover:text-blue-500 transition delay-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{GithubIcon.title}</title><path d={GithubIcon.path}/></svg>
              </a>

            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://i.imgur.com/aJHxcFF.png" />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-white">MyBOT Codes</h2>
            <h3 className="text-gray-500 mb-3">Discord Codes</h3>
            <p className="mb-4">Sample code list for Discord bot commands.</p>
            <span className="inline-flex">
              <a href="https://portalmybot.com/codes" target="_blank" rel="noopener noreferrer" className="mr-2">
                <svg role="img" width="28" className="fill-current text-white hover:text-blue-500 transition delay-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{AtandtIcon.title}</title><path d={AtandtIcon.path}/></svg>
              </a>
              <a href="https://github.com/portalmybot" target="_blank" rel="noopener noreferrer">
                <svg role="img" width="28" className="fill-current text-white hover:text-blue-500 transition delay-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{GithubIcon.title}</title><path d={GithubIcon.path}/></svg>
              </a>

            </span>
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}
