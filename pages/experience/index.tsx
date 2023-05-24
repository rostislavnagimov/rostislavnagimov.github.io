import React from 'react'

import Content from '@/components/Content'
import { useSelector } from 'react-redux'
import { selectExperience } from '@/store/slice'

const Experience = () => {
  const data = useSelector(selectExperience)

  return (
    <>
      {data && <Content itemData={data} />}
    </>
  )
}

export default Experience