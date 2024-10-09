import { NextApiRequest, NextApiResponse } from 'next';

const leads: unknown[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    leads.push(req.body);
    res.status(201).json({ message: 'Lead added' });
  } else {
    res.status(200).json(leads);
  }
}
