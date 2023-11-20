'use client'
import PupilsAddClient from "../../components/Pupils";
import Navbar from "../../components/Navbar";


const PupilsAddPage = () => {

    return (
        <>
            <div>
                <Navbar />
                <div className='container w-full mx-auto flex justify-center items-center h-[85vh]'>
                    <PupilsAddClient />
                </div>

            </div>

        </>
    );
};

export default PupilsAddPage;