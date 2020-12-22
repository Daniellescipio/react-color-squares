import React from "react"
import Square from "./Square"

class App extends React.Component{
    constructor(){
        super()
        this.state= {
            colors:["white","white","white","white","white","white","white","white"],
            text : ""
        }
        this.blackAndWhiteClick = this.blackAndWhiteClick.bind(this)
        this.purpleClick = this.purpleClick.bind(this)
        this.bottomRightClick = this.bottomRightClick.bind(this)
        this.bottomLeftClick = this.bottomLeftClick.bind(this)
        this.topLeftClick = this.topLeftClick.bind(this)
        this.topMLClick = this.topMLClick.bind(this)
        this.topMRClick = this.topMRClick.bind(this)
        this.topRightClick = this.topRightClick.bind(this)
    }

    blackAndWhiteClick(){
        if(this.state.colors[0]==="white"){
            this.setState(function(){
                return {
                    colors : ["black","black","black","black","black","black","black","black",]
                }

            })
        }else{
            this.setState(function(){
                return {
                    colors : ["white","white","white","white","white","white","white","white"]
                }

            })
        }
    }

    purpleClick(){
        if(this.state.colors[0]==="white"){
            this.setState(function(){
                return {
                    colors : ["purple","purple","purple","purple","white","white","white","white",]
                }

            })
        }else{
            this.setState(function(){
                return {
                    colors : ["white","white","white","white","purple","purple","purple","purple"]
                }

            })
        }
    }

    bottomRightClick(){
        let colors = [...this.state.colors]
        if(colors[4]==="white"){
            colors[4] = "red"
        }else if(colors[4]==="red"){
            colors[4] = "orange"
        }else {
            colors[4] = "white"
        }
        this.setState({colors: colors})
        
    }

    bottomLeftClick(){
        let colors = [...this.state.colors]
        if(colors[7]==="white"){
            colors[7] = "violet"
        }else if(colors[7]==="violet"){
            colors[7] = "indigo"
        }else {
            colors[7] = "white"
        }
        this.setState({colors: colors})
    }

    topLeftClick(){
        let colors = [...this.state.colors]
        if(colors[0]==="white"){
            colors[0] = "yellow"
        }else if(colors[0]==="yellow"){
            colors[0] = "green"
        }else {
            colors[0] = "white"
        }
        this.setState({colors: colors}) 
    }

    topMLClick(){
        let colors = [...this.state.colors]
        if(colors[1]==="white"){
            colors[1] = "blue"
        }else if(colors[1]==="blue"){
            colors[1] = "maroon"
        }else {
            colors[1] = "white"
        }
        this.setState({colors: colors}) 
    }
    topMRClick(){
        let colors = [...this.state.colors]
        if(colors[2]==="white"){
            colors[2] = "gray"
        }else if(colors[2]==="gray"){
            colors[2] = "pink"
        }else {
            colors[2] = "white"
        }
        this.setState({colors: colors}) 
    }

    topRightClick(){
        let colors = [...this.state.colors]
        if(colors[3]==="white"){
            colors[3] = "teal"
        }else if(colors[3]==="teal"){
            colors[3] = "magenta"
        }else {
            colors[3] = "white"
        }
        this.setState({colors: colors}) 
    }



    render(){
        let text = this.state.text
        let colorComponent = this.state.colors.map(function(color){
            
            return <Square color = {color} text = {text}/>
        })
        return (
            <div>
                <audio id="myAudio" src= "./sounds/bell.mp3" type="audio/mp3"/>
                
               
            <div className = "gridContainer">
                {colorComponent}
            </div>
            <button onClick = {this.blackAndWhiteClick} className = "one button">Black or White?</button>
            <button onClick = {this.purpleClick} className = "two button">Half Purple?</button>
            <button onClick = {this.bottomRightClick} className = "three button">Bottom Right</button>
            <button onClick = {this.bottomLeftClick} className = "four button">Bottom Left</button>
            <button onClick = {this.topLeftClick} className = "five button">Top Left</button>
            <button onClick = {this.topMLClick} className = "six button">Top Middle Left</button>
            <button onClick = {this.topMRClick} className = "seven button">Top Middle Right</button>
            <button onClick = {this.topRightClick} className = "eight button">Top Right</button>

            </div>
          
        )
    }
}
export default App 