export interface ContentData {
  [key: string]: ItemData
}

export interface ItemData {
  [key: string]: {
    title?: string
    label?: string
    content: string[]
  }
}
  