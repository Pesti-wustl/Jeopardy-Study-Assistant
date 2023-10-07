"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function WelcomePage() {
    const router = useRouter();
    const [checkedAccess, setCheckedAccess] = useState(false);
    const [clueCount, setClueCount] = useState('');
    const [randomError, setRandomError] = useState('')

    useEffect(() => {
        if (localStorage.getItem('accessCode') != process.env.NEXT_PUBLIC_SECRET_CODE) {
            router.push('/');
        } else {
            setCheckedAccess(true);
        }
    }, [])

    const handleRandomSubmit = (e) => {
        e.preventDefault()

        if (parseInt(clueCount) > 20) {
            setRandomError("Current max of clue count is 20")
            console.log("hi")
            setClueCount('')
        } else {
            router.push('/play/random?clueCount=' + clueCount)
        }
    }

    return (
        <div>
            {checkedAccess && 
                (
                <div className='min-h-screen flex flex-col items-center justify-center border-4 border-blue-300'>
                    <h1 className='text-5xl font-bold text-blue-600 border-b-4 border-blue-500 inline-block p-2 shadow-lg bg-white rounded mb-10'>Game Selection</h1>
                    <h1>Welcome to Jeopardy Studying Assistant!</h1>
                    <h2>Pick your gamemode below - You can do random clues or search by game.</h2>
                    
                    <div className='flex flex-row space-x-4 mt-5'>
                        <form onSubmit={handleRandomSubmit} className='flex flex-col border-4 border-blue-900 items-center space-y-2 p-4 mx-4'>
                            <h2 className='mb-2 text-gray-900 font-extrabold'>RANDOM</h2>
                            <label for="quantity1">Clue Count: </label>
                            <input className='w-36 p-2 border border-gray-300 rounded shadow transition duration-150 focus:border-blue-400 focus:ring focus:ring-blue-200' 
                                type="number" 
                                id="quantity1"
                                value={clueCount}
                                onChange={(e) => setClueCount(e.target.value)}
                            />
                            <button className='w-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 text-white p-2 rounded shadow-md transform transition hover:scale-105' type="submit">Play Jeopardy!</button>
                            {randomError && <p className='text-red-500'>{randomError}</p>}
                        </form>
                        <form className='border-blue-900 border-4 flex flex-col items-center space-y-2 p-4'>
                            <h1 className='mb-2 text-gray-900 font-extrabold'>GAME</h1>
                            <label for="quantity2">Game ID: </label>
                            <input className='w-36 p-2 border border-gray-300 rounded shadow transition duration-150 focus:border-blue-400 focus:ring focus:ring-blue-200' type="number" id="quantity1"/>
                            <button className='w-full bg-gradient-to-r from-red-400 to-orange-500 hover:from-red-500 text-white p-2 rounded shadow-md transform transition hover:scale-105' type="submit">Play Jeopardy!</button>
                        </form>
                    </div>
                    
                </div>
                )
            }
        </div>
    )
}
