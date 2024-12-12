import { useDispatch, useSelector } from "react-redux";

import { Button } from "antd";
import LoginModal from "@/components/LoginModal";
import { hand } from "@/auth.ts";
import { useSession } from "next-auth/react";
import useTranslate from "@/components/useTranslate";

export default function Home() {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const { t, translate } = useTranslate();
  const clickHandle = () => {
    console.log("lfsz", hand);
  };
  return (
    <div className=''>
      {session?.user?.email}
      <Button onClick={clickHandle}>{t("Upscale")}</Button>
      <LoginModal />
    </div>
  );
}
