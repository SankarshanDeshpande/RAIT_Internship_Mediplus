import React from 'react'

const SingleFun = ({facts}) => {
  return (
    <>
      <div className="single-fun">
                <i className={`icofont ${facts.icon}`} />
                <div className="content">
                  <span className="counter">{facts.counter}</span>
                  <p>{facts.title}</p>
                </div>
              </div>
    </>
  )
}

export default SingleFun
