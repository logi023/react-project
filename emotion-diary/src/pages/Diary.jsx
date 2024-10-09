import { useParams } from 'react-router-dom';

const Diary = () => {
    const params = useParams();

    return (
        <div>{params.id}번째 다이어리</div>
    )
}
export default Diary;