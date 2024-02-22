import RecoilRootWrapper from "@/components/RecoilRootWrapper";
import { ChildNode } from "@/types/global";
import { css } from '@emotion/react';
import Head from "next/head";

export default function LinearLayout({ children }:ChildNode) {
    return (
        <RecoilRootWrapper>
            <Head>
                <title>김상훈 - 프론트엔드 개발자</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main css={styles}>{children}</main>
        </RecoilRootWrapper>
    );
}

const styles = css`
    backgroun: black;
`