'use client'


import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import FilterOption from "./FilterOption";
import Link from "next/link";
import Image from "next/image";
import ITLOGO from "../public/Logo_IT_Park_Uzbekistan.svg.png"
const PupilsAddClient = () => {
    const [shaxs, setShaxs] = useState("");
    const [maktab, setMaktab] = useState("");
    const [sinf, setSinfi] = useState("");
    const [pupil, setPupil] = useState("");
    const [dars, setDars] = useState("");
    const [school, setSchool] = useState("");
    const [newSinfi, setNewSinfi] = useState("");
    const [newDarsQoldirish, setNewDarsQoldirish] = useState("");
    const [telephoneRaqami, setTelephoneRaqami] = useState("");
    const [newIsm, setNewIsm] = useState("");
    const [setShaxsi, setSetShaxsi] = useState("");
    const [MFY, setMFY] = useState("")
    const [manzili, setManzili] = useState("");
    const [telefoni, setTelefoni] = useState("");
    const [organildi, setOrganildi] = useState("");

    const router = useRouter();

    const maktablar = Array.from({ length: 54 }, (_, index) => index + 1);
    const kun = Array.from({ length: 3 }, (_, index) => index + 1);
    const soat = Array.from({ length: 6 }, (_, index) => index + 1);
    const sinflar = Array.from({ length: 11 }, (_, index) => index + 1);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`/api/topics`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    shaxs,
                    maktab,
                    sinf,
                    pupil,
                    dars,
                    school,
                    newSinfi,
                    newDarsQoldirish,
                    telephoneRaqami,
                    newIsm,
                    setShaxsi,
                    MFY,
                    manzili,
                    organildi
                }),
            });

            if (res.ok) {
                const form = e.target;
                form.reset();
                router.push("/pupilsAdd");
                toast.success("O`quvchi malumotlari muvaffaqiyatli qo`shildi!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                // Update the topic count after successful form submission
                const response = await fetch("/api/topics");
                if (response.ok) {
                    const data = await response.json();
                    setTopicCount(data.length);
                } else {
                    console.log("Failed to fetch topic data.");
                }
            } else {
                console.log("User registration failed.");
            }
        } catch (error) {
            console.log(error);
        }



    };

    return (
        <>
            <form onSubmit={handleSubmit} className="w-full flex flex-col h-[85vh] gap-3 main_form_add">
                <div className="text-end">
                    <Link className="green rounded-md py-3 px-10 text-white button" href={"/"}>Orqaga</Link>
                </div>
                <label className="text-[20px] poppins font-bold -mb-3" htmlFor="">
                    Maktabni tanlang
                </label>
                <select
                    onChange={(e) => setSchool(e.target.value)}
                    value={school}
                    className="px-2 py-3 border text-opacity-25 outline-none rounded-md cursor-pointer"
                >
                    <option>Bu yerdan tanlang</option>
                    {maktablar.map((maktab, index) => (
                        <option key={index} value={maktab}>
                            {maktab}-maktab
                        </option>
                    ))}
                </select>

                {school !== "" && (
                    <>
                        <label className="text-[20px] font-bold poppins -mb-3" htmlFor="">
                            Sinfni tanlang
                        </label>

                        <FilterOption
                            setShaxsiy={setNewSinfi}
                            setSetShaxs={setNewIsm}
                            setManzili={setManzili}
                            setTelefoni={setTelephoneRaqami}
                        />
                        <label className="text-[20px] poppins font-bold -mb-3" htmlFor="">Sektorni tanlang</label>
                        <select className="px-2 py-3  border  text-opacity-25 outline-none rounded-md cursor-pointer" onChange={(e) => setMFY(e.target.value)} value={MFY}>
                            <option>Bu yerdan tanlang</option>
                            <option>1-sektor</option>
                            <option>2-sektor</option>
                            <option>3-sektor</option>
                            <option>4-sektor</option>
                        </select>
                        <label className="text-[20px] font-bold poppins -mb-3" htmlFor="">
                            Qoldirilgan dars vaqti
                        </label>
                        <select onChange={(e) => setNewDarsQoldirish(e.target.value)} value={newDarsQoldirish} className="px-2 py-3 border  text-opacity-25 outline-none rounded-md cursor-pointer">
                            <option>Bu yerdan tanlang</option>

                            {soat.map((watch, index) => (
                                <option key={index}>{watch}-soat</option>
                            ))}

                            <option>Kun bo`yicha</option>
                            <option>1-kun</option>
                            <option>Sababli</option>
                        </select>

                        {newDarsQoldirish === "" && (
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={newDarsQoldirish === ""}
                                    className="bg-white border-2 cursor-no-drop rounded-md font-bold text-gray-200 py-3 px-6 w-fit"
                                >
                                    Qo`shish
                                </button>
                            </div>
                        )}
                        {newDarsQoldirish !== "" && (
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="green border-2 cursor-pointer rounded-md font-bold text-gray-200 py-3 px-6 w-fit"
                                >
                                    Qo`shish
                                </button>
                            </div>
                        )}

                    </>
                )}
                {school === "" && (
                    <>
                        <label className="text-[18px] font-bold poppins" htmlFor="">
                            Sinfni tanlang
                        </label>
                        <FilterOption
                            setShaxsiy={setNewSinfi}
                            setSetShaxs={setNewIsm}
                            setManzili={setManzili}
                            setTelefoni={setTelephoneRaqami}
                        />
                        <label className="text-[18px] poppins font-bold" htmlFor="">Sektor tanlang</label>
                        <select className="px-2 py-3 cursor-no-drop border" onChange={(e) => setMFY(e.target.value)} value={MFY}>
                            <option>Ma`lumot yo`q</option>
                        </select>
                        <label className="text-[18px] font-bold poppins" htmlFor="">
                            Qoldirilgan dars vaqti
                        </label>
                        <select onChange={(e) => setNewDarsQoldirish(e.target.value)} value={newDarsQoldirish} className="border  text-opacity-25 outline-none rounded-md px-2 py-3 cursor-no-drop">
                            <option>Malumot yo`q</option>
                        </select>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={school !== "3"}
                                className="bg-white border-2 cursor-no-drop rounded-md font-bold text-gray-200 py-3 px-6 w-fit"
                            >
                                Qo`shish
                            </button>
                        </div>
                    </>
                )}
                <input type="text" onChange={(e) => setOrganildi(e.target.value)} value={organildi} />
                <div className='anons flex gap-1 mt-10 justify-center'>
                    <h1 className='text-center text-[16px] poppins'>Web Sayt Chortoq IT Park jamoasi tomonidan tuzildi
                        <Link href={"https://t.me/Sarvarr_dev"}> Murojaat uchun</Link></h1>
                    <Image src={ITLOGO} className='flex justify-center' alt='Image' width={50} height={10} />
                </div>
            </form >
        </>
    );
};

export default PupilsAddClient;