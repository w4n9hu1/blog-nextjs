import styles from './layout.module.css'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Layout({ children, homepage }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                <Image src="/images/profile.jpg"
                    height={homepage ? 144 : 108}
                    width={homepage ? 144 : 108}
                    className={styles.borderCircle}
                    alt=" " />
                <Link href="/" className={styles.heading2Xl}>W4n9hu1's Blog</Link>
            </header>
            <main>{children}</main>
            <footer className={styles.footer}>2019-2023 © w4n9hu1</footer>
        </div>
    )
}