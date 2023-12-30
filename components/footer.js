import Container from "@/components/container";
import Logo from "@/components/logo";
import style from "styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={style.wrapper}>
      <Container>
        <div className={style.flexContainer}>
          <Logo />
          [ソーシャル]
        </div>
      </Container>
    </footer>
  );
}
