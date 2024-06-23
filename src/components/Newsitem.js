import React from 'react'
const Newsitem =(props)=> {
        let { title, description, imageurl, url, date,source } = props;
        return (
            <div>
                <div className="card my-4 "style={{height:"600px"}} >
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1'}}>
                       {source}
                    </span>
                    <img src={!imageurl ? "https://icon-library.com/images/google-news-icon/google-news-icon-4.jpg" : imageurl} class="card-img-top" style={{height:"200px"}} alt="..." />
                    <div className="card-body">

                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">{new Date(date).toGMTString()}</p>
                        <a href={url} className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }

export default Newsitem
