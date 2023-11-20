'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for Next.js 12+
import Link from 'next/link';

export default function Page() {
    const router = useRouter();
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputValue === 'Chortoq2050') {
            router.push('/Sectorlar/2-sektor');
        } else if (inputValue === 'Chortoq1111') {
            router.push('/Sectorlar/2-sektor2');
        }
    };

    return (
        <div>
            <div className="container">
                <Link className='flex justify-end' href={"/adminMainPage"}>
                    <button className='green py-3 px-10 text-white rounded-md'>Orqaga</button>
                </Link>
                <form className='flex flex-col items-center h-[100vh] justify-center' onSubmit={handleSubmit}>
                    <input
                        className='border py-3 px-2 w-[40%] rounded-md'
                        type="text"
                        placeholder='Parolingizni kiriting'
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button type='submit' className='green rounded-md text-white py-2 px-10 cursor-pointer mt-2'>Kirish</button>
                </form>
            </div>
        </div>
    );
}
