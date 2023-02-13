import { NextApiHandler, NextApiResponse } from 'next';
import { NextApiRequest } from 'next';
import NextCors from 'nextjs-cors';

async function handler(req: NextApiRequest, res: NextApiResponse, next: NextApiHandler) {
  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    origin: '*',
    optionsSuccessStatus: 200,
  });
  next(req, res);
}

export default handler;
