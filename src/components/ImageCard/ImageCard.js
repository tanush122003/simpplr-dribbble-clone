import React, { useState } from 'react';
import './ImageCard.css';
import { IoHeart } from "react-icons/io5";
import { TbEyeFilled } from "react-icons/tb";

const ImageCard = ({ item }) => {
  const [likes, setLikes] = useState(item.likes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
  <div class="col">
    <div class="card h-100">
      <img src={item.imageUrl} class="card-img-top" alt="..."/>
      <div id='mycard' class="card-body d-flex">
        <img src="https://github.com/mdo.png" alt="mdo" width="30" height="30" class="profile"/>
        <p class="card-title col-lg-5 px-2">{item.title}</p>
        <div id='likes' class="d-flex ms-lg-auto col-lg-3">
          <IoHeart onClick={handleLike} size="1.2em" className={`icon icon-like ${liked ? 'liked' : 'unliked'} col-md-3`}/>
          <h6 className='me-lg-2'>{likes}</h6>
          <TbEyeFilled size="1.2em" color='grey' className='icon2 col-md-3'/>
          <h6>{item.views}</h6>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ImageCard;
