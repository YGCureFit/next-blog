import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  // console.log(allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <Layout home>
        <Head>
          <title>Yash's Blogs</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className={utilStyles.headingMd}>
          <p>
            {" "}
            Hi, I am <b>Yash</b>, a Computer Science undergrad at IIT Guwahati, SDE intern at
            Cure.fit. Reach me out at <Link href={'https://www.linkedin.com/in/yash-garg-055032202/'}>LinkedIn</Link>, or <Link href={'https://www.instagram.com/__its.yash__/'}>Instagram</Link>
          </p>
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blogs</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <Date dateString={date} />
                </li>
            ))}
          </ul>
        </section>
      </Layout>
    </div>
  );
}
