import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.css";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Navbar from "./navbar";

const Name = "Yash Garg";
export const siteTitle = "Yash's Blog";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar></Navbar>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              alt="Yash Garg's Image"
              height={144}
              width={144}
            ></Image>
            <h1 className={utilStyles.heading2Xl}>{Name}</h1>
          </>
        ) : (
          <>
           <Link href='/'><Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              alt="Yash Garg's Image"
              height={108}
              width={108}
            ></Image></Link>
            <h1 className={utilStyles.headingLg}><Link href='/'>{Name}</Link></h1>
            </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
