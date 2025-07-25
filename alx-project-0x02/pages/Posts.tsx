 // pages/posts.tsx
import React, { useEffect, useState } from 'react'
import Header from '@/components/layout/header'
import PostCard from '@/components/common/PostCard'

interface PostAPI {
  id: number
  userId: number
  title: string
  body: string
}

const PostsPage = () => {
  const [posts, setPosts] = useState<PostAPI[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        const data = await res.json()
        setPosts(data)
      } catch (err) {
        console.error('Failed to fetch posts:', err)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 px-8">
      <Header />
      <h1 className="text-2xl font-bold mb-6 mt-4">Latest Posts</h1>

      <div className="grid gap-4">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.body}
            userId={post.userId}
          />
        ))}
      </div>
    </div>
  )
}

export default PostsPage
