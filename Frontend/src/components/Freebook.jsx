import React, { useEffect, useState } from 'react'
// import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';


function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(()=>{
    const getBook = async()=>{
      try{
      const res = await axios.get("http://localhost:3000/book");
      setBook(res.data.filter((item)=>item.category==="Free"));
      }catch(err){
        console.log("Error: "+err);
      }
      }
    getBook();
  },[])
    // const freebookData = list.filter((item)=>item.category==="Free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
        <div className='mx-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div>
            <hr className='mb-5 md:mb-10 dark:border-gray-700'/>
                <h1 className='font-bold text-2xl pb-2'>Free Offered Books</h1>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias repellendus excepturi asperiores cum reiciendis distinctio molestiae eveniet blanditiis nam accusantium!,Alias repellendus excepturi asperiores cum reiciendis distinctio moles.
                </p>
            </div>
            <div>
                <Slider {...settings}>
                    {book.map((item)=>(
                        <Cards item={item} key={item.id}/>
                    ))}
                </Slider>
            </div>
        </div>
    </>
  )
}

export default Freebook