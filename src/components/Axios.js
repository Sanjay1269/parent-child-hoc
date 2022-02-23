import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Axios() {
    const [posts, setposts] = useState([]);
    const url = `https://jsonplaceholder.typicode.com/posts`

    useEffect(() => {
        fetchPost()
    }, [])

    const fetchPost = async () => {
        try {
            const res = await axios.get(url)
            setposts(res.data)
        } catch (err) {
            console.log(err);
        }
    }

    const handeler = async (id) => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        const resDel = await axios.delete(`url`)
        fetchPost()
    }
    return <div>
        {
            posts.map((post, index) => {
                return <div>
                    <p > {post.id}-Title - {post.title}</p>
                   <button onClick={() => {handeler(post.id)}}>delete</button>
                </div>
            })
        }

    </div>;
}

export default Axios;




