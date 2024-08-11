import './index.css';
import SideBarHead from './SideBarHead';
import MemoList from './MemoList';
import SideBarFooter from './SideBarFooter';

function SideBar({ memoDatas, selectedMemoIndex, setSelectedMemoIndex, onClickAdd, deleteMemo }) {
    return(
        <div className="side-bar">
            <SideBarHead />
            <MemoList 
                memoDatas={memoDatas} 
                selectedMemoIndex={selectedMemoIndex} 
                setSelectedMemoIndex={setSelectedMemoIndex}
                deleteMemo={deleteMemo}
            />
            <SideBarFooter
                onClickAdd={onClickAdd}
            />
        </div>
    )
}
export default SideBar;