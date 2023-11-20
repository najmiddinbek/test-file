'use client'

import React, { useState, useEffect } from 'react';
import { BsChevronDown, BsChevronUp } from "react-icons/bs"
import RemoveBtn from "./RemoveBtn"
import Link from "next/link"

const getTopics = async () => {
    try {
        const res = await fetch('/api/topics', {
            cache: 'no-store',
        });
        if (!res.ok) {
            throw new Error('Mavzular yuklanmadi');
        }

        return res.json();
    } catch (error) {
        console.log('Mavzular yuklanishda xatolik: ', error);
        return { mavzula: [] };
    }
};

const Filter = () => {
    const [topiclar, setTopiclar] = useState([]);
    const [filteredMavzula, setFilteredMavzula] = useState([]);
    const [filterValue, setFilterValue] = useState({ newIsm: "", newSinfi: "", school: "" });
    const [hide, setHide] = useState(false)

    const handleHide = () => {
        setHide(!hide)
    }

    useEffect(() => {
        const fetchData = async () => {
            const a = await getTopics();
            const topics = a?.topiclar;
            setTopiclar(topics);
            setFilteredMavzula(topics);
        };

        fetchData();
    }, []);

    const handleFilter = () => {
        const filteredArray = topiclar.filter((t) =>
            t.newIsm.toLowerCase().includes(filterValue.newIsm.toLowerCase()) &&
            t.newSinfi.toLowerCase().includes(filterValue.newSinfi.toLowerCase()) &&
            t.school.toLowerCase().includes(filterValue.school.toLowerCase())
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
            <div className="">
                <div className=''>
                    <div className="admin_panel_main_div flex justify-between w-full mb-8 items-center">
                        <div>
                            <h1 className='admin_panel_text text-4xl mt-3 mb-3 font-bold poppins'>Darsga qatnashmagan o`quvchilar</h1>
                        </div>
                        <div className='flex gap-3 items-center katta_main_div_edi'>
                            <div onClick={handleHide} className='main_div_edi  cursor-pointer flex items-center gap-5 font-bold'>
                                <h1 className='poppins text-2xl'>Filtrlash:</h1>
                                {hide ? (
                                    <div className='w-[100px] border-2 py-2.5 flex items-center justify-center rounded-md'>
                                        <BsChevronUp fontSize={25} /></div>
                                ) : (
                                    <div className='w-[100px] border-2 py-2.5 flex items-center justify-center rounded-md'>
                                        < BsChevronDown fontSize={25} />
                                    </div>
                                )}
                            </div>
                            <div className="tugmachalar">
                                <Link className='simple_button green px-10 py-3 button rounded-md text-white' href={"/3-maktab"}>Barcha o`quvchilar</Link>
                                <Link className='simple_button green px-10 ml-2 py-3 button rounded-md text-white' href={"/adminMainPage"}>Orqaga</Link>
                            </div>
                        </div>
                    </div>

                    {hide ? (
                        <div className=''>
                            <div className=''>
                                <div className='flex items-center gap-3'>
                                    <input className='border-2 py-[11px] px-2 w-full' placeholder='FIO' type="text" value={filterValue.newSinfi} onChange={(e) => setFilterValue({ ...filterValue, newSinfi: e.target.value })} />
                                    <button className='green text-white py-3 px-10 button ' onClick={handleFilter}>Izlash</button>
                                </div>

                                <div className='flex items-center gap-3 my-3'>
                                    <input className='border-2 py-[11px] px-2 w-full' placeholder='Sinfni yozing' type="text" value={filterValue.newIsm} onChange={(e) => setFilterValue({ ...filterValue, newIsm: e.target.value })} />
                                    <button className='green text-white py-3 px-10 button ' onClick={handleFilter}>Izlash</button>
                                </div>

                                <div className='flex items-center gap-3 mb-3'>
                                    <input className='border-2 py-[11px] px-2 w-full' placeholder='Maktab raqamini yozing' type="text" value={filterValue.school} onChange={(e) => setFilterValue({ ...filterValue, school: e.target.value })} />
                                    <button className='green text-white py-3 px-10 button ' onClick={handleFilter}>Izlash</button>
                                </div>
                            </div>

                        </div>
                    ) : null}



                </div>
                <table className="main_table w-full shadow-xl">
                    <thead className="green text-white font-bold poppins-2">
                        <tr>
                            <th className="admin_panel_th admin_panel-tih py-5 px-2 poppins-2">№</th>
                            <th className="admin_panel_th py-4 px-2 poppins-2">Ism</th>
                            <th className="admin_panel_th py-4 px-2 poppins-2">Telefon raqami</th>
                            <th className="admin_panel_th py-4 px-2 poppins-2">Maktab</th>
                            <th className="admin_panel_th py-4 px-2 poppins-2">Sinf</th>
                            <th className="admin_panel_th py-4 px-2 poppins-2">Yashash manzili</th>
                            <th className="admin_panel_th py-4 px-2 poppins-2">Kiritilgan vaqti</th>
                            <th className="admin_panel_th py-4 px-2 poppins-2">Qoldirgan dars vaqti</th>
                            <th className="admin_panel_th py-4 px-2 poppins-2"></th>
                        </tr>
                    </thead>
                    {filteredMavzula.map((t, index) => (
                        <tbody key={t.id} className="text-center w-full">
                            <tr className={`${getRowBackgroundColor(index)} w-full`}>
                                <td className="px-2 py-4 admin_panel_td admin_panel-tih admin_panel_index ">{index + 1}</td>
                                <td className="px-2 py-4 admin_panel_td">{t.newIsm}</td>
                                <td className="px-2 py-4 admin_panel_td">{t.telephoneRaqami}</td>
                                <td className="px-2 py-4 admin_panel_td">{t.school}-maktab</td>
                                <td className='admin_panel_td'>{t.newSinfi}-sinf</td>
                                <td className="px-2 py-4 admin_panel_td">{t.manzili}</td>
                                <td className="px-2 py-4 admin_panel_td">{t.MFY}</td>
                                <td className="px-2 py-4 admin_panel_td">{new Date(t.createdAt).toLocaleString()}</td>
                                <td className="px-2 py-4 admin_panel_td">{t.newDarsQoldirish}</td>
                                <td>
                                    <RemoveBtn id={t._id} />
                                </td>
                            </tr>
                        </tbody>
                    ))
                    }
                </table>
            </div>
        </div>
    );
};

export default Filter;