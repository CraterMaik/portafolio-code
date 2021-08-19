import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import DiscordIcon from 'simple-icons/icons/discord';
import GithubIcon from 'simple-icons/icons/github';
import { classNames } from '../utils/classNames';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Projects', href: '/project', current: false },
  { name: 'Laboratory', href: '/laboratory', current: false },
  { name: 'Skills', href: '/skills', current: false },
  { name: 'Contact', href: '/contact', current: false },
];

export default function NavBar() {
  return (
    <Disclosure as="nav" className="z-40 bg-gradient-to-r from-gray-900 to-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button className="p-1 rounded-full focus:outline-none transition delay-100">
                  <svg role="img" width="28" className="fill-current text-gray-300 hover:text-pink-300 transition delay-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{DiscordIcon.title}</title><path d={DiscordIcon.path}/></svg>
                </button>
                <button className="p-1 rounded-full focus:outline-none transition delay-100">
                  <svg role="img" width="28" className="fill-current text-gray-300 hover:text-pink-300 transition delay-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{GithubIcon.title}</title><path d={GithubIcon.path}/></svg>
                </button>
               
                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
