import { getMediaQueryStyle } from "@/styles/media/mediaQuery"
import { css } from "@emotion/react"
import { BreakPoints } from "@/styles/media/palette"
import Profile from "./Profile"
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { ResponseType } from "@/types/global";
import { useDataWithLoading } from "@/hooks/useDataWithLoading";
import Navigation from "./Navigation";


async function testFetch(): Promise<ResponseType<QueryDatabaseResponse>> {
    const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/users");
    return response.json();
}

export default function Header() {
    const profile = useDataWithLoading<ResponseType<QueryDatabaseResponse>>({
        key: "profileFetch", 
        fetcher: testFetch, 
        dataComponent: (data:ResponseType<QueryDatabaseResponse>) => <Profile data={data} />
    })

    return (
        <header css={styles}>
            {profile}
            <Navigation />
        </header>
    );
}

const styles = css`
    width: 100%;
    padding: 1rem;
    // height: 320px;
    
    ${getMediaQueryStyle("sm", css`
        width: ${BreakPoints.sm}px;
    `)}
    
    ${getMediaQueryStyle("md", css`
        width: ${BreakPoints.md}px;
    `)}
    
    ${getMediaQueryStyle("lg", css`
        width: 530px;
    `)}
`