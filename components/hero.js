export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      {imageOn && <figure> [画像] </figure>}
    </div>
  );
}
