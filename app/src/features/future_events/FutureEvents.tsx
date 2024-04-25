import { Hono } from 'hono'
import {EventListing,AddEventForm} from './components'
import { Event ,eventSchema} from "@Types/index";

import { v4 as uuidv4 } from 'uuid';

import { serveStatic } from '@hono/node-server/serve-static'






const events: Event[] = [
    {
        id: '1',
        title: "Event 1",
        description: "Description for Event 1",
        date_of: new Date("2022-01-01"),
    },
    {
        id: '2',
        title: "Event 2",
        description: "Description for Event 2",
        date_of: new Date("2022-02-01"),
    },
    // Add more events as needed
];

export const FutureEvents = new Hono()
FutureEvents.use('/CurrentDate.js', serveStatic({ root: './public/components_web/CurrentDate.js' }))





FutureEvents.get('/', (c) => {
    return c.html(<EventListing  events={events}/>)
})


FutureEvents.post('/', async (c) => {
    const formValues :{eventDate:string,eventTitle:string} = await c.req.parseBody()

    const incomingData = {
        id: uuidv4(),
        title: formValues.eventTitle,
        date_of: new Date(formValues.eventDate)
    }
    events.push(incomingData)
    console.log(eventSchema.safeParse(incomingData))


    return c.html(<EventListing  events={events}/>)
})
