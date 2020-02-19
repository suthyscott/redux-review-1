import React from 'react';

class Header extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            showInputs: false,
            username: '',
            password: '',
            loggedIn: false

        }
    }

    componentDidMount(){
        this.setState({
            user: this.props.user
        })
    }

    handleUpdateUsername = val => {
        this.setState({
            username: val
        })
    }    

    handleUpdatePassword  = val => {
        this.setState({
            password: val
        })
    } 

    handleToggleInputs = () => {
        this.setState({showInputs: !this.state.showInputs})
    }
    render(){
        return(
            <div className='header'>
                Header.js

                {this.state.showInputs ? 
                <div>                
                {this.state.loggedIn ? <button onClick={() => this.props.logoutUser()}>Logout</button> : 
                    <div>
                        <input onChange={e => this.handleUpdateUsername(e.target.value)} />
                        <input onChange={e => this.handleUpdatePassword(e.target.value)}/>
                        <button>Register</button>
                        <button>Login</button>
                    </div>}
                </div>
                :
                <div>
                    {this.state.loggedIn ? <button>Logout</button> : 
                    <button onClick={() => this.handleToggleInputs()}>Login</button>}
                </div>
                }

            </div>
        )
    }
}

export default Header