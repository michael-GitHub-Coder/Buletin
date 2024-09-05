// import React from 'react'

export const Subscribe = () => {
  return (
    <div className="md:flex grid-cols-1 bg-gray-200 container mx-auto w-full h-auto py-4 items-center justify-between mt-10 rounded">
        <div className="flex flex-col mx-11 md:items-start space-y-2">
            <h3 className="flex justify-center">GET FIRST UPDATE</h3>
            <p className="font-bold text-2xl md:text-3xl">Get the news in front line by <br className="hidden"></br><span className="text-red-600">SUBSCRIBE</span> our latest updates</p>
        </div>
        <form className="md:mr-5 space-x-4 flex justify-center mt-5">
            <input placeholder="Your email" className=" md:w-[400px] md:py-3 rounded p-2 "></input>
            <button className="bg-red-600 text-white rounded px-2 md:py-3 md:w-[150px] text-xl hover:bg-red-700">Subscribe</button>
        </form>
    </div>
  )
}
