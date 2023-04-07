import styles from "@/styles/profile.module.scss";
import MyLoader from "@/components/my-loader";
import Image from "next/image";
import profile from "@/images/profile.jpg";

export default function Profile() {
  return (
    <div className={styles.flexContainer}>
      <figure className={styles.img}>
        <Image
          loader={MyLoader}
          src={profile}
          alt=""
          sizes="(min-width:960px)100px,(min-width:768px)10vw,20vw"
          placeholder="blur"
        />
      </figure>
      <div className={styles.text}>
        <h3>浦 圭　Ura Kei</h3>
        <p>2023年3月まで陶芸教室でデザイナーをしておりました。</p>
        <p>
          Web制作やデザインの知識はほぼ独学で身につけ、業務に活かしてまいりました。
          <br />
          どんなことでもお任せいただければ自らキャッチアップし、着実に遂行致します。
        </p>
      </div>
    </div>
  );
}
