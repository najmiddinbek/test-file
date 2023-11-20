

'use client'

import React, { useEffect, useState } from 'react';

const getTopics = async () => {
    const today = new Date();
    const currentTime = today.toTimeString().split(' ')[0];
    const apiUrl = process.env.API_URL;
    const filterDate = new Date(today.getTime() - 1440 * 60000).getTime();

    try {
        const res = await fetch('/api/topics', {
            cache: 'no-store',
        });
        if (!res.ok) {
            throw new Error('An error occurred while loading themes');
        }

        const { topiclar } = await res.json();
        const filteredTopics = topiclar.filter((topic) => {
            const createdAt = new Date(topic.createdAt).getTime();
            return createdAt > filterDate && topic.MFY === '1-sektor';
        });

        return filteredTopics;
    } catch (error) {
        console.log('Error loading themes: ', error.message);
        return [];
    }
};

export default function Count() {
    const [topicCount, setTopicCount] = useState(0);
    const [latestTopicId, setLatestTopicId] = useState('');
    const [clickedTopicIds, setClickedTopicIds] = useState([]);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const filteredTopics = await getTopics();
                const newFilteredTopics = filteredTopics.filter(
                    (topic) => !clickedTopicIds.includes(topic._id)
                );

                // Filter topics by MFY equal to "CHOROTOQ MFY"
                const filteredTopicsByMFY = newFilteredTopics.filter(
                    (topic) => topic.MFY === '1-sektor'
                );

                setTopicCount(filteredTopicsByMFY.length);

                if (filteredTopicsByMFY.length > 0) {
                    const latestTopicId =
                        filteredTopicsByMFY[filteredTopicsByMFY.length - 1]._id;
                    setLatestTopicId(latestTopicId);
                }
            } catch (error) {
                console.log('Error getting threads: ', error.message);
            }
        };

        fetchTopics();
    }, [clickedTopicIds]);

    const handleTopicClick = (topicId) => {
        setClickedTopicIds((prevClickedTopicIds) => {
            const updatedClickedTopicIds = [...prevClickedTopicIds, topicId];
            return updatedClickedTopicIds;
        });
    };

    return (
        <>
            <div className="absolute  py-1 px-1 top-0 right-0 text-white rounded-full text-[10px] bg-red-600">
                +{topicCount}
            </div>
        </>
    );
}

