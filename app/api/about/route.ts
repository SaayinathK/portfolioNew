import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import About from "@/models/About";

/* =========================
   GET /api/about
========================= */
export async function GET() {
  try {
    await dbConnect();

    const about = await About.findOne({}).lean();
    return NextResponse.json(about ?? null, { status: 200 });
  } catch (error) {
    console.error("GET /api/about error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

/* =========================
   POST /api/about
========================= */
export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();

    const exists = await About.findOne({});
    if (exists) {
      return NextResponse.json(
        { error: "About already exists" },
        { status: 400 }
      );
    }

    const about = await About.create(body);
    return NextResponse.json(about, { status: 201 });
  } catch (error) {
    console.error("POST /api/about error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

/* =========================
   PUT /api/about
========================= */
export async function PUT(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();

    const about = await About.findOneAndUpdate(
      {},
      {
        $set: {
          firstName: body.firstName,
          lastName: body.lastName,
          title: body.title,
          shortBio: body.shortBio,
          longBio: body.longBio,
          email: body.email,
          phone: body.phone,
          location: body.location,
          resumeUrl: body.resumeUrl,
          profileImageUrl: body.profileImageUrl,
          highlights: body.highlights,
          motto: body.motto,
          updatedAt: new Date(),
        },
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
      }
    );

    return NextResponse.json(about, { status: 200 });
  } catch (error) {
    console.error("PUT /api/about error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

/* =========================
   DELETE /api/about
========================= */
export async function DELETE() {
  try {
    await dbConnect();

    const deleted = await About.findOneAndDelete({});
    if (!deleted) {
      return NextResponse.json(
        { message: "No about content found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("DELETE /api/about error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
