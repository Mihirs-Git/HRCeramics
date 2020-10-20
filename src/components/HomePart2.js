import React, {Component} from 'react';
import { Alert, Card, CardDeck, CardFooter, CardHeader, CardTitle, Jumbotron, UncontrolledCarousel } from 'reactstrap';

class Home2 extends Component
{
    render()
    {
        const items = [
            {
                src: "assets/carousel_worksamples/3.jpg",
                altText: "Image 1",
                header: "Work Samples",
                key: '1',
            },
            {
                src: "assets/carousel_worksamples/4.jpg",
                altText: "Image 2",
                header: "Work Samples",
                key: '2',
            },
            {
                src: "assets/carousel_worksamples/5.jpg",
                altText: "Image 3",
                header: "Work Samples",
                key: '3',
            },
            {
                src: "assets/carousel_worksamples/2.jpg",
                altText: "Image 4",
                header: "Work Samples",
                key: '4',
            },
            {
                src: "assets/carousel_worksamples/6.jpg",
                altText: "Image 5",
                header: "Work Samples",
                key: '5',
            },
            {
                src: "assets/carousel_worksamples/7.jpg",
                altText: "Image 6",
                header: "Work Samples",
                key: '6',
            },
            {
                src: "assets/carousel_worksamples/8.jpg",
                altText: "Image 7",
                header: "Work Samples",
                key: '7',
            }
        ];

        const displayCategory = this.props.categories.map((category) => {
            return(
                
                <div className="col-12 col-md-3 mt-md-3">
                    <CardDeck>  
                        <Card className="card-primary">
                            <CardHeader className="p-4 text-center justify-content-center bg-dark text-white">
                                <h4 className="m-0">&#8377;{' ' + category.price}<small>{category.unit}</small></h4>
                                <p className="m-0"><small>Price Range</small></p>
                            </CardHeader>
                            <CardFooter className="bg-light text-dark">
                                <CardTitle className="h5">{category.name}</CardTitle>
                                <small>Available Sizes: {category.size}</small>
                                <br></br>
                                <small>Offers: None</small>
                            </CardFooter>
                        </Card>
                    </CardDeck>
                </div>
            );
        })

        return(
            <React.Fragment>
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

            </React.Fragment>
        )
    }
}

export default Home2;