import { css } from "@emotion/react"
import Image from "next/image"
import Box from "./Box"
import Typography from "./typography/Typography";
import useSWR from "swr";

interface ProfileProps {
    size?: number;
}

async function testFetch() {
    const response = await fetch("http://192.168.1.7:3000/api/users");
    const json = response.json();
    return {  ...json };
}

export default function Profile({ size }: ProfileProps) {
    const { data, error } = useSWR("profileFetch", testFetch);
    
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    console.log(data);
    return (
        <Box style={styles}>
            <div css={css`
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                margin-bottom: 4px;
                overflow: hidden;
            `}>
                <Image src={`https://source.unsplash.com/random/${size}×${size}`} width={size} height={size} alt={""} />
            </div>
            <Typography size="lg">{data?.response?.object}</Typography>
            <div css={textStyle}>
                <Typography size="md">Front-end Developer</Typography>
                <Typography size="md">+82 010-5736-6491</Typography>
                <Typography size="md">https://github.com/KimSangHuni</Typography>
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