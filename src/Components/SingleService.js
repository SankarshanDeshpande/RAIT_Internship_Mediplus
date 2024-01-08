import React from 'react'

const SingleService = ({services}) => {
  return (
    <>
      <div className="single-service">
                <i className={`icofont ${services.icon}`} />
                <h4>
                  <a href="service-details.html">{services.title}</a>
                </h4>
                <p>
                  {services.caption}
                </p>
      </div>
    </>
  )
}

export default SingleService
