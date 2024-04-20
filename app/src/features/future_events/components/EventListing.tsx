import type { FC } from 'hono/jsx'
import {Event} from "@Types/index"




const Layout: FC = (props) => {
    return (
      <html>
      <head>
        <title>Future Events</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/light.css"></link>
      </head>
        <body>{props.children}</body>
      </html>
    )
  }



const list_item_layout = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
}


export const EventListing = (props:{events:Event[]}) => {
    const {events} = props
    const listOfEvents = events.map((event) =>( <li style={list_item_layout}><p> {event.title}</p><p> {event.date_of.toLocaleDateString()} </p></li>))
    
    return (
        <Layout>
            <h1>Future Events</h1>
            <ul>
              {listOfEvents}
            </ul>
            
        </Layout>
    )
}
