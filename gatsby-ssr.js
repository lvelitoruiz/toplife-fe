import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Gotham-Medium.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="gothamFont"
    />,
    <link
      rel="preload"
      href="/fonts/Gotham-Book.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="gothamFontBook"
    />,
    <link
      rel="preload"
      href="/fonts/icomoon.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
      key="iconFont"
    />,
  ])
}