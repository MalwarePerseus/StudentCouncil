import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Student Council | APSDC</title>
        <meta name="description" content="Official Website of the APSDC Student Council | Let's Bring About A Revolution!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{height: 100 +'vh',width: 100 +'vw', marginTop: -45 + 'px',marginBottom: -15 + 'px',marginLeft: -15 + 'px' }} className="homepage leading-normal tracking-normal text-indigo-400 m-6 bg-cover bg-fixed bgheaderimage" >
        <div className="h-full">
          {/* Main */}
          <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            {/* Left Col */}
            <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
              <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                The&nbsp;
                <span className="bg-clip-text text-transparent bg-gradient-to-r  from-green-400 via-pink-500 to-purple-500">
                  Student Council 
                </span><br/>
                2021-22
              </h1>
              <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
                Of the Students! For the Students! By the Students! 
              </p>

            </div>
            <div className="w-full xl:w-3/5 p-12 overflow-visible">
              <img className="mx-auto w-full md:w-4/5 transform transition hover:scale-105 duration-700 ease-in-out hover:rotate-6  -rotate-6 rounded-3xl -mt-8" src="councilrot.jpg" alt="headerimage" />
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}
