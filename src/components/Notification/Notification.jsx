import PropTypes from 'prop-types';
import './Notification.css';

const Notification = ({message}) => {
    return <div className='notification'>{message}</div>
}

export default Notification;
Notification.propType = {
    message: PropTypes.string.isRequired,
}