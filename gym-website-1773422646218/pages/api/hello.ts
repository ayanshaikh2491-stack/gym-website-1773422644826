import { NextApiRequest, NextApiResponse } from 'next';

const hello = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({ message: 'Hello from Next.js API!' });
};

export default hello;