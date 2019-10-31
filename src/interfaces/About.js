import React from 'react';

import Title from 'components/atoms/Title';

class About extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Acerca de la institución"
    };
  }

  render() {
    return (
      <Title text={this.state.title} />
    );
  }
}

export default About;
