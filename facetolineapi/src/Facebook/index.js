import React from 'react';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios'
import './index.css';

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state={
            name: "Test",
            email: "Test@gmail.com",
            picture: "https://bulma.io/images/placeholders/96x96.png"
        }
        this.responseFacebook = this.responseFacebook.bind(this)
    }

    responseFacebook(response){
        console.log(response)
        this.setState ({
            name:response.name,
            email:response.email,
            picture:response.picture.data.url
        })

        var data = ({
            name:response.name,
            email:response.email,
            picture:response.picture.data.url
        })

        axios.post("http://localhost:3000/user",data).then((res) => {
            console.log(res)
        })

        

    }

    render(){
        return(

            <div className="App">

            

             <div>
                    <figure>
                        <img src={this.state.picture} alt="Not found" />
                    </figure>
            </div>       
            <div>
                <p>{this.state.name}</p>
                <p>{this.state.email}</p>
            </div>

            <FacebookLogin
                appId='351980762229293'
                fields="name,email,picture"
                callback={this.responseFacebook}
                render={(renderProps) => (
                    <button onClick={renderProps.onClick}>Facebook</button>
                )}
            />
        
            </div>


        )
    }


}

export default Login