import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostIDs, getPostData} from "../../lib/posts";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css"

export default function Post({post}){
    return(
        <Layout>
            <Head>
                <title>{post.title}</title>
            </Head>
            <h1 className={utilStyles.headingX1}>{post.title}</h1>
            <div className={utilStyles.lightText}><Date dateString={post.date} /></div>
            <br />
            <div dangerouslySetInnerHTML={{__html : post.contentHtml}}></div>
        </Layout>
    )
}

export async function getStaticPaths(){
    const paths = getAllPostIDs();
    return{
        paths,
        fallback : false,
    }
}

export async function getStaticProps({params}){
    const post = await getPostData(params.id);
    return{
        props : {
            post,
        }
    }

}