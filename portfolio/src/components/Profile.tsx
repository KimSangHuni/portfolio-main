import { css } from "@emotion/react"
import Image from "next/image"
import Box from "./Box"
import Typography from "./typography/Typography";
import useSWR from "swr";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { ResponseType } from "@/types/global";
import TMP_IMAGE from "@/assets/TMP_IMAGE.png";

type ProfileProps = {
    data?: ResponseType<QueryDatabaseResponse>
}

export default function Profile({ data }: ProfileProps) {
    const size = 120;
    const result = data?.response?.results[0]?.properties;

    return (
        <Box style={styles}>
            <div css={css`
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                margin-bottom: 4px;
                overflow: hidden;
            `}>
                <Image src={result.profile_image.rich_text[0]?.plain_text ?? TMP_IMAGE} width={size} height={size} alt={"profile"} />
            </div>
            <Typography size="lg">{result.name.rich_text[0]?.plain_text}</Typography>
            <div css={textStyle}>
                <Typography size="md">{result.job.rich_text[0]?.plain_text}</Typography>
                <Typography size="md">{result.phone_number.rich_text[0]?.plain_text}</Typography>
                <Typography size="md">{result.git.rich_text[0]?.plain_text}</Typography>
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