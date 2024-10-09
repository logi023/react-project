import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DiaryStateContext, DiaryDispatchContext } from '../App';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';

const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const data = useContext(DiaryStateContext);
    const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
    const [curDiaryItem, setCurDiaryItem] = useState();

    useEffect(() => {
        const currentDiaryItem = data.find(
            (item) => String(item.id) === String(params.id)
        )

        if(!currentDiaryItem) {
            window.alert('존재하지 않는 일기입니다');
            nav('/', { replace:true });
        }

        setCurDiaryItem(currentDiaryItem);
    }, [params.id, data])

    const onClickDelete = () => {
        if(window.confirm('일기를 정말 삭제할까요?')) {
            onDelete(params.id);
            nav('/', { replace:true })
        }
    }
    
    const onSubmit = (userInput) => {
        if(window.confirm('일기를 정말 수정할까요?')) {
            onUpdate(
                params.id,
                userInput.createdDate.getTime(),
                userInput.emotionId,
                userInput.content
            );
            nav('/', { replace:true })
        }
    }

    return (
        <div className='New'>
            <Header 
                title={'일기 수정하기'} 
                leftChild={<Button 
                    onClick={() => nav(-1)}
                    text={'< 뒤로 가기'}    
                />}
                rightChild={<Button 
                    onClick={onClickDelete}
                    text={'삭제하기'} 
                    type={'NEGATIVE'} 
                />}
            />
            <Editor initData={curDiaryItem} onSubmit={onSubmit} />
        </div>
    )
}
export default Edit;