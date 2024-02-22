import { ChildNode } from "@/types/global";
import { css } from '@emotion/react';
import { relative } from "path";

export default function LinearLayout({ children }:ChildNode) {
    return (<div css={styles}>{children}</div>);
}

const styles = css({
    position: "relative",
    maxWidth: 1200,
    margin: "0 auto",
})