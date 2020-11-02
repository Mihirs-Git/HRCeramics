import React, { Component } from 'react';
import { Jumbotron, UncontrolledCarousel } from 'reactstrap';
import {Fade} from 'react-awesome-reveal';


class Carousel extends Component {
    render() {
       
        const items = [
            {
                src: "https://firebasestorage.googleapis.com/v0/b/hrceramics-ff4ff.appspot.com/o/assets%2Fimages%2F1.jpg?alt=media&token=6528fd71-963f-4e63-adf3-5a769c9b301a",
                altText: "Image 1",
                key: '1',
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/hrceramics-ff4ff.appspot.com/o/assets%2Fimages%2F2.jpg?alt=media&token=34749d8b-63d8-4ca5-855e-c173ba588ba8",
                altText: "Image 2",
                key: '2',
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/hrceramics-ff4ff.appspot.com/o/assets%2Fimages%2F3.png?alt=media&token=a292a586-fca1-477f-9545-d7c986dbd74f",
                altText: "Image 3",
                key: '3',
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/hrceramics-ff4ff.appspot.com/o/assets%2Fimages%2F4.jpg?alt=media&token=7ab0e59c-a5ba-4f33-8a52-6418543476e8",
                altText: "Image 4",
                key: '4',
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/hrceramics-ff4ff.appspot.com/o/assets%2Fimages%2F5.jpg?alt=media&token=291f5c08-70cc-48dd-a590-f55a8665948d",
                altText: "Image 5",
                key: '5',
            }
        ];
      return(

        <Jumbotron fluid className="p-0">
            <Fade>
                <UncontrolledCarousel className="carousel-header" items={items}></UncontrolledCarousel>
            </Fade>
        </Jumbotron>
                
      
      );
    }
}
export default Carousel;
