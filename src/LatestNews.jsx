import { useState, useEffect } from 'react';
import axios from 'axios';

const LatestArt = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('https://api.currentsapi.services/v1/latest-news?apiKey=r-F0Ayl7zKqzmbjsvcS4j-RSfMrhY85SQQtGq6sRK2okADtK')
            .then(response => {
                setArticles(response.data.news);
            });
    }, []);



    console.log(articles)

    return (

        <div>
            <div className='container mx-auto flex flex-col'>
            <h1 className='text-[40px] font-bold mt-4 ml-2'>Latest News</h1>
            <div className="md:flex grid-cols-1 justify-center pt-10 gap-6 md:rounded-[20px]">
                {Array.isArray(articles) && articles.slice(0, 4).map((article, index) => (
                    <div key={index} className="bg-white overflow-hidden w-[400px] ">
                        <img
                            className='w-full md:w-[400px] h-[200px] object-center md:rounded-md'
                            src={article.image}
                            alt={article.title}
                        />
                        <div className=" mb-5">
                            <p className=' text-sm mb-4 text-gray-500'>{article.published}</p>
                            <h2 className='text-xl  mb-4 font-semibold'>{article.title}</h2>
                            <p className=' mb-2 text-sm'>{article.description.substring(0, 95)}</p>

                            <div className=' flex justify-between'>
                                <p className=' text-red-600 font-bold'>{article.category[0].charAt(0).toUpperCase() + article.category[0].slice(1)}</p>
                                <p className='text-gray-500 mr-6'>8 min read</p>
                            </div>
                            <a
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-blue-500 hover:underline'
                            >
                                Read More...
                            </a>


                        </div>

                    </div>

                ))}
            </div>
        </div>
        </div>
    );
};

export default LatestArt;