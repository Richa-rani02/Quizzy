import "./Result.css";
import { questionList } from "../../data/data";
export const Result = () => {
  return (
    <section class="result__section top top-gutter-sm center-text">
      <div class="result">
        <h2 class="heading-1 bottom-gutter-sm center-text">RESULT</h2>
        <p class="score-text bottom-gutter-md">
          <span class="grey-text">Final Score: </span> 10/20
        </p>
        {questionList.map((question) => (
          <div class="question__body bottom-gutter-xl">
            <strong class="question-heading">{question.prompt}</strong>
            <div class="center-text">
              <div class="answer-options wrong-answer no-hover hover-transition">
                {question.optionA}
              </div>
              <div class="answer-options correct-answer no-hover hover-transition">
                {question.optionB}
              </div>
              <div class="answer-options hover-transition">
                {question.optionC}
              </div>
              <div class="answer-options hover-transition">
                {question.optionD}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};