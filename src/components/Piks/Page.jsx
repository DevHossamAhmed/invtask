"use client"
import React, { useState } from 'react';
// import Data from '../../Picks'
import Card from './Card';


const Pikes = () => {
    const [item, setItems] = useState([
      {
        id: 1,
        img:"/../../assets/images/1.png",
        title:"Cinematic Lighting Masterclass",
        name:"Ayman Abou el Makarem",

        category: 'category1'
      },
      {
        id: 2,
        img:"https://cdn-share.almentor.net/images/ae7a908b1f92f1c1760702a696f8248731ee2cc6c1a81bcc2cecaad23090cd43",
        title:"Master Playing The Oud",
        name:"Ahmed Gamal",

        category: 'category1'
      },
      {
        id: 3,
        img:"https://cdn-share.almentor.net/images/4813128ffa05d8d2e6a84d6ae1cd2f9674889a76cd5fa1c5cbe0880fbcb04ddc",
        title:"Professional Scrum Master",
        name:"Hebatalla Abdel-halim Mahmoud ",

        category: 'category1'
      },
      {
        id: 4,
        img:"https://cdn-share.almentor.net/images/4158315aa6f96cd0e1762337f7d8cd8f22de4e86a01fb5a8f8f49ea917152a81",
        title:"Cinematic Lighting Masterclass",
        name:"Ivon Moharram",
 
        category: 'category1'
      },
      {
        id: 5,
        img:"https://cdn-share.almentor.net/images/a552f962bfb19ba4ab5daee46182bf43c460d6b888b01f506422605be8c49e64",
        title:"Workplace Conflict: Challenges or Opportunities?",
        name:"Fady Serry Eldin",

        category: "category1"
      },

      {
        id: 6,
        img:"https://cdn-share.almentor.net/images/a6d4c144221d54f952592f1bf78d39b03c6ce1d646f53cb9ac852ae0c04edeb0",
        title:"Cinematic Lighting Masterclass",
        name:"Ayman Abou el Makarem",

        category: "category1"
      },
      {
        id: 7,
        img:"https://cdn-share.almentor.net/images/ae7a908b1f92f1c1760702a696f8248731ee2cc6c1a81bcc2cecaad23090cd43",
        title:"Master Playing The Oud",
        name:"Ahmed Gamal",

        category: "category2"
      },
      {
        id: 8,
        img:"https://cdn-share.almentor.net/images/4158315aa6f96cd0e1762337f7d8cd8f22de4e86a01fb5a8f8f49ea917152a81",
        title:"Cinematic Lighting Masterclass",
        name:"Ivon Moharram",

        category: 'category2'
      },
     
    ]);

    const [selectedCategory, setSelectedCategory] = useState(null);

    const filterCategory = (category) => {
      setSelectedCategory(category);
    };

    const showAllCategories = () => {
      setSelectedCategory(null);
    };

  return (
    <div className="container w-full m-auto mt-[-200px]">
      <h1 className="text-[30px] font-medium pb-[10px] pl-2">Picks</h1>

      <div className="flex gap-2 mb-[-15] pl-2 text-[13px]">
        <button
          className="cursor-pointer 
              focus:border-b-[5px]
              focus:font-semibold
            focus:border-b-primary
          "
          onClick={showAllCategories}
        >
          Featured Courses
        </button>
        <span className="piks-col w-[1px] h-[20px] bg-slate-500"></span>
        <button
          className="cursor-pointer 
              focus:border-b-[5px]
              focus:font-semibold
            focus:border-b-primary
          "
          onClick={() => filterCategory('category1')}
        >
          Most Viewed
        </button>
        <span className="piks-col w-[1px] h-[20px] bg-slate-500"></span>
        <button
          className="cursor-pointer 
              focus:border-b-[5px]
              focus:font-semibold
            focus:border-b-primary
          "
          onClick={() => filterCategory('category2')}
        >
          New Courses
        </button>
      </div>

      <Card item={item} category={item.category} />
    </div>
  );
}

export default Pikes