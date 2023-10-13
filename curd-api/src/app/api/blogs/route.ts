import { NextResponse } from "next/server";
import { getPosts } from "../../../../lib/data";

export const GET = async (req: Request, res: Response) => {
    try {
        const posts = getPosts();
        return NextResponse.json({message: "OK", posts},{status: 200});
    } catch (error){
        return NextResponse.json(
            { message: "Error", error},
            {status: 500,}
        );
    }
};

export const POST = async (req: Request, res: Response) => {
    console.log("POST REQUEST");
};
