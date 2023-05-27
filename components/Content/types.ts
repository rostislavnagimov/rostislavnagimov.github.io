export interface ContentData {
  [key: string]: ItemData
}

export interface ItemData {
  [key: string]: {
    title?: string
    label?: string
    subtitle?: string[]
    content: string[]
  }
}
  