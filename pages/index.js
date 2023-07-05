import Link from "next/link";
import Head from 'next/head';
import Layout from '../components/layout';

export default function HomePage() {
    return (
        <Layout homepage>
            <Head>
                <title>W4n9hu1's Blog</title>
            </Head>
            <p> <Link href="./posts/first-post">first page</Link></p>
        </Layout>
    )
}