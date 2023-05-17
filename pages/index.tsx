import React from 'react'

import Content from '@/components/Content'
import resume from '@/data/resume.json'

const Home = () => (
  <Content itemData={resume} />
)

export default Home