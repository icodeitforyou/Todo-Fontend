import React from 'react'
import SignIn from '../auth/signin'

export default function AuthLayout({children}) {
  return (
    <div className=' min-h-[calc(100vh-118px)] flex items-center justify-center w-full h-full'>
       {children}
    </div>
  )
}
