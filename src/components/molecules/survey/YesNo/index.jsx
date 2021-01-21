import { IoCheckmark, IoCloseOutline } from "react-icons/io5";

const YesNo = ({question, questionIndex, onValueChange, register}) => {
  
    const handleOnChange = (e, index, answerIndex) =>{ 
      onValueChange(e, index, answerIndex)
    };
  
    return (
      <div className="card">
  
        <label className="control-label" htmlFor={`answer_${questionIndex}`} ><h2 className="question-title text-center sm:text-left text-poppins text-app-900 text-xl font-semibold">{question.question}</h2><br />
          <ul className="yes-no-field">
            {question.answer.map((answerItem, answerIndex) => 
              <li className="yes-no-field__li" key={answerIndex}>
                <input 
                  id={`q_mcq${questionIndex}_${answerIndex}`} 
                  type="radio" 
                  name={`answer_${questionIndex}`} 
                  value={answerItem.text}
                  onChange={(e) =>handleOnChange(e, questionIndex, answerIndex)}
                  defaultChecked={ answerItem.answered == 'true'}
                  ref={register({ œ: true })} 
                  className="yes-no-field__radio" 
                />
                <label className="yes-no-field__label" for={`q_mcq${questionIndex}_${answerIndex}`}><span className="yes-no-field__span">
                    <IoCheckmark/>
                </span>{answerItem.text}</label>
              </li>
            )}
          </ul>
          
        </label>
      </div>
    )
  }

  export default YesNo;