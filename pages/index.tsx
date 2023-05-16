import React from 'react'

import Resume from '@/components/Resume'
import resume from '@/data/resume.json'

const Home = () => (
  <Resume itemData={resume} />
)


export default Home