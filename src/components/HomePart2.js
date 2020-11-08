import React, {Component} from 'react';
import { Alert, Card, CardDeck, CardFooter, CardHeader, Jumbotron, UncontrolledCarousel } from 'reactstrap';
import {Fade} from 'react-awesome-reveal';

class Home2 extends Component
{
    render()
    {
        const items = [
            {
                src: "https://firebasestorage.googleapis.com/v0/b/hrceramics-ff4ff.appspot.com/o/assets%2Fcarousel_worksamples%2F3.jpg?alt=media&token=5d49569e-f567-4c03-bd5f-8a505dad494b",
                altText: "Image 1",
                header: "Work Samples",
                key: '1',
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/hrceramics-ff4ff.appspot.com/o/assets%2Fcarousel_worksamples%2F4.jpg?alt=media&token=ef5f05a8-4f45-436b-a341-e2c6adade3ef",
                altText: "Image 2",
                header: "Work Samples",
                key: '2',
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/hrceramics-ff4ff.appspot.com/o/assets%2Fcarousel_worksamples%2F5.jpg?alt=media&token=7334c7be-304c-45e0-8f89-d0cab8047042",
                altText: "Image 3",
                header: "Work Samples",
                key: '3',
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/hrceramics-ff4ff.appspot.com/o/assets%2Fcarousel_worksamples%2F2.jpg?alt=media&token=0ff93699-ce8f-4cd2-918d-a56ecf6c1ec4",
                altText: "Image 4",
                header: "Work Samples",
                key: '4',
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/hrceramics-ff4ff.appspot.com/o/assets%2Fcarousel_worksamples%2F6.jpg?alt=media&token=4daba498-c28b-457f-9ed9-32e24ee44aef",
                altText: "Image 5",
                header: "Work Samples",
                key: '5',
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/hrceramics-ff4ff.appspot.com/o/assets%2Fcarousel_worksamples%2F7.jpg?alt=media&token=3d3648be-bd34-4fb1-91ef-cf2db6b1e78e",
                altText: "Image 6",
                header: "Work Samples",
                key: '6',
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/hrceramics-ff4ff.appspot.com/o/assets%2Fcarousel_worksamples%2F8.jpg?alt=media&token=e6477fd4-a004-42bf-bb47-a39e754616b9",
                altText: "Image 7",
                header: "Work Samples",
                key: '7',
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/hrceramics-ff4ff.appspot.com/o/assets%2Fcarousel_worksamples%2F1.jpg?alt=media&token=cab71e8e-0b41-488b-80b8-a114bfab2fb1",
                altText: "Image 7",
                header: "Work Samples",
                key: '8',
            }
        ];

        const displayCategory = this.props.categories.map((category) => {
            return(
                
                <div className="col-10 offset-1 offset-md-0 col-md-3 mt-3">
                    <Fade cascade>
                        <CardDeck>  
                            <Card className="card-primary">
                                <CardHeader className="p-4 text-center justify-content-center bg-dark text-white">
                                    <h4 className="m-0">&#8377;{' ' + category.price}<small className="price-unit"> {category.unit}</small></h4>
                                    <p className="m-0"><small>Price Range</small></p>
                                </CardHeader>
                                <CardFooter className="bg-light text-dark">
                                    <h5>{category.name}</h5>
                                    <small>Available Sizes: {category.size}</small>
                                    <br></br>
                                    <small>Offers: None</small>
                                </CardFooter>
                            </Card>
                        </CardDeck>
                    </Fade>
                </div>
            );
        })

        return(
            <React.Fragment>
                <Fade cascade>
                <div className="container">
                    <h4>Pricing Details</h4>
                    <div className="row">
                        {displayCategory}
                    </div>
                    <Alert color="info" className="m-5">Note: * = Starting Price </Alert>
                </div>
                <Jumbotron fluid className="m-0 p-0"> 
                    <UncontrolledCarousel items={items}></UncontrolledCarousel>
                </Jumbotron>
                </Fade>
            </React.Fragment>
        )
    }
}

export default Home2;