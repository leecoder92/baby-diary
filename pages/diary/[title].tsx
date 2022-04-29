import type { NextPage } from "next";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

const DiaryDetail: NextPage = () => {
  return (
    <div>
      <Link href="/" passHref>
        <CloseIcon />
      </Link>
    </div>
  );
};

export default DiaryDetail;
