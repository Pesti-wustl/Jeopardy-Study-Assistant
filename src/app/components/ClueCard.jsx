"use client";

import { useState } from 'react';

export default function ClueCard({ clue }) {

    const [flipped, setFlipped] = useState(false)

    let question = clue.clue_question
    let answer = clue.clue_answer
    let category = clue.clue_category
    let value = clue.clue_value

    let flip = () => {
        setFlipped(!flipped)
    }

    return ( 
            !flipped ?
            (
                <div className="flex flex-col items-center justify-center border-4 h-80 w-80 p-4 space-y-4 border-blue-700 bg-slate-400">
                    <div className="self-start">
                        <h1 className="text-xl font-bold">{category}</h1>
                        <h2 className="text-sm">{value}</h2>
                    </div>

                    <div className="w-full border-t border-blue-500 my-2"></div>

                    <p className="text-center flex-grow overflow-hidden">{question}</p>
                    <button onClick={flip} className="bg-blue-700 text-white px-12 py-2 rounded">FLIP</button>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center border-4 h-80 w-80 p-4 space-y-4 border-blue-700 bg-slate-400">
                    
                    <p className='text-center'>{answer}</p>
                    <button onClick={flip} className="bg-blue-700 text-white px-12 py-2 rounded">FLIP</button>
                </div>
            )
    )
}
