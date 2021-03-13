import React from 'react';

const TabTitle = ({title, changeTitleHandler, activeTab}) => {
  const classes = [`movie-nav__item`];

  (title === activeTab) && classes.push(`movie-nav__item--active`);

  return (
    <li className={classes.join(` `)}>
      <a href="#" className="movie-nav__link" onClick={changeTitleHandler}>{title}</a>
    </li>
  )
}

export default TabTitle;
