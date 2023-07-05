import Link from "next/link";
import Head from 'next/head';
import Layout from '../components/layout';
import { getSortedPostsData } from "../lib/posts";
import utilStyles from '../styles/utils.module.css';

export default function HomePage({ allPostsData }) {
    return (
        <Layout homepage>
            <Head>
                <title>W4n9hu1's Blog</title>
            </Head>
            <ul className={utilStyles.list}>
                {allPostsData.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                        {date}
                        <br />
                        <Link href="./posts/first-post">{title}-{id}</Link>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}