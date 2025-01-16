import "./CategorySelection.css";

const CategorySelection = ({categories,onCategorySelect}) => {
  return (
    <div className="category-selection">
      <span>알아두면 도움 되는 <strong>금융</strong></span>
      <h1>QUIZ</h1>
      <p>주제를 선택하세요</p>
      {/* 1. 카테고리를 button으로 작성 */}
      {
        categories.map((txt,idx)=>{
          return <button
          key={idx}
          onClick={()=>{onCategorySelect(txt)}}
          >{txt}</button>
        })
      }
    </div>
  );
};

export default CategorySelection;