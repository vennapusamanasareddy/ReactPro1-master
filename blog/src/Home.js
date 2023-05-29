import {useState,useEffect} from 'react';//named import
import Bloglist from './Bloglist';
function Home() {
    //let name="kamatchi";
    let [blogs,setname]= useState([{id:1,title:"blog1",body:"hdeserdrthutyf5se",author:"kamatchi1"},
                                  {id:2,title:"blog2",body:"gyghjbjhbhjb",author:"kamatchi2"},
                                  {id:3,title:"blog3",body:"hdeserdrf5se",author:"kamatchi3"}]);
    // console.log(blogs);
    // const handleClick=(data)=>{
    //      setname(data);
    //      console.log(data);
    // }
//  const handleClick=()=>{
//       setname(data);
//       console.log(name);
//  }
    // useEffect(()=>
    // {
    //    // console.log("elayaraja");
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //        .then(response => response.json())
    //        .then(json => {
    //         setname(json)
    //      })
    // },[name]);
    return (
        <Bloglist Blogs={blogs} />
    );
  }
  
  export default Home;