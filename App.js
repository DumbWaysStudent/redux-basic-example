import React, { Component }  from 'react'
import { Provider } from 'react-redux'

import store from './redux/store'
import MovieList from './MovieList'
import MovieDetail from './MovieDetail'

export default class App extends Component {

  render(){
    return (
      <Provider store={store}>
        <MovieList/>
      </Provider>
    )
  }
}