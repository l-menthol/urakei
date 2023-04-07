import style from "../styles/postBody.module.scss";

export default function PostBody({ children }) {
  return <div className={style.stack}>{children}</div>;
}
