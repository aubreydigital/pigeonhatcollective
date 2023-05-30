import React from 'react'
const users = [
  {
    id: 0,
    name: 'aubrey'
  },
  {
    id: 1,
    name: 'dawn'
  },
  {
    id: 2,
    name: 'earl'
  }
]
const userPage = ({ params }: { params: { userId: number } }) => {
  const currentUser = users.find((user) => user.id === Number(params.userId));
  

  return (
    <div>{currentUser && currentUser.name}</div>
  )
}

export default userPage