import React from 'react';
import './Demo.css';
import PeopleGallery from './PeopleGallery';
import Navbar from './Navbar';
import { Container, Form, Row, Col, Button, Image } from 'react-bootstrap';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      model: null,
      perturbation: null,
      submitted: false,
      selectedImage: null,
      cloakedImage: null,
      predictionImage: null,
    };
    this.state = this.defaultState;
  }

  resetState() {
    this.setState(this.defaultState)
  }

  handleModelSelected(e) {
    const value = e.target.value;
    const valueState = value === 'Choose...' ? null : value
    this.setState({
      model: valueState,
      perturbation: null,
      submitted: false,
      selectedImage: null,
      cloakedImage: null,
      predictionImage: null,
    });
  }

  handlePerturbationSelected(e) {
    const value = e.target.value;
    const valueState = value === 'Choose...' ? null : value
    this.setState({perturbation: valueState});
    if (this.state.selectedImage){
      this.setCloakedImage(this.state.selectedImage, valueState);
    }
  }

  submitDisabled() {
    return !this.state.model || !this.state.perturbation;
  }

  handleModelSubmit(){
    this.setState({submitted: true});
    console.info('I submitted model: ' + this.state.model + ', perturbation: ' + this.state.perturbation);
  }

  setCloakedImage(image, perturbation){
    // const publicUrl = process.env.PUBLIC_URL;
    // const cloakedFolder = perturbation ? perturbation.toLowerCase() : this.state.perturbation.toLowerCase();
    // const cloakedImage = image.src.replace('jpg', 'jpeg').replace('/people', '');
    if (this.state.perturbation){
      this.setState({
        cloakedImage: image[perturbation].src,
        predictionImage: image[perturbation].predictionSrc
      });
    }
  }

  setSelectedImage(image){
    this.setState({selectedImage: image});
    this.setCloakedImage(image, this.state.perturbation);
  }

  get_image(name) {
    return `${process.env.PUBLIC_URL}/people/${name}`;
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Container>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Model</Form.Label>
                <Form.Select defaultValue="Choose..." onChange={(e) => this.handleModelSelected(e)}>
                  <option>Choose...</option>
                  <option>Facenet</option>
                  <option>MobileNet3</option>
                </Form.Select>
              </Form.Group>
  
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Perturbation Level</Form.Label>
                <Form.Select defaultValue="Choose..." onChange={(e) => this.handlePerturbationSelected(e)}>
                  <option>Choose...</option>
                  <option>Low</option>
                  <option>Mid</option>
                  <option>High</option>
                </Form.Select>
              </Form.Group>
            </Row>
  
            <div className="d-grid gap-2">
              <Button
                variant="primary"
                size="lg"
                disabled={!this.state.model || !this.state.perturbation}
                onClick={() => this.handleModelSubmit()}
              >
                Submit
              </Button>
            </div>
  
          </Form>
        </Container>
        {this.state.submitted && this.state.model && this.state.perturbation &&
          <Container>
            <PeopleGallery
              model={this.state.model}
              perturbation={this.state.perturbation}
              selectedImage={(image) => this.setSelectedImage(image)}
            />
          </Container>
        }
        {this.state.selectedImage &&
          <Container>
            <Row>
              <Col>
                <h2>Original Image</h2>
                <Image src={this.state.selectedImage.src} fluid className="w-100" />
              </Col>
              <Col>
                <h2>Cloaked Image</h2>
                <Image src={this.state.cloakedImage} fluid className="w-100" />
              </Col>
              <Col>
                <h2>Prediction</h2>
                <Image src={this.state.predictionImage} fluid className="w-100" />
              </Col>
            </Row>
          </Container>
        }
      </div>
    );
  }
}

export default Demo;
