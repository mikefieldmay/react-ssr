import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export const requireAuth = (ChildComponent) => {
    class RequireAuth extends Component {
        render() {
            switch (this.props.auth) {
                case false:
                    // this.props.context.url = '/'
                    return <Redirect to="/"/>
                case null:
                    <h1>Loading</h1>
                default: 
                    return <ChildComponent {...this.props}/>
            }
        }
    }

    const mapStateToProps = ({auth}) => {
        return { auth }
    }

    return connect(mapStateToProps)(RequireAuth)
}