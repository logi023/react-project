import './TodoItem.css'

const TodoItem = () => {
  return (
    <div className="TodoItem">
      <input type="checkbox" />
      <div className="contents">Todo...</div>
      <div class="date">Date</div>
      <button>삭제</button>
    </div>
  )
}
export default TodoItem;