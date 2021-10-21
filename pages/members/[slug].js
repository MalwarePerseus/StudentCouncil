import Image from 'next/image'
import Link from 'next/link'

import { getAllMembers, getMembersBySlug, getAllPosts } from '../../lib/api'

export default function Member({ member }) {
  return (
    <div className="member">
      <h1>{member.name}</h1>

      <Image alt={member.name} src={member.profilePictureURL} height="80" width="80" />

      <h2>Posts</h2>
      <ul>
          {member.posts.map(post => (
              <li>
                  <Link href={post.permalink}>
                      <a>
                          {post.title}
                      </a>
                  </Link>
              </li>
          ))}
      </ul>
    </div>
  )
}

export function getStaticProps({ params }) {
    const member = getMembersBySlug(params.slug)
  return {
    props: {
      member: {
          ...member,
          posts: getAllPosts().filter(post => post.author === member.slug)
      }
    },
  }
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: getAllMembers().map(member => ({
      params: {
        slug: member.slug,
      },
    })),
  }
}
