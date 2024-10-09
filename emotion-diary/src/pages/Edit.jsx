import { useParams } from 'react-router-dom';

const Edit = () => {
    const params = useParams();

    return (
        <div>{params.id}번째 수정페이지</div>
    )
}
export default Edit;