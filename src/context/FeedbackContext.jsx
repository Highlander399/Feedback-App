import { useEffect, useState } from "react";
import { createContext } from "react";
import FeedbackData from "../data/FeedbackData"
// import { DefaultContext } from "react-icons/lib";


const FeedbackContext = createContext () 


export function FeedbackProvider ({children}) {
    const [feedback, setFeedback] = useState([])
   
    const [feebackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });
       useEffect(() => {
        fetchDate()
       }, []);

    const fetchDate = async () => {
        const response = await fetch ("http://192.168.134.2:3000/feedback")
        const data = await response.json();
        setFeedback(data)
    };
    
    const editHndler = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    };

    const updateFeedback = async (id, uptItem) => {
        const response = await fetch (`http://192.168.134.2:3000/feedback/${id}`,{
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(uptItem)
        })
        setFeedbackEdit(feedback.map((item) => item.id ===id? {...item, ...data} : item))
    };


  const handleDeleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete?...")) {
      await fetch(`http://192.168.134.2:3000/feedback/${id}`, {method: "DELETE"})
      setFeedback(feedback.filter((item) => item.id !== id ))
    }
  };

  const addFeedback = async (newfeedback) => {
    const response = await fetch ("http://192.168.134.2:3000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newfeedback)
    })
     const data = await response.json()
     setFeedback([data, ...feedback])
  };

    return (
        <FeedbackContext.Provider value={{
          feedback ,
          feebackEdit,
          addFeedback, 
          handleDeleteFeedback ,
          editHndler,
          updateFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )

}
export default FeedbackContext;