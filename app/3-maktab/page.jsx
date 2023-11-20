import Filter from "../../components/Filter"
import Navbar from "../../components/Navbar"

export default function TopicsList() {

    return (
        <>
            <Navbar />
            <div className="container">
                <Filter />
            </div >
        </>
    );
}