import MemoItem from "./MemoItem";

function MemoList({ memos, setSelectedMemoIndex, selectedMemoIndex, deleteMemo }) {
    return (
        <div>
            {memos.map((memo, index) => (
                <MemoItem 
                    key={index}
                    onClickItem={() => {
                        setSelectedMemoIndex(index);
                    }}
                    onClickDelete={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        deleteMemo(index);
                    }}
                    index={index}
                    setSelectedMemoIndex={setSelectedMemoIndex}
                    isSelected={index === selectedMemoIndex}
                >{memo.title}</MemoItem>
            ))}
        </div>
    );
}

export default MemoList;