// import React, { Component } from 'react'
import Button from  "../../assets/images/home/plus-button.svg"
import { Link } from "react-router-dom"

function NewsCard() {

  return (
    <div className="w-[300px] h-[300px] border border-gray-100 rounded-[50px] bg-white relative">
      <div className="flex flex-col gap-10 m-auto p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">공지</h2>
          <span className="font-bold">[2024-02-20]</span>
        </div>
        <div className="bg-pink-300">
          <p>내용</p>
        </div>
        <Link to="/News">
          <button type="button" className="absolute bottom-8 right-8">
            <img src={Button} alt="소식 페이지로 이동" />
          </button>
        </Link>
      </div>
      
    </div>
  )
}


export default NewsCard