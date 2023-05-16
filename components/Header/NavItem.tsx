import Link from "next/link";

import { NavItemPropsType } from "./types";

import styles from './index.module.scss'

const NavItem: React.FC<NavItemPropsType> = ({ text, href, isActive, type='item' }) => (
  <Link href={href}>
    <div
      className={styles[`header__navigation__${type}${isActive ? '--selected' : ''}`]}
    >
      {isActive ? `{${text}}` : text}
    </div>
  </Link>
)

export default NavItem
