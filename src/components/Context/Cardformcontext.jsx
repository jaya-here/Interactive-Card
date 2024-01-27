import { createContext, useContext } from "react";
import * as Yup from 'yup';
import { useFormik } from 'formik';

let CardFormContext = createContext() 

export function useCardFormDetails() {
    console.log(useContext(CardFormContext))
    return useContext(CardFormContext);
}

export default function CardFormContextProvider({children}) {

    const formik =useFormik({
        initialValues: {
            cardHolderName:"",
            cardNumber:"",
            month:"",
            year:"",
            cvc:""
        },
        validationSchema:Yup.object({
            cardHolderName:Yup.string()
            .max(45,'Maximum of 45 characters is only allowed'),
            cardNumber:Yup.string() 
            .min(19)
            .max(19)
            .required('Required'),
            month:Yup.string().oneOf(['01','02','03','04','05','06','07','08','09','10','11','12'], "Enter in the following format '01' for Jan"),
            year:Yup.number()
            .required('Required'),
            cvc:Yup.string()
            .max(3)
        }),
        onSubmit:values=>{
            console.log(values)
        }
    })

    return (
        <CardFormContext.Provider value={{formik:formik}}>
            {children}
        </CardFormContext.Provider>
    )

}