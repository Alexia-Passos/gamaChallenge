import React from 'react'

export default props => {

    const arr = [
      {indice: '1', exam:'Prova um da lista de prova'},
      {indice: '2', exam:'Prova dois da lista de prova'},
      {indice: '3', exam:'Prova tres da lista de prova'},
  ]
    const examListMapped = arr.map((i)=>{
    return (
      <div className='examList'>
          <a > {i.indice}.  {i.exam}</a>
      </div>
    )
    })
    return (
      <div>
        <h3>{examListMapped} </h3>  
      </div>
    )
}
