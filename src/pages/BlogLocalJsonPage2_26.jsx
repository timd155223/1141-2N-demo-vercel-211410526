import { useState } from "react";


import blogData_26 from '../assets/data/blogData.json';
import Blog2_26 from "../components/Blog2_26.jsx";
import Wrapper from "../assets/wrappers/Blog2_xx.jsx";
import Alert_26 from "../components/Alert_26.jsx";

const BlogLocalJsonPage2_26 = () => {
  const [name, setName] = useState('timd');
  const [id, setId] = useState(211410526);
  const [blogs_26, setBlogs_26] = useState(blogData_26);
  const [alert, setAlert] = useState({
    show:false,
    msg:'',
    type:'',
  });

  const showAlert =(show=false,msg='',type='')=>{
    setAlert({ show, msg, type });
  };

  const removeITEM =(id)=>{
    showAlert(true,'blog removed','danger');
    setBlogs_26(blogs_26.filter((blog)=>blog.id !== id));
  };

  const clearALLBlogs =()=>{
    showAlert(true,'clear all blogs','danger');
    setBlogs_26([]);
  }

  const loadALLBlogs =()=>{
    showAlert(true,'load all blogs','success');
    setBlogs_26(blogData_26);
  }
  return (
    <Wrapper>
      {alert.show && <Alert_26 alert={alert} showAlert={showAlert}/>}
      <section className="blogs">
        <div className="section-title">
          <h2>blogs from local json 2-- {name}, {id}</h2>
        </div>
        <div className="blogs-center">
          {blogs_26.map((item) => {
            const {id, title, descrip, category,img} = item;
            return (
              <Blog2_26
                key={id} 
                id={id} 
                title={title} 
                descrip={descrip} 
                category={category} 
                img={img} 
                removeITEM={removeITEM}
              />
            )
          })}
        </div>
        <div className="flex justify-center items gap-8 mt-8">
          <button 
            type='button' 
            className='text-red-700 bg-red-200 hover:bg-red-300 capitalize px-4 py-2 text-base rounded'
            onClick={clearALLBlogs}
          >
            clear all blogs
          </button>
          <button 
            type='button' 
            className='text-blue-700 bg-blue-200 hover:bg-blue-300 capitalize px-4 py-2 text-base rounded'
            onClick={loadALLBlogs}
          >
            load all blogs
          </button>
        </div>
      </section>
    </Wrapper>
  );
};

export default BlogLocalJsonPage2_26;
