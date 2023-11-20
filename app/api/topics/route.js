import { connectMongoDB } from "../../../lib/mongodb";
import Topic from "../../../models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, description, school, organildi, MFY, telNumber, darsQoldirish, manzili, newSinfi, newDarsQoldirish, telephoneRaqami, newIsm } = await request.json();
    await connectMongoDB();
    await Topic.create({ title, description, school, organildi, MFY, telNumber, darsQoldirish, manzili, newSinfi, newDarsQoldirish, telephoneRaqami, newIsm });
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const topiclar = await Topic.find();
    return NextResponse.json({ topiclar });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
