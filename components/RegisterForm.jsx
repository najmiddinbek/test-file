"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import Logotip from "../public/mdm+++.png"

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError("All fields are necessary.");
            return;
        }

        try {
            const resUserExists = await fetch("api/userExists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const { user } = await resUserExists.json();

            if (user) {
                setError("User already exists.");
                return;
            }

            const res = await fetch("api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            if (res.ok) {
                const form = e.target;
                form.reset();
                router.push("/simplePage");
                toast.success('You have successfully registered!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                console.log("User registration failed.");
            }


        } catch (error) {
            console.log("Error during registration: ", error);
        }
    };

    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center  h-[100vh]">
                <div data-aos='fade-up' className="w-[50%] border-r-2 mr-10 pr-">
                    <h1 className="text-[45px]  text-[#293273] font-[700] leading-[80px] tracking-[2%]">Hurmatli foydalanuvchi Ro`yxatdan o`ting</h1>
                    <div className="flex justify-center">
                        <Image src={Logotip} width={350} height={200} alt="Image" />
                    </div>
                </div>
                <form data-aos="fade-down" onSubmit={handleSubmit} className="flex flex-col rounded-[20px] w-[50%]">
                    <h1 className="text-3xl  text-[#293273] font-[700] leading-[80px] tracking-[2%]">RO`YXATDAN O`TISH</h1>
                    <p className="my-1 text-[15px] text-[#293273] font-[600]">Web saytga kirishdan avval ro`yxatdan o`ting.</p>
                    <label className="mb-2 mt-3" htmlFor="">To`liq Ismingiz</label>
                    <input className="border-2 rounded-md outline-none py-3 px-3" onChange={(e) => setName(e.target.value)} type="text" placeholder="Ism kiritish" />
                    <label className="mb-2 mt-3" htmlFor="">Elektron pochtangiz</label>
                    <input className="border-2 rounded-md outline-none py-3 px-3" onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Elektron pochta kiritish" />
                    <label className="mb-2 mt-3" htmlFor="">Kalit so`z kiriting</label>
                    <input className="border-2 rounded-md outline-none py-3 px-3" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Kalit so`z kiritish" />
                    <button className="green my-4 rounded-md text-white font-bold cursor-pointer px-6 py-3">
                        Ro`yxatdan o`tish
                    </button>

                    {error && (
                        <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                            {error}
                        </div>
                    )}

                    <Link className="text-sm mt-3 text-center" href={"/"}>
                        Hisobingiz bormi? <span className="underline">Login</span>
                    </Link>
                </form>
            </div>
        </div>
    );
}


