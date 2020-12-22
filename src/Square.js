import React from "react"

    class Square extends React.Component{
        constructor(props){
            super(props)
            this.state={
                currentColor : props.color
            }
            
        }
        render(){
            return(
                <div className = {this.props.color + " color"}>
                    <p>{this.props.text}</p>
                </div>
                
            )
        }
    }
export default Square 