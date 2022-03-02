// Next imports
import Image from "next/image";
// Styles
import styles from "./li.module.scss";

function User() {
  return (
    <div className={styles.userCircle}>
      <div className={styles.img}>
        <Image src={"/agents/valorant_agent_sage.png"} layout="fill" />
      </div>
    </div>
  );
}

export default User;
