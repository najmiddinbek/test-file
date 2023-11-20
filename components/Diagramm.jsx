'use client'

import React, { useState, useEffect } from 'react';
import Chart from "react-apexcharts";

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


const App = () => {
    const [topiclar, setTopiclar] = useState([]);
    const [filteredMavzula, setFilteredMavzula] = useState([]);
    const [filterValue, setFilterValue] = useState({ newIsm: "", newSinfi: "", school: "" });
    const [hide, setHide] = useState(false)



    const handleHide = () => {
        setHide(!hide)
    }




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

        fetchData();
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

        fetchData();
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

        fetchData();
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

            // Calculate percentage of items where newDarsQoldirish === "Sababli"
            const sababliCount = filteredTopics.filter((t) => t.newDarsQoldirish === "Sababli").length;
            const sababliPercentage = (sababliCount / filteredTopics.length) * 100;
            setPercentageSababli(sababliPercentage.toFixed(2));

            // Calculate percentage of items where newDarsQoldirish !== "Sababli"
            const notSababliCount = filteredTopics.filter((t) => t.newDarsQoldirish !== "Sababli").length;
            const notSababliPercentage = (notSababliCount / filteredTopics.length) * 100;
            setPercentageNotSababli(notSababliPercentage.toFixed(2));
        };

        fetchData();
    }, []);




    const [descriptiveChartData, setDescriptiveChartData] = useState([/* your data for descriptive chart */]);

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

            // Update chart data directly
            const chartCategories = Object.keys(usersGroupedByDate);
            const chartDataValues = Object.values(usersGroupedByDate);

            setChartData({
                options: {
                    chart: {
                        id: "basic-bar"
                    },
                    xaxis: {
                        categories: chartCategories,
                    },
                },
                series: [
                    {
                        name: "Sanalik kiritilgan o'quvchilar",
                        data: chartDataValues,
                        backgroundColor: 'rgba(75,192,192,0.2)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderWidth: 1,
                    },
                ],
            });
        };

        fetchData();
    }, [filteredMavzula]);


    const [chartData, setChartData] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [0, 0, 0, 0, 0, 0, 0, 0,]
            }
        },
        series: [
            {
                name: "series-1",
                data: [0, 0, 0, 0, 0, 0, 0]
            }
        ]
    });

    return (
        <div className="app">
            <div className="">
                <div className="flex justify-center">
                    <Chart options={chartData.options} series={chartData.series} type="bar" width="1000px" />
                </div>
            </div>
        </div>
    );
};

export default App;
