import { useState } from "react";
import Link from "next/link";
import styles from "../styles/nav.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link href="/#works">works</Link>
        </li>
        <li>
          <Link href="/#profile">profile</Link>
        </li>
      </ul>
    </nav>
  );
}
