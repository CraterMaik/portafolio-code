import { Link } from 'react-router-dom';

import DiscordIcon from 'simple-icons/icons/discord';
import GithubIcon from 'simple-icons/icons/github';
import InstagramIcon from 'simple-icons/icons/instagram';
import TwitchIcon from 'simple-icons/icons/twitch';
import TwitterIcon from 'simple-icons/icons/twitter';
import PaypalIcon from 'simple-icons/icons/paypal';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <span className="px-2 inline-flex text-2xl text-gray-900 font font-medium rounded-md bg-green-300">
            Hello
          </span>
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font font-extrabold tracking-tight text-white sm:text-6xl">
              I'm CraterMaik
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              Freelance Web, Founder of <a className="text-pink-400 hover:text-pink-500" href="https://portalmybot.com" target="_blank" rel="noopener noreferrer">portalmybot.com</a>, Full Stack Developer.
            </p>
            <div className="mt-5">
                <button className="p-1 rounded-full focus:outline-none transition delay-100">
                  <a href="https://github.com/cratermaik/" target="_blank" rel="noopener noreferrer">
                    <svg role="img" width="28" className="fill-current text-white hover:text-pink-500 transition delay-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{GithubIcon.title}</title><path d={GithubIcon.path}/></svg>
                  </a>
                </button>
                <button className="p-1 rounded-full focus:outline-none transition delay-100">
                  <a href="https://twitter.com/cratermaik" target="_blank" rel="noopener noreferrer">
                    <svg role="img" width="28" className="fill-current text-white hover:text-pink-500 transition delay-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{TwitterIcon.title}</title><path d={TwitterIcon.path}/></svg>
                  </a>
                </button>
                <button className="p-1 rounded-full focus:outline-none transition delay-100">
                  <a href="https://www.twitch.tv/cratermaik" target="_blank" rel="noopener noreferrer">
                    <svg role="img" width="28" className="fill-current text-white hover:text-pink-500 transition delay-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{TwitchIcon.title}</title><path d={TwitchIcon.path}/></svg>
                  </a>
                </button>
                <button className="p-1 rounded-full focus:outline-none transition delay-100">
                  <a href="https://discord.com/channels/@me/253727823972401153" target="_blank" rel="noopener noreferrer">
                    <svg role="img" width="28" className="fill-current text-white hover:text-pink-500 transition delay-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{DiscordIcon.title}</title><path d={DiscordIcon.path}/></svg>
                  </a>
                </button>
                <button className="p-1 rounded-full focus:outline-none transition delay-100">
                  <a href="https://www.instagram.com/crater.maik/" target="_blank" rel="noopener noreferrer">
                    <svg role="img" width="28" className="fill-current text-white hover:text-pink-500 transition delay-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{InstagramIcon.title}</title><path d={InstagramIcon.path}/></svg>
                  </a>
                </button>
                <button className="p-1 rounded-full focus:outline-none transition delay-100">
                  <a href="https://www.paypal.com/paypalme/TMyBOT" target="_blank" rel="noopener noreferrer">
                    <svg role="img" width="28" className="fill-current text-white hover:text-pink-500 transition delay-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{PaypalIcon.title}</title><path d={PaypalIcon.path}/></svg>
                  </a>
                </button>
            </div>
          </div>
          <div>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-block text-center bg-gradient-to-r from-green-400 to-blue-500 rounded-md py-3 px-8 font-medium text-white hover:from-blue-400 hover:to-green-400"
              >
                Contact
              </Link>
              <Link
                to="/projects"
                className="inline-block text-center ml-2 bg-pink-500 rounded-md py-3 px-8 font-medium text-white hover:bg-pink-700"
              >
                Projects
              </Link>
              <div className="absolute xl:w-1/2 lg:w-1/2 xl:top-24 lg:top-24 inset-y-0 right-12">
                <img
                  className="hidden lg:block"
                  src="https://i.imgur.com/Acys344.png"
                  alt="background hero"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
