import { connectMongoDB } from "../../../lib/mongodb";
import Topic from "../../../models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description, newSchool: school, newTelNumber: telNumber, newdarsQoldirish: darsQoldirish, newManzili: manzili, newnewDarsQoldirish: newDarsQoldirish, newTelefonRaqami: telephoneRaqami, newIsmi: newIsm, newOrganildi: organildi } = await request.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description, school, telNumber, organildi, darsQoldirish, manzili, newDarsQoldirish, telephoneRaqami, newIsm });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const topicdir = await Topic.findOne({ _id: id });
  return NextResponse.json({ topicdir }, { status: 200 });
}
