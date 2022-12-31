import { Awaitable,
    Client,
    ChatInputCommandInteraction,
    SlashCommandBuilder
    } from 'discord.js'

type loggerFunction = (... args: unknown[]) => void
export interface commandProps {
    interaction: ChatInputCommandInteraction,
    client: Client,
    log: loggerFunction   
}

export type commandExec =
    (props: commandProps) => Awaitable<unknown>

export type commandMeta =
    | SlashCommandBuilder
    | Omit<SlashCommandBuilder, 'addSubcommand' | 'addSubcommandGroup'>

export interface command {
    meta: commandMeta
    exec: commandExec
}

export interface commandCategory {
    name: string
    commands: command[]
}