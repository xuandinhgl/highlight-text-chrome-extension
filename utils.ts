import { Storage } from "@plasmohq/storage"

import { IStoreValue, WALLET_KEY, defaultValue } from "~constants"

const store = new Storage()

export const setStoreValue = (value: string) => {
  store.set(WALLET_KEY, value)
}

export const getStoreValue = async (): Promise<IStoreValue> => {
  let storeValue = await store.get(WALLET_KEY)
  let value = defaultValue
  try {
    value = JSON.parse(storeValue)
  } catch {
    console.log("Using default value")
  }

  return value
}
