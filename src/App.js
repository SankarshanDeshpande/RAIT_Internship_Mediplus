import React from "react";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import Feautes from "./Components/Feautes";
import FunFacts from "./Components/FunFacts";
import WhyChoose from "./Components/WhyChoose";
import CallToAction from "./Components/CallToAction";
import Portfolio from "./Components/Portfolio";
import Service from "./Components/Service";
import PricingTable from "./Components/PricingTable";
import BlogArea from "./Components/BlogArea";
import Clients from "./Components/Clients";
import Appointment from "./Components/Appointment";
import NewsletterArea from "./Components/NewsletterArea";
import Footer from "./Components/Footer";
import ScheduleArea from "./Components/ScheduleArea";

function App() {
  return (
    <div>
      {/* Preloader */}
      {/* <div className="preloader">
        <div className="loader">
          <div className="loader-outter" />
          <div className="loader-inner" />
          <div className="indicator">
            <svg width="16px" height="12px">
              <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6" />
              <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6" />
            </svg>
          </div>
        </div>
      </div> */}
      {/* End Preloader */}
      {/* Get Pro Button */}
      {/* <ul className="pro-features">
        <a className="get-pro" href="#">
          Get Pro
        </a>
        <li className="big-title">Pro Version Available on Themeforest</li>
        <li className="title">Pro Version Features</li>
        <li>2+ premade home pages</li>
        <li>20+ html pages</li>
        <li>Color Plate With 12+ Colors</li>
        <li>Sticky Header / Sticky Filters</li>
        <li>Working Contact Form With Google Map</li>
        <div className="button">
          <a
            href="http://preview.themeforest.net/item/mediplus-medical-and-doctor-html-template/full_screen_preview/26665910?_ga=2.145092285.888558928.1591971968-344530658.1588061879"
            target="_blank"
            className="btn"
          >
            Pro Version Demo
          </a>
          <a
            href="https://themeforest.net/item/mediplus-medical-and-doctor-html-template/26665910"
            target="_blank"
            className="btn"
          >
            Buy Pro Version
          </a>
        </div>
      </ul> */}
      {/* Header Area */}
      <Header/>
      {/* End Header Area */}
      {/* Slider Area */}
      <Slider/>
      {/*/ End Slider Area */}
      {/* Start Schedule Area */}
      <ScheduleArea/>
      {/*/End Start schedule Area */}
      {/* Start Feautes */}
      <Feautes/>
      {/*/ End Feautes */}
      {/* Start Fun-facts */}
      <FunFacts/>
      {/*/ End Fun-facts */}
      {/* Start Why choose */}
      <WhyChoose/>
      {/*/ End Why choose */}
      {/* Start Call to action */}
      <CallToAction/>
      {/*/ End Call to action */}
      {/* Start portfolio */}
      <Portfolio/>
      {/*/ End portfolio */}
      {/* Start service */}
      <Service/>
      {/*/ End service */}
      {/* Pricing Table */}
      <PricingTable/>
      {/*/ End Pricing Table */}
      {/* Start Blog Area */}
      <BlogArea/>
      {/* End Blog Area */}
      {/* Start clients */}
      <Clients/>
      {/*/Ens clients */}
      {/* Start Appointment */}
      <Appointment/>
      {/* End Appointment */}
      {/* Start Newsletter Area */}
      <NewsletterArea/>
      {/* /End Newsletter Area */}
      {/* Footer Area */}
      <Footer/>
      {/*/ End Footer Area */}
    </div>
  );
}

export default App;
