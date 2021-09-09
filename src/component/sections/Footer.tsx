import GithubIcon from 'simple-icons/icons/github';
import TwitterIcon from 'simple-icons/icons/twitter';
import InstagramIcon from 'simple-icons/icons/instagram';

export default function FooterSections() {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font pt-8">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <span className="ml-3 text-xl">CraterMaik</span>
        </a>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© {new Date().getFullYear()} —
          <a href="https://twitter.com/cratermaik" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@cratermaik</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="https://github.com/cratermaik/" target="_blank" rel="noopener noreferrer" className="mr-2">
            <svg role="img" width="25" className="fill-current text-gray-600 text-white hover:text-gray-200 transition delay-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{GithubIcon.title}</title><path d={GithubIcon.path}/></svg>
          </a>

          <a href="https://twitter.com/cratermaik" target="_blank" rel="noopener noreferrer" className="mr-2">
            <svg role="img" width="25" className="fill-current text-gray-600 text-white hover:text-gray-200 transition delay-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{TwitterIcon.title}</title><path d={TwitterIcon.path}/></svg>
          </a>

          <a href="https://www.instagram.com/crater.maik/" target="_blank" rel="noopener noreferrer">
            <svg role="img" width="25" className="fill-current text-gray-600 hover:text-gray-200 transition delay-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{InstagramIcon.title}</title><path d={InstagramIcon.path}/></svg>
          </a>
        </span>
      </div>
    </footer>
  )
}
