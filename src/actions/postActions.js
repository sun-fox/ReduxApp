import {FETCH_POSTS,NEW_POST} from '../actions/types';

// export function fetchPosts(){
//     return function(dispatch){
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res=>res.json())
//         .then(posts=>dispatch({
//             type:FETCH_POSTS,
//             payload:posts
//         }))
//     }
// }

// ES6 syntrax
export const fetchPosts=()=>dispatch=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(posts=>dispatch({
            type:FETCH_POSTS,
            payload:posts
        }))
}

export const createPost=(postData)=>dispatch=>{
    fetch('https://jsonplaceholder.typicode.com/posts',
    { method:'POST',
      headers:{ 
          "Access-Control-Allow-Origin": "*",
          'content-type':'application/json'
      },
      body:JSON.stringify(postData)
    })
    .then(res=>res.json())
    .then(post=>dispatch({
        type:NEW_POST,
        payload:post
    }));
}