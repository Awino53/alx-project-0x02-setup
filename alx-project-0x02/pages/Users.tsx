// pages/users.tsx
import React, { useEffect, useState } from 'react'
import Header from '@/components/layout/header'
import UserCard from '@/components/common/UserCard'
import { UserProps } from '@/interfaces'

const UsersPage = () => {
  const [users, setUsers] = useState<UserProps[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        setUsers(data)
      } catch (err) {
        console.error('Failed to fetch users:', err)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 px-8">
      <Header />
      <h1 className="text-2xl font-bold mb-6 mt-4">Users</h1>

      <div className="grid gap-4">
        {users.map((user) => (
          <UserCard
            key={user.email}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </div>
    </div>
  )
}

export default UsersPage
