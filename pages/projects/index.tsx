import React, { useState, useEffect } from 'react'

import Content from '@/components/Content'
import { database } from '@/firebase.js';

const Projects = () => {
  const [projects, setProjects] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await database.ref('/projects/').once('value');
        const data = snapshot.val();
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [])
  
  return (
    <>
      {projects && <Content itemData={projects} />}
    </>
  )
}

export default Projects