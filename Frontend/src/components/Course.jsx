import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios'
// import list from '../../public/list.json'


function Course() {
  const [book, setBook] = useState([]);
  useEffect(()=>{
    const getBook = async()=>{
      try{
      const res = await axios.get("http://localhost:3000/book");
      // console.log(res.data);
      setBook(res.data);
      }catch(err){
        console.log("Error: "+err);
      }
      }
    getBook();
  },[])
  return (
    <>
      <div className='mx-w-screen-2xl min-h-screen container mx-auto md:px-20 px-4'>
        <div className='pt-28 items-center justify-center text-center'>
          <h1 className='text-2xl font-bold md:text-4xl'>We're delighted to have you <span className='text-yellow-500'>Here! :)</span></h1>
          <p className='mt-8 md:mt-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aut ut quidem soluta sequi sint fuga, esse est natus provident, atque, culpa repudiandae magnam molestiae. Amet, corrupti explicabo eum, deserunt minus voluptatibus assumenda voluptatum alias quas quos praesentium. Incidunt quasi, nulla animi eligendi facilis ducimus iste aliquam asperiores tempore adipisci?
          </p>
        </div>
        <div className='mt-6 grid grid-cols-1 md:grid-cols-4 place-items-center'>
          {
            book.map((item)=>(
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Course