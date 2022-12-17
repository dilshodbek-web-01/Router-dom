import React, { useEffect, useState } from "react";
import "./style.scss";
import Loader from "../../UI/Loader";

const index = () => {
  const [post, setPost] = useState([]);
  const [load, setLoad] = useState(false);

  const fetchComments = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setPost(result);
        setLoad(true);
      });
  };

  useEffect(() => {
    fetchComments();
  }, []);

  if (!load) {
    return <Loader />;
  }

  return (
    <>
      <div className="comments">
        <h1 className="text-white text-center">Comments</h1>
        <div className="wrapper d-flex align-items-center justify-content-between gap-5 w-100 overflow-scroll">
          {post.length > 0 &&
            post.map((el, id) => {
              return (
                <div key={el.id} className="card shadow-lg w-25 mx-auto p-2">
                  <p className="card-id">
                    {" "}
                    <strong>{el.id}</strong>{" "}
                  </p>
                  <h2 className="card-name fs-5">{el.name}</h2>
                  <p className="card-email"><strong>{el.email}</strong></p>
                  <p className="card-text">{el.body}</p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default index;
