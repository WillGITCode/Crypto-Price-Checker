import React, { Component } from 'react'

export default class GoogleAd extends Component{

      componentDidMount(){
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    
      render() {
        return (
          <div className='ad'>
            <ins className='adsbygoogle'
              style={{ display: 'block' }}
              data-ad-client='ca-pub-2259939651078522'
              data-ad-slot='2384690961'
              data-ad-format='auto' />
          </div>
        )
      }
}


