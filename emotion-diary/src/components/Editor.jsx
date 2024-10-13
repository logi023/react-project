import './Editor.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmotionItem from '../components/EmotionItem';
import Button from '../components/Button';
import { emotionList } from '../util/emotionList';
import { getStringedDate } from '../util/get-stringed-date';

const Editor = ({ onSubmit, initData }) => {
    const nav = useNavigate();
    const [userInput, setUserInput] = useState({
        createdDate: new Date(),
        emotionId: 1,
        content: '',
    });

    useEffect(() => {
        if(initData) {
            setUserInput({
                ...initData,
                createdDate: new Date(Number(initData.createdDate))
            })
        }
    }, [initData])

    const getStringedDate = (targetDate) => {
        let year = targetDate.getFullYear();
        let month = targetDate.getMonth() + 1;
        let date = targetDate.getDate();

        if(month<10) {
            month = `0${month}`
        }
        if(date<10) {
            date = `0${date}`
        }

        return `${year}-${month}-${date}`;
    }

    const onChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        
        if(name === 'createdDate') {
            value = new Date(value);
        }
    
        setUserInput({
            ...userInput,
            [name]: value,
        })
    }

    const onClickSubmitButton = () => {
        onSubmit(userInput)
    }

    return (
        <div className="Editor">
            <section className='date_section'>
                <h4>오늘의 날짜</h4>
                <input 
                    name='createdDate'
                    onChange={onChangeInput}
                    value={getStringedDate(userInput.createdDate)}
                    type="date"     
                />
            </section>
            <section className='emotion_section'>
                <h4>오늘의 감정</h4>
                <div className="emotion_list_wrapper">
                    {emotionList.map((item) => 
                        <EmotionItem 
                            onClick={() => onChangeInput({
                                target: {
                                    name: 'emotionId',
                                    value: item.emotionId,
                                }
                            })}
                            key={item.emotionId} 
                            {...item} 
                            isSelected={item.emotionId === userInput.emotionId}
                        />
                    )}
                </div>
            </section>
            <section className='content_section'>
                <h4>오늘의 일기</h4>
                <textarea 
                    name='content'
                    value={userInput.content}
                    onChange={onChangeInput}
                    placeholder='오늘은 어땠나요?' 
                />
            </section>
            <section className='button_section'>
                <Button 
                    onClick={()=> nav(-1)}
                    text={'취소하기'}     
                />
                <Button 
                    onClick={onClickSubmitButton}
                    text={'작성완료'} 
                    type={'POSITIVE'} 
                />
            </section>
        </div>
    )
}
export default Editor;