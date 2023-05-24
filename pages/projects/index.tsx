import React from 'react'

import Content from '@/components/Content'
import { useSelector } from 'react-redux'
import { selectProjects } from '@/store/slice'

const Projects = () => {
  const data = useSelector(selectProjects)

  return (
    <>
      {data && <Content itemData={data} />}
    </>
  )
}

export default Projects