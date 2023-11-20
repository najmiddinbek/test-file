'use client'

import React, { useState, useEffect } from "react"
const getTopics = async () => {
    try {
        const res = await fetch(`/api/pupils`, {
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

export default function FilterOption({ setShaxsiy, setSetShaxs, setManzili, setTelefoni }) {
    const [mavzula, setMavzula] = useState([]);
    const [selectedOption, setSelectedOption] = useState("");
    const [selectedName, setOptionName] = useState("");
    const [selectedAddress, setSelectedAddress] = useState("");
    const [selectedPhoneNumber, setSelectedPhoneNumber] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const topiclar = await getTopics();
                setMavzula(topiclar.mavzula);
            } catch (error) {
                console.log('Mavzular yuklanishda xatolik: ', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (selectedOption && selectedName !== "") {
            const selectedPerson = mavzula.find(
                (mavzu) => mavzu.sinf === parseInt(selectedOption) && mavzu.shaxs === selectedName
            );

            if (selectedPerson) {
                setSelectedAddress(selectedPerson.adress);
                setSelectedPhoneNumber(selectedPerson.YangiTelefonRaqamiUser);
            } else {
                setSelectedAddress("");
                setSelectedPhoneNumber("");
            }
        }
    }, [selectedOption, selectedName, mavzula]);


    const handleOptionChange = (e) => {
        const selectedGrade = e.target.value;
        setSelectedOption(selectedGrade);
        setShaxsiy(selectedGrade);
        setOptionName("");
        setSelectedAddress("");
    }

    const yangiIsm = (e) => {
        const selectedNamesi = e.target.value;
        setOptionName(selectedNamesi);
        setSetShaxs(selectedNamesi);
    };
    const handleAddressChange = (e) => {
        const newValue = e.target.value;

        const selectedPerson = mavzula.find(
            (mavzu) => mavzu.sinf === parseInt(selectedOption) && mavzu.shaxs === selectedName
        );

        if (selectedPerson) {
            setManzili(selectedPerson.adress);
        } else {
            setManzili(newValue);
        }
    };



    const handleTelefonChange = (e) => {
        const newValue2 = e.target.value;

        const selectedPerson = mavzula.find(
            (mavzu) => mavzu.sinf === parseInt(selectedOption) && mavzu.shaxs === selectedName
        );

        if (selectedPerson) {
            setTelefoni(selectedPerson.YangiTelefonRaqamiUser);
        } else {
            setTelefoni(newValue2);
        }
    };

    const sinflar = Array.from({ length: 11 }, (_, index) => index + 1);

    return (
        <div>
            <select className="px-2 py-3 mb-3  w-full  border  text-opacity-25 outline-none rounded-md cursor-pointer" value={selectedOption} onChange={handleOptionChange}>
                <option>Bu yerdan tanlang</option>
                <option>5-A</option>
                <option>5-B</option>
                <option>5-D</option>
                <option>6-A</option>
                <option>6-B</option>
                <option>6-D</option>
                <option>7-A</option>
                <option>7-B</option>
                <option>7-D</option>
                <option>8-A</option>
                <option>8-B</option>
                <option>8-D</option>
                <option>8-E</option>
                <option>9-A</option>
                <option>9-B</option>
                <option>9-D</option>
                <option>10-A</option>
                <option>10-B</option>
                <option>10-D</option>
                <option>11-A</option>
                <option>11-B</option>
                <option>11-D</option>
            </select>
            <div className="gap-4">
                <label className="mb-1 text-[20px] poppins font-bold  " htmlFor="">
                    Familiya, Ismi hamda Otasining ismi
                </label>
                <select className="w-full p-3 mb-4 border  text-opacity-25 outline-none rounded-md cursor-pointer" value={selectedName} onChange={yangiIsm}>
                    <option value="">Tanlang</option>
                    {mavzula
                        .filter((mavzu) => mavzu.sinf === selectedOption)
                        .map((mavzu, index) => (
                            <option className="" key={index} value={mavzu.shaxs}>
                                {mavzu.shaxs} {mavzu.adress}
                            </option>
                        ))}
                </select>


                <label className="-mb-4 text-[20px] poppins font-bold">
                    Yashash manzili
                </label>
                <select className="w-full p-3 mb-3 border rounded-md" onChange={handleAddressChange}>
                    <option>Tanlang</option>
                    {mavzula
                        .filter((mavzu) => mavzu.shaxs === selectedName)
                        .map((mavzu, index) => (
                            <option key={index} value={mavzu.adress}>
                                {mavzu.adress}
                            </option>
                        ))}
                </select>




                <label className="-mb-4 text-[20px] poppins font-bold">
                    Telefon raqami
                </label>

                <select className="w-full p-3 border rounded-md" onChange={handleTelefonChange}>
                    <option value="" >Tanlang</option>
                    {mavzula
                        .filter((mavzu) => mavzu.shaxs === selectedName)
                        .map((mavzu, index) => (
                            <option key={index} value={mavzu.YangiTelefonRaqamiUser}>
                                {mavzu.YangiTelefonRaqamiUser}
                            </option>
                        ))}
                </select>

            </div>
        </div >
    )
};