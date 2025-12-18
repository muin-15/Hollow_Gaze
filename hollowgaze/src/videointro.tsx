import './videointro.css';
import { useNavigate } from 'react-router-dom';
function Videointro(){
    const navigate=useNavigate();
    const handlevideoEnd=()=>{
        navigate('/leveltwo');
    }
    return(
        <div className='leveltwo-page'>
            <div className='Videostory'>
            <video  className='myvideo' src="./level2story.mp4" autoPlay onEnded={handlevideoEnd}></video>
            </div>
        </div>
    );
}
export default Videointro;