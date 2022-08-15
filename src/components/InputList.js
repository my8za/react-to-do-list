import React from 'react';

function InputList (props) {
  return (
    <div className='input-area'>
      <input type='text' onChange={props.onChange} />
      <button onClick={props.onAdd}>ADD ITEM</button>
    </div>
  );
}

export default InputList;