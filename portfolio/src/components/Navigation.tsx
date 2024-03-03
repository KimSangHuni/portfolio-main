"use client"

import { css } from "@emotion/react"
import Box from "./Box";
import Typography from "./typography/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getMediaQueryStyle } from "@/styles/media/mediaQuery";

type Menu = {
    menuId: string;
    text: string;
    link: string;
}

const menuList: Menu[] = [
    {
        menuId: "menu-Home",
        text: "Home",
        link: "/"
    },
    {
        menuId: "menu-Projects",
        text: "Projects",
        link: "/projects"
    },
    {
        menuId: "menu-Technologies",
        text: "Technologies",
        link: "/technologies"
    },
    {
        menuId: "menu-contact",
        text: "Contact",
        link: "/contact"
    },
]

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav css={styles}>
            {
                menuList.map(menu => {
                    return (
                        <Box key={menu.menuId} style={
                            css`
                                flex: 1;
                                text-align: center;
                                ${pathname === menu.link && `border: 2px solid #1975FF;`}
                            `
                        }>
                            <Link href={menu.link} css={css`text-decoration: none;`}>
                                <Typography size="md">{menu.text}</Typography>
                            </Link>
                        </Box>
                    )
                })
            }
        </nav>
    )
}

const styles = css`
    position: relative;
    margin-top: 1rem;
    display: flex;
    gap: 12px;
    overflow-x: auto;

    &::-webkit-scrollbar {
        display: none;
    }

    ${getMediaQueryStyle("lg", css`
        flex-direction: column;
    `)}
`