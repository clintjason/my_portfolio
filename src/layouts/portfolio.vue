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
					<li data-filter=".vuejs">VueJs</li>
					<li data-filter=".wordpress">WordPress</li>
					<li data-filter=".backend">Backend</li>
				</ul>
			</div>

			<div class="filters-content">
				<div class="row grid">
					<a href="https://igraphix237.com/" target="_blank" class="single-portfolio col-sm-4 all wordpress">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src="@/assets/images/igraphix237.png" alt="Igraphix237 Homepage pic">
							</div>                             
						</div>
						<div class="p-inner">
							<h4>igraphix237</h4>
							<div class="cat">Graphic Design Company Website</div>
						</div>                                         
					</a>
					<a href="https://omnitextgroup.com/" target="_blank" class="single-portfolio col-sm-4 all mockup">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src="@/assets/images/omnitextgroup.png" alt="OmnitextGroup Homepage pic">
							</div>                             
						</div>
						<div class="p-inner">
							<h4>Omnitextgroup</h4>
							<div class="cat">Linguistic Company Website</div>
						</div>                                         
					</a>
					<a class="single-portfolio col-sm-4 all mockup">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src="@/assets/images/p2.jpg" alt="">
							</div>                   
						</div>
						<div class="p-inner">
							<h4>Product Box Package Mockup</h4>
							<div class="cat">Mockup</div>
						</div>                                         
					</a>
					<a href="https://github.com/clintjason/Kasa" target="_blank" class="single-portfolio col-sm-4 all mockup">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src="@/assets/images/kasa.png" alt="kASA Preview">
							</div>                               
						</div>
						<div class="p-inner">
							<h4>Kasa</h4>
							<div class="cat">Housing E-commerce Website</div>
						</div>
					</a>
					<a href="https://github.com/clintjason/reservia" target="_blank"  class="single-portfolio col-sm-4 all packaging">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src="@/assets/images/reservia.png" alt="Reservia Preview">
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
								<img class="image img-fluid" src="@/assets/images/ohmyfood.png" alt="Ohmyfood Preview">
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
								<img class="image img-fluid" src="@/assets/images/lapantere.png" alt="La panthère Preview">
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
								<img class="image img-fluid" src="@/assets/images/kanap.png" alt="Kanap Preview">
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
								<img class="image img-fluid" src="@/assets/images/gosahc.png" alt="GOSAHC Preview">
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
								<img class="image img-fluid" src="@/assets/images/omnifood.png" alt="Omnifood Preview">
							</div>
						</div>
						<div class="p-inner">
							<h4>Omnifood</h4>
							<div class="cat">Restaurant Website</div>
						</div>
					</a>
					<a href="https://money-mastery-frontend.vercel.app/" target="_blank" class="single-portfolio col-sm-4 all vuejs">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src="@/assets/images/moneymastery.png" alt="Money Mastery Home Page Preview">
							</div>                       
						</div>
						<div class="p-inner">
							<h4>Money Mastery Academy</h4>
							<div class="cat">Finance Coaching Website - Vue3 + VueX</div>
						</div>
					</a>
					<a href="https://www.clintjason.com/" target="_blank" class="single-portfolio col-sm-4 all vuejs">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src="@/assets/images/portfolio.png" alt="My Portfolio Pic">
							</div>                             
						</div>
						<div class="p-inner">
							<h4>Portfolio</h4>
							<div class="cat">Portfolio Website - Vite + Vue3</div>
						</div>                                         
					</a>
					<a href="https://github.com/clintjason/social_media_backend.git" target="_blank" class="single-portfolio col-sm-4 all backend">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src="@/assets/images/backend_api_social_network.png" alt="backend_api_social_network">
							</div>                           
						</div>
						<div class="p-inner">
							<h4>Backend API E-connecte</h4>
							<div class="cat">Backend of Socia Media Website</div>
						</div>
					</a>
					<a href="https://github.com/clintjason/backend_kanap.git" target="_blank" class="single-portfolio col-sm-4 all backend">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src="@/assets/images/backend_kanap_refurbished.png" alt="backend_api_kanap">
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