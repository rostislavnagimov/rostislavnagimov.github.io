import React, { useState } from 'react'

import Content from '@/components/Content'
import { useEffect } from 'react'
import { database } from '@/firebase.js';

const Home = () => {
  const [resume, setResume] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await database.ref('/resume/').once('value');
        const data = snapshot.val();
        setResume(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [])
  
  return (
    <>
      {resume && 
        <Content itemData={resume} />
      }
    </>
)}

export default Home