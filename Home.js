import React, { Component }  from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import { INC } from './redux/actions'

class Home extends Component {

    componentDidMount(){
        this.props.dispatch(INC())
    }

    render(){
        return (
            <View>
                <Text style={{fontSize: 30}}>
                    {this.props.counter}
                </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

export default connect(mapStateToProps)(Home)