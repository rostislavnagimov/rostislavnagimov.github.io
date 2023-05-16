import React from 'react'

import Body from "@/components/Body"

const HomePage = () => (
  <Body>
    <>
      <h1
        className="
          mt-16
          text-center
          bg-blue-500
          hover:bg-red-500
          transition
          duration-500
          ease-in-out
          py-2
          px-4
          rounded-full
        "
      >
        Some initial text
      </h1>
    </>
  </Body>
)

export default HomePage