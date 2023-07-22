import PropTypes from 'prop-types';
import './Statistics.css'

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return <div className='statistics'>
    <h2 className='statTitle'>Statistics</h2>
        <div className='statItem'>Good:<span className='statNumber'>{good}</span></div>
        <div className='statItem'>Neutral:<span className='statNumber'>{neutral}</span></div>
        <div className='statItem'>Bad:<span className='statNumber'>{bad}</span></div>
        <div className='statItem'>Total:<span className='statNumber'>{total}</span></div>
        <div className='statItem'>Positive feedback:<span className='statNumber'>{positivePercentage}&#37;</span></div>
    </div>
}

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}