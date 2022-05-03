import styles from "../styles/Home.module.css";
import dayjs from "dayjs";

export default function DiaryBox(props: any) {
  return (
    <div
      style={{
        border: "1px solid black",
        marginBottom: "15px",
        padding: "10px",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <p
        style={{
          position: "absolute",
          top: "-25px",
          backgroundColor: "white",
        }}
      >
        {props.diary.title}
      </p>
      <p className={styles.diaryContents}>{props.diary.contents}</p>
      <div style={{ textAlign: "end" }}>
        <p>{dayjs(props.diary.created_at).format("YYYY년 MM월 DD일")}</p>
      </div>
    </div>
  );
}
