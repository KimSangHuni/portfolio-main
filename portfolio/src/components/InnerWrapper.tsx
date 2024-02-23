import { ChildNode } from "@/types/global"
import { css } from "@emotion/react"

interface InnerWrapperProps extends ChildNode {

}

export default function InnerWrapper({ children }: InnerWrapperProps) {
    return (<article css={styles}>{children}</article>);
}

const styles = css`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
`