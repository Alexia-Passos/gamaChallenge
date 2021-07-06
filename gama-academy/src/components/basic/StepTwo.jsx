import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'

const StepTwo = ({stepContent, handleSubmit, setValue}) =>{ 
  return (
    <div className='mainStructureStep'>
        {!stepContent.sendQuestion &&
            <form className='insertQuestions'>
                <h3>Insira uma Questão</h3>
                <label>Número da Questão</label>
                <input 
                    type='number'
                    id='questionNumber'
                    value= { stepContent.sendQuestionNumber }
                    onChange= {(event) => setValue(event, 'sendQuestionNumber')}>
                </input>
                <label>Descrição</label>
                <textarea className='description'
                    type='text'
                    id='questionDescription'
                    value= { stepContent.sentQuestion }
                    onChange= {(event) => setValue(event, 'sentQuestion')} 
                    required>
                </textarea>
                <button type='submit' onClick={(event) => handleSubmit(event)}>Inserir</button>
            </form>
        }
        {stepContent.sendQuestion &&
            <div className='sentQuestion'>
                <h3>{stepContent.sendQuestionNumber + '. ' + stepContent.sentQuestion}  < FiCheckCircle size='25' color='#e0abab' /> </h3>
            </div>
        }
    </div>
  )
}
export default StepTwo