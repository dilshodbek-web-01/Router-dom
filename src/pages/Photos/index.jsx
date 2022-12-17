import React, { useEffect, useState } from "react";
import "./style.scss";
import Loader from "../../UI/Loader";

const index = () => {
    const [post, setPost] = useState([]);
    const [load, setLoad] = useState(false);

    const fetchPhotos = () => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setPost(result);
                setLoad(true);
            });
    };

    useEffect(() => {
        fetchPhotos();
    }, []);

    if (!load) {
        return <Loader />;
    }

    return (
        <>
            <div className="photos">
                <h1 className="text-white text-center">Photos</h1>
                <div className="wrapper d-flex align-items-center justify-content-between gap-5 w-100 overflow-scroll">
                    {post.length > 0 &&
                        post.map((el, id) => {
                            return (
                                <div key={el.id} className="card shadow-lg w-25 mx-auto p-2">
                                    <img src={el.thumbnailUrl} alt="img" className="card-img" />
                                    <div className="card__body">
                                        <p className="card__body-id">
                                            {" "}
                                            <strong>{el.id}</strong>{" "}
                                        </p>
                                        <h2 className="card__body-title fs-5">{el.title}</h2>
                                        <a
                                            href={el.url}
                                            target="_blank"
                                            className="card__body-link text-decoration-none"
                                        >
                                            See full
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export default index;
