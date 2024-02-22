import { SerializedStyles, css } from "@emotion/react";
import { BreakPoints } from "./palette";


export function getMediaQueryStyle(size:keyof typeof BreakPoints, style: SerializedStyles) {
    return css`@media (min-width: ${BreakPoints[size]}px) {${style}}`;
}