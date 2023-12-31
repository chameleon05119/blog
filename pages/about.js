import Container from "@/components/container";
import Hero from "@/components/hero";
import PostBody from "@/components/post-body";
import Contact from "@/components/contact";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "@/components/two-colmun";
import Image from "next/image";
import eyecatch from "images/about.jpg";

export default function About() {
  return (
    <Container>
      <Hero title="About" subtitle="About development activities" />

      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="{min-width: 1152px} 1152px, 100vw"
          priority
          placeholder="blur"
        />
      </figure>

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>
              Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、
              様々な技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けます。
            </p>
            <h2>モノづくりで目指していること</h2>
            <p>
              モノづくりではデータの分析からクリエイティブまで幅広いことを担当しています。
              新しい事を取り入れながら、ユーザーにマッチした提案をするのが目標です。
              たくさんの開発・提供が数多くありますが、特にそこを磨く作業に力を入れています。
            </p>
            <p>
              単純に形にするだけではなく、作る過程や、なぜそのようにしたかを大事にしながらモノづくりをしています。
              毎回課題解決テーマをもって「モノ」と向き合い制作をし、フィードバックしてもらうことで自分の中にあるモヤモヤを言葉にして「問い」への答えを出しています。
            </p>
            <h3>新しいことへのチャレンジ</h3>
            <p>
              今までと違うものを作ることで愛着が湧いてきます。そこで興味を持ったことは小さいことでもいいから取り入れて、良いものを作れるようにしていきます。
              小さなヒントから新しいものを生み出すようなモノづくりは、これからも続けていきたいです。
            </p>
          </PostBody>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}
