'use client'

import React, { useState, useEffect } from 'react';
import Link from "next/link"

const getTopics = async () => {
    try {
        const res = await fetch("/api/pupils", {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch topics");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading topics: ", error);
    }
};

const Filter = () => {
    const [filterValue, setFilterValue] = useState("");
    const [mavzula, setMavzula] = useState([]);
    const [filteredMavzula, setFilteredMavzula] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const a = await getTopics();
            const mavzulaData = a?.mavzula;
            setMavzula(mavzulaData);
            setFilteredMavzula(mavzulaData);
        };

        fetchData();
    }, []);

    const handleFilter = () => {
        const filteredArray = mavzula.filter((t) =>
            t.shaxs.toLowerCase().includes(filterValue.toLowerCase())
        );
        setFilteredMavzula(filteredArray);
    };


    const getRowBackgroundColor = (index) => {
        if (index % 2 === 0) {
            return "bg-white";
        } else if (index % 2 === 1) {
            return "gray";
        }
    };

    return (
        <div>
            <div className="flex">
                <div className='mb-4 main_div_bolsa_kerak flex gap-4 items-center w-full'>
                    <div className="flex w-full">
                        <input className='oldin_div_bolgan border-2 py-3 px-2 w-full' placeholder='Izlash...' type="text" value={filterValue} onChange={(e) => setFilterValue(e.target.value)} />
                        <button className='oldin_div_bolgan green text-white py-3 border-2 px-10 button ' onClick={handleFilter}>Izlash</button>
                    </div>
                    <div className="balki_divdir">
                        <Link href={"/adminMainPage"} className="button_bolsa_kerak green py-3 px-10 button text-white rounded-md">Orqaga</Link>
                    </div>
                </div>
            </div>
            <table className="w-full shadow-xl">
                <thead className="green text-white font-bold poppins-2">
                    <tr>
                        <th className="py-5 px-2 poppins-2">№</th>
                        <th className="py-4 px-2 poppins-2">Ism</th>
                        <th className="py-4 px-2 poppins-2">Maktab</th>
                        <th className="py-4 px-2 poppins-2">Sinf</th>
                        <th className="py-4 px-2 poppins-2">Kiritilgan vaqti</th>
                        <th className="py-4 px-2 poppins-2"></th>
                    </tr>
                </thead>
                {/* Render the filtered results */}
                {filteredMavzula.map((t, index) => (
                    <tbody key={t.id} className="text-center">
                        <tr className={`${getRowBackgroundColor(index)}`}>
                            <td className={`px-2 py-4`}>{index + 1}</td>
                            <td className={`px-2 py-4`}>{t.shaxs}</td>
                            <td className={`px-2 py-4`}>{t.maktab}</td>
                            <td className={`px-2 py-4`}>{t.sinf}</td>
                            <td className={`px-2 py-4`}>{new Date(t.createdAt).toLocaleString()}</td>
                        </tr>
                    </tbody >
                ))}
            </table >
        </div>
    );
};

export default Filter;