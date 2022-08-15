import React, { useState, useEffect } from 'react';

function EditModal ({selectedItem, onUpdate}) {
  console.log(selectedItem)
  const [ value, setValue ] = useState('');

  const onChange = (e) => {
    // console.log(e.target.value)
    setValue(e.target.value)
    console.log(value)
  }
  // 수정할 item의 기존입력값
  // useEffect(() => {
  //   setValue(selectedItem.content)
  // }, []);


  const onSubmit = (e) => {
    e.preventDefault();
    onUpdate(selectedItem.id, value);
  }
  
  return (
    <>
      <form onSubmit={onSubmit}>
        <h3>EDIT</h3>
        <input 
          type="text" 
          value={value}
          onChange={onChange}
        />
        <button type="submit">modify</button>
      </form>
    </>
  );
} 

export default EditModal;