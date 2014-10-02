<?php get_header(); ?>
<div class="home" id="fullscreen">
<!-- Intro -->

	<div class="section intro-home page-section">
		<div class="row vert-align">
			<div class="large-12 medium-12 small-12 columns">
				<h1 class="main-title">Welcome</h1>
				<p class="intro-subtitle"><span>We're</span> Something Massive</p>
			</div>
		</div>
		<div class="scroll-container">
			<span class="scroll-btn toSlide" data-index="2" id="scroll-arrow"><img src="<?php bloginfo('template_directory');?>/images/scroll_arrow.png" /></span>
		</div>
	</div>
	
<!-- About -->	

	<div class="section about-home page-section light">
		<div class="row vert-align">
			<div class="large-12 medium-12 small-9 small-centered columns">
				<h1 class="main-title"><?php the_field('about_us_title'); ?></h1>
				<p class="subtitle"><span class="left-line"></span><?php the_field('about_subtitle'); ?><span class="right-line"></span></p>
			</div>
			<div class="large-12 large-centered medium-10 medium-centered small-9 small-centered columns">
				<p class="home-copy"><?php the_field('about_description'); ?></p>
				<a class="lined-button" href="<?php the_field('about_button_link'); ?>"><span class="button"><?php the_field('about_button_text'); ?></span></a>
			</div>
		</div>
	</div>
	
<!-- What We Do -->	
	
	<div class="section what-we-do-home page-section">
		<div class="row vert-align">
			<div class="large-12 medium-12 small-12 small-centered columns">
					<h1 class="main-title"><?php the_field('what_we_do_title'); ?></h1>
				<p class="subtitle"><span class="left-line"></span><?php the_field('what_we_do_subtitle'); ?><span class="right-line"></span></p>
			</div>
			<div class="large-12 large-centered medium-12 medium-centered small-12 small-centered columns">
				<div class="row things">
					<div class="large-4 medium-4 small-12 columns col_1">
						<h3><?php the_field('col_1_title'); ?></h3>
						<p class="home-copy"><?php the_field('col_1_description'); ?></p>
					</div>
					<div class="large-4 medium-4 small-12 columns col_2">
						<h3><?php the_field('col_2_title'); ?></h3>
						<p class="home-copy"><?php the_field('col_2_description'); ?></p>
					</div>
					<div class="large-4 medium-4 small-12 columns col_3">
						<h3><?php the_field('col_3_title'); ?></h3>
						<p class="home-copy"><?php the_field('col_3_description'); ?></p>
					</div>
				</div>
				<a class="lined-button" href="<?php the_field('what_we_do_button_link'); ?>"><span class="button"><?php the_field('what_we_do_button_text'); ?></span></a>
			</div>
		</div>
	</div>
	
<!-- Work -->	

	 <div class=" section work-home page-section" style="background-image: url('<?php the_field('work_image'); ?>');">
		 <div class="row vert-align">
		 	<div class="large-12 medium-12 small-9 small-centered columns">
		 		<h1 class="main-title"><span>The</span>Work</h1>
		 		<p class="home-copy"><?php the_field('work_description'); ?></p>
		 		<a class="lined-button"><span class="button"><?php the_field('work_button_text'); ?></span></a>
		 	</div>
		 </div>
	 </div>
	 
<!-- Contact -->	 

	<div class="section contact-home page-section light">
		<div class="vert-align">

		
		<!-- Form -->	
		
			<div class="form-home">
				<div class="row">
					<div class="large-12 medium-12 small-9 small-centered columns">
						<h1 class="main-title"><?php the_field('contact_title'); ?></h1>
						<p class="subtitle"><span class="left-line"></span><?php the_field('contact_subtitle'); ?><span class="right-line"></span></p>
					</div>
					<div class="large-8 large-centered medium-8 medium-centered small-9 small-centered columns">
						<?php the_field('contact_form'); ?>
					</div>
				</div>
			</div>	
			<div class="bottom-home">
			<!-- Map -->		
					
				<div class="map-home">
					<!-- <img src="<?php bloginfo('template_directory');?>/images/sm-map.jpg" alt="sm-map" /> -->
					<div id="view1">
					<?php
					$location = get_field('sm_map');
					if( ! empty($location) ):
					?>
					<div id="map" style="width: 100%; height: 350px;"></div>
					<script src='http://maps.googleapis.com/maps/api/js?sensor=false' type='text/javascript'></script>
					
					<script type="text/javascript">
					  //<![CDATA[
						function load() {
						var lat = <?php echo $location['lat']; ?>;
						var lng = <?php echo $location['lng']; ?>;
					// coordinates to latLng
						var latlng = new google.maps.LatLng(lat, lng);
						var mapStyles = [
						  {
						    "stylers": [
						      { "saturation": -100 },
						      { "lightness": -51 },
						      { "gamma": 0.67 }
						    ]
						  }
						];
					// map Options
						var myOptions = {
						zoom: 18,
						center: latlng,
						mapTypeId: google.maps.MapTypeId.ROADMAP, 
						styles: mapStyles,
						zoomControl: false,
						scaleControl: false,
						scrollwheel: false,
						panControl: false,
					    streetViewControl: false,
						disableDoubleClickZoom: true,
						draggable: false
					   };

					//draw a map
						var map = new google.maps.Map(document.getElementById("map"), myOptions);
						var iconBase = 'http://fbdev.somethingmassive.com/smdev/wp-content/themes/somethingmassive2014/images/';
						var marker = new google.maps.Marker({
						position: map.getCenter(),
						map: map,
						icon: iconBase + 'sm-marker.png'
					   });
					}
					// call the function
					   load();
					//]]>
					</script>
					<?php endif; ?> 
					
					</div>
				</div>
						
				<!-- Details -->	
				
				<div class="details-home">
					<div class="large-7 large-centered medium-7 medium-centered small-9 small-centered columns">
						<div class="row">
							<div class="large-6 medium-6 small-12 columns">
								<img src="<?php bloginfo('template_directory');?>/images/map.png" alt="map" />
								<h2>Address</h2>
								<p><?php the_field('address'); ?></p>
							</div>
							<div class="large-6 medium-6 small-12 columns">
								<img src="<?php bloginfo('template_directory');?>/images/phone.png" alt="phone" />
								<h2>Phone/Email</h2>
								<p><a href="tel:<?php the_field('phone_number'); ?>" style="color: #ffffff;"><?php the_field('phone_number'); ?></a></p>
								<p><a class="show-for-small-only" href="mailto:<?php the_field('email_address'); ?>" style="color: #ffffff;">Email Us</a></p>
								<p><a class="show-for-medium-up" href="mailto:<?php the_field('email_address'); ?>" style="color: #ffffff;"><?php the_field('email_address'); ?></a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
				
		</div>
	</div>
	
	
</div>

<?php get_footer(); ?>