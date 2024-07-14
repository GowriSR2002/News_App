import React, {useEffect,useState} from 'react';
import "./News.css"

const News = () => {

    const [mynews , setMyNews]= useState([]);

    const fetchData = async  () => {
        let resonse =await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=9bced53f4da3433cb055355112069f72");
        let data=await resonse.json();
        setMyNews(data.articles);
    };
    
    useEffect(() => {
        fetchData();

    },[]);
  return (
      <>
           
           <div className="mainDiv">
            {
            mynews.map((ele) => {
                console.log(ele)
                return (
                 <>
                    
                    <div class="card" style={{width: "350px",height:"400px",marginleft:"2rem",marginTop:"2rem"}}>
                  
                       <img src={ele.urlToImage== null ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTssV0nUIBLHUcn1P1WxAzMr5-U4D4D9S3c7w&s:*"  : ele.urlToImage} class="card-img-top" alt="..."/>
                       <div class="card-body">
                         <h5 class="card-title">{ele.author == "" ? "Janelle Ash" : ele.author}</h5>
                         <p class="card-text">{ele.title}</p>
                         <a href={ele.url} target="_blank" class="btn btn-primary">Read More</a>
                       </div>
                    </div> 
                       
                </>   
                );
            })
        }
        </div>
      </>
  );
};

export default News