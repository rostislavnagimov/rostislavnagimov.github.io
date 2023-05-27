import React, { ReactNode } from 'react'

import styles from './index.module.scss'
import Loading from '../Loading'
import { useSelector } from 'react-redux'
import { selectLoading } from '@/store/slice'


const Body: React.FC<BodyProps> = ({ children }) => {
  const isLoading = useSelector(selectLoading)
  
  return (
    <div className={styles[`body`]}>
      {isLoading
        ? <Loading />
        : children
      }
    </div>
  )
}

interface BodyProps {
  children: ReactNode
}
export default Body