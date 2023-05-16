import React from 'react'

import NavItem from './NavItem'
import { HeaderProps } from './types'

import styles from './index.module.scss'

const Header: React.FC<HeaderProps> = ({ navData }) => (
  <header className={styles['header']}>
    <nav className={styles['header__navigation']}>
      {navData.map((item, index) => (
          <NavItem
            key={index}
            text={item.text}
            href={item.href}
            type={item.type}
            isActive={`/cv${item.href}` === document.location.pathname}
          />
        )
      )}
    </nav>
  </header>
)

export default Header