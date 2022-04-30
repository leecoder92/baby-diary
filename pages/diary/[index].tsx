/* eslint-disable */
import type { NextPage } from "next";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import axios from "axios";
import dayjs from "dayjs";

const DiaryDetail: NextPage = () => {
  const router = useRouter();

  const [diaryDetail, setDiaryDetail] = useState<any>();
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:3000/api/diary/${router.query.index}`,
    }).then((res) => {
      setDiaryDetail(res.data.titleResponse);
    });
  }, []);

  return (
    <>
      <IconButton
        onClick={() => {
          router.back();
        }}
      >
        <CloseIcon />
      </IconButton>
      {diaryDetail && (
        <div
          style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
        >
          <p
            style={{
              position: "absolute",
              top: "23px",
              left: "20px",
              backgroundColor: "white",
            }}
          >
            {diaryDetail.title}
          </p>
          <p style={{ whiteSpace: "pre-wrap" }}>{diaryDetail.contents}</p>
          <div style={{ textAlign: "end" }}>
            <p>{dayjs(diaryDetail.created_at).format("YYYY년 MM월 DD일")}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default DiaryDetail;
