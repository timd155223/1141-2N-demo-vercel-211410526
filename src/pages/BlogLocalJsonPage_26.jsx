import { useState } from "react";


import blogData_26 from '../assets/data/blogData.json';
import Blog_26 from "../components/Blog_26.jsx";
import Wrapper from "../assets/wrappers/Blog2_xx.jsx";

const BlogLocalJsonPage_26 = () => {
  const [name, setName] = useState('timd');
  const [id, setId] = useState(211410526);
  const [blogs_26, setBlogs_26] = useState(blogData_26);
  return (
    <Wrapper>
      <section className="blogs">
        <div className="section-title">
          <h2>blogs from local json -- {name}, {id}</h2>
        </div>
        <div className="blogs-center">
          {blogs_26.map((item) => {
            const {id, title, descrip, category,img} = item;
            return (
              <Blog_26 
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

export default BlogLocalJsonPage_26;
