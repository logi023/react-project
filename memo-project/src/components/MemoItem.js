function MemoItem({ children, onClickItem, onClickDelete, isSelected }) {
    return (
        <div
            className={"MemoItem" + (isSelected ? ' selected' : '')}
            onClick={onClickItem}
        >
            {children}
            <button 
                className="MemoItem__button-delete"
                onClick={onClickDelete}
            >X</button>
        </div>
    )
}

export default MemoItem;