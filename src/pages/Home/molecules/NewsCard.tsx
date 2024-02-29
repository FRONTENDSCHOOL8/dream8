// import React, { Component } from 'react'
import { Link } from "react-router-dom"
import PlusButton from "../organisms/Button"
import { useEffect, useState } from "react"
import { pb } from "@/api/pocketbase";


function NewsCard({ width, height }: { width: string; height: string }) {

  const [newsList, setNewsList] = useState([]);
  console.log(newsList)

  const getPbNewsList = async () => {
    try {
      const data = await pb.collection('news').getFullList({ sort: '-created' });
      setNewsList(data.items);
    } catch (error) {
      console.error('Error fetching news list:', error);
    }
  };

  useEffect(() => {
    getPbNewsList();
  }, [newsList])

  return (
    <li className={`${width} ${height} list-none rounded-[50px] bg-white relative shadow-root`}>
      {newsList.map((list) => <div className="flex flex-col gap-10 m-auto p-8 bg-slate-400">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">{list.type}</h2>
          <span className="font-bold">[2024-02-20]</span>
        </div>
        <div className="bg-pink-300">
          <p>{list.title}</p>
        </div>
      </div>)}
      <Link to="/News">
          <PlusButton />
        </Link>
    </li>
  )
}

// Link to => 수정하기... 뉴스페이지 말고 각각 기사페이지 링크로.....

export default NewsCard