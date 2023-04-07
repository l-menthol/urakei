import Logo from "./logo";
import Nav from "./nav";
import Container from "./container";
import style from "../styles/header.module.scss";

export default function Header() {
  return (
    <>
      <header className={style.wrapper}>
        <Container>
          <div className={style.flexContainer}>
            <Logo />
            <Nav />
          </div>
        </Container>
      </header>
    </>
  );
}
