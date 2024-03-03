import { css } from "@emotion/react";

type ProgressProps = {
    max?: number;
    current: number;
    isShowPercent?: boolean;
}

export default function Progress({ max = 100, current, isShowPercent=false }: ProgressProps) {
    const percent = current / max * 100;
    return (
        <div css={
            css`
                position: relative;
                display: flex;
                width: 100%;
                justify-content: space-between;
                align-items: center;
                border-radius: 1rem;
                overflow: hidden;
                
                & > ul {
                    flex: 1;
                    height: 10px;
                    background: rgba(0, 0, 0, 0.1);

                    & > li {
                        width: ${percent}%;
                        height: 100%;
                        background: #2051FF33;
                    }
                }
            `
        }>
            <ul><li></li></ul>
        </div>
    )
}
