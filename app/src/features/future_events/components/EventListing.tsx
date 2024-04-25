import type { FC } from "hono/jsx";
import { Event ,eventSchema} from "@Types/index";

import { AddEvent ,AddEventForm} from "./";

const Layout: FC = (props) => {
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
      <body>{props.children}</body>
    </html>
  );
};

const list_item_layout = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
};

export const EventListing = (props: { events: Event[] }) => {
  const { events } = props;
  const listOfEvents = events.map((event) => (
    <li style={list_item_layout}>
      <p> {event.title}</p>
      <p> {event.date_of.toLocaleDateString()} </p>
    </li>
  ));

  return (
    <Layout>
      <div><h1>Future Events</h1></div>
      <ul id="event_list_container">{listOfEvents}</ul>

      <div id="event_action_buttons">
        <AddEventForm />
      </div>

    </Layout>
  );
};
