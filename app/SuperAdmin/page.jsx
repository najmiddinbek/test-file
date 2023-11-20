'use client'

import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Diagramma from "../../components/Diagramm"
import Diagramm2 from "../../components/Diagramm2"

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

    useEffect(() => {
        const fetchData = async () => {
            if (typeof window !== 'undefined') {
                const a = await getTopics();
                const topiclar = a?.topiclar;

                const filteredTopics = topiclar?.filter((t) => t.MFY === '2-sektor') ?? [];

                setTopiclar(filteredTopics);
                setFilteredMavzula(filteredTopics);
            }
        };

        useEffect(() => {
            fetchData();
        }, []);
    }, []);

    const [usersAddedByDate, setUsersAddedByDate] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const usersGroupedByDate = filteredMavzula.reduce((acc, t) => {
                const dateKey = new Date(t.createdAt).toLocaleDateString();
                acc[dateKey] = (acc[dateKey] || 0) + 1;
                return acc;
            }, {});

            setUsersAddedByDate(usersGroupedByDate);
        };

        fetchData();
    }, [filteredMavzula]);

    const [percentageIncreaseByDate, setPercentageIncreaseByDate] = useState({});

    useEffect(() => {
        const calculatePercentageIncrease = () => {
            const dates = Object.keys(usersAddedByDate);
            const percentageIncrease = {};

            for (let i = 1; i < dates.length; i++) {
                const currentDate = dates[i];
                const previousDate = dates[i - 1];

                const currentCount = usersAddedByDate[currentDate];
                const previousCount = usersAddedByDate[previousDate];

                const increasePercentage = ((currentCount - previousCount) / previousCount) * 100;

                percentageIncrease[currentDate] = increasePercentage.toFixed(2);
            }

            setPercentageIncreaseByDate(percentageIncrease);
        };

        calculatePercentageIncrease();
    }, [usersAddedByDate]);

    const [countSababli, setCountSababli] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            if (typeof window !== 'undefined') {
                const a = await getTopics();
                const topiclar = a?.topiclar;

                const filteredTopics = topiclar?.filter((t) => t.MFY === '2-sektor') ?? [];

                setTopiclar(filteredTopics);
                setFilteredMavzula(filteredTopics);
            }
            // Count items where newDarsQoldirish === "Sababli"
            const sababliCount = filteredTopics.filter((t) => t.newDarsQoldirish === "Sababli").length;
            setCountSababli(sababliCount);
        };

        useEffect(() => {
            fetchData();
        }, []);
    }, []);

    const [countNotSababli, setCountNotSababli] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            if (typeof window !== 'undefined') {
                const a = await getTopics();
                const topiclar = a?.topiclar;

                const filteredTopics = topiclar?.filter((t) => t.MFY === '2-sektor') ?? [];

                setTopiclar(filteredTopics);
                setFilteredMavzula(filteredTopics);
            }

            // Count items where newDarsQoldirish !== "Sababli"
            const notSababliCount = filteredTopics.filter((t) => t.newDarsQoldirish !== "Sababli").length;
            setCountNotSababli(notSababliCount);
        };

        useEffect(() => {
            fetchData();
        }, []);
    }, []);

    const [percentageSababli, setPercentageSababli] = useState(0);
    const [percentageNotSababli, setPercentageNotSababli] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            if (typeof window !== 'undefined') {
                const a = await getTopics();
                const topiclar = a?.topiclar;

                const filteredTopics = topiclar?.filter((t) => t.MFY === '2-sektor') ?? [];
                setTopiclar(filteredTopics);
                setFilteredMavzula(filteredTopics);
            }


            const sababliCount = filteredTopics.filter((t) => t.newDarsQoldirish === "Sababli").length;
            const sababliPercentage = (sababliCount / filteredTopics.length) * 100;
            setPercentageSababli(sababliPercentage.toFixed(2));
            const notSababliCount = filteredTopics.filter((t) => t.newDarsQoldirish !== "Sababli").length;
            const notSababliPercentage = (notSababliCount / filteredTopics.length) * 100;
            setPercentageNotSababli(notSababliPercentage.toFixed(2));
        };

        useEffect(() => {
            fetchData();
        }, []);
    }, []);




    const [chartData, setChartData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            if (typeof window !== 'undefined') {
                const a = await getTopics();
                const topiclar = a?.topiclar;

                const filteredTopics = topiclar?.filter((t) => t.MFY === '2-sektor') ?? [];

                setTopiclar(filteredTopics);
                setFilteredMavzula(filteredTopics);
            }

            const usersGroupedByDate = filteredTopics.reduce((acc, t) => {
                const dateKey = new Date(t.createdAt).toLocaleDateString();
                acc[dateKey] = (acc[dateKey] || 0) + 1;
                return acc;
            }, {});

            setUsersAddedByDate(usersGroupedByDate);
            setChartData({
                labels: Object.keys(usersAddedByDate),
                datasets: [
                    {
                        label: 'Sanalik kiritilgan o`quvchilar',
                        data: Object.values(usersAddedByDate),
                        backgroundColor: 'rgba(75,192,192,0.2)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderWidth: 1,
                    },
                ],
            });
        };

        useEffect(() => {
            fetchData();
        }, []);
    }, [filteredMavzula, usersAddedByDate]);


    return (
        <>
            <div>
                <Navbar />
                <div className="max-w-[1000px] mx-auto w-full">
                    <div className="flex flex-col justify-start w-full">
                        <h2 className="text-3xl poppins font-bold mb-2">Foizdagi o`zgarish</h2>
                        {Object.keys(percentageIncreaseByDate).map((date) => (
                            <p className='poppins' key={date}>{date}: Avvalgi kundan farqi %{percentageIncreaseByDate[date]}</p>
                        ))}
                    </div>
                </div>
                <Diagramma />
                <div className="max-w-[1000px] w-full mx-auto mt-20 mb-5">
                    <div className="flex justify-between w-full">
                        <div className="mb-4">
                            <h2 className="text-3xl poppins font-bold mb-2">Sababli dars qoldirilgan o`quvchilar</h2>
                            <p className='poppins'>{countSababli} ta o`quvchi sababli dars qoldirgan</p>
                            <p className='poppins'>Bu barcha oquvchilarning <b>{percentageSababli}%</b> ni tashkil etadi</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-3xl poppins font-bold mb-2">Sababsiz dars qoldirgan o`quvchilar</h2>
                            <p className='poppins'> {countNotSababli} ta o`quvchi sababsiz dars qoldirgan</p>
                            <p className='poppins'> Bu barcha oquvchilarning <span className='green text-white py-2 px-4'>{percentageNotSababli}%</span> ni tashkil etadi</p>
                        </div>
                    </div>
                </div>
                <Diagramm2 />
            </div>

        </>
    );
};

export default Filter;