import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

const Footer = props => {

  return (
    <Content>
      <Text></Text>
      <Links>
      </Links>

    </Content>
  );

}

// Datos utilizados
const mapStateToProps = model => {
  return {
    resources: model.resources,
  }
}

export default connect(mapStateToProps)(Footer);
