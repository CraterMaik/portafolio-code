import JavascriptIcon from 'simple-icons/icons/javascript';
import Css3Icon from 'simple-icons/icons/css3';
import HtlmIcon from 'simple-icons/icons/html5';
import PhpIcon from 'simple-icons/icons/php';
import CSharpIcon from 'simple-icons/icons/csharp';
import GoIcon from 'simple-icons/icons/go';
import JavaIcon from 'simple-icons/icons/java';
import SqliteIcon from 'simple-icons/icons/sqlite';
import LaravelIcon from 'simple-icons/icons/laravel';

import NodedotjsIcon from 'simple-icons/icons/nodedotjs';
import ReactIcon from 'simple-icons/icons/react';
import VueIcon from 'simple-icons/icons/vuedotjs';
import GithubIcon from 'simple-icons/icons/github';
import GithubactionsIcon from 'simple-icons/icons/githubactions';
import GitIcon from 'simple-icons/icons/git';
import MysqlIcon from 'simple-icons/icons/mysql';
import MongoIcon from 'simple-icons/icons/mongodb';

export default function SkillsSections() {
  return (
    <section className="text-gray-400 body-font bg-gray-900">

      <div className="container flex flex-wrap px-5 pt-10 mx-auto items-center">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-2xl font-medium title-font mb-2 text-gray tracking-widest">SKILLS & EXPERIENCE</h1>
        </div>

        <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 md:mb-0 mb-10 pb-10 border-b border-gray-800">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">What I do?</h1>
          <p className="leading-relaxed text-base">
            The scope of my work is largely coding designs, mobile applications, single page (MVC), animation, css/js and other working base in html/css/js.
            <br/>
            I also build PHP/MySQL applications mainly on open source systems like wordpress. PSD to HTML, psd to wordpress
          </p>
         
        </div>
        
         <div className="flex flex-col md:w-1/2 md:pl-12">
          <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-4 text-center">PROGRAMING LANGUAGES</h2>
          <div className="flex flex-wrap -m-4 text-center">
            
            <div className="p-4 sm:w-1/4 w-1/2">
              <svg role="img" width="30" 
               className="fill-current text-white hover:text-blue-500 transition delay-100 inline-block" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>{JavascriptIcon.title}</title><path fill={'#'+JavascriptIcon.hex} d={JavascriptIcon.path}/>
              </svg>
              <p className="leading-relaxed">JAVASCRIPT</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
               <svg role="img" width="32" 
               className="fill-current text-white hover:text-blue-500 transition delay-100 inline-block" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>{PhpIcon.title}</title><path fill={'#'+PhpIcon.hex} d={PhpIcon.path}/>
              </svg>
              <p className="leading-relaxed">PHP</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <svg role="img" width="32" 
               className="fill-current text-white hover:text-blue-500 transition delay-100 inline-block" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>{CSharpIcon.title}</title><path fill={'#'+CSharpIcon.hex} d={CSharpIcon.path}/>
              </svg>
              <p className="leading-relaxed">C#</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <svg role="img" width="32" 
               className="fill-current text-white hover:text-blue-500 transition delay-100 inline-block" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>{GoIcon.title}</title><path fill={'#'+GoIcon.hex} d={GoIcon.path}/>
              </svg>
              <p className="leading-relaxed">Go</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <svg role="img" width="32" 
               className="fill-current text-white hover:text-blue-500 transition delay-100 inline-block" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>{JavaIcon.title}</title><path fill={'#'+JavaIcon.hex} d={JavaIcon.path}/>
              </svg>
              <p className="leading-relaxed">JAVA</p>
            </div>
            
            <div className="p-4 sm:w-1/4 w-1/2">
              <svg role="img" width="32" 
               className="fill-current text-white hover:text-blue-500 transition delay-100 inline-block" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>{SqliteIcon.title}</title><path fill={'#'+SqliteIcon.hex} d={SqliteIcon.path}/>
              </svg>
              <p className="leading-relaxed">SQL</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <svg role="img" width="32" 
               className="fill-current text-white hover:text-blue-500 transition delay-100 inline-block" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>{HtlmIcon.title}</title><path fill={'#'+HtlmIcon.hex} d={HtlmIcon.path}/>
              </svg>
              <p className="leading-relaxed">HTML</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <svg role="img" width="32" 
               className="fill-current text-white hover:text-blue-500 transition delay-100 inline-block" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>{Css3Icon.title}</title><path fill={'#'+Css3Icon.hex} d={Css3Icon.path}/>
              </svg>
              <p className="leading-relaxed">CSS</p>
            </div>
            
          </div>

          <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mt-8 mb-4 text-center">TECHNOLOGY STACK</h2>
          <div className="flex flex-wrap -m-4 text-center">
            
            <div className="p-4 sm:w-1/4 w-1/2">
              <svg role="img" width="27" 
               className="fill-current text-white hover:text-blue-500 transition delay-100 inline-block" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>{NodedotjsIcon.title}</title><path fill={'#'+NodedotjsIcon.hex} d={NodedotjsIcon.path}/>
              </svg>
              <p className="leading-relaxed text-xs">NODEJS</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <svg role="img" width="27" 
               className="fill-current text-white hover:text-blue-500 transition delay-100 inline-block" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>{ReactIcon.title}</title><path fill={'#'+ReactIcon.hex} d={ReactIcon.path}/>
              </svg>
              <p className="leading-relaxed text-xs">REACT</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <svg role="img" width="27" 
               className="fill-current text-white hover:text-blue-500 transition delay-100 inline-block" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>{LaravelIcon.title}</title><path fill={'#'+LaravelIcon.hex} d={LaravelIcon.path}/>
              </svg>
              <p className="leading-relaxed text-xs">LARAVEL</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <svg role="img" width="27" 
               className="fill-current text-white hover:text-blue-500 transition delay-100 inline-block" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>{VueIcon.title}</title><path fill={'#'+VueIcon.hex} d={VueIcon.path}/>
              </svg>
              <p className="leading-relaxed text-xs">VUE</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <svg role="img" width="27" 
               className="fill-current text-white hover:text-blue-500 transition delay-100 inline-block" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>{GitIcon.title}</title><path fill={'#'+GitIcon.hex} d={GitIcon.path}/>
              </svg>
              <p className="leading-relaxed text-xs">GIT</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <svg role="img" width="32" 
               className="fill-current text-white hover:text-blue-500 transition delay-100 inline-block" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>{MysqlIcon.title}</title><path fill={'#'+MysqlIcon.hex} d={MysqlIcon.path}/>
              </svg>
              <p className="leading-relaxed text-xs">MySQL</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <svg role="img" width="27" 
               className="fill-current text-white hover:text-blue-500 transition delay-100 inline-block" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>{GithubIcon.title}</title><path d={GithubIcon.path}/>
              </svg>
              <p className="leading-relaxed text-xs">GITHUB</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <svg role="img" width="27" 
               className="fill-current text-white hover:text-blue-500 transition delay-100 inline-block" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>{GithubactionsIcon.title}</title><path fill={'#'+GithubactionsIcon.hex} d={GithubactionsIcon.path}/>
              </svg>
              <p className="leading-relaxed text-xs">GITHUB ACTIONS</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <svg role="img" width="27" 
               className="fill-current text-white hover:text-blue-500 transition delay-100 inline-block" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>{MongoIcon.title}</title><path fill={'#'+MongoIcon.hex} d={MongoIcon.path}/>
              </svg>
              <p className="leading-relaxed text-xs">MONGODB</p>
            </div>
            
            
            
          </div>
          
        </div>
      </div>

    </section>
  )
}