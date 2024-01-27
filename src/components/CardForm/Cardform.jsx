import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Cardform() {

const formik =useFormik({
    initialValues: {
        cardHolderName:"",
        cardNumber:"",
        month:"",
        year:"",
        cvc:""
    },
    /*validationSchema: Yup.object({
        cardHolderName: Yup.string()
        .max(40, 'Must be 40 characters or less')
        .required('Required'),
        cardNumber:Yup.number() 
        .min(16)
        .max(16)
        .required('Required'),
        month:Yup.number()
        .required('Required'),
        year:Yup.number()
        .required('Required'),
        cvc:Yup.number()
        .max(3)*
    }),*/
    onSubmit:values=>{
        console.log(values)
    }
})


  return (
    <div>
        <form onSubmit={formik.handleSubmit}>

        <div>
             <label htmlFor='cardHolder'>Cardholder Name</label>
             <input
             id="cardHolder"
             name="cardHolder"
             type="text"
             onChange={formik.onChange}>
             value={formik.values.cardHolderName}
             </input>
             {formik.touched.cardHolderName && formik.errors.cardHolderName ? (
         <div>{formik.errors.cardHolderName}</div>
       ) : null}
        </div>

        {/***<div>
             <label htmlFor='cardNumber'>Card Number</label>
             <input
             id="cardNumber"
             name="cardNumber"
             type="text"
             onChange={formik.onChange}>
             value={formik.values.cardNumber}
             </input>
             {formik.touched.cardNumber && formik.errors.cardNumber ? (
         <div>{formik.errors.cardNumber}</div>
       ) : null}
        </div>

        <div>
             <label htmlFor='cardNumber'>Card Number</label>
             <input
             id="cardNumber"
             name="cardNumber"
             type="text"
             onChange={formik.onChange}>
             value={formik.values.cardNumber}
             </input>
             {formik.touched.cardNumber && formik.errors.cardNumber ? (
         <div>{formik.errors.cardNumber}</div>
       ) : null}
        </div>

        <div>
            <div>


           
             <label htmlFor='date'>Exp. Date (MM/YY) </label>

             <select
             id={'date'}
             name={'date'}
             onChange={formik.handleChange}
             value={formik.values.month}>
                <option value={1}>01</option>
                <option value={2}>02</option>
                <option value={3}>03</option>
                <option value={4}>04</option>
                <option value={5}>05</option>
                <option value={6}>06</option>
             </select>
             {formik.touched.month && formik.errors.month ? (
         <div>{formik.errors.month}</div>
       ) : null}

             <input
             id="year"
             name="year"
             type="text"
             onChange={formik.onChange}>
             value={formik.values.year}
             </input>
             {formik.touched.year && formik.errors.year ? (
             <div>{formik.errors.year}</div>
            ) : null}
        

            </div>
            
            <div>
            <div>
             <label htmlFor='cvc'>CVC</label>
             <input
             id="cvc"
             name="cvc"
             type="text"
             onChange={formik.onChange}>
             value={formik.values.cvc}
             </input>
             {formik.touched.cvc && formik.errors.cvc ? (
             <div>{formik.errors.cvc}</div>
            ) : null}
            </div>
            </div>
             </div>***/}

       </form>
    </div>
  )
}
