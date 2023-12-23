import React from 'react'

const SingleFeature = ({features}) => {
  return (
    <>
      <div className={`single-features ${features.key === 3 ? 'last' : ''}`}>
                <div className="signle-icon">
                  <i className= {`icofont ${features.icon}`}/>
                </div>
                <h3>{features.heading}</h3>
                <p>
                  {features.caption}
                </p>
              </div>
    </>
  )
}

export default SingleFeature
