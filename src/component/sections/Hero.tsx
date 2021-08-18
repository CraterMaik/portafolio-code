export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <span className="px-2 inline-flex text-2xl text-gray-900 font font-medium rounded-md bg-green-300">
            Hola
          </span>
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font font-extrabold tracking-tight text-white sm:text-6xl">
              Soy CraterMaik
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              Freelance Web, Founder of <a className="text-pink-400 hover:text-pink-500" href="https://portalmybot.com" target="_blank" rel="noopener noreferrer">portalmybot.com</a>, Full Stack Developer.
            </p>
            
          </div>
          <div>
            <div className="mt-10">
              <a
                href="/discord"
                className="inline-block text-center bg-gradient-to-r from-green-400 to-blue-500 rounded-md py-3 px-8 font-medium text-white hover:from-blue-400 hover:to-green-400"
              >
                Contactar
              </a>
              <a
                href="/proyectos"
                className="inline-block text-center ml-2 bg-pink-500 rounded-md py-3 px-8 font-medium text-white hover:bg-pink-700"
              >
                Proyectos
              </a>
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
