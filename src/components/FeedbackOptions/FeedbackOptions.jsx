import PropTypes from 'prop-types';
import './FeedbackOptions.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="btn">
      {options.map(option => {
        return (
          <button
            className="feedbackBtn"
            type="button"
            key={option}
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
