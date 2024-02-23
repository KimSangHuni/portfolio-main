import { ChildNode } from "@/types/global"
import { css } from "@emotion/react"

interface WrapperProps extends ChildNode {

}

export default function Wrapper({ children }: WrapperProps) {
    return (<div css={styles}>{children}</div>);
}

const styles = css`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    padding: 1rem;
`