import React from 'react'

import styles from './index.module.scss'
import Link from "next/link";

const Footer = () => (
  <>
    {document.location.pathname != '/' && (
      <div className={styles['footer']}>
        <Link
          href={'/'}
        >
          .home
        </Link>
      </div>
    )}
  </>
)

export default Footer