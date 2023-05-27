import React, { ReactNode } from 'react'

import styles from './index.module.scss'
import Loading from '../Loading'
import { useSelector } from 'react-redux'
import { selectResume } from '@/store/slice'

const Body: React.FC<BodyProps> = ({ children }) => {
  const isLoading = Object.keys(useSelector(selectResume)).length ? false : true
  
  return (
  <div className={styles[`body`]}>
    {isLoading
      ? <Loading />
      : children
    }
  </div>
)}

interface BodyProps {
  children: ReactNode
}
export default Body