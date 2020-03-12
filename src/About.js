import React from 'react'

export default class About extends React.Component{
  componentDidMount(){
    console.log('mounted')
  }
  componentWillUnmount(){
    console.log('unmounted')
  }
  render (){
    return  (
      <div>
        About
      </div>
    )
  }
}