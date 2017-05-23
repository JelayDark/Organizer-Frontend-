import React, { Component } from 'react';
import Slider from 'react-slick';
import { Grid, Row, Col } from 'react-flexbox-grid';




class TSlider extends Component {
  
  render() {
    var settings = {
      dots: true,
      infinite: true,
      // draggable: true,
      // prevArrow: LeftArrow,
      adaptiveHeight: true,
      // centerMode: true,
      autoplay: true,
      // arrows: true,
      speed: 2000,
      // lazyLoad: true,
      pauseOnHover: true,
      // slidesToShow: 1,
      // slidesToScroll: 1
    };
    return (
      
      <Grid fluid>
                <Row >
                    <Col xs={12}>
                            <Row center="xs">
                              <Col xs={12}>
                                <div className='container-slider'>
                                      <Slider {...settings}>
                                          <div><img src="https://divan.tv/img/top_carousels/720.jpg" width="100%"  alt=""/></div>
                                          <div><img src="https://divan.tv/img/top_carousels/914.jpg" width="100%"  alt=""/></div>
                                          <div><img src="http://s3.amazonaws.com/tworivers-wp/wp-content/uploads/2015/09/18103848/beauty-and-the-beast-now-showing.jpg" width="100%" alt=""/></div>
                                      </Slider> 
                                  </div>
                                 </Col>
                           </Row>
                     </Col>
                 </Row>
         </Grid>
    );
  }
}

export default TSlider;