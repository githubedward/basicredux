import React from 'react';
import PropTypes from 'prop-types';

const ToDo = ({onClick, completed, text}) => {
  return (
    <li
      onClick={onClick}
      className={`todo__block ${completed ? 'todo__block--completed' : null}`}
    >
      {text}
    </li>
  )
}

export default ToDo;

// export default class ToDo extends Component {
//   render() {
//     const { onClick, completed, text } = this.props;
//     return (
//       <li
//         onClick={onClick}
//         className={`todo__block ${completed ? 'todo__block--completed' : null}`}
//       >
//         {text}
//       </li>
//     )
//   }
// }

ToDo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}
