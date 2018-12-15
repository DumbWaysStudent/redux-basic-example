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
                {this.props.isLoading? (
                    <Text>Loading</Text>
                ): (
                    <View>
                        <Text>{JSON.stringify(this.props.movies)}</Text>
                        {this.props.movies.map((movie)=>(
                            <Text style={{fontSize: 30}} key={movie.id}>
                                {movie.title}
                            </Text>
                        ))}
                    </View>
                )}                
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  isLoading: state.isLoading
})

export default connect(mapStateToProps)(MovieList)