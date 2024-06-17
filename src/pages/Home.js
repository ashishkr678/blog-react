import React from "react";
import HomePosts from "../components/HomePosts";
import { blogsData } from "../blogsData";

const Home = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center text-white text-5x mt-4 mb-3">
        {blogsData.map((post) => (
          <HomePosts
            key={post.id}
            image={post.image}
            title={post.title}
            content={post.content}
            author={post.author}
            published_date={post.published_date}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
