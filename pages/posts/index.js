import { getAllPosts } from '../../lib/api'
import Link from 'next/link'

export default function Posts({posts}) {
  return (
      <>
        <h1 className="text-6xl text-center font-bold">Posts</h1>
        <div className="posts grid grid-cols-3">
        {posts.map(post => {
          const prettyDate = new Date(post.createdAt).toLocaleString('en-US', {
            month : 'short',
            day: '2-digit',
            year: 'numeric',
          })
          return(
            <article key="post.slug" className="shadow-2xl hover:bg-purple-700 bg-purple-600 my-5 mx-10 rounded-3xl p-10">
              <h2>
                <Link href={post.permalink}>
                  <a className="text-3xl font-bold">{post.title}</a>
                </Link>
              </h2>
              
              <time dateTime={post.createdAt}>{prettyDate}</time>

              <p className="mb-4">{post.excerpt}</p>

              <Link href={post.permalink}>
               <a className="p-2 rounded-lg bg-green-500">Read more →</a>
              </Link>

            </article>
            )
        })}
      </div>
    </>
  )
}

export function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    }
  }
}