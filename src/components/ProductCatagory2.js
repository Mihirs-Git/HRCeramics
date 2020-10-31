import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardImgOverlay, Button,Jumbotron, Breadcrumb, BreadcrumbItem
  } from 'reactstrap';
  import { Link } from 'react-router-dom';
  import { Loading } from './LoadingComponent';
  import { Fade  } from "react-awesome-reveal";

function RenderProductItem ({product}) {
    return (
        <Fade>
        <Card className='card-primary'>
            <Link to={`/product2/${product.id}`} >
                <CardImg width="100%"className='cardimg' src={product.image} alt={product.name} />
                <CardBody>
                    <CardTitle className="card-title">{product.name}</CardTitle>
                </CardBody>
            </Link>
        </Card>
        </Fade>
    );
};
const JumbotronUse =(props)=>{
    return(
        <Jumbotron fluid className="m-0 bg-cover bg-cover-category text-white text-center">
            <h1 className="pt-5"><strong>Categories</strong></h1>
        </Jumbotron>
    )
}

const Content =(props)=>{
        return( 
        <div className='row'>
            {/* <div className='col-12 col-md-2 '></div> */}
            <div className='col col-md-4'>
            <span className='icon'>
                <h2 className='product-cat'><strong>Tiles Categories</strong></h2>
                {/* <br/> Catagories by Tile Types</h2> */}
                <h4 className='product-type'>Categories by Tile Size</h4></span>
            </div>
        </div>
        )
}



function Product2(props){
    const product= props.catagory2.map((product)=>{
            return (
                <div className='col-12 col-md-4  cardtile'key={product.id}>      
                    <RenderProductItem product={product} />
                </div>
            )
         });
        
        if (props.catagoryLoading) {
            return(
                
                    <Loading />
            );
        }
        else if (props.catagoryErrMess) {
            return(
                    <h4>{props.catagoryErrMess}</h4>
            );
        }
        else
        return(
            <div>
                <JumbotronUse/>   
                <div className='container'> 
                <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Tile Size</BreadcrumbItem>
                        </Breadcrumb>                
                    </div>         
                <Content/>
                <div className='row'>
                    {product}
                </div>
            </div>
            <Jumbotron fluid className="text-center bg-cover mt-5 mb-0 jumbotron4"> 
                    <h4 className="mb-4 text-white">EXPLORE ALL OUR PRODUCTS</h4>
                    <Link to={`/product1/`} >
                    <Button color="primary" size="lg" outline className="mr-md-5 mb-md-0 mr-3 text-white">Explore by type</Button>
                    </Link>
                    <Link to={`/product2/`} >
                    <Button color="primary" size="lg" outline className="ml-md-5 text-white">Explore by size</Button>
                    </Link>
                    </Jumbotron>
            </div>

        )
    }





export default Product2;