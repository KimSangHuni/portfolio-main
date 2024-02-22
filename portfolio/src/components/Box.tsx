import { ChildNode } from "@/types/global"
import { SerializedStyles, css } from "@emotion/react"
import Image from "next/image"

interface ProfileProps extends ChildNode {
    style: Partial<SerializedStyles>;
}

export default function Box({ children, style }: ProfileProps) {
    return (
        <div css={css`
            position: relative;
            width: 100%;
            padding: 22px;
            border-radius: 17px;
            background: white;
            ${style}
        `}>{children}</div>
    )
}
