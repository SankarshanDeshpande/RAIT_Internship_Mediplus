import React from 'react'
import SingleBlog from './SingleBlog'

const BlogArea = () => {

  const blogs = {
    blog1:{
      image:"img/blog1.jpg",
      date:"22 Aug, 2020",
      title:"We have annnocuced our new product.",
      caption:"Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed."
    },
    blog2:{
      image:"img/blog2.jpg",
      date:"15 Jul, 2020",
      title:"Top five way for solving teeth problems.",
      caption:"Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed."
    },
    blog3:{
      image:"img/blog3.jpg",
      date:"05 Jan, 2020",
      title:"We provide highly business soliutions.",
      caption:"Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed."
    }
  }

  return (
    <>
      <section className="blog section" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Keep up with Our Most Recent Medical News.</h2>
                <img src="img/section-img.png" alt="#" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  praesent aliquet. pretiumts
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              {/* Single Blog */}
              <SingleBlog blogs={blogs.blog1}/>
              {/* End Single Blog */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Single Blog */}
              <SingleBlog blogs={blogs.blog2}/>
              {/* End Single Blog */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Single Blog */}
              <SingleBlog blogs={blogs.blog3}/>
              {/* End Single Blog */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogArea
