import './App_26.scss'
import books_data from "./booklist_data"

console.log('books_data', books_data);
const App2_26 = () => {
  return (
    <>
      <Booklist_26 />
    </>
  );
};

const Booklist_26 = () => {
  return (
    <section className='booklist'>
      {books_data.map((book) => {
        const { id, title, author, img } = book;
        return <Book_26 key={id} img={img} title={title} author={author} />
      })}
    </section>
  );
};

const Book_26 = ({ img, title, author }) => {
  return (
          <article className='book'>
            <img src={img}/>
            <div className='bookinfo'>
                <h1>{title}</h1>
                <h4>{author}</h4>
            </div>              
          </article>
  )
}

export default App2_26;
