import React from 'react'

function Cards({item}) {
  return (
    <div className='md:pl-2'>
        <div className="card w-82 md:w-72 bg-base-100 shadow-xl my-10 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border dark:border-gray-600">
            <figure><img src={item.image} alt="Shoes" /></figure> 
            <div className="card-body">
                <h2 className="card-title">
                    {item.name}
                    <div className="badge badge-ghost">{item.category}</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline">${item.price}</div> 
                    <button className="btn btn-info btn-outline ">Buy Now</button>                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards