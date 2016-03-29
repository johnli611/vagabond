import React      from 'react';
import NavItems   from '../services/navItems';


class Navigation extends React.Component {

  render() {
    return (
      <div className="nav-bar">
        <ul>
          {this.renderNavigationItems(NavItems)}
        </ul>
      </div>
    );
  }


  // PRIVATE METHODS


  renderNavigationItems(navItems) {
    return navItems.map((navItem, index) => {
      return (
        <li key={index}>
          <a href={navItem.path}>
            <p>{navItem.name}</p>
          </a>
        </li>
      );
    });
  }
}


export default Navigation;
