import "./Results.css"

const Results = ({score,onRestart}) => {
  return (
    <div className="results">
      <h2>QUIZ 종료!</h2>
      <div className="resultscore-wrap">
        <p>최종 점수</p>
        <p>{score}점</p>
      </div>
      <button onClick={onRestart}>다시 시작하기</button>
    </div>
  );
};

export default Results;