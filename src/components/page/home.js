import React from 'react';
import Category from './category';
import Profile from './content/profile';
import Navbar from '../element/navbar';
import axios from 'axios';

class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentWillMount() {
    axios
      .get('http://localhost:3000/categories')
      .then(result => this.setState({ categories: result.data.payload }));
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="column">
          <Profile />
          <Category datas={this.state.categories} />
        </div>
      </div>
    );
  }
}

export default HomePage;
