const { IncomingWebhook } = require('ms-teams-webhook')

const webhookUrl = process.env.WM_WEBHOOK_URL

const CHECK_NAME = process.env.WM_CHECK_NAME
const CHECK_OUTPUT = process.env.WM_CHECK_OUTPUT
const CHECK_EXIT_CODE = process.env.WM_CHECK_EXIT_CODE * 1 // to make sure it is a number

let exitLabel = 'ok'
let themeColor = '00ff00'

if (CHECK_EXIT_CODE === 1) {
  exitLabel = 'warning'
  themeColor = 'ffa500'
}

if (CHECK_EXIT_CODE === 2) {
  exitLabel = 'critical'
  themeColor = 'ff0000'
}

let title = `(${exitLabel}) Check "${CHECK_NAME}"`

let summary = CHECK_OUTPUT

if (!summary) {
  summary = 'no output'
}

const webhook = new IncomingWebhook(webhookUrl)

  ; (async () => {
    try {
      await webhook.send(JSON.stringify(
        {
          "@type": "MessageCard",
          "@context": "https://schema.org/extensions",
          "summary": "" + title + "",
          "themeColor": "" + themeColor + "",
          "title": "" + title + "",
          "sections": [
            {
              "text": "" + summary + ""
            }
          ]
        }
      ))

      console.log(`Teams message sent.`)
      process.exit(0)
    } catch (error) {
      console.log(`Teams message not sent.`)
      console.error(error.response || error)
      process.exit(2)
    }
  })()
