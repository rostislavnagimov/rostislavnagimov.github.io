import React from 'react'

import Content from '@/components/Content'
import experience from '@/data/experience.json'

const Experience = () => (
  <Content itemData={experience} titles={true} labels={false}/>
)

export default Experience