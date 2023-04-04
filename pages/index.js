import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kotesh Mudila</title>
        <meta name="description" content="Frontend Developer" />
        <link rel="icon" href="/star.ico" />
      </Head>
    </div>
  );
}
