import { NextResponse } from "next/server";
import { getPhotoById } from "../../../../lib/image-data";

export async function GET(request, context ) {

    const params = await context.params;
    const id = params.id;
    

    const data = await getPhotoById(id);

    return NextResponse.json({
        success: true,
        data,
    });
}