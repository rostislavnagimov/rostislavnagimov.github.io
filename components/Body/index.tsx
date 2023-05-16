import React, { ReactNode } from 'react'

import styles from './index.module.scss'

const Body: React.FC<BodyProps> = ({children}) => (
    <div className={styles['body']}>
        {children}
    </div>
)

interface BodyProps {
    children: ReactNode
}
export default Body