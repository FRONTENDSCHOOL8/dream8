// import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import NewsMoreButton from '../../01_atoms/Home/NewsMoreButton';
import { useEffect, useState } from 'react';
import { pb } from '@/api/pocketbase';

function NewsCard({ width, height }: { width: string; height: string }) {
  const [newsList, setNewsList] = useState([]);
  console.log(newsList);

  const getPbNewsList = async () => {
    try {
      const data = await pb
        .collection('news')
        .getFullList({ sort: '-created' });
      setNewsList(data.items);
    } catch (error) {
      console.error('Error fetching news list:', error);
    }
  };

  useEffect(() => {
    getPbNewsList();
  }, [newsList]);
  //16번쨰에  setNewsList(data); 하시면
  //30번째에 에러는 없어질꺼에요
  //console.log("data ", data); 찍어보시면, data아래에 itmes는 없고
  // data = [{...},{...},{...},{...},{...}] 처럼 갯수만큼 배열이 있어요.
  return (
    <li
      className={`${width} ${height} list-none rounded-[50px] bg-white relative shadow-root`}
    >
      {newsList.map((list) => (
        <div className="flex flex-col gap-10 m-auto p-8 bg-slate-400">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">{list.type}</h2>
            <span className="font-bold">[2024-02-20]</span>
          </div>
          <div className="bg-pink-300">
            <p>{list.title}</p>
          </div>
        </div>
      ))}
      <Link to="/News">
        <NewsMoreButton />
      </Link>
    </li>
  );
}

// Link to => 수정하기... 뉴스페이지 말고 각각 기사페이지 링크로.....

export default NewsCard;
