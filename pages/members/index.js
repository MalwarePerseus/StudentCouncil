import Image from 'next/image'
import Link from 'next/link'

import { getAllHeads, getAllExecHeads, getAllExecMembers } from '../../lib/api'

export default function Members({ heads, execMems, execHeads }) {
  return (
    <div className="members">
      <h1>Council Members</h1>
      <div className="grid grid-cols-2">
        {heads.map(head => (
          <div key={head.slug} className="p-10 bg-purple-600 rounded-3xl my-5 mx-10 hover:bg-purple-700 shadow-2xl">
            <Image alt={head.name} src={head.profilePictureURL} height="80" width="80" className="rounded-3xl" />
            <h2>
              <Link href={head.permalink}>
                <a>{head.name}</a>
              </Link>
            </h2>

            <Link href={head.permalink}>
              <a>Go to profile →</a>
            </Link>
        </div>    
      ))}
      </div>
      
      <div className="grid grid-cols-3">
        {execHeads.map(execHead => (
          <div key={execHead.slug} className="p-10 bg-purple-600 rounded-3xl my-5 mx-10 hover:bg-purple-700 shadow-2xl">
            <Image alt={execHead.name} src={execHead.profilePictureURL} height="80" width="80" className="rounded-3xl" />
            <h2>
              <Link href={execHead.permalink}>
                <a>{execHead.name}</a>
              </Link>
            </h2>

            <Link href={execHead.permalink}>
              <a>Go to profile →</a>
            </Link>
        </div>    
      ))}
      </div>
      
      <div className="grid grid-cols-3">
        {execMems.map(execMem => (
          <div key={execMem.slug} className="p-10 bg-purple-600 rounded-3xl my-5 mx-10 hover:bg-purple-700 shadow-2xl">
            <Image alt={execMem.name} src={execMem.profilePictureURL} height="80" width="80" className="rounded-3xl" />
            <h2>
              <Link href={execMem.permalink}>
                <a>{execMem.name}</a>
              </Link>
            </h2>

            <Link href={execMem.permalink}>
              <a>Go to profile →</a>
            </Link>
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
    },
  }
}