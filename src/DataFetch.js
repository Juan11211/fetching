import React, {useEffect, useState} from 'react'
import axios from 'axios'

function DataFetch(){
    
    
    
    const [posts, setPosts] = useState([])



    useEffect(() => { 
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => { 
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => { 
            console.log(err)
        })
    }, [])

    return(
        <div>
            {posts.map(post => ( 
                <h1>{post.title}</h1>
            ))}
        </div>
    )
}

export default DataFetch