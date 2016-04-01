import React          from 'react';
import GalleriesData  from '../mocks/galleriesData';


class GalleriesList extends React.Component {

  render() {
    return (
      <div className="galleries-list">
        {this.renderGalleries(GalleriesData)}
      </div>
    );
  }


  // PRIVATE METHODS


  renderGalleries(galleries) {
    return galleries.map((gallery, index) => {
      return (
        <div key={index}
             className="galleries-list-item">

          <div className="galleries-list-item-text">
            <div className="galleries-list-item-date">
              {gallery.visitDate}
            </div>
            <div className="galleries-list-item-name">
              {gallery.name}
            </div>
          </div>

          <img src={gallery.imageSource} alt={gallery.name} />
        </div>
      );
    });
  }

}


export default GalleriesList;
