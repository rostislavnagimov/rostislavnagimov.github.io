import React from 'react'

import Content from '@/components/Content'
import { useSelector } from 'react-redux'
import { selectResume } from '@/store/slice'

const Home = () => {
  const data = useSelector(selectResume)

  return (
    <>
      {data && <Content itemData={data} />}
    </>
  )
}

export default Home