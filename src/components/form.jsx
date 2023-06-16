import React from "react";

export default function Form({
  onSubmitButtonHandler,
  onChangeTitleHandler,
  onChangeBodyHandler,
  title,
  body,
}) {
  return (
    <form className="addForm" onSubmit={onSubmitButtonHandler}>
      <div className="inputGroup">
        <label className="formLabel">제목</label>
        <input
          type="text"
          className="addInput"
          value={title}
          onChange={onChangeTitleHandler}
          required
        />
        <label className="formLabel">내용</label>
        <input
          type="text"
          className="addInput"
          value={body}
          onChange={onChangeBodyHandler}
          required
        />
      </div>
      <button className="addBtn">추가하기</button>
    </form>
  );
}
