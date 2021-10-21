import Image from 'next/image';
import Link from 'next/link';

import  { getMembersBySlug, getAllPosts, getPostBySlug } from '../../lib/api'

export default function Post({ post }) {
	const prettyDate = new Date(post.createdAt).toLocaleString('en-US', {
		month: 'short',
		day: '2-digit',
		year: 'numeric',
	})

	return (
		<div className='post'>
			<h1> {post.title} </h1>

			<time dateTime={post.createdAt}>{prettyDate}</time>
			
			<div>
				<Image alt={post.author.name} src={post.author.profilePictureURL} width={50} height={50} />

				<Link href={post.author.permalink}>
					<a>
						{post.author.name}
					</a>
				</Link>
			</div>

			<div dangerouslySetInnerHTML={{ __html: post.body }} />

		</div>
	)
}

export function getStaticProps({ params }) {
	const post = getPostBySlug(params.slug)

	return {
		props: {
			post: {
				...post,
				author: getMembersBySlug(post.author),
			},
		}
	}
}

export function getStaticPaths() {
	return {
		fallback: false,
		paths: getAllPosts().map(post => ({
			params: {
				slug: post.slug,
			},
		})),
	}
}