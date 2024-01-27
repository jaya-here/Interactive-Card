import React from 'react'
import backgroundCard from '../../assets/images/bg-card-back.png'
import './BackCard.css'
import { useCardFormDetails } from '../Context/Cardformcontext'

function BackCard() {
  const formik = useCardFormDetails().formik
  return (
    <div className='backcard'>
        <div className='backcard__wrapper'>
        <img
        src={backgroundCard}
        className='backcard__image'
        ></img>
        <h5 className='backcard__number'>
          {
            formik.errors?.cvc ? "" : 
            formik.values.cvc === "" ? <div>000</div> : <div>{formik.values.cvc}</div>
          }
        </h5>
        </div>
        
    </div>

  )
}

export default BackCard