"use client"

import { ChildNode } from "@/types/global";
import { RecoilRoot } from 'recoil';

export default function RecoilRootWrapper({ children }: ChildNode) {
    return (<RecoilRoot>{children}</RecoilRoot>)
}