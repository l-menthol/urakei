import Link from "next/link";
import styles from "../styles/logo.module.scss";

export default function Logo() {
  return (
    <Link href="/" className={styles.basic}>
      <div className={styles.logo}></div>
    </Link>
  );
}
