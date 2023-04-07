import style from "../styles/container.module.scss";

export default function Container({ children, large = false }) {
  return <div className={large ? style.large : style.default}>{children}</div>;
}
