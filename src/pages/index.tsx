import { useDispatch, useSelector } from "react-redux";

import { Button } from "antd";
import LoginModal from "@/components/LoginModal";
import { update } from "@/store/action";
import useTranslate from "@/components/useTranslate";

export default function Home() {
  const userInfo = useSelector((state) => {
    return state.userInfo;
  });
  const dispatch = useDispatch();
  const { t, translate } = useTranslate();
  const clickHandle = (val: string) => {
    // translate(val);
    dispatch(update({ name: 123 }));
  };
  return (
    <div className=''>
      {userInfo?.name}
      <Button onClick={() => clickHandle("zh")}>zh</Button>
      <Button onClick={() => clickHandle("en")}>en</Button>
      <h1>{t("Upscale")}</h1>
      <LoginModal />
    </div>
  );
}
