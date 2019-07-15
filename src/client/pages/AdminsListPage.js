import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requireAuth } from '../components/hocs/requireAuth';

import { fetchAdmins } from '../actions'

class AdminsListPageBase extends Component {

    componentDidMount() {
        this.props.fetchAdmins()
    }

    renderAdmins() {
        return this.props.admins.map(admin => <li key={admin.id}>{admin.name}</li>)
    }

    render () {
        return (
            <div>
                Protected list of admins
                <ul>
                    {this.renderAdmins()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({admins}) => {
    return {
        admins
    }
}

const loadData = (store) => {
    return store.dispatch(fetchAdmins())
}

export const AdminsListPage = {
    component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsListPageBase)),
    loadData
}