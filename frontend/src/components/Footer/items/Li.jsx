// Next imports
import Link from "next/link";
// Styles
import styles from "./li.module.scss";

function Li(props) {
  return (
    <li className={styles.li}>
      <Link href={props.href}>{props.label}</Link>
    </li>
  );
}

export default Li;
