import './index.css';
import MemoItem from './MemoItem';

function MemoList({ memoDatas, selectedMemoIndex, setSelectedMemoIndex, deleteMemo }) {
    return(
        <ul className="memo-list">
            {memoDatas && memoDatas.map((memo, index) => (
                <MemoItem
                    key={index}
                    index={index}
                    isSelected={index === selectedMemoIndex}
                    onClickItem={() => {
                        setSelectedMemoIndex(index)
                    }}
                    onClickDelete={(e) => {
                        e.stopPropagation();
                        deleteMemo(index)
                    }}
                >{ memo.title }</MemoItem>
            ))}
        </ul>
    )
}
export default MemoList;