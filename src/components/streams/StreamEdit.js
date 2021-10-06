import React from 'react';
import { connect } from 'react-redux';

const StreamEdit = (props) => {
  return <div>StreamEdit</div>;
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;

  return {
    stream: state.streams[id],
  };
};
export default connect(mapStateToProps)(StreamEdit);
