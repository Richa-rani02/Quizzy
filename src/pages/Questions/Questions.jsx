import "./Questions.css";
import {Link} from "react-router-dom";
import { questionList } from "../../data/data";
export const Questions = () => {
    return <>
    <section class="questions__section">
      <div class="question bottom-gutter-sm top-gutter-sm flex-col">
        <div className="category-label">
         <span>Famous Places</span>
        </div>
        
        <div class="question__header top-gutter-sm">
          <div class="left-side">
            <p>
              <span class="grey-text">Question: </span>1/10
            </p>
          </div>
          <div class="right-side">
            <p>
              <span class="grey-text">Timer:</span>
            </p>
          </div>
        </div>
        {questionList.map((question) => (
          <div class="question__body bottom-gutter-sm">
            <strong class="question-heading">{question.prompt}</strong>
            <div class="center-text top-gutter-lg">
              <div class="answer-options">{question.optionA}</div>
              <div class="answer-options">{question.optionB}</div>
              <div class="answer-options">{question.optionC}</div>
              <div class="answer-options">{question.optionD}</div>
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