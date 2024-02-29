import { ChildNode } from "@/types/global"
import { SerializedStyles, css } from "@emotion/react"
import Image from "next/image"

interface ProfileProps extends ChildNode {
    style?: SerializedStyles;
}

export default function FlexBox({ children, style }: ProfileProps) {
    return (
        <div css={css`
            position: relative;
            width: 100%;
            display: flex;
            flex-flow: row wrap;
            gap: 8px;
            width: 100%;
            ${style}
        `}>{children}</div>
    )
}
