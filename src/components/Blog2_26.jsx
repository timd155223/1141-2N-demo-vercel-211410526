import { CiGlobe } from 'react-icons/ci';
import { ImMug } from 'react-icons/im';
import { Link } from 'react-router-dom';

const Blog2_26 = ({id, img, category,title, descrip, removeITEM}) => {
    return (
        <article key={id} className='blog'>
            <img
                src={img}
                alt='Coffee photo'
                className='img blog-img'
            />
            <div className='blog-content'>
                <span className='flex'>
                    {category} 
                    {category === 'lifestyle' ? (
                        <ImMug className='ml-1' color='blue' size={14}/> 
                    ): (
                        <CiGlobe className='ml-1' color='blue' size={14}/>
                    )}
                </span>
                <h3>{title}</h3>
                <p>{descrip}</p>
                <div className='flex justify-between items-center'>
                    <Link href='#'>read more</Link>
                    <button 
                        type='button' 
                        className='text-red-700 bg-red-100 capitalize px-2 py-1 hover:bg-red-300 rounded' 
                        onClick={() =>removeITEM(id)}
                    >
                        delete
                    </button>
                </div>
            </div>
        </article>
    )
}

export default Blog2_26
