// pages/home.tsx
import React, { useState } from 'react'
import Card from '@/components/common/card'
import PostModal from '@/components/common/PostModal'
import Header from '@/components/layout/header'

interface Post {
  title: string
  content: string
}

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      title: 'Welcome to VibeWave',
      content:
        'Explore the latest trends in music, compare tastes, and discover new favorites.',
    },
    {
      title: 'Global Charts',
      content: 'Stay up to date with what’s trending around the world.',
    },
  ])

  const [isModalOpen, setIsModalOpen] = useState(false)

  const addPost = (title: string, content: string) => {
    const newPost = { title, content }
    setPosts((prev) => [...prev, newPost])
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 space-y-6">
      <div className="flex justify-end">
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          + Add Post
        </button>
      </div>

      {posts.map((post, index) => (
        <Card key={index} title={post.title} content={post.content} />
      ))}

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={addPost}
      />
    </div>
  )
}

export default HomePage
