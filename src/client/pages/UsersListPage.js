import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions'

class UsersListPageBase extends Component {

    componentDidMount() {
        this.props.fetchUsers()
    }

    renderUsers() {
        return this.props.users.map(user => <li key={user.id}>{user.name}</li>)
    }

    render () {
        return (
            <div>
                Here's a list of users
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const loadData = (store) => {
    return store.dispatch(fetchUsers())
}

export const UsersListPage = {
    component: connect(mapStateToProps, { fetchUsers })(UsersListPageBase),
    loadData
}