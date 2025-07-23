 // pages/home.tsx
import React from 'react'
import Card from '@/components/layout/common/card'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 space-y-6">
      <Card
        title="Welcome to VibeWave"
        content="Explore the latest trends in music, compare tastes, and discover new favorites."
      />
      <Card
        title="Global Charts"
        content="Stay up to date with what's trending around the world."
      />
      <Card
        title="Friend Vibes"
        content="See how your music taste matches with your friends."
      />
    </div>
  )
}

export default HomePage
