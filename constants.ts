export interface IStoreValue {
  wallet: string
  color: string
  background: string
}

export const WALLET_KEY = "xdi_wallet"
export const defaultValue: IStoreValue = {
  wallet: "",
  color: "#EAA522",
  background: "#FF0000"
}
