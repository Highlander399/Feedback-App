import React, { useContext, useEffect, useState } from 'react'
import Card from "./shared/card";
import Button from "./shared/Button";
import SelectRated from './SelectRated';
import FeedbackContext from '../Context/FeedbackContext';

function FeedbackForm() {
    const {addFeedback, feebackEdit, updateFeedback} = useContext(FeedbackContext)
    const [text, setText] = useState("")
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(6)

    useEffect(() =>{
        if (feebackEdit.edit === true){
            setBtnDisabled(false)
            setText(feebackEdit.item.text)
            setRating(feebackEdit.item.rating)
        }
    }, [feebackEdit]);

    const handleFeedback = (e) => {
        if (text === '') {
            setMessage(null)
            setBtnDisabled(true)
        }else if(text !== null && text.trim().length <= 15){
            setMessage("you must have at least 15 charchter")
            setBtnDisabled(true)
        }else{
            setBtnDisabled(false)
            setMessage("")
        }
        setText(e.target.value)
        console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        if (text.trim().length > 15) {
           const newfeedback ={
              text: text,
              rating: rating,
           } 
           if (feebackEdit.item === true) {
               updateFeedback(feebackEdit.item.id, newfeedback)
           }else{
               addFeedback(newfeedback)
           }
           
           console.log(newfeedback);
        }
         setText("")
         e.preventDefault();
    }
  return (
    <Card>
      <h2>How would you like to rate our service?</h2>
        <form onSubmit={handleSubmit}>
           <SelectRated select={(rating) => setRating(rating)} />
           <div className="input-group">
                <input type="text" placeholder='Write a review' onChange={handleFeedback} />
                <Button type={"submit"} isDisable= {btnDisabled} version={"secondary"}>Send</Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm;
