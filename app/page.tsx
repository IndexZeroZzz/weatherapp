'use client'

import {useState} from "react";
import {useRouter} from "next/navigation";
import {CloudIcon, UserIcon} from "@heroicons/react/24/outline";

export default function Home() {
    const router = useRouter()
    let [input, setInput] = useState('');

    function toWeather(location: string): void {
        let encoded =  encodeURIComponent(location.replace(/\s+/g, ''));
        router.push(`/weather/${encoded}`);
    }
    return (
        <main className="flex min-h-screen flex-col items-start p-10">
            <div className='flex flex-col items-start justify-between'>
                <input className='outline-none font-extralight text-3xl md:text-5xl' type="text" placeholder="City, Country Code"
                       value={input} onChange={(e) => setInput(e.target.value)}/>
                <button className='font-bold text-2xl md:text-4xl mt-5' onClick={() => toWeather(input)}>Get Weather</button>
            </div>
        </main>
    );
}
