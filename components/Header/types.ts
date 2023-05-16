export interface NavItemPropsType {
  text: string
  href: string
  isActive?: boolean
  type?: 'logo' | 'item'
}

export interface HeaderProps {
  navData: Array<NavItemPropsType>
}