import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'

const StepOne = ({stepContent, handleSubmit, setValue}) => {
  return (
      <div className='mainStructureStep'>
          {!stepContent.sendExams &&
              <form className='insertExam'>
                  <h3>Especifique a Prova</h3>
                  <label>Título da Prova</label>
                  <input 
                      type='text'
                      id= 'examId'
                      value= {stepContent.examsTitle}
                      onChange={ (event) => setValue(event, 'examsTitle')} 
                      required>
                  </input>
                  <button type='submit' onClick={(event) => handleSubmit(event)}>Inserir</button>
              </form>
          }
          {stepContent.sendExams &&
              <div className='sentExam'>
                  <h3>{stepContent.examsTitle} < FiCheckCircle size='25' color='#e0abab' /></h3>
              </div>
          }
      </div>
  )
}  

export default StepOne