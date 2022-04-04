import {useNavigate } from "react-router-dom";
import { rules } from "../../data/data";
import "./Modal.css";
export const Modal = ({isModalActive,setModalActive}) => {
    let navigate=useNavigate();
 const clickHandler=()=>{
    setModalActive(prev=>!prev);
    navigate("/question");
 }
    return (
        <div className={`modal-container ${isModalActive && 'modal-active'}`}>
            <div className="popup">
                <div className="modal-content display-flex-col">
                    <h2 className="heading-1 bottom-gutter-md center-text">RULES 📑</h2>
                    <div className="rules-list">
                        {rules.map((rule) => (
                            <div key={rule.id} className="bottom-gutter-sm">
                                <span>{rule.rule}</span>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="modal-btn" onClick={()=>clickHandler()}>
                    <button className="btn btn-solid-primary btn-sm btn-rounded-5">Start Quiz</button>
                </div>
            </div>
        </div>
    )
}