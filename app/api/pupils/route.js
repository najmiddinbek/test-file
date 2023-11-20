import { connectMongoDB } from "../../../lib/mongodb";
import Mavzular from "../../../models/28-maktab";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { shaxs, maktab, sinf, YangiTelefonRaqamiUser, adress, shaxsiy, newSinfi, newDarsQoldirish, telephoneRaqami, newIsm, manzili } = await request.json();
    await connectMongoDB();
    await Mavzular.create({ shaxs, maktab, sinf, manzili, YangiTelefonRaqamiUser, adress, shaxsiy, newSinfi, newDarsQoldirish, telephoneRaqami, newIsm });
    return NextResponse.json({ message: "Mavzular Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const mavzula = await Mavzular.find();
    return NextResponse.json({ mavzula });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Mavzular.findByIdAndDelete(id);
    return NextResponse.json({ message: "Maktab o`quvchisi o`chirildi" }, { status: 200 });
}
