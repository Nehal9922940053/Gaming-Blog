
// const blogList = (props) => {
    const BlogList = ({blogs,title,deleteBlog}) => {
    // const blogs=props.blogs;
    // const title=props.title;

    return ( 
        <div className="blog-list">
        <h1>{title}</h1>
        {blogs.map((blog) => (
            <div className='blog-preview' key={blog.id}>
            <h2>{blog.title}</h2><button onClick={()=>deleteBlog(blog.id)}>Delete</button>
            <p>{blog.preview}</p>
            <p className="author">Author : {blog.author}</p>
        </div>
    )
    )}
    </div>
     );
}
 
export default BlogList;