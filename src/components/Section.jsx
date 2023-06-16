import React from "react";

export default function Section({ todoList, onChange }) {
  // console.log(todoList);
  // const clickRemoveButtonHandler = (id) => {
  //   const resultArray = todoList.filter((item) => item.id !== id);
  //   setTodoList(resultArray);
  // };
  // const onChangeHandler = (id) => {
  //   // isDone false -> true 바뀌면 Done필드로 간다
  //   // 렌더링하기위한 state는 todoList라는 변수
  //   // id가 일치하는애만 불리언값을 변경해주면됨
  //   const resultArray = [];
  //   // // 투두리스트를 포문으로 돔 item.id 가 매개변수로 받은 id랑 일치하면 불리언값을 바꿔줌
  //   for (let i = 0; i < todoList.length; i++) {
  //     if (todoList[i].id === id) {
  //       todoList[i].isDone = !todoList[i].isDone;
  //     }
  //     resultArray.push(todoList[i]);
  //   }
  //   // // 새로운 배열을 setTodoList에 넣어주면됨
  //   setTodoList(resultArray);
  // };

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
                // onClick={() => clickRemoveButtonHandler(item.id)}
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

  // return (
  //   <>
  //     <div className="listWrapper">
  //       {todoList.map((item) => {
  //         console.log(item, todoList);
  //         return !item.isDone ? (
  //           <div className="todoContainer" key={item.id}>
  //             <div>
  //               <h2>{item.title}</h2>
  //               <div>{item.body}</div>
  //             </div>
  //             <div className="buttonSet">
  //               <button
  //                 className="deleteBtn button"
  //                 onClick={() => clickRemoveButtonHandler(item.id)}
  //               >
  //                 삭제하기
  //               </button>
  //               <button
  //                 className="completeBtn button"
  //                 onClick={() => {
  //                   onChangeHandler(item.id);
  //                 }}
  //               >
  //                 완료
  //               </button>
  //             </div>
  //           </div>
  //         ) : (
  //           <div key={item.id}></div>
  //         );
  //       })}
  //     </div>
  //     <div className="listWrapper">
  //       {todoList.map((item) => {
  //         return item.isDone ? (
  //           <div className="todoContainer" key={item.id}>
  //             <div>
  //               <h2>{item.title}</h2>
  //               <div>{item.body}</div>
  //             </div>
  //             <div className="buttonSet">
  //               <button
  //                 className="deleteBtn button"
  //                 onClick={() => clickRemoveButtonHandler(item.id)}
  //               >
  //                 삭제하기
  //               </button>
  //               <button
  //                 className="completeBtn button"
  //                 onClick={() => {
  //                   onChangeHandler(item.id);
  //                 }}
  //               >
  //                 취소
  //               </button>
  //             </div>
  //           </div>
  //         ) : (
  //           <div key={item.id}></div>
  //         );
  //       })}
  //     </div>
  //   </>
  // );
}
