import React, {Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../../auth/authActions';
import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.changeOpen = this.changeOpen.bind(this);
    }

    changeOpen() {
        this.setState({ open: !this.state.open });
    }

    render() {
        const { name, email } = this.props.user; 
        return (

            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    <li onMouseLeave={() => this.changeOpen()} 
                        className={`dropdown user user-menu ${this.state.open ? 'open' : ''}`}>
                            
                            <a href="javascript:;"onClick={() => this.changeOpen()} 
                            className="dropdown-toggle" 
                            data-toggle="dropdown">
                                <img src="http://lorempixel.com/160/16/abstract" className="user-image" alt="User Image" />
                                <span className="hidden-xs">{name}</span> 
                            </a>
                    </li>
                    <ul className="dropdown-menu">
                        <li className="user-header">
                            <img src="http://lorempixel.com/160/16/abstract" className="img-circle" alt="User Image" />
                            <p>{name}<small>{email}</small></p>
                        </li>
                        <li className="user-footer">
                            <div className="pull-right">
                                <a href="#" onClick={this.props.Logout} className="btn btn-default btn-flat">Sair</a>
                            </div>
                        </li>
                    </ul>
                </ul>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.user
});

const mapDispatchToProps = dispatch => 
    bindActionCreators({ logout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
