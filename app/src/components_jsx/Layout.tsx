import type { FC } from "hono/jsx";


export const Layout: FC = (props) => {
    return (
      <html>
        <head>
          <script
            src="https://unpkg.com/htmx.org@1.9.12"
            integrity="sha384-ujb1lZYygJmzgSwoxRggbCHcjc0rB2XoQrxeTUQyRjrOnlCoYta87iKBWq3EsdM2"
            crossorigin="anonymous"
          ></script>{" "}
          <title>Future Events</title>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/water.css@2/out/light.css"
          ></link>
        </head>
        <body>
          {props.children}</body>
      </html>
    );
  };