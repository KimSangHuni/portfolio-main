import { FontSize, font } from "@/styles/font";
import { getMediaQueryStyle } from "@/styles/media/mediaQuery";
import { ChildNode } from "@/types/global";
import { css } from "@emotion/react";

interface TypographyProps extends ChildNode {
    size: FontSize,
}

export default function Typography({ children, size }: TypographyProps) {
    return (<p css={css`
        font-size: calc(${font[size].size}px * 0.8);
        font-weight: ${font[size].weight};
        color: ${font[size].color};

        ${getMediaQueryStyle("xs", css`
            font-size: ${font[size].size}px;
            font-weight: ${font[size].weight};
            color: ${font[size].color};
        `)}

    `}>{children}</p>)   
}