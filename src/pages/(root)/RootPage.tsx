import styles from "./RootPage.module.css";
import { useDispatch } from "react-redux";
import { pushModal } from "@/store/reducers/modal";
import { activeSpinner } from "@/store/reducers/spinner";
import { Link } from "react-router-dom";
import { AppDispatch } from "@/store";

export default function RootPage() {
  const dispatch = useDispatch<AppDispatch>();

  function showSampleModal() {
    dispatch(pushModal(() => import("@/components/modal/SampleModal1")));
  }

  function showSpinner() {
    dispatch(activeSpinner());
  }
  return (
    <div>
      <h1 className={styles.title}>Home</h1>
      <div className="flex gap-x-1 my-2 *:p-3">
        <button className="blue_button" onClick={showSampleModal}>
          모달
        </button>
        <button className="gray_button" onClick={showSpinner}>
          스피너
        </button>
      </div>
      <Link to={"/user"} className={styles.link}>
        go to /user
      </Link>
    </div>
  );
}

