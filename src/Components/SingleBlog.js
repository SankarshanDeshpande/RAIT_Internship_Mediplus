import React from 'react'

const SingleBlog = ({blogs}) => {
  return (
    <>
      <div className="single-news">
                <div className="news-head">
                  <img src={blogs.image} alt="#" />
                </div>
                <div className="news-body">
                  <div className="news-content">
                    <div className="date">{blogs.date}</div>
                    <h2>
                      <a href="blog-single.html">
                        {blogs.title}
                      </a>
                    </h2>
                    <p className="text">
                      {blogs.caption}
                    </p>
                  </div>
                </div>
              </div>
    </>
  )
}

export default SingleBlog
