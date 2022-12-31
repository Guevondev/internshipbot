import { event, eventExec, eventKeys } from '../types'
import { Client } from 'discord.js'

export function event<T extends eventKeys>(id: T, exec: eventExec<T>): event<T> {
    return {
        id, 
        exec
    }
}
export function registerEvents(client: Client, events: event<any>[]): void {
    for (const event of events)
        client.on(event.id, async (... args) => {
            // Create Props
            const props = {
                client,
                log: (...args: unknown[]) => {
                    console.log(`[${event.id}]`, ... args)
                }
            }
            
            // Catch uncaught errors
            try {
                await event.exec(props, ... args)
            }
            catch (err) {
                props.log('Uncaught error', err)
            }
        })
}