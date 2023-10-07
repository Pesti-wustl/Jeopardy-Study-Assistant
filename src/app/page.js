"use client";
import Image from 'next/image'
import {useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// Secret Code Page
export default function Home() {
  const router = useRouter()
  const [code, setCode] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (code == process.env.NEXT_PUBLIC_SECRET_CODE) {
      localStorage.setItem('accessCode', process.env.NEXT_PUBLIC_SECRET_CODE)
      router.push('/welcome')
    } else {
      setError('Incorrect Code') 
    }
  }

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center border-4 border-red-800 '>
      <div className='bg-white p-8 rounded shadow-lg w-96 space-y-4 border-4 border-blue-800'>
        <form onSubmit={handleSubmit} className='space-y-4 border-4 border-zinc-800'>
          <input className='w-full p-2 border rounded' type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder='Enter Secret Code'/>
          <button type='submit' className='w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded'>Submit</button>
        </form>
        {error && <p className='text-red-500'>{error}</p>}
      </div>
    </div>
  )
}
