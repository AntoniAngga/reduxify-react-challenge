import React from 'react';
import { connect } from 'react-redux';
import { get_list as Swapi } from '../actions';

class Home extends React.Component {
  
  componentWillMount(){
    this.props.getSwapi()
  }
  
  New_Person () {
    return (
      <div>
        <tr>
          <th> Name </th>
          <th> Gender </th>
          <th> Age </th>
        </tr>
          { this.props.ListSwapi.results.map((results,index) => {
              return (
                <tr>
                  <td> {results.name} </td> 
                  <td> {results.gender} </td> 
                  <td> {results.birth_year} </td>
                </tr>
              )
            })
          }
      </div>
    )
  }
  
  render () {
    return (
        <div>
          {this.New_Person()}
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSwapi : () => dispatch(Swapi())
  }
}

const mapStateToProps = (state) => {
  return {
    ListSwapi: state.swapireducer.data_detail
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);