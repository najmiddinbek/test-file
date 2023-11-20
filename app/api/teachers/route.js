import { connectMongoDB } from "../../../lib/mongodb";
import Oqituvchilar from "../../../models/teachers";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { teacherClass, teacherFIO, teacherPassword } = await request.json();
    await connectMongoDB();
    await Oqituvchilar.create({ teacherClass, teacherFIO, teacherPassword });
    return NextResponse.json({ message: "Oqituvchilar Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const teacherla = await Oqituvchilar.find();
    return NextResponse.json({ teacherla });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Oqituvchilar.findByIdAndDelete(id);
    return NextResponse.json({ message: "Maktab o`quvchisi o`chirildi" }, { status: 200 });
}
