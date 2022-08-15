import React from 'react';
import TodoItem from './TodoItem';

function TodoBoard ({todoList, onDelete, onSelectItem}) {
  console.log(todoList)
  return (
    <div>
      {todoList.map(item => 
        <TodoItem item={item} onDelete={onDelete} onSelectItem={onSelectItem}/>
      )}
    </div>
  );
}

export default TodoBoard;