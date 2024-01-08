import React from "react";

const SingleSchedule = ({schedules}) => {
    console.log(schedules.caption)
  return (
    <>
      <div className="single-schedule first">
        <div className="inner">
          <div className="icon">
            <i className="fa fa-ambulance" />
          </div>
          <div className="single-content">
            <span>{schedules.name}</span>
            <h4>{schedules.heading}</h4>
            <p>
              {(schedules.caption) !== undefined ? <p> {schedules.caption} </p> : '' }

              {(schedules.time_1 !== undefined || 
                schedules.time_2 !== undefined || 
                schedules.time_3 !== undefined) ? 
                <ul class="time-sidual">
											<li class="day">{schedules.time_1.day} <span>{schedules.time_1.time}</span></li>
											<li class="day">{schedules.time_2.day} <span>{schedules.time_2.time}</span></li>
											<li class="day">{schedules.time_3.day} <span>{schedules.time_3.time}</span></li>
								</ul> : ''}
                

              

            </p>
            <a href="#">
              LEARN MORE
              <i className="fa fa-long-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleSchedule;
