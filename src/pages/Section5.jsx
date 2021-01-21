import SectionComponent5 from "../components/organisms/Section5";
import './section.scss';


const Section5 = ()=> {
return (
  <div className="survey-wrapper">
      <div className="survey-container">
          {/* <ProgressPoints/> */}
          <div className="survey pt-5 ">
              
              <div className="image-wrapper text-center my-8 ">
                  {/* <img src={ section1 } alt="section-1" className="mx-auto"></img> */}
              </div>

              <div className="fields-wrapper">
              <SectionComponent5 />
              </div>
          </div>
      </div>
  </div>
)
}

export default Section5
