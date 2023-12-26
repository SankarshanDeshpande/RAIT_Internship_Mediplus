import React from 'react'

const Table = ({tables}) => {
  return (
    <>
      <div className="col-lg-4 col-md-12 col-12">
              <div className="single-table">
                {/* Table Head */}
                <div className="table-head">
                  <div className="icon">
                    <i className={`icofont ${tables.icon}`} />
                  </div>
                  <h4 className="title">{tables.title}</h4>
                  <div className="price">
                    <p className="amount">
                      ${tables.amount}<span>/ Per Visit</span>
                    </p>
                  </div>
                </div>
                {/* Table List */}
                <ul className="table-list">
                  <li className={`${(tables.features.feature1.status) ? '' : 'cross'}`}>
                    <i className={`icofont ${(tables.features.feature1.status) ? 'icofont-ui-check' : 'icofont-ui-close'}`} />
                    {tables.features.feature1.name}
                  </li>
                  <li className={`${(tables.features.feature2.status) ? '' : 'cross'}`}>
                  <i className={`icofont ${(tables.features.feature2.status) ? 'icofont-ui-check' : 'icofont-ui-close'}`} />
                    {tables.features.feature2.name}
                  </li>
                  <li className={`${(tables.features.feature3.status) ? '' : 'cross'}`}>
                  <i className={`icofont ${(tables.features.feature3.status) ? 'icofont-ui-check' : 'icofont-ui-close'}`} />
                    {tables.features.feature3.name}
                  </li>
                  <li className={`${(tables.features.feature4.status) ? '' : 'cross'}`}>
                  <i className={`icofont ${(tables.features.feature4.status) ? 'icofont-ui-check' : 'icofont-ui-close'}`} />
                    {tables.features.feature4.name}
                  </li>
                  <li className={`${(tables.features.feature5.status) ? '' : 'cross'}`}>
                  <i className={`icofont ${(tables.features.feature5.status) ? 'icofont-ui-check' : 'icofont-ui-close'}`} />
                    {tables.features.feature5.name}
                  </li>
                </ul>
                <div className="table-bottom">
                  <a className="btn" href="#">
                    Book Now
                  </a>
                </div>
                {/* Table Bottom */}
              </div>
            </div>
    </>
  )
}

export default Table
