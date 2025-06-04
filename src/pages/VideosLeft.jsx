import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';

function VideosLeft() {
const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&key=AIzaSyDxYYyEbWEZW1T43JlnaYhddQP90e5fEWk")
    .then((res) => {
      setVideos(res.data.items);
    })
  }, []);



  return (

 <div className="h-screen ">
        {videos.map((video) => (
            <div className='flex flex-col '>
          <div key={video.id} className=" flex flex-row-reverse ">
            <h3 className="font-semibold">{video.snippet.title}</h3>
            <div>
            <iframe
          className="max-w-40 rounded bg-cover pb-3" 
            src={`https://www.youtube.com/embed/${video.id}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          >
          </iframe>
          </div>
          </div>
          </div>
        ))}
    </div>

  );
}

export default VideosLeft;