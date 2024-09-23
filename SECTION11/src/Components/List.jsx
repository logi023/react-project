import './List.css';
import { useState, useMemo, useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoStateContext } from '../App';

const List = () => {
  const todos = useContext(TodoStateContext);

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

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    // console.log('sdfsd')
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length; // filter는 배열을 전체 순환하기 때문에 길이가 길어질수록 오래걸림. 때문에 불필요한 
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    }
  }, [todos]);

  return <div className='List'>
    <h4>Todo List 🌱</h4>
    <div>total: {totalCount}</div>
    <div>done: {doneCount}</div>
    <div>notDone: {notDoneCount}</div>
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
          />
        )
      })}
    </div>
  </div>
}
export default List;