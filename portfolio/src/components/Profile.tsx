import { css } from "@emotion/react"
import Image from "next/image"
import Box from "./Box"
import Typography from "./typography/Typography";
import useSWR from "swr";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { ResponseType } from "@/types/global";

interface ProfileProps {
    size?: number;
}

async function testFetch(): Promise<ResponseType<QueryDatabaseResponse>> {
    const response = await fetch("http://localhost:3000/api/users");
    return response.json();
    
}

export default function Profile({ size }: ProfileProps) {
    const { data, error } = useSWR<ResponseType<QueryDatabaseResponse>>("profileFetch", testFetch);
    
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    const result = data.response.results[0]?.properties;

    return (
        <Box style={styles}>
            <div css={css`
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                margin-bottom: 4px;
                overflow: hidden;
            `}>
                <Image src={result?.profile_image?.rich_text[0]?.plain_text} width={size} height={size} alt={"profile"} />
            </div>
            <Typography size="lg">{result.name.rich_text[0].plain_text}</Typography>
            <div css={textStyle}>
                <Typography size="md">{result?.name?.rich_text[0]?.plain_text}</Typography>
                <Typography size="md">{result?.phone_number?.rich_text[0]?.plain_text}</Typography>
                <Typography size="md">{result?.git?.rich_text[0]?.plain_text}</Typography>
            </div>
        </Box>
    )
}



const styles = css`
    position: relative;
    width: 100%;
    display: flex;
    gap: 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const textStyle = css`
    display: flex;
    gap: 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`