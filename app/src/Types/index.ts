import { z } from "zod";


const eventSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string().optional(),
    date_of:  z.date()
})
type Event = z.infer<typeof eventSchema>


export {Event,eventSchema}