 // pages/about.tsx
import React from 'react'
import Button from '@/components/common/Button'
import Header from '@/components/layout/header'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Reusable Button Component</h1>

      <div className="flex flex-col gap-4 max-w-sm">
        <Button label="Small Button" size="small" shape="rounded-sm" />
        <Button label="Medium Button" size="medium" shape="rounded-md" />
        <Button label="Large Button" size="large" shape="rounded-full" />
      </div>
    </div>
  )
}

export default AboutPage
