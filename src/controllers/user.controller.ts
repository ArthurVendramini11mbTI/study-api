import type { Request, Response } from "express";

export async function getUser(req: Request, res: Response) {
    res.status(201).json({user: 'Arthur'});
}