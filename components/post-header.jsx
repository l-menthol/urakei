import styles from "@/styles/post-header.module.scss";

export default function PostHeader({ title }) {
  return (
    <div className={styles.stack}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}
