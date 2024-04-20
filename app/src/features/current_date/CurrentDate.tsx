import type { FC } from "hono/jsx";
import { Event } from "@Types/index";
import { Hono } from "hono";

import { useState, useEffect } from "hono/jsx";
import { render } from "hono/jsx/dom";

import { html, raw } from "hono/html";

const Layout = (props) => html`
<html>
<head>
  <meta charset="UTF-8">
  <title>${props.title}</title>
  <meta name="description" content="${props.description}">
  <head prefix="og: http://ogp.me/ns#">
  <meta property="og:type" content="article">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/light.css"></link>
  <!-- More elements slow down JSX, but not template literals. -->
  <meta property="og:title" content="${props.title}">
  <meta property="og:image" content="${props.image}">
</head>
<body>
  ${props.children}
</body>

</html>

`;

interface SiteData {
  title: string;
  description: string;
  image: string;
  children?: any;
}

export const ClientDate: FC = (props: { siteData: SiteData; name: string }) => {
  const currentDate = new Date();
    return (
    <Layout {...props.siteData}>
      <h3>Current Date {currentDate.toLocaleString()}
      
      <span id="clock"></span>
      </h3>
      {
        html`<script>function updateClock() {
            const now = new Date();
            const clockElement = document.getElementById('clock');
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            const putTogether = hours +":"+ minutes +":"+ seconds;   
            clockElement.textContent = putTogether;
            console.log(putTogether)
            }
        updateClock();
        </script>`
      }
    </Layout>
  );
};

export const CurrentDate = new Hono();
const props = {
  name: "World",
  siteData: {
    title: "Hello <> World",
    description: "This is a description",
    image: "https://example.com/image.png",
  },
};
CurrentDate.get("/", (c) => {
  return c.html(<ClientDate {...props} />);
});
