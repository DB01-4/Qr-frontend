import React from "react"
import QRCode from "qrcode-react"



export default class Qrcode extends React.Component {
    
state = {
    url: 'https://google.com'
}


    render() {
        return ( 
        <QRCode value={this.state.url}/>
        )
    }
}


