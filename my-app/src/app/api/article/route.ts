import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import { db } from '../../lib/db';

const execAsync = promisify(exec);

export async function POST(request: NextRequest) {
    try {
      const { image, name, link } = await request.json();

      console.log("Logging the article", name, link)
  
      // Update the database with the new article data
      await db.image.upsert({
        where: { id: 1 },
        update: { url: image, alt: name, link: link },
        create: { url: image, alt: name, link: link },
      });
  
      return NextResponse.json({ message: 'Update successful' }, { status: 200 });
    } catch (error) {
      console.error('Error updating:', error);
      return NextResponse.json({ message: 'Error updating' }, { status: 500 });
    } finally {
      await db.$disconnect();
    }
}



export async function GET(request: NextRequest) {
    try { 
        const image = await db.image.findUnique({
            where: { id: 1 },
        });

        return NextResponse.json({ image }, { status: 200 });
    } catch (error) {
        console.error('Error getting:', error);
        return NextResponse.json({ message: 'Error getting' }, { status: 500 });
    }

    }   