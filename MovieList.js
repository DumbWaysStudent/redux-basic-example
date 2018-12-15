import React, { Component }  from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import { ALL_MOVIES } from './redux/actions'

class MovieList extends Component {

    componentDidMount(){
        this.props.dispatch(ALL_MOVIES())
    }

    render(){
        return (
            <View>
                {this.props.movies.map((movie)=>(
                    <Text style={{fontSize: 30}} key={movie.id}>
                        {movie.title}
                    </Text>
                ))}
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps)(MovieList)