import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from 'next-auth/jwt';

import nextConnect, { NextHandler } from "next-connect";
export type NasapointNextApiRequest = NextApiRequest & {
  userId?: string;
};

export const decodeToken = async (req: NasapointNextApiRequest, res: NextApiResponse, next: NextHandler) => {
  const token:any = await getToken({ req });
  req.userId = token?.id;
  next();
};

export const endpoint = () =>
  nextConnect<NasapointNextApiRequest, NextApiResponse>({
    onError: (error, req, res) => {
      console.error(error);
      res.status(500).json({ error: error.message });
    },
    onNoMatch: (req, res) => {
      console.warn(`${req.method} ${req.url} not allowed`);
      res.status(405).json({ error: 'Method not allowed' });
    },
  }).use(decodeToken);


  export const requireAuthentication = async (req: NasapointNextApiRequest, res: NextApiResponse, next: NextHandler) => {
  if (!req.userId) {
    sendUnauthorized(req, res);
    return;
  }
  next();
};

export const sendUnauthorized = (req: NasapointNextApiRequest, res: NextApiResponse) => {
  res.status(401).json({
    message: 'Unauthorized',
  });
};


export const sendError = (req: NasapointNextApiRequest, res: NextApiResponse, message?: string) => {
  res.status(500).json({
    message: message ?? 'Server error',
  });
};
