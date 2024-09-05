import { useEffect, useState } from "react";

export const Body = () => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        fetch('https://api.currentsapi.services/v1/latest-news?apiKey=r-F0Ayl7zKqzmbjsvcS4j-RSfMrhY85SQQtGq6sRK2okADtK')   
            .then(response => response.json())
            .then(data => setNewsData(data.news)) 
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="container mx-auto mt-10">
            <div className="bg-gray-100 w-full h-[200px] text-center justify-center md:rounded-xl p-8 md:text-4xl text-xl">
                <h1 className="text-gray-400  text-2xl">WELCOME TO BULETIN</h1>
                <h1 className="font-bold">Craft narratives that ignite <span className="text-red-600">inspiration</span>,</h1>
                <h1 className="font-bold text-red-600">knowledge, <span className="text-black">and</span> entertainment</h1>
            </div>
            <div className="md:pt-16">
                { Array.isArray(newsData)&& newsData.slice(0, 1).map((item, index) => (
                    <div key={index} className="md:flex grid-cols-1 items-center md:gap-11">
                        <img src={item.image} alt="news" className="w-[600px] md:rounded-[15px] mt-10" />
                        <div className="w-full">
                            <div className="mx-4 md:mx-0">
                                <div className="flex gap-11 py-8 font-semibold text-gray-400"><h3>{item.author}</h3>
                                    <h3>{item.published}</h3>
                                </div>
                                <h1 className="font-bold text-2xl">{item.title}</h1>
                                <p className="py-8 text-xl">{item.description}</p>
                            </div>
                            <div className="grid grid-cols">
                                <div className="md:hidden mb-4 flex justify-between mx-4 gap-9 font-semibold">
                                    <p className="text-gray-500">{item.category}</p>
                                    <p className="text-red-600">2 min read</p>
                                </div>
                                <a href={item.url} >
                                    <button className="md:float-right bg-red-600 w-full md:w-[100px] h-[40px] text-white font-semibold hover:bg-red-400">Read More</button>
                                </a>
                                <div className="hidden md:flex gap-9 font-semibold md:-mt-8">
                                    <p className="text-gray-500 ">{item.category}</p>
                                    <p className="text-red-600">2 min read</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
