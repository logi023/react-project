import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from '../App';

import Header from "../components/Header";
import Button from '../components/Button';
import Editor from '../components/Editor';

const New = () => {
    const nav = useNavigate();
    const { onCreate } = useContext(DiaryDispatchContext);

    const onSubmit = (userInput) => {
        onCreate(
            userInput.createdDate.getTime(),
            userInput.emotionId,
            userInput.content,
        );
        nav('/', { replace:true })
    }

    return (
        <div className="New">
            <Header 
                title={'새 일기 쓰기'}
                leftChild={<Button 
                    onClick={() => nav(-1)}
                    text={'< 뒤로가기'} 
                />}
            />
            <Editor 
                onSubmit={onSubmit}
            />
        </div>
    )
}
export default New;