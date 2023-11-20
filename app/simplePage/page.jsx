import React from 'react'
import AddTopic from '../addTopic/page'
import Navbar from '../../components/Navbar'

export default function page() {
    return (
        <div className="">
            <Navbar />
            <div className='container mt-10 bg-gray-100 w-full mx-auto flex justify-center items-center h-[85vh]'>
                <AddTopic />
            </div>
        </div>
    )
}
