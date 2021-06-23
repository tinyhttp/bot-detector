<div align="center">

# @tinyhttp/bot-detector

[![npm (scoped)][npm-badge]](https://npmjs.com/package/@tinyhttp/bot-detector) [![npm][dl-badge]](https://npmjs.com/package/@tinyhttp/bot-detector) [![][web-badge]](https://tinyhttp.v1rtl.site/mw/bot-detector)

</div>

Detect bots from user agent. This middleware is based on [isbot](https://github.com/omrilotan/isbot).

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

createServer((req: RequestWithBotDetector, res) => {
  botDetector(req, res, () => {
    res.send(req.isBot ? `Bot detected 🤖: ${req.botName}` : 'Hello World!')
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

[npm-badge]: https://img.shields.io/npm/v/@tinyhttp/bot-detector?style=for-the-badge&color=hotpink
[dl-badge]: https://img.shields.io/npm/dt/@tinyhttp/bot-detector?style=for-the-badge&color=hotpink
[web-badge]: https://img.shields.io/badge/website-visit-hotpink?style=for-the-badge
