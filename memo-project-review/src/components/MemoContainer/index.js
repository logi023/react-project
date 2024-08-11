import './index.css';

function MemoContainer({ memo, updateMemoData }) {
    if(!memo){
        return <div className="memo-container nodata">
            <div className="nodataItem">
                <h1>메모가 없습니다.</h1>
                <h2>새로운 메모를 추가해주세요.</h2>
            </div>
        </div>
    }

    return(
        <div className="memo-container">
            <div className="memo-title">
                <input 
                    type="text" 
                    value={memo.title}
                    onChange={(e) => {
                        updateMemoData({
                            ...memo,
                            title: e.target.value,
                        })
                    }}
                />
            </div>
            <div className="memo-contents">
                <textarea 
                    value={memo.content} 
                    onChange={(e) => {
                        updateMemoData({
                            ...memo,
                            content: e.target.value,
                        })
                    }}
                />
            </div>
        </div>
    )
}
export default MemoContainer