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
    const [usersAddedByDate, setUsersAddedByDate] = useState({});

    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Sanalik kiritilgan o\'quvchilar',
                data: [],
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
        ],
    });

    const fetchDataNotSababli = async () => {
        try {
            const res = await fetch('/api/topics', {
                cache: 'no-store',
            });

            if (!res.ok) {
                throw new Error('Mavzular yuklanmadi');
            }

            const data = await res.json();
            const topiclar = data?.topiclar;

            if (!topiclar) {
                console.error('Topiclar is undefined.');
                return;
            }

            const filteredTopics = topiclar?.filter((t) => t.MFY === '2-sektor') ?? [];


            const notSababliCount = filteredTopics.filter((t) => t.newDarsQoldirish !== 'Sababli').length;
            setCountNotSababli(notSababliCount);
            const notSababliPercentage = (notSababliCount / filteredTopics.length) * 100;
            setPercentageNotSababli(notSababliPercentage.toFixed(2));

            setChartDataNotSababli({
                options: {
                    chart: {
                        id: 'percentage-not-sababli',
                    },
                    xaxis: {
                        categories: ['Sababsiz o`quvchilar foizi'],
                    },
                },
                series: [
                    {
                        name: 'series-1',
                        data: [notSababliPercentage],
                    },
                ],
            });
        } catch (error) {
            console.error('Error fetching topics:', error);
        }
    };

    useEffect(() => {
        fetchDataNotSababli();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
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
                    labels: Object.keys(usersGroupedByDate),
                    datasets: [
                        {
                            label: 'Sanalik kiritilgan o\'quvchilar',
                            data: Object.values(usersGroupedByDate),
                            backgroundColor: 'rgba(75,192,192,0.2)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderWidth: 1,
                        },
                    ],
                });
            } catch (error) {
                console.error('Error fetching topics:', error);
            }
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

        fetchData();
    }, [filteredMavzula, usersAddedByDate]);


    const donutChartOptions = {
        chart: {
            id: 'donut-chart',
        },
        labels: ['Sababsiz o`quvchilar foizi', 'Sababli o`quvchilar foizi'], // Updated labels
        colors: ['#008FFB', '#FF4560'], // Colors for each segment
        title: {
            text: 'Donut Chart',
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '70%',
                },
            },
        },
    };

    const donutChartData = {
        options: donutChartOptions,
        series: [percentageNotSababli, percentageSababli],
    };

    const lineChartOptions = {
        chart: {
            id: 'line-chart',
        },
        xaxis: {
            categories: ['Some category'],
        },
    };

    const [chartDataNotSababli, setChartDataNotSababli] = useState({
        options: {
            chart: {
                id: 'percentage-not-sababli',
            },
            xaxis: {
                categories: ['Sababsiz o`quvchilar foizi'],
            },
        },
        series: [
            {
                name: 'series-1',
                data: [percentageNotSababli],
            },
        ],
    });

    const combinedChartData = {
        options: {
            chart: {
                id: 'combined-chart',
            },
            xaxis: {
                categories: ['Barcha o`quvchilar'],
            },
        },
        series: [
            {
                name: 'Sababsiz dars qoldirgan o`quvchilar',
                data: [percentageNotSababli],
            },
            {
                name: 'Sababli',
                data: [percentageSababli],
            },
        ],
    };


    return (
        <>
            <div className="app">
                <div className="row">
                    <div className="flex justify-center">
                        <Chart options={combinedChartData.options} series={combinedChartData.series} type="bar" width="1000" />
                    </div>
                </div>

            </div>

        </>
    );
};

export default App;



