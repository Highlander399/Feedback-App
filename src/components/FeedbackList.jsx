import {useContext} from 'react'
import FeedbackContext from '../Context/FeedbackContext';
import Feedbackitem from './Feedbackitem'


function FeedbackList() {
    const {feedback} = useContext (FeedbackContext)
    if (!feedback || feedback.length === 0) {
        return <h2>No Feedback yet!!</h2>;
    }

    return (
    <div>
        {feedback.map((item,index)=>(
            <Feedbackitem key={index} feedbackitem = {item} />
        ))}
    </div>
  )
}

export default FeedbackList;