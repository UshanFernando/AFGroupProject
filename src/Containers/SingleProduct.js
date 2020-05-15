import React,{useState,Component} from 'react'
import { render } from '@testing-library/react';

import CommentForm from '../Components/SingleProduct/CommentForm';


	


		

	class SingleProduct extends Component {

		constructor(props) {
			super(props);
			this.category = React.createRef();
			this.manager = React.createRef();
			
			this.state = {
				count:1,
				name: "",
				message:"",
				rating:0,
				user:0,
			  	comments: null,
			};
			
		  }
		

		

		 
		  
		   loadComments=async()=>{
			try {
			  const res = await fetch("http://localhost:5000/comment/comments");
			  const data = await res.json();
			  //updateing state with lastest data
			  this.setState({
				categories: data,
			  });
			} catch (e) {
			  //if failed to communicate with api this code block will run
			  console.log(e);
			}
		  }
		  handleChange(event) {
			this.setState({value: event.target.value});
		  }
		
		 

	render(){
    return (
        <div>
	<section className="blog-banner-area" id="blog">
		<div className="container h-100" >
			<div className="blog-banner">
				<div className="text-center">
					<h1>Shop Single</h1>
					
					<nav aria-label="breadcrumb" className="banner-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
			 
              <li className="breadcrumb-item active" aria-current="page">Shop Single</li>
				
            </ol>
          </nav>
				</div>
			</div>
    </div>
	</section>

    
    <div className="toast m-5 alert alert-success shadow " id="myToast"  data-delay="5000">
         <div className="toast-header">
      <img src="img/bell.png" width="20px" className="rounded mr-2" alt="..."/>
      <strong className="mr-auto"> </strong>
      <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="toast-body">
        <strong className="" >Your order has aded to the <a href="cart.php">CART</a> Successfully! </strong>
    </div>
    </div>

 
	<div className="product_image_area" id="cartToast">
		<div className="container">
			<div className="row s_product_inner">
				<div className="col-lg-6">
					<div className="owl-carousel owl-theme s_Product_carousel">
						<div className="single-prd-item">
							<img className="img-fluid" src="/Assets/img/category/s-p1.jpg" alt=""/>
						</div>
					
					</div>
				</div>
				<div className="col-lg-5 offset-lg-1">
					<div className="s_product_text">
						<h3>Test Product</h3>
						<h2>Rs.3200</h2>
						<ul className="list">
							<li><a className="active" href="#"><span>Category</span> :Category 1</a></li>
							<li><a href="#"><span>Availibility</span> : In Stock</a></li>
						</ul>
						<p >Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for
							something that can make your interior look awesome, and at the same time give you the pleasant warm feeling
							during the winter.</p>
                        
						<div className="product_count">
			  <label for="qty">Quantity:</label>
			  <input type="text" name="qty" id="sst" size="2" maxlength="12" value="1" title="Quantity:" className="input-text qty "/>
              <button onClick=""
							 className="increase items-count" ><i className="ti-angle-up"></i></button>
							
				<button onClick=""
               				className="reduced items-count" type="button"><i className="ti-angle-down"></i></button>
							              
						</div>
						<button type="submit" id="addToCart" className="button primary-btn" >Add to Cart</button> 
						<div className="card_area d-flex align-items-center">
							<a className="icon_btn" href="#"><i className="lnr lnr lnr-diamond"></i></a>
							<a className="icon_btn" href="#"><i className="lnr lnr lnr-heart"></i></a>
						</div>
               
					</div>
                    
				</div>
			</div>
		</div>
	</div>


	<section className="product_description_area">
		<div className="container" >
			<ul className="nav nav-tabs" id="myTab" role="tablist">
				<li className="nav-item">
					<a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Overview</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
					 aria-selected="false">Specification</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact"
					 aria-selected="false">Comments</a>
				</li>
				<li className="nav-item">
					<a className="nav-link active" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review"
					 aria-selected="false">Reviews</a>
				</li>
			</ul>
			<div className="tab-content" id="myTabContent">
				<div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <p id="Test"></p>
                    
				</div>
				<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
					<div className="table-responsive">
						<table className="table">
							<tbody>
								
                          
                                    <tr>
                                      <td>
                                            <h5></h5>
                                     </td>
                                       <td>
                                          <h5></h5>
                                    </td>
                                     
                                    </tr>
                                  
									
								
								<tr>
									<td>
										<h5>Each Box contains</h5>
									</td>
									<td>
										<h5>60pcs</h5>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
					<div className="row">
						<div className="col-lg-6">
							<div className="comment_list">
								<div className="review_item">
									<div className="media">
										<div className="d-flex">
											<img src="img/product/review-1.png" alt=""/>
										</div>
										<div className="media-body">
											<h4>Blake Ruiz</h4>
											<h5>12th Feb, 2018 at 05:56 pm</h5>
											<a className="reply_btn" href="#">Reply</a>
										</div>
									</div>
									<p >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo</p>
								</div>
								<div className="review_item reply">
									<div className="media">
										<div className="d-flex">
											<img src="img/product/review-2.png" alt=""/>
										</div>
										<div className="media-body">
											<h4>Blake Ruiz</h4>
											<h5>12th Feb, 2018 at 05:56 pm</h5>
											<a className="reply_btn" href="#">Reply</a>
										</div>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo</p>
								</div>
								<div className="review_item">
									<div className="media">
										<div className="d-flex">
											<img src="img/product/review-3.png" alt=""/>
										</div>
										<div className="media-body">
											<h4>Blake Ruiz</h4>
											<h5>12th Feb, 2018 at 05:56 pm</h5>
											<a className="reply_btn" href="#">Reply</a>
										</div>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							
						</div>
					</div>
				</div>
				<div className="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
					<div className="row">
						<div className="col-lg-6">
							<div className="row total_rate">
								<div className="col-6">
									<div className="box_total">
										<h5>Overall</h5>
										<h4>4.0</h4>
										<h6>(03 Reviews)</h6>
									</div>
								</div>
								<div className="col-6">
									<div className="rating_list">
										<h3>Based on 3 Reviews</h3>
										<ul className="list">
											<li><a href="#">5 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
													 className="fa fa-star"></i><i className="fa fa-star"></i> 01</a></li>
											<li><a href="#">4 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
													 className="fa fa-star"></i><i className="fa fa-star"></i> 01</a></li>
											<li><a href="#">3 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
													 className="fa fa-star"></i><i className="fa fa-star"></i> 01</a></li>
											<li><a href="#">2 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
													 className="fa fa-star"></i><i className="fa fa-star"></i> 01</a></li>
											<li><a href="#">1 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
													 className="fa fa-star"></i><i className="fa fa-star"></i> 01</a></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="review_list">
								<div className="review_item">
									<div className="media">
										<div className="d-flex">
											<img src="img/product/review-1.png" alt=""/>
										</div>
										<div className="media-body">
											<h4>Blake Ruiz</h4>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
										</div>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo</p>
								</div>
								<div className="review_item">
									<div className="media">
										<div className="d-flex">
											<img src="img/product/review-2.png" alt=""/>
										</div>
										<div className="media-body">
											<h4>Blake Ruiz</h4>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
										</div>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo</p>
								</div>
								<div className="review_item">
									<div className="media">
										<div className="d-flex">
											<img src="img/product/review-3.png" alt=""/>
										</div>
										<div className="media-body">
											<h4>Blake Ruiz</h4>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
										</div>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo</p>
								</div>
							</div>
						</div>
						<CommentForm/>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<section className="related-product-area section-margin--small mt-0">
		<div className="container">
			<div className="section-intro pb-60px">
        <p>Popular Item in the market</p>
        <h2>Top <span className="section-intro__style">Product</span></h2>
      </div>
			<div className="row mt-30">
        <div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
          <div className="single-search-product-wrapper">
            <div className="single-search-product d-flex">
              <a href="#"><img src="img/product/product-sm-1.png" alt=""/></a>
              <div className="desc">
                  <a href="#" className="title">Gray Coffee Cup</a>
                  <div className="price">$170.00</div>
              </div>
            </div>
            <div className="single-search-product d-flex">
              <a href="#"><img src="img/product/product-sm-2.png" alt=""/></a>
              <div className="desc">
                <a href="#" className="title">Gray Coffee Cup</a>
                <div className="price">$170.00</div>
              </div>
            </div>
            <div className="single-search-product d-flex">
              <a href="#"><img src="img/product/product-sm-3.png" alt=""/></a>
              <div className="desc">
                <a href="#" className="title">Gray Coffee Cup</a>
                <div className="price">$170.00</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
          <div className="single-search-product-wrapper">
            <div className="single-search-product d-flex">
              <a href="#"><img src="img/product/product-sm-4.png" alt=""/></a>
              <div className="desc">
                  <a href="#" className="title">Gray Coffee Cup</a>
                  <div className="price">$170.00</div>
              </div>
            </div>
            <div className="single-search-product d-flex">
              <a href="#"><img src="img/product/product-sm-5.png" alt=""/></a>
              <div className="desc">
                <a href="#" className="title">Gray Coffee Cup</a>
                <div className="price">$170.00</div>
              </div>
            </div>
            <div className="single-search-product d-flex">
              <a href="#"><img src="img/product/product-sm-6.png" alt=""/></a>
              <div className="desc">
                <a href="#" className="title">Gray Coffee Cup</a>
                <div className="price">$170.00</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
          <div className="single-search-product-wrapper">
            <div className="single-search-product d-flex">
              <a href="#"><img src="img/product/product-sm-7.png" alt=""/></a>
              <div className="desc">
                  <a href="#" className="title">Gray Coffee Cup</a>
                  <div className="price">$170.00</div>
              </div>
            </div>
            <div className="single-search-product d-flex">
              <a href="#"><img src="img/product/product-sm-8.png" alt=""/></a>
              <div className="desc">
                <a href="#" className="title">Gray Coffee Cup</a>
                <div className="price">$170.00</div>
              </div>
            </div>
            <div className="single-search-product d-flex">
              <a href="#"><img src="img/product/product-sm-9.png" alt=""/></a>
              <div className="desc">
                <a href="#" className="title">Gray Coffee Cup</a>
                <div className="price">$170.00</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
          <div className="single-search-product-wrapper">
            <div className="single-search-product d-flex">
              <a href="#"><img src="img/product/product-sm-1.png" alt=""/></a>
              <div className="desc">
                  <a href="#" className="title">Gray Coffee Cup</a>
                  <div className="price">$170.00</div>
              </div>
            </div>
            <div className="single-search-product d-flex">
              <a href="#"><img src="img/product/product-sm-2.png" alt=""/></a>
              <div className="desc">
                <a href="#" className="title">Gray Coffee Cup</a>
                <div className="price">$170.00</div>
              </div>
            </div>
            <div className="single-search-product d-flex">
              <a href="#"><img src="img/product/product-sm-3.png" alt=""/></a>
              <div className="desc">
                <a href="#" className="title">Gray Coffee Cup</a>
                <div className="price">$170.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
		</div>
	</section>
		


        </div>
	)
	}
}
	

export default SingleProduct