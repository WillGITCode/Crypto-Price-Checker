import React, { Component, PropTypes } from 'react'
import AdSense from 'react-adsense';


export default class GoogleAd extends Component{

      constructor(props) {
        super(props);
      }

      componentDidMount(){
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    
      render() {
        return (
          <div className='ad'>
            <ins className='adsbygoogle'
              data-adtest="on"
              style={{ display: 'block' }}
              data-ad-client='ca-pub-2259939651078522'
              data-ad-slot='8903129752'
              data-ad-format='auto' />
          </div>
        )
      }
}