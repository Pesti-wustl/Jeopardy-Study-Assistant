"use client";

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AccessChecker({ children }) {
    const router = useRouter()
    const [checkedAccess, setCheckedAccess] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('accessCode') != process.env.NEXT_PUBLIC_SECRET_CODE) {
            router.push('/')
        } else {
            setCheckedAccess(true)
        }
    }, [])

    return (
        <div>
            {checkedAccess && children}
        </div>
    )  
}