import React, { Component } from 'react'

export default class UserDetail extends Component {


constructor(props){
    super(props)


    this.state= {
        id:window.location.href.split('/')[4],
        data:null
    }    
}

componentDidMount(){
    //fetch api
    //fetch data
    //display

    fetch('https://dummyjson.com/users/'+this.state.id).then(response=>response.json()).then(data=>this.setState({data:data}))


}
  render() {



    console.log(this.state.data)
    return (
      <div>
        <div className='row'>
           {(this.state.data!=null)? <div className='col-md-6'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={this.state.data.image} className='img-fluid border rounded-3'/>
                    </div>
                    <div className='col-md-6'>
                        <h1 className='display-1'>{this.state.data.firstName + ' '+this.state.data.lastName}</h1>
                        <p>{this.state.data.address.address + ', '+this.state.data.address.city}</p>
                        </div>
                </div>
            </div>:<div className='display-1'>Loading...</div>}
        </div>
      </div>
    )
  }
}