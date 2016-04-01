import React          from 'react';
import Navigation     from './components/navigation';
import GalleriesList  from './components/galleriesList';


class App extends React.Component {

  render() {
    return (
      <div>
        <div>
          <Navigation />
        </div>

        <div>
          <GalleriesList />
        </div>
      </div>
    );
  }

}


export default App;
