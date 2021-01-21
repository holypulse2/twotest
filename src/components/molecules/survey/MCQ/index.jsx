
import { IoCheckmark } from "react-icons/io5";


export const Selected = ({ answerItem, questionIndex, answerIndex, handleOnChange, register, className }) => {

  return (
  <>
    <input
      id={`q_mcq${questionIndex}_${answerIndex}`}
      type="radio"
      name={`answer_${questionIndex}`}
      value={answerItem.text}
      onChange={(e) => handleOnChange(e, questionIndex, answerIndex)}
      defaultChecked={answerItem.answered === 'true' }
      ref={register({ required: true })}
      className="radio"
    />
    <label className={className} for={`q_mcq${questionIndex}_${answerIndex}`}>
      {answerItem.text}
      <span><IoCheckmark/></span>
    </label>
  </>
  )
}

const MCQ = ({ question, questionIndex, onValueChange, register }) => {

  const handleOnChange = (e, index, answerIndex) => {
    onValueChange(e, index, answerIndex)
  };

  return (
    <ul className="card">
      <label className="control-label" htmlFor={`answer_${questionIndex}`} ><h2 className="question-title text-center sm:text-left text-poppins text-app-900 text-xl font-semibold">{question.question}</h2><br />
        {question.answer.map((answerItem, answerIndex) =>
          <li key={answerIndex} className="mutliple-choice-fields" onClick={(e) => handleOnChange(e, questionIndex, answerIndex)}> 
            {
              answerItem.answered === 'true' ? <Selected answerItem={answerItem} questionIndex={questionIndex} answerIndex={answerIndex} handleOnChange={handleOnChange} register={register} className='label-selected' />
                : <Selected answerItem={answerItem} questionIndex={questionIndex} answerIndex={answerIndex} handleOnChange={handleOnChange} register={register} className='label-unselected' />
            }
          </li>
        )}
      </label>
    </ul>
  )
}

export default MCQ;