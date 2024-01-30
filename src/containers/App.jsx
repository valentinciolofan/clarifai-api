import React, { Component } from 'react'
import Navigation from '../components/Navigation/Navigation'
import Signin from '../components/Signin/Signin'
import Register from '../components/Register/Register'
import Logo from '../components/Logo/Logo'
import Rank from '../components/Rank/Rank'
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from '../components/FaceRecognition/FaceRecognition'
import './App.css'
import '../index.css'
import ParticlesBg from 'particles-bg'


const returnClarifaiRequestOptions = (imageUrl) => {
  const PAT = '999e2352e89b4758a4953ccfc9aa6804';
  const USER_ID = 'vciolofan';
  const APP_ID = 'face-detection';
  const MODEL_ID = 'face-detection';
  const IMAGE_URL = imageUrl;

  const raw = JSON.stringify({
    "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": IMAGE_URL
                }
            }
        }
    ]
});

const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
    },
    body: raw
};

return requestOptions;
};


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''

      }
    };
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined

    }})
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState = ({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    console.log('click');
    this.setState({ imageUrl: this.state.input })

      fetch("https://api.clarifai.com/v2/models/" + 'face-detection' + "/outputs", returnClarifaiRequestOptions(this.state.input))
      .then(response => {
        if (response) {
          fetch('http://localhost3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user,  { entries: count }))
            })
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(error => console.log('error', error));
    
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false});
    } else if (route === 'home') {
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});

  }

  render() {
    return (
      <div>
      <ParticlesBg type="cobweb" bg={true} />
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        {
  this.state.route === 'home' ? (
    <div>
      <Logo />
      <Rank 
       name={this.state.user.name}
       entries={this.state.user.entries}/>
      <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}
      />
      <FaceRecognition 
        box={this.state.box} 
        imageUrl={this.state.imageUrl}
      />
    </div>
  ) : this.state.route === 'signin' ? (
    <Signin  loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
  ) : (
    <Register loadUser = {this.loadUser} onRouteChange={this.onRouteChange} />
  )
}
      </div>  

  );
  }
}

export default App;
