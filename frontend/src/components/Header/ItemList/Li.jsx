// React
import React from "react";
// Next imports
import Link from "next/link";
// Styles
import styles from "./li.module.scss";
// Components
import UserSettings from "../UserSettings/UserSettings";

// function openUserSettings(user, theme) {
//   const settings = <UserSettings user={user} theme="auto" />
//   console.log("OPEE")
// }

function Li(props) {
  const { href, icon, user, click } = props;

  return (
    <li
      className={styles.li}
      user={user}
      onClick={() => {
        if (props.click === "modalOpenned") {
          // openUserSettings(user);
          console.log("modalOpenned");
        } else {
          console.log("modalNotOpenned");
        }
      }}
      click={click}
    >
      <Link href={href}>
        <a className={styles.a}>
          <span>{icon}</span>
          {props.children}
        </a>
      </Link>
    </li>
  );
}

export default Li;
