import React from 'react'
import ChooseLeft from './ChooseLeft'
import ChooseRight from './ChooseRight'

const WhyChoose = () => {
  return (
    <>
      <section className="why-choose section">
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
            <div className="col-lg-6 col-12">
              {/* Start Choose Left */}
              <ChooseLeft/>
              {/* End Choose Left */}
            </div>
            <div className="col-lg-6 col-12">
              {/* Start Choose Rights */}
              <ChooseRight/>
              {/* End Choose Rights */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyChoose
