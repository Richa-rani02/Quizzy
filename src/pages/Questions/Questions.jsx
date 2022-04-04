import "./Questions.css";
import {Link} from "react-router-dom";
import { questionList } from "../../data/data";
export const Questions = () => {
    return <>
    <section className="questions__section">
      <div className="question bottom-gutter-sm top-gutter-sm flex-col">
        <div className="category-label">
         <span>Famous Places</span>
        </div>
        
        <div className="question__header top-gutter-sm">
          <div className="left-side">
            <p>
              <span className="grey-text">Question: </span>1/10
            </p>
          </div>
          <div className="right-side">
            <p>
              <span className="grey-text">Timer:</span>
            </p>
          </div>
        </div>
        {questionList.map((question) => (
          <div className="question__body bottom-gutter-sm" key="1">
            <strong className="question-heading">{question.prompt}</strong>
            <div className="center-text top-gutter-lg" >
              <div className="answer-options">{question.optionA}</div>
              <div className="answer-options">{question.optionB}</div>
              <div className="answer-options">{question.optionC}</div>
              <div className="answer-options">{question.optionD}</div>
            </div>
            <div className="flex-container">
            <Link to="/result" class="btn btn-solid-primary btn-sm btn-rounded-5 auto-margin">Next</Link>
              </div> 

          </div>
        ))}
      </div>
    </section>
    </>;
  };