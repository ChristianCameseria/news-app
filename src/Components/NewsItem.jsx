import React from 'react'
import image from '../assets/newsImage.jpg'
const NewsItem = ({title,description,src,url}) => {
  return(

      <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 card-item" style={{maxWidth:"348px"}}>
        <img src={src?src:image} style={{height:"200px"}} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title  ?title.slice(0, 50) + "..." : "Breaking news"}</h5>
          <p className="card-text">{description ? description.slice(0, 90) + "..." : "Updates: What is going on today, Check out here."}</p>
          <a href={url} target='_blank' className="btn btn-primary">Read More</a>
        </div>
      </div>
  )
}


export default NewsItem