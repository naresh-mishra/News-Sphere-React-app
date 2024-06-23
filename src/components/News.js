import React, {useEffect,useState} from 'react'
import Newsitem from './Newsitem'
import Buffer from './Buffer'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

 const News=(props)=>{
  const [articles,setarticles]=useState([]);
  const [loading,setloading]=useState(true);
  const [page,setpage]=useState(1);
  const [totalResults,settotalResults]=useState(0);

 const capitalizeFirst = (str) => {
 return str.charAt(0).toUpperCase() + str.slice(1);
};

 const update=async()=>{
  let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
  setloading(true);
  let data= await fetch(url);
  let parseddata=await data.json();
  setarticles(parseddata.articles)
  settotalResults(parseddata.totalResults)
  setloading(false)
}

 useEffect(()=>{
  document.title=`News Sphere-${capitalizeFirst(props.category)}`;
  update();
  // eslint-disable-next-line
},[])


const fetchMoreData = async() => {
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page+1}&pageSize=${props.pagesize}`;
    setpage(page+1);
    let data= await fetch(url);
    let parseddata=await data.json();
    console.log(parseddata);
    setarticles(articles.concat(parseddata.articles));
    settotalResults(parseddata.totalResults);
    
};

    return (    
      <>
       <h1 className=" text-center fs-4" style={{margin:'70px 0px 0px 0px'}}>NewsSphere-Top {capitalizeFirst(props.category)} headlines</h1>
       {loading && <Buffer/>}
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Buffer/>}
          style={{ height:"100%",overflow: "hidden"}}    
        >
        <div className="container"> 
       <div className="row">
       {articles.map((element)=>{
        return <div className="col-md-4" key={element.url}>
           <Newsitem  title={element.title?element.title:""} description={element.description?element.description:""} imageurl={element.urlToImage} url={element.url} date={element.publishedAt} source={element.source.name}/>
          </div>
       })}
         </div>
         </div>
         </InfiniteScroll>
         </>
    )
  }

News.defaultProps={
  pagesize:6,
  country:"in",
  category:"general"
}

News.propTypes={
  pagesize:PropTypes.number,
  country:PropTypes.string,
  category:PropTypes.string
}
export default News
