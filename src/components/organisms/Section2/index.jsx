import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SectionComponent from '../Section/SectionComponent';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import MCQ from '../../molecules/survey/MCQ';
import YesNo from '../../molecules/survey/YesNo';


const SectionComponent1 = () => {
  const pageNumber = 2;
  const { register, handleSubmit, errors } = useForm();
  const configuration = useSelector((state) => state.configuration);
  const history = useHistory();
  const [questionsState, setQuestionsState] = useState([]);
  const [headingState, setHeadingState] = useState({});
  const dispatch = useDispatch();

  // useEffect(() => {

  // }, [configuration])
  const { survey } = configuration;

  useEffect(() => {
    console.info('useEffect configuration page 2 ', configuration)
    if(survey) {
      const cSurvey = survey.content.components.find(x=> x.id === 'c-survey');
      const section = cSurvey.object.sections.find(x=> x.name === 'Your well-being');
      const questions = section.questions;
      setQuestionsState(questions)
      setHeadingState({
        pageNumber,
        name: section.name,
        image: section.hero[0].image.Desktop
      });
    }
    console.info('useEffect configuration ', configuration)
    console.info('useEffect questionsState ', questionsState)
  }, [configuration, questionsState])

  if(!survey) return null;

  const onSubmit = data =>{ 
   history.push(`/survey/section-3`);
   console.info('onSubmit data: ', data)
   console.info('onSubmit config: ', configuration)
  }

  const onValueChange = (e, index, answerIndex) =>{ 

  const quest = Object.assign([],[...questionsState]);
 //q[index].answer[answerIndex].answered = 'true';

 const quest2 =quest[index].answer.map((x, ind)=>{
  if(ind === answerIndex) {
   x.answered = 'true';
  } else {
    x.answered = 'false';
  }

  return x;
})
 quest[index].answer = quest2

    setQuestionsState(quest)
  }

  return(<div>
    <SectionComponent data={headingState} />
    <div className="survey-container">
    <form onSubmit={handleSubmit(onSubmit)}> 
    {questionsState.map((x, index) => <div className="mx-auto max-w-3xl md:max-w-3xl lg:max-w-3xl 2xl:max-w-3xl 3xl:max-w-3xl md:mx-auto lg:mx-auto 2xl:mx-auto 3xl:mx-auto px-8">
      <div key={index}>
            { (x.id === "q_mcq") && <MCQ question={x} questionIndex={index} onValueChange={onValueChange} register={register} />}
            { 
              (x.id === "q_yes_no") && (
                <YesNo question={x} questionIndex={index} onValueChange={onValueChange} register={register} />
                )
            }
          </div>
        </div>
      )}

    
 
    <div className="next-btn-wrapper flex w-full text-center py-10 justify-center mt-16">
        <input type="submit" value="Next" className="w-1/5 sm:w-1/2 md:w-1/2 lg:w-1/3 py-3 rounded-full btn-primary font-semibold text-poppins text-base block"/>
    </div>
    </form>

    
      </div>
  </div>
  )
}

export default SectionComponent1;