import { Hono } from 'hono'
import {EventListing,AddEventForm} from './components'
import {Event} from "@Types/index"

const events: Event[] = [
    {
        id: 1,
        title: "Event 1",
        description: "Description for Event 1",
        date_of: new Date("2022-01-01"),
    },
    {
        id: 2,
        title: "Event 2",
        description: "Description for Event 2",
        date_of: new Date("2022-02-01"),
    },
    // Add more events as needed
];

export const FutureEvents = new Hono()





FutureEvents.get('/', (c) => {
    return c.html(<EventListing  events={events}/>)
})

FutureEvents.get('/eventForm', (c) => {
    return c.html(<AddEventForm/>)
})
FutureEvents.post('/eventForm', (c) => {

    return c.html(<h2>send off</h2>)
})
