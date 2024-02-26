import { css } from "@emotion/react"
import Image from "next/image"
import Box from "./Box"
import Typography from "./typography/Typography";

interface ProfileProps {
    size?: number;
}

export default function Profile(props:any) {
    console.log(props)
    const size = 120;
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
            <Typography size="lg">김상훈</Typography>
            <div css={textStyle}>
                <Typography size="md">Front-end Developer</Typography>
                <Typography size="md">+82 010-5736-6491</Typography>
                <Typography size="md">https://github.com/KimSangHuni</Typography>
            </div>
        </Box>
    )
}

export async function getStaticProps() {
    const response = await fetch("http://localhost:3000/api/users");
    const json = response.json();

    return { props: { data: json }};
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