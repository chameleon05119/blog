import style from "styles/container.module.css";

export default function Container({ children }) {
  return <div className={style.default}>{children}</div>;
}
