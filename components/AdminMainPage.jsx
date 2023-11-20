'use client'

import Link from 'next/link';
import React, { useState } from "react";
import { AiOutlineEye } from 'react-icons/ai';
import { BsFillEnvelopeFill } from "react-icons/bs"
import Image from 'next/image'
import ITLOGO from '../public/Logo_IT_Park_Uzbekistan.svg.png'


// import Bolon from "./MFY/Bolon"
// import Oyqiron from "./MFY/Oyqiron"
// import Namangan from "./MFY/Namangan"
// import Bagrikenglik from "./MFY/Bagrikenglik"
// import Baynalminal from "./MFY/Baynalminal"
// import Komillik from "./MFY/Komillik"
// import Yangiobod from "./MFY/Yangiobod";
// import Bog from "./MFY/Bog";
// import Orikzor from "./MFY/Orikzor";
// import Chigatoy from "./MFY/Chigatoy";
// import Yuksalish from './MFY/Yuksalish';
// import Navoiy from "./MFY/Navoiy";
// import Laskidon from "./MFY/Laskidon";
// import Keskanyor from "./MFY/Keskanyor";
// import Iftixor from "./MFY/Iftixor";
// import Navbahor from "./MFY/Navbahor";
// import Tengdosh from "./MFY/Tengdosh";
// import Damariq from "./MFY/Damariq";
// import Dostlik from "./MFY/Dostlik";
// import Uzbekistan from "./MFY/uzbekistan"
// import Xayrli from "./MFY/Xayrli";
// import Diyor from "./MFY/Diyor";
// import Dildosh from "./MFY/Dildosh";
// import Beshkapa from "./MFY/Beshkapa";
// import Oromgoh from "./MFY/Oromgoh";
// import Sohibkor from "./MFY/Sohibkor";
// import Gulshan from "./MFY/Gulshan";
// import Soy from "./MFY/Soy";
// import Qorabog from "./MFY/Qorabog";
// import Obod from "./MFY/Obod-diyor";
// import Chorsu from "./MFY/Chorsu";
// import Guldirov from "./MFY/Guldirov";
// import Saroy from "./MFY/Saroy";
// import Qoramurt from "./MFY/Qoramurt";
// import Dehqonobod from "./MFY/Dehqonobod"
// import Alixon from "./MFY/Alixon"
// import Bodomzor from "./MFY/Bodomzor"
// import Arbagish from "./MFY/Arbagish"
// import Topqayragoch from "./MFY/Topqayragoch";
// import Bozorboshi from "./MFY/Bozorboshi"
// import SozSoy from "./MFY/Soz"
// import Uzun from "./MFY/Uzun";
// import Oqterak from "./MFY/Oqterak";
// import Ariq from "./MFY/Oqterak";
// import Beshtol from "./MFY/Beshtol";
// import Baliqkol from "./MFY/Baliq";
// import Bogiston from "./MFY/Bogiston";
// import Zangiobod from "./MFY/Zangiobod";
// import Xazratishox from "./MFY/Xazratishox";
// import Toriq from "./MFY/Toriq";
// import Turkiston from "./MFY/Turkiston";
// import Mustaqillik from "./MFY/Mustaqillik";
// import Istiqlol from "./MFY/Istiqlol";
// import Sarkor from "./MFY/Sarkor";
// import Nurafshon from "./MFY/Nurafshon";
// import Tinchlik from "./MFY/Tinchlik";
// import Navruz from "./MFY/Navruz";
import Birinchi from "./Sectorlar/1-sektor"
import Ikkinchi from "./Sectorlar/2-sektor"
import Uchinchi from "./Sectorlar/3-sektor"
import Tortinchi from "./Sectorlar/4-sektor"

import { BiListPlus } from "react-icons/bi"

export default function AdminMainPage() {
    const [showElements1, setShowElements1] = useState(false);
    const [showElements2, setShowElements2] = useState(false);
    const [showElements3, setShowElements3] = useState(false);
    const [showElements4, setShowElements4] = useState(false);
    const [showElements5, setShowElements5] = useState(false);
    const [showElements6, setShowElements6] = useState(false);
    const [showElements7, setShowElements7] = useState(false);
    const [showElements8, setShowElements8] = useState(false);

    const handleToggle1 = () => {
        setShowElements1(!showElements1);
    };

    const handleToggle2 = () => {
        setShowElements2(!showElements2);
    };
    const handleToggle3 = () => {
        setShowElements3(!showElements3);
    };
    const handleToggle4 = () => {
        setShowElements4(!showElements4);
    };
    const handleToggle5 = () => {
        setShowElements5(!showElements5);
    };
    const handleToggle6 = () => {
        setShowElements6(!showElements6);
    };
    const handleToggle7 = () => {
        setShowElements7(!showElements7);
    };
    const handleToggle8 = () => {
        setShowElements8(!showElements8);
    };

    return (
        <div className='admin_main_page_some_padding mt-10 max-w-[1400px] ml-auto mr-auto'>
            <div data-aos="fade-down" className="flex justify-between mb-3 main_panel">
                <h1 className='page_text poppins text-3xl mb-4 font-bold'>Barcha MFY inspektorlari </h1>
                <div className="flex items-center gap-2 ">
                    <Link href={"/"} className="green asosiy_button py-3 px-10 button text-white rounded-md">
                        Orqaga
                    </Link>
                </div>
            </div>
            <Link href={"/Logins/Login1"}>
                <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                    <div className='flex items-center gap-1'>
                        <p className='text-[18px] poppins'>
                            1-sektor
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                            <AiOutlineEye className='text-3xl' />
                        </div>
                        <div className="flex gap-3 items-center relative">
                            <div className="">
                                <BsFillEnvelopeFill className='text-3xl' />
                                <Birinchi />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link href={"/loginPage1"}>
                <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                    <div className='flex items-center gap-1'>
                        <p className='text-[18px] poppins'>
                            2-sektor
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                            <AiOutlineEye className='text-3xl' />
                        </div>
                        <div className="flex gap-3 items-center relative">
                            <div className="">
                                <BsFillEnvelopeFill className='text-3xl' />
                                <Birinchi />
                                <Ikkinchi />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link href={"loginPage2"}>
                <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                    <div className='flex items-center gap-1'>
                        <p className='text-[18px] poppins'>
                            3-sektor
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                            <AiOutlineEye className='text-3xl' />
                        </div>
                        <div className="flex gap-3 items-center relative">
                            <div className="">
                                <BsFillEnvelopeFill className='text-3xl' />
                                <Birinchi />
                                <Uchinchi />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link href={"/loginPage4"}>
                <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                    <div className='flex items-center gap-1'>
                        <p className='text-[18px] poppins'>
                            4-sektor
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                            <AiOutlineEye className='text-3xl' />
                        </div>
                        <div className="flex gap-3 items-center relative">
                            <div className="">
                                <BsFillEnvelopeFill className='text-3xl' />
                                <Birinchi />
                                <Tortinchi />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

            <div className='anons flex gap-1 mt-10 justify-center'>
                <h1 className='text-center text-[16px] poppins'>Web Sayt Chortoq IT Park jamoasi tomonidan tuzildi
                    <Link href={"https://t.me/Sarvarr_dev"}> Murojaat uchun</Link></h1>
                <Image src={ITLOGO} className='flex justify-center' alt='Image' width={50} height={10} />
            </div>
        </div >
    );
}