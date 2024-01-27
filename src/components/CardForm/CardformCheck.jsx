import './CardformCheck.css'
import { useCardFormDetails } from '../Context/Cardformcontext';

export default function CardformCheck() {

  let formik = useCardFormDetails().formik



  return (
    <div className='cardform'>
    <form onSubmit={formik.handleSubmit}>
        <div className='card_input'> 
        <label htmlFor='cardHolderName'>Cardholder Name</label>
        <input
        id="cardHolderName"
        name="cardHolderName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.cardHolderName}
        placeholder='e.g. Jane Alteed'
        className='card__input'
        >
        </input>
        {formik.errors.cardHolderName ? (
         <div className='input__error'>{formik.errors.cardHolderName}</div>
       ) : null}

        </div>
        <div className='card_input'> 
        <label htmlFor='cardNumber'>Card Number</label>
        <input
        id="cardNumber"
        name="cardNumber"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.cardNumber}
        placeholder='e.g. 1234 5678 9123 0000'
        className='card__input'
        >
        </input>
        {formik.errors.cardNumber ? (
         <div className='input__error'>{formik.errors.cardNumber}</div>
       ) : null}
        </div>

        <div>
        <div className='card__lastrow'>

        <div className='card__year'>

        <div>
        <label htmlFor='cvc'>Exp. Date (MM/YY) </label>
        </div>

        <div className='card__date__input'>

        <div>
        <input
        id="month"
        name="month"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.month}
        placeholder='MM'
        className='card__input__date'
        >
        </input>
        {formik.errors.month ? (
         <div className='input__error'>{formik.errors.month}</div>
       ) : null}
       </div>
  
        <div>
        <input
        id="year"
        name="year"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.year}
        placeholder='YY'
        className='card__input__date'
        >
        </input>
        {formik.errors.year ? (
         <div className='input__error'>{formik.errors.year}</div>
       ) : null}
        </div>
        </div>
        </div>
        
        <div className='card_input__type2'> 
        <label htmlFor='cvc'>CVC</label>
        <input
        id="cvc"
        name="cvc"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.cvc}
        placeholder='e.g. 123'
        className='card__input__cvc'
        >
        </input>
        {formik.errors.cvc ? (
         <div className='input__error'>{formik.errors.cvc}</div>
       ) : null}
        </div>


        </div>  

        </div>

        <button
        type="submit"
        className='submit-button'>Confirm</button>
    </form>
    </div>
  )
}
