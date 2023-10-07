"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RandomPage() {
    const router = useRouter();
    const [checkedAccess, setCheckedAccess] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('accessCode') != process.env.NEXT_PUBLIC_SECRET_CODE) {
            router.push('/');
        } else {
            setCheckedAccess(true);
        }
    }, [])

    return (
        <div>
            {checkedAccess &&
                (
                    <div className='min-h-screen flex flex-col items-center justify-center border-4 border-blue-300'>
                        Random
                    </div>
                )
            }
        </div>
    )
}