import styles from "@/styles/works.module.scss";
import Link from "next/link";
import MyLoader from "@/components/my-loader";
import Image from "next/image";

export default function Works({ works }) {
  return (
    <div className={styles.gridContainer}>
      {works.map(({ title, slug, eyecatch }) => (
        <article className={styles.post} key={slug}>
          <Link href={`/works/${slug}`}>
            <figure>
              <Image
                loader={MyLoader}
                src={eyecatch.url}
                alt=""
                width={eyecatch.width}
                height={eyecatch.height}
                sizes="(min-width:960px)576px,50vw"
                placeholder="blur"
                blurDataURL={eyecatch.blurDataURL}
              />
            </figure>
            <h2>{title}</h2>
          </Link>
        </article>
      ))}
    </div>
  );
}
