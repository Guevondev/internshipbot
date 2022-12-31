import { event } from '../types'
import ready from './ready'
import interactionCreate from './interactionCreate'

const events: event<any>[] = [
    ready,
    interactionCreate
]

export default events