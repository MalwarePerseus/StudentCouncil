import Image from 'next/image'
import Link from 'next/link'

import { getAllHeads, getAllExecHeads, getAllExecMems, getAllSportCaps } from '../../lib/api'

export default function Members({ heads, execMems, execHeads, sportCaps }) {
  return (
    <div className="members">
      <h1>Council Members</h1>

      <div className="grid grid-cols-2">
        {heads.map(head => (
          <div key={head.slug} className="py-24 px-40 mx-auto bg-purple-600 rounded-3xl my-5 mx-16 hover:bg-purple-700 shadow-2xl">
            <div className="-mt-16 pb-8 rounded-full"><Image alt={head.name} src={head.profilePictureURL} height="90" width="90" className="rounded-full" /></div>
            <h2 className="text-center text-xl font-bold">
              <Link href={head.permalink}>
                <a>{head.name}</a>
              </Link>
            </h2>

            <div className="text-lg text-center">
              <Link href={head.permalink}>
                <a>Go to profile →</a>
              </Link>
            </div>
        </div>    
      ))}
      </div>
      
      <div className="grid grid-cols-3">
        {execHeads.map(execHead => (
          <div key={execHead.slug} className="py-24 px-32 mx-auto bg-purple-600 rounded-3xl my-5 mx-16 hover:bg-purple-700 shadow-2xl">
            <div className="-mt-16 pb-8 rounded-full"><Image alt={execHead.name} src={execHead.profilePictureURL} height="90" width="90" className="rounded-full" /></div>
            <h2 className="text-center text-xl font-bold">
              <Link href={execHead.permalink}>
                <a>{execHead.name}</a>
              </Link>
            </h2>

            <div className="text-lg text-center">
              <Link href={execHead.permalink}>
                <a>Go to profile →</a>
              </Link>
            </div>
        </div>    
      ))}
      </div>
      
      <div className="grid grid-cols-2">
        {sportCaps.map(sportCap => (
          <div key={sportCap.slug} className="py-24 px-36 mx-auto bg-purple-600 rounded-3xl my-5 mx-16 hover:bg-purple-700 shadow-2xl">
            <div className="-mt-16 pb-8 rounded-full"><Image alt={sportCap.name} src={sportCap.profilePictureURL} height="90" width="90" className="rounded-full" /></div>
            <h2 className="text-center text-xl font-bold">
              <Link href={sportCap.permalink}>
                <a>{sportCap.name}</a>
              </Link>
            </h2>

            <div className="text-lg text-center">
              <Link href={sportCap.permalink}>
                <a>Go to profile →</a>
              </Link>
            </div>
        </div>    
      ))}
      </div>

      <div className="grid grid-cols-4">
        {execMems.map(execMem => (
          <div key={execMem.slug} className="py-24 px-20 mx-auto bg-purple-600 rounded-3xl my-5 mx-16 hover:bg-purple-700 shadow-2xl">
            <div className="-mt-16 pb-8 rounded-full"><Image alt={execMem.name} src={execMem.profilePictureURL} height="90" width="90" className="rounded-full" /></div>
            <h2 className="text-center text-xl font-bold">
              <Link href={execMem.permalink}>
                <a>{execMem.name}</a>
              </Link>
            </h2>

            <div className="text-lg text-center">
              <Link href={execMem.permalink}>
                <a>Go to profile →</a>
              </Link>
            </div>
        </div>    
      ))}
      </div>

    </div>
  )
}

export function getStaticProps() {
  return {
    props: {
      heads: getAllHeads(),
      execMems: getAllExecMems(),
      execHeads: getAllExecHeads(),
      sportCaps: getAllSportCaps(),
    },
  }
}