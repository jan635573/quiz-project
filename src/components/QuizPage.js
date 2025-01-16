import { useState } from "react";
import "./QuizPage.css";

const QuizPage = ({category, quizdata, onFinished}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const quizArr = quizdata.filter( (data)=>{
    return data.category === category;
  } );
  const currentQuiz = quizArr[currentIdx];
  const handleAnswer = (answer) => {
    // if(answer === currentQuiz.correct){
    //   setScore(score+10);
    // }
    const result = (answer === currentQuiz.correct) ? score+20 : score;
    if(currentIdx+1 < quizArr.length){
      setScore(result);
      setCurrentIdx(currentIdx+1);
    } else{
      //종료상태
      onFinished(result);
    }
  }
  return (
    <div className="quiz-page">
      <h2>Q.</h2>
      <span>주제 : {category}</span>
      {/* 1번째 p태그로 문제 제출 , div 태그 > button */}
      <p className="question">{currentQuiz.question}</p>
      <div className="choices">
        {
          currentQuiz.choices.map((txt,idx)=>{
            return <button key={idx} onClick={()=>{handleAnswer(txt)}}>{txt}</button>
          })
        }
      </div>
      <div className="q-footer">
        <p><strong>{currentIdx+1} / {quizArr.length}</strong></p>
        <p>현재 점수 : {score}점</p>
      </div>
    </div>
  );
};

export default QuizPage;