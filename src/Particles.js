import React, {Component} from 'react'
import './App.css';
import Particles from 'react-particles-js';;

class Animation extends React.Component {
  
    render(){
        return (
            <div className="particle">
                <Particles
                        params={{
                            "particles": {
                                "number": {
                                    "value": 50
                                },
                                "size": {
                                    "value": 3
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "repulse"
                                    }
                                }
                            }
                        }} />
            </div>
        );
    }    
    

 
}

export default Animation