import { IncomingMessage as Request } from 'http'
import detectBot from 'isbot'

export interface RequestWithBotDetector extends Request {
  isBot: boolean
  botName: string
}
/**
 * This middleware adds 2 new getters, `isBot` and `botName`. Both getters are lazy and will not be calculated until needed.
 * - `isBot` is a boolean which shows if the request is made by a bot
 * - `botName` is a string that shows the bot name in case `isBot` is true.
 */
export function botDetector() {
  return (req: RequestWithBotDetector, _: unknown, next: () => void) => {
    const agent = req.headers['user-agent']
    let bot: boolean
    let name: string

    Object.defineProperties(req, {
      isBot: {
        get: () => {
          if (typeof bot === 'boolean') return bot
          return (bot = detectBot(agent))
        }
      },
      botName: {
        get: () => {
          if (!req.isBot) name = null
          if (typeof name === 'undefined') name = detectBot.find(agent)

          return name || undefined
        }
      }
    })

    next()
  }
}
