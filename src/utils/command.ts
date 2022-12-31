import {
    command,
    commandCategory,
    commandExec,
    commandMeta
} from '../types'

export function command(meta: commandMeta, exec: commandExec): command {
    return {
        meta,
        exec
    }
}

export function category(name: string, commands: command[]): commandCategory {
    return {
        name,
        commands
    }

}