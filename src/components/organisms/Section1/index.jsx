import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SectionComponent from '../Section/SectionComponent';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import MCQ from '../../molecules/survey/MCQ';
import YesNo from '../../molecules/survey/YesNo';
import qs from 'query-string';

import { updateSectionPageNumber } from '../../../redux/actions/configuration'
import { Link } from 'react-router-dom';

import { useLocation, Switch } from 'react-router-dom';


const usePathname = () => {
  const location = useLocation();
  return location.pathname;
}

const SectionComponent1 = () => {
  const location = useLocation();
  const { register, handleSubmit, errors } = useForm();
  const configuration = useSelector((state) => state.configuration);
  const history = useHistory();
  const [questionsState, setQuestionsState] = useState([]);
  const [headingState, setHeadingState] = useState({});
  const dispatch = useDispatch();
  const currentSectionNumber = useSelector((state) => state.currentSectionNumber);
  const url = usePathname();
  const queryParam = qs.parse(location.search);
  let link = '';

  const { survey } = configuration;
  React.useEffect(() => {

    if (url) {
      const values = url.split('section/');
      dispatch(updateSectionPageNumber(values[1].substring(0, 1)));
    }

    if (survey) {
      const cSurvey = survey.content.components.find(x => x.id === 'c-survey');
      const section = cSurvey.object.sections[parseInt(currentSectionNumber) - 1];
      const questions = section.questions;
      setQuestionsState(questions)
      setHeadingState({
        pageNumber: currentSectionNumber && parseInt(currentSectionNumber) || 1,
        name: section.name,
        image: section.hero[0].image.Desktop
      });
    }

  }, [location, currentSectionNumber, configuration, questionsState]);

  if (survey) {
    const cSurvey = survey.content.components.find(x => x.id === 'c-survey');
    const nexSection = cSurvey.object.sections[parseInt(currentSectionNumber)];
    if (!nexSection) {
      link = '/survey/results';
    } else {
      link = `/survey/section/` + ((parseInt(currentSectionNumber) + 1)) + '/?locale=' + queryParam.locale;
    }
  }

  if (!survey) return null;

  const onValueChange = (e, index, answerIndex) => {

    const quest = Object.assign([], [...questionsState]);

    const quest2 = quest[index].answer.map((x, ind) => {
      if (ind === answerIndex) {
        x.answered = 'true';
      } else {
        x.answered = 'false';
      }

      return x;
    })
    quest[index].answer = quest2

    setQuestionsState(quest)
  }

  return (
    <div>
      <SectionComponent data={headingState} />
      <div>
          {questionsState.map((x, index) => <div className="mx-auto max-w-3xl md:max-w-3xl lg:max-w-3xl 2xl:max-w-3xl 3xl:max-w-3xl md:mx-auto lg:mx-auto 2xl:mx-auto 3xl:mx-auto px-8">
            <div key={index}>
              {(x.id === "q_mcq") && <MCQ question={x} questionIndex={index} onValueChange={onValueChange} register={register} />}
              {
                (x.id === "q_yes_no") && (
                  <YesNo question={x} questionIndex={index} onValueChange={onValueChange} register={register} />
                )
              }
            </div>
          </div>
          )}
          <div className="next-btn-wrapper flex w-full text-center py-10 justify-center mt-16">
            <Link className="w-1/5 sm:w-1/2 md:w-1/2 lg:w-1/3 py-3 rounded-full btn-primary font-semibold text-poppins text-base block"
              to={link}>
              Next
          </Link>
          </div>
      </div>
    </div>
  )
}

export default SectionComponent1;