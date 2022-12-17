import React, { useEffect, useState } from 'react';
import "./style.scss";
import Loader from "../../UI/Loader";

const index = () => {

    const [post, setPost] = useState([]);
    const [load, setLoad] = useState(false);

    const fetchAlbums = () => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then((response) => response.json())
            .then((result) => {
                setPost(result);
                setLoad(true);
            })
    }

    useEffect(() => {
        fetchAlbums();
    }, []);


    if (!load) {
        return <Loader />
    }


    return (
        <>
            <div className="albums">
                <h1 className='text-white text-center'>Albums</h1>
                <div className="card w-75 mx-auto overflow-scroll">
                    <ul className="list-group">
                        {
                            post.length > 0 && post.map((el, id) => {
                                return <li key={el.id} className="list-group-item">{id + 1}.{el.title} </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default index;