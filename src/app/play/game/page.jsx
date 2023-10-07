"use client";

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';


export default function gamePage() {
    const router = useRouter();
    const searchParams = useSearchParams()
    const [checkedAccess, setCheckedAccess] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('accessCode') != process.env.NEXT_PUBLIC_SECRET_CODE) {
            router.push('/');
        } else {
            setCheckedAccess(true);
        }
    }, [])

    const gameId = searchParams.get('gameId')

    return (
        <div>
            {checkedAccess &&
                (
                    <div className='min-h-screen flex flex-col items-center justify-center border-4 border-blue-300'>
                        Your game id is {gameId}
                    </div>
                )
            }
        </div>
    )
}