import Container from "./container";
import style from "../styles/footer.module.scss";

export default function Footer() {
  const pageTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <footer className={style.wrapper}>
        <Container>
          <button className={style.btn} onClick={pageTop}>
            ページ上部へ戻る
          </button>
        </Container>
      </footer>
    </>
  );
}
