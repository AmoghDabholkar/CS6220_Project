import React from 'react';
import './Gallery.css';
import { Container } from 'react-bootstrap';
import Gallery from 'react-grid-gallery';
import {data} from './data';

class PeopleGallery extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      selected: null,
      images: this.loadImages()
    };
    this.state = this.defaultState;
  }

  loadImages() {
    // const {model, perturbation} = this.props;
    return data;
  }
  
  resetState() {
    this.setState(this.defaultState)
  }

  getImage(id, name, imageFile) {
    const publicUrl = process.env.PUBLIC_URL;
    const path = `${publicUrl}/people/${imageFile}`;
    const cloakedFolder = this.props.perturbation.toLowerCase();
    const cloakedImage = imageFile.replace('jpg', 'jpeg');
    return {
      id,
      thumbnailCaption: name,
      src: path,
      cloakedSrc: `${publicUrl}/cloaked/${cloakedFolder}/${cloakedImage}`,
      thumbnail: path,
      thumbnailWidth: 240,
      thumbnailHeight: 240
    }
  }

  handleImageSelected(index) {
    const {selected: previous, images} = this.state;
    if (previous !== null) {
      const previousSelected = images[previous];
      previousSelected.isSelected = false;
      images[previous] = previousSelected;
    }
    const currentSelected = images[index];
    currentSelected.isSelected = true;
    images[index] = currentSelected;
    this.setState({images: images, selected: index});
    this.props.selectedImage(images[index]);
  }

  render() {
    return (
      <Container>
        <p>Please select a person from the gallery</p>
        <Container className='gallery'>
          <Gallery
            images={this.state.images}
            enableLightbox={false}
            onClickThumbnail={(id) => this.handleImageSelected(id)}
          />
        </Container>
      </Container>
    );
  }
}

export default PeopleGallery;
