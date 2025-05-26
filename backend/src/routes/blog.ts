import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { stream } from "hono/streaming";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string;
    }
}>();

blogRouter.use("/*",async(c,next)=>{
    const jwt=c.req.header('Authorization');
    if(!jwt){
        c.status(401);
        return c.json({error:"unauthorized"});
    }
const token = jwt;
    const payload=await verify(token,c.env.JWT_SECRET);
    if(!payload){
        c.status(401);
        return c.json({error:"unathorised"});
    }
    c.set('userId',String(payload.id));
    await next();
});

blogRouter.post('/', async (c) => {
	const userId = c.get('userId');
	const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

	const body = await c.req.json();
	const post = await prisma.post.create({
		data: {
			title: body.title,
			content: body.content,
			authorId: userId
		}
	});
	return c.json({
		id: post.id
	});
})

blogRouter.put('/update', async (c) => {
	const userId = c.get('userId'); // Make sure this is a valid string
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());

	const body = await c.req.json();

	try {
		const updatedPost = await prisma.post.updateMany({
			where: {
				id: body.id,
				authorId: userId,
			},
			data: {
				title: body.title,
				content: body.content,
			},
		});

		if (updatedPost.count === 0) {
			c.status(404);
			return c.json({ message: 'Post not found or you are not the author' });
		}

		return c.text('Updated post');
	} catch (e) {
		console.log(e);
		c.status(500);
		return c.json({ message: 'Error while updating post' });
	}
});

blogRouter.get('/get/:id', async (c) => {
	const id = parseInt(c.req.param('id'));
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());

	try {
		const post = await prisma.post.findUnique({
			where: { id },
		});

		if (!post) {
			c.status(404);
			return c.json({ message: "Post not found" });
		}

		return c.json(post);
	} catch (e) {
		c.status(500);
		return c.json({ message: "Error while fetching blog post" });
	}
});


blogRouter.get('/bulk', async (c) => {
	const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const blogs=await prisma.post.findMany();

    return c.json({
        blogs
    })
})