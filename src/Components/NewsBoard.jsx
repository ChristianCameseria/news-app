import { useState } from 'react'
import { useEffect } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {

  const [articles,setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?language=en&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url) // HTTP request
    .then(response => response.json()) // fetch response object as JSON 
    .then(data=> setArticles(data.articles)); // articles contains entire API response (data.articles)
  },[category])

  return(

    <div>
        <h2 className='text-center text-capitalize fs-1 mx-auto p-2'> Latest {category} <span className='badge bg-danger'>News</span></h2>
        {/*For every news in articles (array), return a NewsItem object with its title, description, urlToImage and url*/}
        {articles.map((news,index) => {
          if(news.title != "[Removed]"){
            return <NewsItem key ={index} title = {news.title} description= {news.description} src = {news.urlToImage} url ={news.url}/>
          }
          
        })} 

    </div>
  )
}


export default NewsBoard