import Link from 'next/link'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return( 
    <>
      <nav className="flex items-center justify-between flex-wrap p-2">
          <div className="flex items-center flex-shrink-0 mr-6">
              <span className="font-semibold text-xl tracking-tight">APS DC | Student Council</span>
          </div>
          <div className="block lg:hidden">
              <button>
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
              </button>
          </div>
          <div className="w-full flex-grow block lg:flex lg:w-auto lg:items-center">
              <div className="text-md lg:flex-grow">
                  <Link href='/'>
                    <a className="block mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4">
                      Home
                    </a>
                  </Link>
                  <Link href='/members'>
                    <a className="block mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4">
                      Members
                    </a>
                  </Link>
                  <Link href='/posts'>
                    <a className="block mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4">
                      Work
                    </a>
                  </Link>
                  <Link href='/contact'>
                    <a className="block mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4">
                      Contact Us
                    </a>
                  </Link>
              </div>
              <div>
                <Link href="https://discord.gg/">
                  <a className="inline-block text-sm px-4 py-2 leading-none border rounded text-green-200 border-purple-600 hover:border-transparent hover:text-purple-900 hover:bg-white mt-4 lg:mt-0">
                    Join Discord
                  </a>
                </Link>
              </div>
          </div>
      </nav>
      <main>      
        <Component {...pageProps} />
      </main>
    </>
    )
}

export default MyApp
