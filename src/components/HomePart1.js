import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Card, CardGroup, CardImg, CardText, CardTitle, Navbar, NavItem, NavLink, Button, CardImgOverlay, Jumbotron} from 'reactstrap';
import { Fade } from 'react-awesome-reveal';
import { Loading } from './LoadingComponent';

class Home1 extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            tileName: 'Elevation',
            tileDescription: 'Elevation tiles design are one of the most natural and modern tiles that proves to be a great option and a unique choice. Elevation tiles design is created with the sense of grandeur and they really offer zenith designs. Elevation tiles also known as rustic tiles are substitute to natural stone.',
            src: 'https://firebasestorage.googleapis.com/v0/b/hrceramics-ff4ff.appspot.com/o/assets%2Fcatagory%2Frsz_elevation.jpg?alt=media&token=70cb991f-d933-43c4-acfe-d3c72d9fce5d',
            isActive: {
                elevation: true,
                wooden: false,
                kitchen: false,
                wall: false,
                parking: false,
                sanitary: false,
                decorative: false,
                granite: false,
                stair: false,
                double_charge: false,
            }

        }
        this.updateInfo = this.updateInfo.bind(this);
    }

    updateInfo(tileType){

        switch(tileType)
        {
            case "Elevation": this.setState({
                    isActive: {
                        elevation: true,
                        wooden: false,
                        kitchen: false,
                        wall: false,
                        parking: false,
                        sanitary: false,
                        decorative: false,
                        granite: false,
                        stair: false,
                        double_charge: false,
                    }
                });
                break;

                case "Wooden & Matt": this.setState({
                    isActive: {
                        elevation: false,
                        wooden: true,
                        kitchen: false,
                        wall: false,
                        parking: false,
                        sanitary: false,
                        decorative: false,
                        granite: false,
                        stair: false,
                        double_charge: false,
                    }
                });
                break;

                case "Kitchen": this.setState({
                    isActive: {
                        elevation: false,
                        wooden: false,
                        kitchen: true,
                        wall: false,
                        parking: false,
                        sanitary: false,
                        decorative: false,
                        granite: false,
                        stair: false,
                        double_charge: false,
                    }
                });
                break;

                case "Floor Tiles": this.setState({
                    isActive: {
                        elevation: false,
                        wooden: false,
                        kitchen: false,
                        wall: true,
                        parking: false,
                        sanitary: false,
                        decorative: false,
                        granite: false,
                        stair: false,
                        double_charge: false,
                    }
                });
                break;

                case "Parking tile": this.setState({
                    isActive: {
                        elevation: false,
                        wooden: false,
                        kitchen: false,
                        wall: false,
                        parking: true,
                        sanitary: false,
                        decorative: false,
                        granite: false,
                        stair: false,
                        double_charge: false,
                    }
                });
                break;

                case "Sanitary": this.setState({
                    isActive: {
                        elevation: false,
                        wooden: false,
                        kitchen: false,
                        wall: false,
                        parking: false,
                        sanitary: true,
                        decorative: false,
                        granite: false,
                        stair: false,
                        double_charge: false,
                    }
                });
                break;

                case "Decorative": this.setState({
                    isActive: {
                        elevation: false,
                        wooden: false,
                        kitchen: false,
                        wall: false,
                        parking: false,
                        sanitary: false,
                        decorative: true,
                        granite: false,
                        stair: false,
                        double_charge: false
                    }
                });
                break;

                case "Granite": this.setState({
                    isActive: {
                        elevation: false,
                        wooden: false,
                        kitchen: false,
                        wall: false,
                        parking: false,
                        sanitary: false,
                        decorative: false,
                        granite: true,
                        stair: false,
                        double_charge: false
                    }
                });
                break;

                case "Stair Tiles": this.setState({
                    isActive: {
                        elevation: false,
                        wooden: false,
                        kitchen: false,
                        wall: false,
                        parking: false,
                        sanitary: false,
                        decorative: false,
                        granite: false,
                        stair: true,
                        double_charge: false
                    }
                });
                break;
                
                case "Double Charge": this.setState({
                    isActive: {
                        elevation: false,
                        wooden: false,
                        kitchen: false,
                        wall: false,
                        parking: false,
                        sanitary: false,
                        decorative: false,
                        granite: false,
                        stair: false,
                        double_charge: true
                    }
                });
                break;

                default: this.setState({
                    isActive: {
                        elevation: true,
                        wooden: false,
                        kitchen: false,
                        wall: false,
                        parking: false,
                        sanitary: false,
                        decorative: false,
                        granite: false,
                        stair: false,
                        double_charge: false
                    }
                });
                break;
        }

        var selectedCategory = this.props.categories.filter((category) => category.name === tileType)[0];
        this.setState({
            tileName: selectedCategory.name,
            tileDescription: selectedCategory.description,
            src: selectedCategory.image 
        });
    }

    render(){
        const displayFeatured = this.props.featured.map((category) => {

            if(this.props.categoryLoading)
            {
                return(
                    <Loading></Loading>
                );
            }

            else if(this.props.categoryErrMess)
            {
                return(
                    <div className="text-center">
                        {this.props.categoryErrMess}
                    </div>
                );
            }

            else
            {
                return(
                    <div className="col-12 col-md-6 mt-3">
                        <div className="overflow">
                            <Fade cascade>
                                <Card className="feature-card mt-2 mt-md-0">
                                    <Link to={`/product1/${category.id}`}>
                                        <CardImg width="100%" src= {category.image} alt="Image" className="cardimg card-img-top"></CardImg>
                                        <CardImgOverlay className="d-flex justify-content-center align-items-center">
                                            <CardTitle  className="feature-title"><strong>{category.name}</strong></CardTitle>
                                        </CardImgOverlay>    
                                    </Link>
                                </Card>
                            </Fade>
                        </div>
                    </div>
                );
            }
            
        });

        return(

            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-left">
                            <h2>Home</h2>
                            <hr></hr>
                        </div>
                        <div className="col-12 text-left">
                            <h4>Our Offerings</h4>
                        </div>
                        
                    </div>
                    <div className="row">
                        <Navbar>
                            <div className="col-12 nav nav-tabs">
                                <NavItem>
                                    <NavLink className="navbar-offerings" active={this.state.isActive.elevation} onClick={() => {this.updateInfo("Elevation")} }>Elevation</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="navbar-offerings" active={this.state.isActive.kitchen} onClick={() => {this.updateInfo("Kitchen")} }>Kitchen</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="navbar-offerings" active={this.state.isActive.wooden} onClick={() => {this.updateInfo("Wooden & Matt")} }>Wooden</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="navbar-offerings" active={this.state.isActive.stair} onClick={() => {this.updateInfo("Stair Tiles")} } >Stairway</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="navbar-offerings" active={this.state.isActive.wall} onClick={() => {this.updateInfo("Floor Tiles")} }>Flooring</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="navbar-offerings" active={this.state.isActive.sanitary} onClick={() => {this.updateInfo("Sanitary")} } >Sanitary</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="navbar-offerings" active={this.state.isActive.parking} onClick={() => {this.updateInfo("Parking tile")} }>Parking</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="navbar-offerings" active={this.state.isActive.decorative} onClick={() => {this.updateInfo("Decorative")} } >Decorative</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="navbar-offerings" active={this.state.isActive.granite} onClick={() => {this.updateInfo("Granite")} } >Granite</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="navbar-offerings" active={this.state.isActive.double_charge} onClick={() => {this.updateInfo("Double Charge")} } >Double Charge</NavLink>
                                </NavItem>
                            </div>
                        </Navbar>
                    </div>
                    <div className="row p-3">
                        <div className="overflow">
                            <Fade cascade>
                                <CardGroup>
                                    <Card body color="dark" className="justifiedText p-4">
                                        <CardTitle className="text-left card-tabs">{this.state.tileName}</CardTitle>
                                        <CardText className="card-desc">
                                            {this.state.tileDescription}
                                    </CardText>
                                    </Card>
                                    <Card className="info-card">
                                    <CardImg width="100%" height="100%" src={this.state.src} alt="Image"></CardImg>
                                </Card>
                                </CardGroup>
                            </Fade>
                        </div>
                    </div>
                </div> 
                
                <Jumbotron fluid className="text-center bg-cover mt-5 mb-5 jumbotron4"> 
                    <h4 className="mb-4 text-white">EXPLORE ALL OUR PRODUCTS</h4>
                    <Link to={`/product1/`} >
                        <Button color="light" size="lg" outline className="mr-md-5 mb-md-0 mr-3 explore-buttons">Explore by type</Button>
                    </Link>
                    <Link to={`/product2/`} >
                        <Button color="light" size="lg" outline className="ml-md-5 explore-buttons">Explore by size</Button>
                    </Link>
                </Jumbotron>
                
                <div className="container">
                    <h4>Best Sellers</h4>
                    <div className="row mb-5 mt-3">
                            {displayFeatured}
                    </div>
                </div>
            </React.Fragment>

        );
    }

}

export default Home1;