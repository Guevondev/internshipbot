import { event } from '../types'
import ready from './ready'
import channelCreate from './guildCreate'
import interactionCreate from './interactionCreate'

const events: event<any>[] = [
    ready,
    interactionCreate,
    channelCreate
]

export default events