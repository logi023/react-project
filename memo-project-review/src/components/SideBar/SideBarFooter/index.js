import './index.css';

function SideBarFooter({ onClickAdd }) {
    return(
        <div className="side-bar__footer">
            <button 
                className="btn-add"
                onClick={onClickAdd}
            >
                +
            </button>
        </div>
    )
}
export default SideBarFooter;