import './List.css';
import { useState } from 'react';
import TodoItem from './TodoItem';

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  const getFilteredData = () => {
    if(search === '') { // 검색어가 없는 상태니까 전체 todos 반환
      return todos
    }
    return todos.filter((todo) => 
      todo.content.toLowerCase().includes(search.toLowerCase())
    ) // 배열의 모든 아이템을 순회하면서 현재 todo의 content 중 search의 값을 포함하고 있는 아이템만 필터링.
  }
  const filteredTodos = getFilteredData();

  return <div className='List'>
    <h4>Todo List 🌱</h4>
    <input 
      value={search}
      onChange={onChangeSearch}
      type="text" 
      placeholder='검색어를 입력하세요' 
    />
    <div className='todos_wrapper'>
      {/* <TodoItem />
      <TodoItem />
      <TodoItem /> */}
      {filteredTodos.map((todo) => {
        return (
          <TodoItem 
            key={todo.id} 
            {...todo} 
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        )
      })}
    </div>
  </div>
}
export default List;