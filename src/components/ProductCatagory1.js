import React from 'react';
import {
    Card, CardImg,
    CardTitle, CardImgOverlay, Button,Jumbotron, Breadcrumb, BreadcrumbItem
  } from 'reactstrap';
  import { Link } from 'react-router-dom';
  import { Loading } from './LoadingComponent';
  import { Fade  } from "react-awesome-reveal";


function RenderProductItem ({product}) {
    
    return (
        <Fade delay={1000} triggerOnce>
            <div className="overflow">
                <Card className="feature-card mt-2 mt-md-0">
                    <Link className="product-category-link" to={`/product1/${product.id}`} > 
                        <CardImg width="100%" className='cardimg' src={product.image} alt={product.name} />   
                        <CardImgOverlay className="d-flex justify-content-center align-items-center">
                        
                              <CardTitle className="card-heading-title">{product.name}</CardTitle>
                        </CardImgOverlay>
                    </Link>
                                           
                </Card>
            </div>
        </Fade >
    );
};

const JumbotronUse =({isLoading,errMess})=>{
    return(
        <Jumbotron fluid className="bg-cover bg-cover-category text-white text-center">
            <h1 className="pt-5 mt-4"><strong>Categories</strong></h1>
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
                <h4 className='product-type'>Categories by Tile Types</h4></span>
            </div>
        </div>
        )
}



function Product1(props){
    const product= props.catagory1.map((product)=>{
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
                    <JumbotronUse />
                    <div className='container'>  
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Tile Types</BreadcrumbItem>
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
                        <a className="btn btn-outline-light btn-lg mr-md-5 mb-md-0 mr-3 mb-3 explore-buttons">Explore by type</a>
                    </Link>
                    <Link to={`/product2/`} >
                        <a className="btn btn-outline-light btn-lg ml-md-5 mb-md-0 mr-3 mb-3 explore-buttons">Explore by size</a>
                    </Link>
                </Jumbotron>
                </div>
    
            )
    }

export default Product1;