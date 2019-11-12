import React from 'react';

import { getProduct } from '../services/metadata/Product';

import Title from 'components/atoms/Title';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      summary: '',
      author: '',
    };
  }

  componentDidMount() {

    getProduct()
      .then((r) => {
        this.setState({
          title: r.title,
          summary: r.summary,
          author: r.author,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {

    <div>
      <Title text='{this.state.title}' />
      <hr />
    </div>
  }

}

export default Home;
