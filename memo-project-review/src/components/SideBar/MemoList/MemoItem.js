function MemoItem({ children, isSelected, onClickItem, onClickDelete }) {
    return(
        <li 
            className={"memo-item" + (isSelected ? ' selected' : '')}
            onClick={onClickItem}
        >
            {children}
            <button 
                className="memo-item__delete"
                onClick={onClickDelete}
            >X</button>
        </li>
    )
}
export default MemoItem;