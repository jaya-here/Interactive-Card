import React from 'react'
import image from '../../assets/images/bg-card-front.png'
import './FrontCard.css'
import { useCardFormDetails } from '../Context/Cardformcontext'

export default function FrontCard() {

  const formik = useCardFormDetails().formik

  return (
  
        <div className='frontcard__base'>
        <img
        src={image}
        alt={"card-front"}
        className='frontcard__image'>
        </img>
        <div className='frontcard__content'>
        <div className='frontcard__content__shapes'>
            <div className='fc_content_fillCircle'></div>
            <div className='fc_content_clearCircle'></div>
        </div>
        <div className='frontcard__content__text'>
        <div >
        <div>
            <h4 className='fc_card_number'>
            {
            formik.errors?.cardNumber ? 
            formik.errors?.cardNumber === "cardNumber must be at least 19 characters"?<div>{formik.values.cardNumber}</div>:""
            : 
            formik.values.cardNumber === "" ? <div>0000 0000 0000 0000</div> : <div>{formik.values.cardNumber}</div>
          }
            </h4>
        </div>
        <div className='frontcard__lastrow'>
            <p>
            {
            formik.errors?.cardHolderName ? "" : 
            formik.values.cardHolderName === "" ? <div>Jane Alteed</div> : <div>{formik.values.cardHolderName}</div>
            }
            </p>
            <p>{
            formik.errors?.month? "" : 
            formik.values.month === "" ? "00" : <>{formik.values.month}</>
            }/
            {
            formik.errors?.year? "" : 
            formik.values.year === "" ? "00" : <>{formik.values.year}</>
            }</p>
        </div>
        </div>
        </div>
        </div>
        </div>

  )
}
