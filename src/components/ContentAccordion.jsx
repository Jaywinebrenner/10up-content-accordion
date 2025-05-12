import { useState, useEffect } from "react";
import { accordionData } from '../fake-data/accordionData';

const ContentAccordion = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    console.log("data", accordionData);
  }, []);  

  return (
    <section className="content-accordion content-accordion--silver-theme">
      <div className="container">
        <div className="content-accordion__main">
          {/* Left Navigation Column */}
          <div className="content-accordion__nav">
            {accordionData.map((item, index) => (
              <button
                key={item.id}
                className={`content-accordion__button ${
                  index === activeTab ? "active" : ""
                }`}
                onClick={() => setActiveTab(index)}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Right Content Column */}
          <div className="content-accordion__content">
            <div className="content-accordion__body">
              <p>{accordionData[activeTab].content}</p>
            </div>
          </div>
        </div>

        <div className="cta-button-wrapper">
          <p className="cta-button-text">By Jay Winebrenner</p>
          <p>jaywinebrenner@gmail.com</p>

          <a target="_blank" rel="noopener noreferrer" class="button" href="https://www.jaywinebrenner.com">PORTFOLIO WEBSITE</a>

        </div>
      </div>
    </section>
  );
};

export default ContentAccordion;