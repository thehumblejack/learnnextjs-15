"use server";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { BlogPost } from './../node_modules/.prisma/client/index.d';
import { prisma } from './utils/db';
import { redirect } from 'next/navigation';
export async function handleSubmisison(formData: FormData) {

    const {getUser} = await getKindeServerSession();
    const user = await getUser(); 

    if(!user){
      return redirect("/api/auth/register");
    }

    const title = formData.get('title');
    const content = formData.get('content');
    const url = formData.get('url');

    const data = await prisma.blogPost.create({
      data: {
        title: title as string,
        content: content as string,
        imageUrl: url as string,
        authorId: user.id, 
        authorImage: user.picture as string,
        authorName: user.given_name as string,
      },
    });

    return redirect("/dashboard");
}

export async function yoo() {
    console.log("yooo");
}