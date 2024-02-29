import { keyframes, css } from "@emotion/react"


export default function BoxLoader() {
    return (
        <div css={css`
        height: 100%;
        position: relative;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.38);
        border-radius: 16px;
        // box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 1);
        overflow: hidden;
    `}>
        <p css={blurLine}></p>
        </div>
    )
}

const moveAnimation = keyframes`
    100% {
        left: 100%;
    }
`

const blurLine = css`
    position: relative;
    top: -10%;
    left: -30px;
    width: 0;
    height: 120%;
    box-shadow: 0 0 30px 30px rgba(142, 180, 200, 0.1);
    transform: rotate(35deg);
    animation: ${moveAnimation} 1.25s linear infinite;
`