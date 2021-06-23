<div align="center">

# @tinyhttp/bot-detector

[![npm (scoped)][npm-badge]](https://npmjs.com/package/@tinyhttp/bot-detector) [![npm][dl-badge]](https://npmjs.com/package/@tinyhttp/bot-detector) [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/tinyhttp/tinyhttp/CI?style=for-the-badge&logo=github&label=&color=hotpink)][github-actions] [![Coverage](https://img.shields.io/codacy/coverage/695e11b4f70f4e98893e0a031d2fee62?style=for-the-badge&color=hotpink)][codacy-url] [![Codacy grade](https://img.shields.io/codacy/grade/695e11b4f70f4e98893e0a031d2fee62?style=for-the-badge&logo=codacy&label=codacy&color=hotpink)][codacy-url] [![](https://img.shields.io/badge/donate-DEV-hotpink?style=for-the-badge)](https://stakes.social/0x14308514785B216904a41aB817282d25425Cce39)

</div>

Bot detector middleware for Node.js based on [isbot](https://github.com/omrilotan/isbot).

Note that it only shows if a request comes from a bot (e.g. crawler) or from a real human.

## Install

```sh
pnpm i @tinyhttp/bot-detector
```

## Examples

### Vanilla

```ts
import { createServer } from 'http'
import { botDetector, RequestWithBotDetector } from '@tinyhttp/bot-detector'

createServer((req, res) => {
  botDetector(req as RequestWithBotDetector, res, () => {
    res.send((req as RequestWithBotDetector).isBot ? `Bot detected 🤖: ${req.botName}` : 'Hello World!')
  })
}).listen(3000)
```

### tinyhttp

```ts
import { App } from '@tinyhttp/app'
import { botDetector, RequestWithBotDetector } from '@tinyhttp/bot-detector'

new App<any, RequestWithBotDetector>()
  .use(botDetector())
  .use((req, res) => {
    res.send(req.isBot ? `Bot detected 🤖: ${req.botName}` : 'Hello World!')
  })
  .listen(3000)
```

[npm-badge]: https://img.shields.io/npm/v/@tinyhttp/bot-detector?style=for-the-badge&color=hotpink&logo=npm&label=
[dl-badge]: https://img.shields.io/npm/dt/@tinyhttp/bot-detector?style=for-the-badge&color=hotpink
[github-actions]: https://github.com/tinyhttp/cli/actions
[codacy-url]: https://www.codacy.com/manual/tinyhttp/cli
