import Link from "next/link";

import { NavItemPropsType } from "./types";

import styles from './index.module.scss'

const NavItem: React.FC<NavItemPropsType> = ({ text, href, isActive, type='item' }) => (
  <div className={styles[`header__navigation__${type}${isActive ? '--selected' : ''}`]} >
    <Link
      href={href}
      className={styles[`header__navigation__link`]}
    >
        {isActive ? `{${text}}` : text}
    </Link>
  </div>
)

export default NavItem
