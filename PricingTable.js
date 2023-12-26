import React from 'react'
import Table from './Table'

const PricingTable = () => {
  const tables = {
    table1 : {
      icon: "icofont-ui-cut",
      title: "Plastic Suggery",
      amount: 199,
      features:{
        feature1:{
          name: "Lorem ipsum dolor sit",
          status: true
        },
        feature2:{
          name: "Cubitur sollicitudin fentum",
          status: true
        },
        feature3:{
          name: "Nullam interdum enim",
          status: false
        },
        feature4:{
          name: "Donec ultricies metus",
          status: false
        },
        feature5:{
          name: "Pellentesque eget nibh",
          status: false
        },
      }
    },
    table2 : {
        icon: "icofont-tooth",
        title: "Teeth Whitening",
        amount: 299,
        features:{
          feature1:{
            name: "Lorem ipsum dolor sit",
            status: true
          },
          feature2:{
            name: "Cubitur sollicitudin fentum",
            status: true
          },
          feature3:{
            name: "Nullam interdum enim",
            status: true
          },
          feature4:{
            name: "Donec ultricies metus",
            status: false
          },
          feature5:{
            name: "Pellentesque eget nibh",
            status: false
          },
        }
    },
    table3 : {
        icon: "icofont-heart-beat",
        title: "Heart Suggery",
        amount: 399,
        features:{
          feature1:{
            name: "Lorem ipsum dolor sit",
            status: true
          },
          feature2:{
            name: "Cubitur sollicitudin fentum",
            status: true
          },
          feature3:{
            name: "Nullam interdum enim",
            status: true
          },
          feature4:{
            name: "Donec ultricies metus",
            status: true
          },
          feature5:{
            name: "Pellentesque eget nibh",
            status: true
          },
        }
    }
}

  return (
    <>
      <section className="pricing-table section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Provide You The Best Treatment In Resonable Price</h2>
                <img src="img/section-img.png" alt="#" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  praesent aliquet. pretiumts
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Single Table */}
            <Table tables={tables.table1}/>
            {/* End Single Table*/}
            {/* Single Table */}
            <Table tables={tables.table2}/>
            {/* End Single Table*/}
            {/* Single Table */}
            <Table tables={tables.table3}/>
            {/* End Single Table*/}
          </div>
        </div>
      </section>
    </>
  )
}

export default PricingTable
