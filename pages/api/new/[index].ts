// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import newDiaryData from "../../../data/diary2.json";

const requestInfo = newDiaryData.diary;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let { index } = req.query;
  let titleResponse;
  for (let i = 0; i < requestInfo.length; i++) {
    if (i.toString() == index) {
      titleResponse = requestInfo[i];
      break;
    }
  }
  res.status(200).json({
    titleResponse,
  });
}
