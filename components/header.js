import Logo from "@/components/logo";
import Nav from "@/components/nav";
import style from "styles/header.module.css";

export default function Header() {
  return (
    <header>
      <div className={style.flexContainer}>
        <Logo boxOn />
        <Nav />
      </div>
    </header>
  );
}
