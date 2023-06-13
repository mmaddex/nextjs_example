// https://nextjs.org/docs/pages/building-your-application/configuring/draft-mode

export default function handler(req, res) {
  res.setDraftMode({ enable: true })
  res.end('Draft mode is enabled')
}
