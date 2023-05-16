import React, { ReactNode } from 'react'

import styles from './index.module.scss'

export const Row: React.FC<ChildrenProps> = ({children}) => (
  <div className={styles[`grid`]}>
    {children}
  </div>
)

export const Col: React.FC<ChildrenProps> = ({children, span}) => (
  <div className={styles[`col-${span}`]}>
    {children}
  </div>
)

interface ChildrenProps {
  children: ReactNode
  className?: string
  span?: number
}
