import React from 'react'
import SingleFun from './SingleFun'

const FunFacts = () => {
  const facts = {
    fact1 : {
      icon : 'icofont-home',
      counter: 3468,
      title: 'Hospital Rooms'
    },
    fact2 : {
      icon : 'icofont-user-alt-3',
      counter: 557,
      title: 'Specialist Doctors'
    },
    fact3 : {
      icon : 'icofont-simple-smile',
      counter: 4379,
      title: 'Happy Patients'
    },
    fact4 : {
      icon : 'icofont-table',
      counter: 32,
      title: 'Years of Experience'
    }
  }
  return (
    <>
      <div id="fun-facts" className="fun-facts section overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Fun */}
              <SingleFun facts={facts.fact1}/>
              {/* End Single Fun */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Fun */}
              <SingleFun facts={facts.fact2}/>
              {/* End Single Fun */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Fun */}
              <SingleFun facts={facts.fact3}/>
              {/* End Single Fun */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Fun */}
              <SingleFun facts={facts.fact4}/>
              {/* End Single Fun */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FunFacts
