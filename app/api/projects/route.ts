import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Project from '@/models/Project';

/* GET: Fetch all projects */
export async function GET() {
  try {
    await dbConnect();
    const projects = await Project.find({}).sort({ createdAt: -1 }).lean();
    return NextResponse.json(Array.isArray(projects) ? projects : []);
  } catch (error) {
    console.error('GET /api/projects error:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

/* POST: Create a new project (base64 image, like achievements) */
export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();

    // Accepts imageUrl as base64 string (like achievements)
    // Accept technologiesFramework as a comma-separated string (for compatibility with ProjectForm)
    const payload = {
      ...body,
      // If tags is an array, join to string; if string, trim
      tags: Array.isArray(body.tags)
        ? body.tags.filter(Boolean).join(', ')
        : (typeof body.tags === 'string' ? body.tags : ''),
      technologiesFramework: Array.isArray(body.technologiesFramework)
        ? body.technologiesFramework.filter(Boolean).join(', ')
        : (typeof body.technologiesFramework === 'string' ? body.technologiesFramework : ''),
    };

    const project = await Project.create(payload);
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error('POST /api/projects error:', error);
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}

/* PUT: Update existing project */
export async function PUT(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const { _id, ...update } = body;

    if (!_id) return NextResponse.json({ error: 'Project ID is required' }, { status: 400 });

    const payload = {
      ...update,
      tags: Array.isArray(update.tags)
        ? update.tags.filter(Boolean).join(', ')
        : (typeof update.tags === 'string' ? update.tags : ''),
      technologiesFramework: Array.isArray(update.technologiesFramework)
        ? update.technologiesFramework.filter(Boolean).join(', ')
        : (typeof update.technologiesFramework === 'string' ? update.technologiesFramework : ''),
    };

    const project = await Project.findOneAndUpdate({ _id }, payload, { new: true }).lean();
    if (!project) return NextResponse.json({ error: 'Project not found' }, { status: 404 });

    return NextResponse.json(project);
  } catch (error) {
    console.error('PUT /api/projects error:', error);
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
}

/* DELETE: Delete a project */
export async function DELETE(req: Request) {
  try {
    await dbConnect();
    const { _id } = await req.json();
    if (!_id) return NextResponse.json({ error: 'Project ID is required' }, { status: 400 });

    const deleted = await Project.findOneAndDelete({ _id }).lean();
    if (!deleted) return NextResponse.json({ error: 'Project not found' }, { status: 404 });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('DELETE /api/projects error:', error);
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}
