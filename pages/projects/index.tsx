import React from 'react'

import Content from '@/components/Content'
import experience from '@/data/projects.json'

const Projects = () => (
  <Content itemData={experience} titles={true} labels={false}/>
)

export default Projects