const Bloglist=(props)=>{
   
     let blogs=props.Blogs;
     console.log(blogs);
    return (
        <div>
           {blogs.map((blog)=>{
            return(
           <div key={blog.id}>
            <h3>Title:{blog.title}</h3>
            <p>{blog.body}</p>
            <h6>Written by:{blog.author}</h6>
            </div>)
          })} 
       </div>
    );
    };
    
    export default Bloglist;