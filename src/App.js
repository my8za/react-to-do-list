import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import InputList from './components/InputList'
import TodoBoard from './components/TodoBoard';
import EditModal from './components/EditModal'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    height:100%;
    background:#f7f1f1;
    font-size:1.1rem;
    font-family: sans-serif;
  }
  .todoList {
    max-width:500px;
    height:90vh;
    margin:4rem auto;
    padding:2rem 3rem 3rem;
    background:#FF6666;
    box-shadow:-20px -20px 0px 0px rgba(100,100,100,.1);
    color:#FFF;

    span {
      display: flex;
      justify-content: space-between;
      width: 20%;
    }
  }
  .todo-item {
    display: flex;
    justify-content:space-between;
    align-items:center;
    margin:0 -3rem 4px;
    padding:1.1rem 3rem;
    background:rgba(255,255,255,0.1);
  }

  h2 {
    border-bottom:1px solid rgba(255,255,255,.3); 
    font-weight:normal;
    font-size:2.6rem;
    letter-spacing:0.05em;
  }

  .input-area {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  input {
    flex-grow:1;
    height : 3rem;
    padding:0 1.5em;
    margin-bottom: 40px;
    border:none;
    background:#f7f1f1;
    font-size:initial;
    outline: none;
  }
  button {
    height: 3rem;
    padding:0 1.3rem;
    margin-left:5px;
    border:1px solid rgba(255,255,255,.3);
    background:#FF6666;
    color:white;
    font-weight:bold;
    cursor:pointer;
    transition:background .2s ease-out;
  }
  button:hover {
    background:#FF5E5E;
  }

}`;


function App() {

  function randomIdGenerate() {
  return '_' + Math.random().toString(36).substring(2, 9)
}

  const [ inputValue, setInputValue ] = useState({
    id: '',
    content: '',
    status: false
  });

  const [ todoList, setTodoList ] = useState([]); //투두리스트 목록
  // const [ status, setStatus ] = useState(false); // 진행상태
  const [ modal, setModal ] = useState(false);  //모달창

  const onChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  }

  const onAdd = () => {
    // console.log('add item', inputValue)

    const newList = {
      id: randomIdGenerate(),
      content: inputValue,
      status: false
    }

    setTodoList(todoList.concat(newList))  //투두 리스트 목록에 새로 입력한 값으로 아이템 추가
  }

  // item 삭제
  const onDelete  = (id) => {
    console.log(id)
    setTodoList(todoList.filter(item => item.id !== id));
  }

  // item 수정
  // modal
  const [ openModal, setOpenModal ] = useState(true);

  // edit 버튼 클릭시, 클릭한 아이템 정보 관리 state
  const [ selectedItem, setSelectedItem ] = useState(null)

  const onSelectItem = (todo) => {
    console.log(todo);
    setSelectedItem(todo);
    console.log(selectedItem)
  }

  const onUpdate = (itemId, newContent) => {
    console.log(itemId)
    setTodoList(todoList.map(item => 
      (itemId === todoList.id ? {...todoList, content: newContent} : todoList) 
    ))
  }




  
  return (
    <div>
      <GlobalStyle />
      <EditModal selectedItem={selectedItem} onUpdate={onUpdate} />
      <div className='todoList'>
        <h2>Todo List</h2>
        <InputList onChange={onChange} onAdd={onAdd}/>
        <TodoBoard todoList={todoList}  onDelete={onDelete} onSelectItem={onSelectItem}/>
      </div>
    </div>
  );
}

export default App;
