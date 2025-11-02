import { useState, useEffect } from "react";


// import blogData_26 from '../assets/data/blogData.json';
import Blogs_26 from "../components/Blog_26";
import Wrapper from "../assets/wrappers/Blog2_xx.jsx";

const api_url = 'http://localhost:5000/api/blogs_26';

const BlogNodePage_26 = () => {
  const [name, setName] = useState('timd');
  const [id, setId] = useState(211410526);
  const [blogs_26, setBlogs_26] = useState([]);

  const fetchBlogFromNodeServer = async () => {
    try {
        const response = await fetch(api_url);
        const data = await response.json();
        console.log('blogs', data);
        setBlogs_26(data);
    } catch (error) {
        console.log(error);
    }
  };
  useEffect(() => {
    fetchBlogFromNodeServer()
  }, []);
  return (
    <Wrapper>
      <section className="blogs">
        <div className="section-title">
          <h2>blogs from Node -- {name}, {id}</h2>
        </div>
        <div className="blogs-center">
          {blogs_26.map((item) => {
            const {id, title, descrip, category,img} = item;
            return (
              <Blogs_26 
                key={id} 
                id={id} 
                title={title} 
                descrip={descrip} 
                category={category} 
                img={img} />
            )
          })}
        </div>
      </section>
    </Wrapper>
  );
};

export default BlogNodePage_26;
