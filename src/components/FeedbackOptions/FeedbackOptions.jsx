import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.scss';

export const FeedBackOptions = ({ option, onLeaveFeedback }) => {
  return (
    <button
      type="button"
      name={option}
      onClick={onLeaveFeedback}
      className={style.feed_back__btn}
    >
      {option}
    </button>
  );
};

FeedBackOptions.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
