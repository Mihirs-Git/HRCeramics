import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Bottom extends Component {
    render() {
      return(
        
        <footer class="site-footer m-0">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p class="text-justify"><i>HR Ceramics </i>is a shop settled in Bharuch, Gujarat. The Shop holds the quality and a variety of product in Ceramics and Granite. The Website will help its customer to get updated with the popular and best of it's product. Various products of different categories are being displayed in here. For More information you may contact to the shop owner. The details are provided in the <Link to="/contact"><span className="text-primary">contact page</span></Link>. For more updates stay tuned...</p>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>DEVELOPERS</h6>
                            <ul class="footer-links">
                            <li><a href="mailto: patelvrushang1@gmail.com?subject=Develop a Website&body=Write about your website requirement or any queries...">Vrushang</a></li>
                            <li><a href="mailto: parmarmihir49@gmail.com?subject=Develop a Website&body=Write about your website requirement or any queries...">Mihir</a></li>
                            <li><a href="mailto: safalpatelsjp203039@gmail.com?subject=Develop a Website&body=Write about your website requirement or any queries...">Safal</a></li>
                            </ul>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul class="footer-links">
                            <li><a href="/product1">Categories</a></li>
                            <li><a href="/shop">Gallery</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            </ul>
                        </div>

                        
                    </div>
                </div>    
                    

                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <ul class="social-icons">
                                <li><a class="facebook" href="https://www.facebook.com/hr.ceramicsgarnites"><i class="fa fa-facebook"></i></a></li>
                                <li><a class="dribbble" href="https://instagram.com/hrceramic_granite?igshid=c9svhfhomvgm"><i class="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            
        </footer>
    
      
        );
    }
}

export default Bottom;