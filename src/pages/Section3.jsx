import SectionComponent3 from "../components/organisms/Section3";
import './section.scss';


const Section3 = ()=> {
return (
  <div className="survey-wrapper">
      <div className="survey-container">
          {/* <ProgressPoints/> */}
          <div className="survey pt-5 ">
              
              <div className="image-wrapper text-center my-8 ">
                  {/* <img src={ section1 } alt="section-1" className="mx-auto"></img> */}
              </div>

              <div className="fields-wrapper">
              <SectionComponent3 />
              </div>
          </div>
      </div>
  </div>
)
}

export default Section3
