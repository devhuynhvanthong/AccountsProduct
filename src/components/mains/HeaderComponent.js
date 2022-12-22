import Head from 'next/head'
export default function HeaderComponent(props){
    return(
        <Head>
            <title>{props.data.title?props.data.title + " - My Account AiGooX":"My Account AiGooX"}</title>
            <link rel="icon" href="images/logo.png" />
        </Head>
    )
}