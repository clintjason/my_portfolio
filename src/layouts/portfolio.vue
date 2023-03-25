<script>
export default {

}
</script>
<template>
  	<section class="site-section" id="section-portfolio">
		<div class="container">
			<div class="row">
				<div class="section-heading text-center col-md-12">
					<h2>Featured <strong>Portfolio</strong></h2>
				</div>
			</div>
			<div class="filters">
				<ul>
					<li class="active" data-filter="*">All</li>
					<li data-filter=".packaging">Basics</li>
					<li data-filter=".mockup">ReactJs</li>
					<li data-filter=".typography">VueJs</li>
					<li data-filter=".photography">WordPress</li>
					<li data-filter=".backend">Backend</li>
				</ul>
			</div>

			<div class="filters-content">
				<div class="row grid">
					<a class="single-portfolio col-sm-4 all mockup">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src="images/p1.jpg" alt="">
							</div>
							<a href="images/p1.jpg" class="img-pop-up">  
								<div class="middle">
									<div class="text align-self-center d-flex"><img src="images/preview.png" alt=""></div>
								</div>
							</a>                                  
						</div>
						<div class="p-inner">
							<h4>Square Box Mockup</h4>
							<div class="cat">Mockup</div>
						</div>                                         
					</a>
					<div class="single-portfolio col-sm-4 all mockup">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src="images/p2.jpg" alt="">
							</div>
							<a href="images/p2.jpg" class="img-pop-up">  
								<div class="middle">
									<div class="text align-self-center d-flex"><img src="images/preview.png" alt=""></div>
								</div>
							</a>                                  
						</div>
						<div class="p-inner">
							<h4>Product Box Package Mockup</h4>
							<div class="cat">Mockup</div>
						</div>                                         
					</div>
					<a href="https://github.com/clintjason/reservia" target="_blank"  class="single-portfolio col-sm-4 all packaging">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src="@/assets/images/reservia.png" alt="">
							</div>                          
						</div> 
						<div class="p-inner">
							<h4>Reservia</h4>
							<div class="cat">House Rental Website</div>
						</div>
					</a>                  
					<a href="https://github.com/clintjason/ohmyfood_version_2" target="_blank" class="single-portfolio col-sm-4 all packaging">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src="@/assets/images/ohmyfood.png" alt="">
							</div>
						</div>
						<div class="p-inner">
							<h4>Ohmyfood</h4>
							<div class="cat">Restaurant Ordering Website</div>
						</div>
					</a>
					<a href="https://github.com/clintjason/la_panthere" target="_blank" class="single-portfolio col-sm-4 all packaging">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src="@/assets/images/lapantere.png" alt="">
							</div>
						</div>
						<div class="p-inner">
							<h4>La Pantère</h4>
							<div class="cat">Optimization of Existing Website</div>
						</div>
					</a>
					<a href="https://github.com/clintjason/kanap" target="_blank" class="single-portfolio col-sm-4 all packaging">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src="@/assets/images/kanap.png" alt="">
							</div>
						</div>
						<div class="p-inner">
							<h4>Kanap</h4>
							<div class="cat">Furniture Ordering Website</div>
						</div>
					</a>
					<a href="https://gosahc.000webhostapp.com/good_samaritan_health_center/index.php" target="_blank" class="single-portfolio col-sm-4 all packaging">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src="@/assets/images/gosahc.png" alt="">
							</div>
						</div>
						<div class="p-inner">
							<h4>Gosahc</h4>
							<div class="cat">Health Center Website</div>
						</div>
					</a>
					<a href="https://clintjason.github.io/omnifood/" target="_blank" class="single-portfolio col-sm-4 all packaging">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src="@/assets/images/omnifood.png" alt="">
							</div>
						</div>
						<div class="p-inner">
							<h4>Omnifood</h4>
							<div class="cat">Restaurant Website</div>
						</div>
					</a>
					<div class="single-portfolio col-sm-4 all typography">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src="images/p5.jpg" alt="">
							</div>
							<a href="images/p5.jpg" class="img-pop-up">  
								<div class="middle">
									<div class="text align-self-center d-flex"><img src="images/preview.png" alt=""></div>
								</div>
							</a>                                
						</div>
						<div class="p-inner">
							<h4>Isometric 3D Extrusion</h4>
							<div class="cat">Typography</div>
						</div>
					</div>
					<a href="https://github.com/clintjason/Kasa" target="_blank" class="single-portfolio col-sm-4 all mockup">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src="@/assets/images/kasa.png" alt="">
							</div>                               
						</div>
						<div class="p-inner">
							<h4>Kasa</h4>
							<div class="cat">Housing E-commerce Website</div>
						</div>
					</a>
					<a class="single-portfolio col-sm-4 all backend">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src="@/assets/images/backend_kanap_refurbished.png" alt="">
							</div>                           
						</div>
						<div class="p-inner">
							<h4>RestApi For Kanap</h4>
							<div class="cat">Refurbished Backend of Kanap</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	</section>
</template>