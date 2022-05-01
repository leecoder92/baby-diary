import type { NextApiRequest, NextApiResponse } from "next";
import diaryData from "../../../data/diary1.json";

const requestInfo = diaryData.diary;

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
