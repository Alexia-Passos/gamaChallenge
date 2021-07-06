import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'


const stepThree = ({stepContent, handleSubmit, setValue}) => {
  const sentAltTitle = "Alternativas"
  return (
      <div className='mainStructureStep'>
          {!stepContent.sendAlternatives &&
              <form className='insertAlternatives'>
                  <h3>Insira alternativas</h3>
                  <div>
                      <label>Alternativa A - Alternativa Correta?</label>
                      <input className='optionStyle' type='checkbox' name='alternatives' onChange={(event) => setValue(event, 'checkboxA')} checked={stepContent.checkboxA}></input>
                  </div>
                  <input
                      type='text'
                      value={stepContent.alternativeA}
                      onChange={(event) => setValue(event, 'alternativeA')}
                      required></input>
                  <div>
                      <label>Alternativa B - Alternativa Correta?</label>
                      <input className='optionStyle' type='checkbox' name='alternatives' onChange={(event) => setValue(event, 'checkboxB')} checked={stepContent.checkboxB}></input>
                  </div>
                  <input
                      type='text'
                      value={stepContent.alternativeB}
                      onChange={(event) => setValue(event, 'alternativeB')}
                      required>
                  </input>
                  <div>
                      <label>Alternativa C  - Alternativa Correta?</label>
                      <input className='optionStyle' type='checkbox' name='alternatives' onChange={(event) => setValue(event, 'checkboxC')} checked={stepContent.checkboxC}></input>
                  </div>
                  <input
                      type='text'
                      value={stepContent.alternativeC}
                      onChange={(event) => setValue(event, 'alternativeC')}
                      required></input>
                  <button type='submit' onClick={(event) => handleSubmit(event)}>Inserir</button>
              </form>
          }
          {stepContent.sendAlternatives &&
              <div className='sentAlternatives'>
                  <h3 >{sentAltTitle} < FiCheckCircle size='25' color='#e0abab' /></h3>
                  <ol>
                      <li type='A'>{stepContent.alternativeA}</li>
                      <li type='A'>{stepContent.alternativeB}</li>
                      <li type='A'>{stepContent.alternativeC}</li>
                  </ol>
              </div>
          }
      </div>
  )
}

export default stepThree