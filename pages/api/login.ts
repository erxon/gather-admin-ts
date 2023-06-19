import { createRouter } from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post((req, res) => {
    const body = req.body;
    res.status(200).json(body)
})

export default router.handler;

