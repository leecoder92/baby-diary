import type { NextApiRequest, NextApiResponse } from "next";
import diaryData from "../../../data/diary1.json";
import newDiaryData from "../../../data/diary2.json";

let newDiaries: any = [];
const originalInfo = diaryData.diary;
const newDiaryInfo = newDiaryData.diary;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  for (let i = 0; i < newDiaryInfo.length; i++) {
    let newDate = new Date(newDiaryInfo[i].created_at);
    let originalDate = new Date(originalInfo[0].created_at);
    if (!newDiaries.includes(newDiaryInfo[i]) && newDate > originalDate) {
      newDiaries.push(newDiaryInfo[i]);
    } else {
      break;
    }
  }
  res
    .status(200)
    .json({ newDiaries: newDiaries.length, newDiaryInfo: newDiaryInfo });
}
