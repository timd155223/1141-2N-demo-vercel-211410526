import { CiGlobe } from "react-icons/ci";
import { ImMug } from "react-icons/im";

const Blog_26 = ({id, img, category,title, descrip}) => {
    return (
        <article key={id} className="blog">
            <img
                src={img}
                alt="Coffee photo"
                className="img blog-img"
            />
            <div className="blog-content">
                <span>
                    {category} 
                    {category === 'lifestyle' ? <ImMug /> : <CiGlobe />}
                </span>
                <h3>{title}</h3>
                <p>{descrip}</p>
                <a href="#">read more</a>
            </div>
        </article>
    )
}

export default Blog_26
