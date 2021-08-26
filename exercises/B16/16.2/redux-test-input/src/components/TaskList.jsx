import React from 'react';
import { connect } from 'react-redux';

class TaskList extends React.Component {
  render() {
    const { list } = this.props;
    return(
      <div>
          <h2>Lista de tarefas:</h2>
          {
            list.map((task, index) => {
              return(
                <p key={ index }>{ task }</p>
              );
            })
          }
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.listReducer
});

export default connect(mapStateToProps, null)(TaskList);
