import React from "react"

import styles from './index.module.scss'

const Loading: React.FC = () => (
  <div className={styles['loading']}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
)

export default Loading