import { css } from "@emotion/react"
import Image from "next/image"
import Box from "./Box"


interface ProfileProps {
    size?: number;
}

export default function Profile({ size=240 }: ProfileProps) {
    return (
        <Box style={styles}>
            <div css={css`
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                overflow: hidden;
            `}>
                <Image src={`https://source.unsplash.com/random/${size}×${size}`} width={size} height={size} alt={""} />
            </div>
        </Box>
    )
}

const styles = css`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`