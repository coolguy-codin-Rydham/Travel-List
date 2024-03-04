import { useState } from "react";
import "./Cards.css"
import { questions } from "./Questions";
function FlashCards() {
    const handleClick = (id, selected) =>{
        if(id===selected){
            setSelectedId(null);
        }
        else{
            setSelectedId(id);
        }
    }


  const [selectedId, setSelectedId] = useState(null);
  return (
    <div
        className="flashcards">
        {questions.map((question)=>(
            <div key={question.id} onClick={()=>handleClick(question.id, selectedId)} className={question.id === selectedId ? "selected":""}>
                <p>{question.id === selectedId ? question.answer:question.question}</p>
            </div>
        ))}
    </div>
  );
}

export default FlashCards;
