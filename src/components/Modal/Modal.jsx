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
        <div class={`modal-container ${isModalActive && 'modal-active'}`}>
            <div class="popup">
                <div class="modal-content display-flex-col">
                    <h2 class="heading-1 bottom-gutter-md center-text">RULES 📑</h2>
                    <div className="rules-list">
                        {rules.map((rule) => (
                            <div key={rule.id} className="bottom-gutter-sm">
                                <span>{rule.rule}</span>
                            </div>
                        ))}

                    </div>
                </div>
                <div class="modal-btn" onClick={()=>clickHandler()}>
                    <button class="btn btn-solid-primary btn-sm btn-rounded-5">Start Quiz</button>
                </div>
            </div>
        </div>
    )
}