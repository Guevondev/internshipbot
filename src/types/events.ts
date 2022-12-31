import { ClientEvents, Awaitable, Client} from 'discord.js'

type loggerFunction = (... args: unknown[]) => void
export interface eventProps {
    client: Client,
    log: loggerFunction
}

export type eventKeys = keyof ClientEvents
export type eventExec <T extends eventKeys> =
    (props: eventProps, ... args: ClientEvents[T]) => Awaitable<unknown>

export interface event <T extends eventKeys>{
    id: T,
    exec: eventExec<T>
}
