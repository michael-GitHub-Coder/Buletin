import { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

const EditorsPick = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                //const res = await fetch("https://api.mediastack.com/v1/news?access_key=3ff0c3bb7604dcb9501fc606f79bf97c");  E-0v-9wz8N_BOF1TUxWQV5w9zbET1LBfmY5F-Pn9QDg52EWa
                const res = await fetch("https://api.currentsapi.services/v1/latest-news?apiKey=E-0v-9wz8N_BOF1TUxWQV5w9zbET1LBfmY5F-Pn9QDg52EWa")
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                const dat = await res.json();
                setData(dat.news);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
      
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
      }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="md:mx-auto mt-10 container">
            <div className="flex ml-2 mr-4 justify-between mb-5">
                <h1 className="text-4xl font-bold">Editors Pick</h1>
                <h2 className="flex text-red-600 mt-3">See all<FaArrowRight className="ml-2 mt-1" /></h2>
            </div>

            <div className="w-full overflow-hidden md:rounded-md">
                <div className="relative slide-container">
                    <Slide >
                        {Array.isArray(data) && data.map((item, index) => (
                            <div key={index}>
                                <div style={{ ...divStyle, 'backgroundImage': `url(${item.image})` }}>
                                    <div className="text-white">
                                        <h1 className="text-2xl px-10 text-center font-bold text-left my-2">{item.title}</h1>
                                        <h1 className="text-md text-center">{item.published.substring(0,16)}</h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slide>
                </div>
            </div>
            {/* <div className="mx-auto container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {Array.isArray(data) && data.slice(0, 4).map((item, index) => (
                        <div key={index} className="relative h-[400px] bg-white rounded-md mt-20">
                            <img
                                src={item.image}
                                alt={`Image ${index}`}
                                className="w-full h-[200px] object-cover mb-4 md:rounded-md"
                            />
                            <h1 className="font-md font-bold py-2">{item.title.substring(0,100) + "..."}</h1>
                            <div className="absolute flex gap-40 bottom-5">
                                <p className="text-red-600 font-semibold ">{item.category[0].charAt(0).toUpperCase() + item.category[0].slice(1)}</p>
                                <a href={item.url} className="text-blue-500 hover:underline ">Read More...</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    );
}

const getGet = async () =>{
    const res = await fetch("https://api.mediastack.com/v1/news?access_key=3ff0c3bb7604dcb9501fc606f79bf97c");
    const data = await res.json();
    return data;
}
export {EditorsPick as default , getGet}