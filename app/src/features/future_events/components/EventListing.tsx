import { Layout } from "../../../components_jsx";
import { Event, eventSchema } from "@Types/index";

import { AddEvent, AddEventForm } from "./";

const list_item_layout = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
};

export const EventLineItem = (props: { events: Event[] }) => {
  const { events } = props;
  const listOfEvents = events.map((event) => (
    <li style={list_item_layout}>
      <p> {event.title}</p>
      <p> {event.date_of.toLocaleDateString()} </p>
    </li>
  ));

  return (
    <ul
      id="event_list_container"
      hx-get="/contacts/table"
      hx-trigger="newContact from:body"
    >
      {listOfEvents}
    </ul>
  );
};

export const EventListing = (props: { events: Event[] }) => {
  return (
    <Layout>
      <div>
        <h1>Future Events</h1>
      </div>
      <EventLineItem events={props.events} />
      <div id="event_action_buttons">
        <AddEventForm />
      </div>
    </Layout>
  );
};
