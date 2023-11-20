import { connectMongoDB } from "../../../lib/mongodb";
import Topic from "../../../models/28-maktab";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newShaxs: shaxs, newOrganildi: organildi, newShaxsiy: shaxsiy, newMFY: MFY, newMaktab: maktab, newSinf: sinf, newnewnewDarsQoldirish: newDarsQoldirish, newtelephoneRaqami: telephoneRaqami, newIsmi: newIsm, newYangiTelefonRaqamiUser: YangiTelefonRaqamiUser, newAdress: adress, newManzili: manzili } = await request.json();
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id, { shaxs, maktab, organildi, sinf, MFY, YangiTelefonRaqamiUser, manzili, adress, shaxsiy, newDarsQoldirish, telephoneRaqami, newIsm });
    console.log('Updated topic:', updatedTopic);

    return NextResponse.json({ message: "Maktab Yangilandi" }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const topic = await Topic.findOne({ _id: id });
    return NextResponse.json({ topic }, { status: 200 });
}
