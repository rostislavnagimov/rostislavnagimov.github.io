import React, { useState, useEffect } from 'react'

import Content from '@/components/Content'
import { database } from '@/firebase.js';

const Experience = () => {
  const [experience, setExperience] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await database.ref('/experience/').once('value');
        const data = snapshot.val();
        setExperience(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [])
  
  return (
    <>
      {experience && <Content itemData={experience} />}
    </>
  )
}

export default Experience