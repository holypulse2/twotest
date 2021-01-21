import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SectionComponent from '../Section/SectionComponent';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const SectionComponent1 = () => {
  const pageNumber = 5;
  const { register, handleSubmit, errors } = useForm();
  const configuration = useSelector((state) => state.configuration);
  const history = useHistory();
  const [resultsState, setResultsState] = useState([]);
  const [headingState, setHeadingState] = useState({});
  const dispatch = useDispatch();

  // useEffect(() => {

  // }, [configuration])
  const { survey } = configuration;

  useEffect(() => {
    console.info('useEffect configuration page resulsts ', configuration)
    if(survey) {
      const cSurvey = survey.content.components.find(x=> x.id === 'c-survey');
      // const results = cSurvey.object.results
      const results = cSurvey.object.sections;
      setResultsState(results);
      console.info('aaA: ', results)
  
    }
  }, [configuration])

  if(!survey) return null;

 
//  q[index].answer[answerIndex].answered = 'true';

//  const quest2 =quest[index].answer.map((x, ind)=>{
//   if(ind === answerIndex) {
//    x.answered = 'true';
//   } else {
//     x.answered = 'false';
//   }

//   return x;
// })
 // quest[index].answer = quest2

    //setQuestionsState(quest)

  return(
    <div className="text-center">
      
      {/* {resultsState.map((x, index) => <div>
        {
         <div>{x.id}</div>
        }</div>
      )} */}

{resultsState.map(section => {

return (
<div>
<div><strong>{section.name}</strong></div>
   {
     section.questions.map(quest => {
      const data = quest.answer.find(x =>x.answered === 'true');
      console.log("data",data);
      const message = data && (data.score === 'T2' || data.score === 'T3')? "-" + data.scoreMessage: "";

       return (
          <div>
          {/* Question : {quest.question} */}
          <p>{message}</p>
          
{
   
  // quest.answer.map(ans => {
  //   const data = quest.answer.find(x =>x.answered === 'true');

  //   return(

  //     <div>{data && data.score}</div>
  //   )
  // })

  
}
          </div>
       )
     })
   }
  </div>
)


})}
 
  </div>
  )
}

export default SectionComponent1;