import styles from './layout.module.css'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';

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
                    className={utilStyles.borderCircle}
                    alt=" " />
                <Link href="/" className={utilStyles.heading2Xl}>W4n9hu1's Blog</Link>
                <ul className={styles.navbar}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul>
            </header>
            <main>{children}</main>
            <footer className={styles.footer}>2019-{new Date().getFullYear()} © w4n9hu1</footer>
        </div>
    )
}