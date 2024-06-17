import React from "react"

const HomePosts = ({image, title, author, published_date, content}) => {
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
    <div className="w-[30%] h-[200px] flex justify-center items-center">
    <img src={image} alt="" className="h-full w-full object-cover"/>
    </div>
    <div className="flex flex-col w-[70%] ml-2">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
        {title}
      </h1>
      <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
       <p>Author: {author}</p>
       <div className="flex space-x-2 text-sm">
       <p>Posted On: {published_date}</p>
       </div>
      </div>
      <p className="text-sm md:text-lg">{content}</p>
    </div>

    </div>
  )
}

export default HomePosts