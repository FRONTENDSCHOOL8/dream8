// import React, { Component } from 'react'

import { Link } from "react-router-dom"
import PlusButton from "../molecules/Button"

function NewsCard({ width, height  }) {

  return (
    <div className={`${width} ${height} rounded-[50px] bg-white relative shadow-root`}>
      <div className="flex flex-col gap-10 m-auto p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">공지</h2>
          <span className="font-bold">[2024-02-20]</span>
        </div>
        <div className="bg-pink-300">
          <p>내용</p>
        </div>
        <Link to="/News">
          <PlusButton />
        </Link>
      </div>
      
    </div>
  )
}


export default NewsCard