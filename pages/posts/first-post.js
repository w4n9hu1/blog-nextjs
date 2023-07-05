import Link from "next/link"
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
        <>
            <Layout>
                <Head>
                    <title>First Post</title>
                </Head>
                <h1>First Post</h1>
                <p>lorem ipsum dolor sit amet</p>
                <p>因为对 Next.js 13 新的 app 目录的 react 服务端组件很感兴趣，想要就用一个项目来学习它，然后就构建了自己新的个人网站。 让我来介绍一下网站的特点：

                    使用 notion 官方 api 获取文章数据，使用服务端组件渲染直出，性能好
                    Next.js 的增量渲染使得网站无需重新编译部署也能获得动态展示的能力
                    订阅列表页面，来展示从自己订阅的博客 rss 的信息</p>
                <Link href="/">Home</Link>
            </Layout>
        </>
    );
}