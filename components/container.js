import style from "styles/container.module.css";

export default function Container({ children, large = false }) {
  return <div className={large ? style.large : style.default}>{children}</div>;
}
