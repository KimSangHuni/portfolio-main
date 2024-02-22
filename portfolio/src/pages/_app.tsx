import LinearLayout from "@/layouts/LinearLayout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import css from "styled-jsx/css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component?.getLayout ?? ((page) => <LinearLayout>{page}</LinearLayout>);
  return getLayout(<Component {...pageProps} />);
}
