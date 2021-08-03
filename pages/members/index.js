import Image from 'next/image'
import Link from 'next/link'

import { getAllMembers } from '../../lib/api'

export default function Members({ members }) {
  return (
    <div className="members">
      <h1>Council Members</h1>

      {members.map(member => (
        <div key={member.slug}>
          <h2>
            <Link href={member.permalink}>
              <a>{member.name}</a>
            </Link>
          </h2>

          <Image alt={member.name} src={member.profilePictureURL} height="40" width="40" />

          <Link href={member.permalink}>
            <a>Go to profile →</a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export function getStaticProps() {
  return {
    props: {
      members: getAllMembers(),
    },
  }
}