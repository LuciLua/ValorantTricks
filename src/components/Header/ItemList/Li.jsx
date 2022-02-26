import React from 'react'
import Link from "next/link";
// Styles
import styles from "./li.module.scss";

function Li(props) {
  const { href, icon, user } = props;

  return (
    <li className={styles.li} user={user}>
      <Link href={href}>
        <a className={styles.a}><span>{icon}</span>{props.children}</a>
      </Link>
    </li>
  );
}

export default Li;
