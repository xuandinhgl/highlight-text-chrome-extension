import { Storage } from "@plasmohq/storage"

import { WALLET_KEY } from "~constants"
import { getStoreValue } from "~utils"

const placeHolder = "{XDI_TEXT_HERE}"

const storage = new Storage()

storage.watch({
  [WALLET_KEY]: () => {
    window.location.reload()
  }
})

window.addEventListener("load", async () => {
  const values = await getStoreValue()

  const address = values.wallet.split("\n").filter((s) => !!s)
  const template = `<span style='background: ${values.background}; color: ${values.color}' class='highlight'>${placeHolder}</span>`
  if (address.length) {
    let html = document.body.innerHTML
    address.forEach((txt) => {
      if (txt) {
        const replacement = template.replace(placeHolder, txt)

        html = html.replaceAll(txt, replacement)
      }
    })
    document.body.innerHTML = html
  }
})

export {}
