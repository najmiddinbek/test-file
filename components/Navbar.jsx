import Link from "next/link";
import Image from "next/image";
import Logotip from "../public/mdm++++ 3.png"

export default function Navbar() {

    return (
        <div className="green">
            <div className="max-w-[2000px]  mx-auto">
                <nav className="flex justify-center items-center">
                    <Link className="my-3" href={"/pupilsAdd"}>
                        <Image src={Logotip} width={200} height={100} alt="
                    Image" />
                    </Link>
                </nav>
            </div>
        </div>
    );
}
