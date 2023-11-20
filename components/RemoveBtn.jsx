"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
    const router = useRouter();
    const removeTopic = async () => {
        const confirmed = confirm("O`quvchini bazadan o`chirib tashlamoqchimisiz?");

        if (confirmed) {
            const res = await fetch(`/api/topics?id=${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                router.refresh();
            }
        }
    };

    return (
        <button onClick={removeTopic} className="text-red-600">
            <HiOutlineTrash size={24} />
        </button>
    );
}
