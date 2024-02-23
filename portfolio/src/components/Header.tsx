import { getMediaQueryStyle } from "@/styles/media/mediaQuery"
import { ChildNode } from "@/types/global"
import { css } from "@emotion/react"
import { BreakPoints } from "@/styles/media/palette"

export default function Header({ children }: ChildNode) {
    return (
        <header css={styles}>
            {children}
        </header>
    )
}

const styles = css`
    width: 100%;
    padding: 1rem;
    
    ${getMediaQueryStyle("sm", css`
        width: ${BreakPoints.sm}px;
    `)}
    
    ${getMediaQueryStyle("md", css`
        width: ${BreakPoints.md}px;
    `)}
    
    ${getMediaQueryStyle("lg", css`
        width: 530px;
        height: 100vh;
    `)}
`