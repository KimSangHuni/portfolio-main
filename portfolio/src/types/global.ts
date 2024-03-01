import { ReactNode } from "react"

export type ChildNode = {
    children?: ReactNode,
}

export type ResponseType<T> = {
    response: T
}

export type Level = "High" | "Middle" | "Low";