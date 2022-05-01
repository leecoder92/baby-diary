// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import diaryData from "../../../data/diary1.json";

type Data = {
  name: string;
};

const requestInfo = diaryData.diary;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.json(requestInfo);
}
