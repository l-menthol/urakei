import style from "../styles/hero.module.scss";
import Image from "next/image";
import main from "@/images/main.jpg";
import MyLoader from "@/components/my-loader";

export default function Hero({ imageOn = false }) {
  return (
    <div className={style.flexContainer}>
      <div className={style.text}>
        <h1 className={style.title}>浦 圭</h1>
        <p className={style.subtitle}>と申します。</p>
        <p className={style.skill}>
          デザイン／フロントエンド
          <br />
          コーディング／SEO
        </p>
      </div>
      {imageOn && (
        <figure className={style.image}>
          <Image
            loader={MyLoader}
            src={main}
            alt=""
            sizes="(min-width:960px) 576px, (min-width:768px)50vw,100vw"
            priority
            placeholder="blur"
          />
        </figure>
      )}
    </div>
  );
}
