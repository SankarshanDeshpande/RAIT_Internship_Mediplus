import React from 'react'
import SingleService from './SingleService'

const Service = () => {
  const services = {
    service1:{
      icon:"icofont-prescription",
      title:"General Treatment",
      caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet."
    },
    service2:{
      icon:"icofont-tooth",
      title:"Teeth Whitening",
      caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet."
    },
    service3:{
      icon:"icofont-heart-alt",
      title:"Heart Surgery",
      caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet."
    },
    service4:{
      icon:"icofont-listening",
      title:"Ear Treatment",
      caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet."
    },
    service5:{
      icon:"icofont-eye-alt",
      title:"Vision Problems",
      caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet."
    },
    service6:{
      icon:"icofont-blood",
      title:"Blood Transfusion",
      caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet."
    }
  }
  return (
    <>
      <section className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Offer Different Services To Improve Your Health</h2>
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
              {/* Start Single Service */}
              <SingleService services={services.service1}/>
              {/* End Single Service */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Service */}
              <SingleService services={services.service2}/>
              {/* End Single Service */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Service */}
              <SingleService services={services.service3}/>
              {/* End Single Service */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Service */}
              <SingleService services={services.service4}/>
              {/* End Single Service */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Service */}
              <SingleService services={services.service5}/>
              {/* End Single Service */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Service */}
              <SingleService services={services.service6}/>
              {/* End Single Service */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service
