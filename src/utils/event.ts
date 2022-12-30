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
        client.on(event.id, event.exec.bind(null, {
            client,
            log: (... args) =>
                console.log(`[${event.id}]`, ...args)
        }))
}