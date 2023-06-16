import React from "react";

export default function Section({
  todoList,
  onChange,
  clickRemoveButtonHandler,
}) {
  const handleChange = (id) => {
    onChange(id);
  };

  return (
    <div className="listWrapper">
      {todoList.map((item) => {
        return (
          <div className="todoContainer" key={item.id}>
            <div>
              <h2>{item.title}</h2>
              <div>{item.body}</div>
            </div>
            <div className="buttonSet">
              <button
                className="deleteBtn button"
                onClick={() => clickRemoveButtonHandler(item.id)}
              >
                삭제하기
              </button>
              <button
                className="completeBtn button"
                onClick={() => handleChange(item.id)}
              >
                {item.isDone ? "취소" : "완료"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
