// components/common/PostCard.tsx
import React from 'react'
import { PostProps } from '@/interfaces'

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-blue-700">{title}</h2>
      <p className="text-gray-600 my-2">{content}</p>
      <span className="text-sm text-gray-500">Posted by User {userId}</span>
    </div>
  )
}

export default PostCard
