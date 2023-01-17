import React, { useState, useEffect } from 'react';
import './App.css';
import img from "./images/img.jpg"

type resultProps = {
  id: number;
  title: string;
  body: string;
  tags: string;
}

export default function App() {
  const [result, setResult] = useState<resultProps[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("https://dummyjson.com/posts", {
        method: "GET"
      });
      const jsonData = await data.json();
      setResult(jsonData.posts);
    };
    api();
  }, []);

  const history = result.filter(e=> e.tags.includes('history') );
  const french = result.filter(e=> e.tags.includes('french') );
  const love = result.filter(e=> e.tags.includes('love'));

  return (
    <>
      <div className="App1">
        <h1>History section</h1>
        {history.map((value) => {
          return (
            <div className="article">

              <div className="divimg">
                <img src={img} alt='img' />
                <p key={value.tags[0]}>{value.tags[0]}</p>
                <p key={value.tags[1]}>{value.tags[1]}</p>
                <p key={value.tags[2]}>{value.tags[2]}</p>
              </div>

              <div className="divbody">
                <h5 key={value.title}>{value.title}</h5>
                <p>{value.body}</p>
              </div>

            </div>
          );
        })}
      </div>
      <h1>French section</h1>
      <div className="App2">
        {french.map((value) => {
          return (
            <div className="article">

              <div className="divimg">
                <img src={img} alt='img' />
                <p key={value.tags[0]}>{value.tags[0]}</p>
                <p key={value.tags[1]}>{value.tags[1]}</p>
                <p key={value.tags[2]}>{value.tags[2]}</p>
              </div>

              <div className="divbody">
                <h5 key={value.title}>{value.title}</h5>
                <p>{value.body}</p>
              </div>

            </div>
          );
        })}
      </div>
      <h1>Love section</h1>
      <div className="App3">
        {love.map((value) => {
          return (
            <div className="article">

              <div className="divimg">
                <img src={img} alt='img' />
                <p key={value.tags[0]}>{value.tags[0]}</p>
                <p key={value.tags[1]}>{value.tags[1]}</p>
                <p key={value.tags[2]}>{value.tags[2]}</p>
              </div>

              <div className="divbody">
                <h5 key={value.title}>{value.title}</h5>
                <p>{value.body}</p>
              </div>

            </div>
          );
        })}
      </div>
    </>
  );
}
