import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/form";
import Section from "./components/Section";
import "./App.css";

// 추가하기 눌렀을때 working필드에 붙어야함
// 완료 누르면 done, 삭제하기 누르면 display:none
// 취소 누르면 working 필드로 이동
function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 0,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부합시다",
      isDone: false,
    },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [nextId, setNextId] = useState(1);

  //변경될 필드
  const onChangeTitleHandler = (event) => {
    setTitle(event.target.value);
  };
  // 등록필드
  const onChangeBodyHandler = (event) => {
    setBody(event.target.value);
  };
  // 추가버튼
  const onSubmitButtonHandler = (event) => {
    event.preventDefault();
    // 인풋 창 비어있을 때 submit안되게 추가 / 조건문에 state
    const newTodoList = {
      // 중복id가 생길수 있음, 유니크한 id값으로 수정해야함
      id: nextId,
      title,
      body,
      isDone: false,
    };
    // console.log(newTodoList);
    setTodoList([...todoList, newTodoList]);
    setTitle("");
    setBody("");
    setNextId(nextId + 1);
  };
  const workings = todoList.filter((item) => !item.isDone);
  console.log(workings);
  const dones = todoList.filter((item) => item.isDone);
  console.log(dones);
  return (
    <div className="layout">
      <Header>
        <h1 className="headTitle">My Todo List</h1>
        <div>React</div>
      </Header>
      <Form
        onSubmitButtonHandler={onSubmitButtonHandler}
        onChangeTitleHandler={onChangeTitleHandler}
        onChangeBodyHandler={onChangeBodyHandler}
        title={title}
        body={body}
      />
      <div className="listContainer">
        <h2>Working..🔥</h2>
        {/* isDone == false인 todoList  */}
        <Section
          todoList={workings}
          onChange={(id) => {
            setTodoList((prev) => {
              return prev.map((item) => {
                if (item.id === id) {
                  return { ...item, isDone: true };
                } else {
                  return item;
                }
              });
            });
          }}
        />
        <h2>Done ! 🎉</h2>
        <Section
          todoList={dones}
          onChange={(id) => {
            setTodoList((prev) => {
              return prev.map((item) => {
                if (item.id === id) {
                  return { ...item, isDone: false };
                } else {
                  return item;
                }
              });
            });
          }}
        />
      </div>
    </div>
  );
}

export default App;
