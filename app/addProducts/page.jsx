import React from 'react'
import Image from 'next/image';

const addProducts = () => {
  return (
    <form className='flex flex-col w-full items-start gap-3 ml-10'>
      <div>
        <p className='mb-2'>Upload Image</p>

        <div className='flex gap-2'> 
          <label htmlFor="image1">
            <Image src={"/upload_area.png"} alt='productimg' width={80} height={80} />
            <input type="file" id='image1' hidden/>
          </label>

          <label htmlFor="image2">
            <Image src={"/upload_area.png"} alt='productimg' width={80} height={80} />
            <input type="file" id='image2' hidden/>
          </label>

          <label htmlFor="image3">
            <Image src={"/upload_area.png"} alt='productimg' width={80} height={80} />
            <input type="file" id='image3' hidden/>
          </label>

          <label htmlFor="image4">
            <Image src={"/upload_area.png"} alt='productimg' width={80} height={80} />
            <input type="file" id='image4' hidden/>
          </label>
        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product name</p>
        <input className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write product name' required/>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <input className='w-full max-w-[500px] px-3 py-2' type="textarea" placeholder='Write product description' required/>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product Category</p>
        <input className='w-full max-w-[500px] px-3 py-2' type="textarea" placeholder='Write product category' required/>
      </div>


    </form>
  )
}

export default addProducts;
