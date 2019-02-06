import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'react-router-dom';

const Link = ({active, onClick, children}) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    < a href=''
      onClick={ e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  )
}

export default Link;

// export default class Link extends Component {
//   render() {
//     const { active, onClick, children } = this.props;

//     if (active) {
//       return <span>{children}</span>
//     }

//     return (
//       < a href=''
//         onClick={ e => {
//           e.preventDefault();
//           onClick();
//         }}
//       >
//         {children}
//       </a>
//     )
//   }
// }

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}