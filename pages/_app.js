import Link from 'next/link'

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return( 
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/members">
                <a>Members</a>
              </Link>
            </li>
            <li>
              <Link href="/posts">
                <a>Work</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>      
        <Component {...pageProps} />
      </main>
    </>
    )
}

export default MyApp
