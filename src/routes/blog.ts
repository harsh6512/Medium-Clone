import { PrismaClient } from "@prisma/client/extension";
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
const token = jwt.split(' ')[1];
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
		datasourceUrl: c.env?.DATABASE_URL	,
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

blogRouter.put('/', async (c) => {
	const userId = c.get('userId');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	prisma.post.update({
		where: {
			id: body.id,
			authorId: userId
		},
		data: {
			title: body.title,
			content: body.content
		}
	});

	return c.text('updated post');
});

blogRouter.get('/:id', async (c) => {
	const id = c.req.param('id');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	
	try {
        const post = await prisma.post.findUnique({
        		where: {
        			id
        		}
        	});
            return c.json(post);
    } catch (e) {
        c.status(401);
        return c.json({
            message:"error while fetching blog post"
        })
    }
	
})

blogRouter.get('/bulk', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

    const blogs=prisma.blog.findMany();

    return c.json({
        blogs
    })
})