<?php
/*
Template Name: Studio Page
*/
get_header(); ?>

<div class="studio">
<!-- Studio -->
	<div class="intro-studio page-section">
		<div class="row vert-align">
			<div class="large-12 medium-12 small-12 columns">
				<h1 class="main-title">Studio</h1>
				<p class="intro-subtitle"><span>We're</span> Something Massive</p>
			</div>
		</div>
		<div class="scroll-container">
			<span class="scroll-btn toSlide" data-index="2" id="scroll-arrow"><img src="<?php bloginfo('template_directory');?>/images/scroll_arrow.png" /></span>
		</div>
	</div>
<!-- Massive Studio -->
	<div class="massive-studio page-section">
		<div class="row vert-align">
			<div class="large-12 medium-12 small-9 small-centered columns">
				<h1 class="main-title">Massive Studio</h1>
				<p class="subtitle"><span class="left-line"></span>Creative Partnerships<span class="right-line"></span></p>
			</div>
			<div class="large-10 large-centered medium-10 medium-centered small-9 small-centered columns">
				<p class="copy">The Massive Studio starts with our people: a rare collection of talents from the advertising, film, comedy and art worlds. We have years of proven experience pioneering short-form creative. Located in central Los Angeles, our connections to the entertainment industry run deep, and our production resources offer quality, speed and agility.

What’s micro content? It’s how we use video, statics and crowd-sourced material to tell the story of your brand online. Why micro? More messages, more often, to a more targeted group. That’s our goal. 

The Massive Studio lives within our own four walls and offers our clients an affordable and adaptable turnkey solution to meet the increasing need for original, breakthrough content. We offer full production capabilities in-house, including:
</p>
			</div>
		</div>
	</div>	
<!-- Equipment -->
	<div class="equipment page-section">
		<ul class="small-block-grid-1 medium-block-grid-3 large-block-grid-3">
			<li><img src="<?php bloginfo('template_directory');?>/images/studio/1.jpg" /></li>
			<li><img src="<?php bloginfo('template_directory');?>/images/studio/2.jpg" /></li>
			<li><img src="<?php bloginfo('template_directory');?>/images/studio/3.jpg" /></li>
			<li><img src="<?php bloginfo('template_directory');?>/images/studio/4.jpg" /></li>
			<li><img src="<?php bloginfo('template_directory');?>/images/studio/5.jpg" /></li>
			<li><img src="<?php bloginfo('template_directory');?>/images/studio/6.jpg" /></li>
			<li><img src="<?php bloginfo('template_directory');?>/images/studio/7.jpg" /></li>
			<li><img src="<?php bloginfo('template_directory');?>/images/studio/8.jpg" /></li>
			<li><img src="<?php bloginfo('template_directory');?>/images/studio/9.jpg" /></li>
		</ul>
	</div>
<!-- Photos -->	
	<div class="studio-photos page-section">
		<div class="large-12 columns">
			<ul class="small-block-grid-1 medium-block-grid-2 large-block-grid-2">
				<li class="large-6 medium-6 small-12 main-squares columns">
					<ul class="small-block-grid-1 four-images medium-block-grid-2 large-block-grid-2">
						<li><img src="http://placehold.it/1000x1000&text=[photo]"></li>
						<li><img src="http://placehold.it/1000x1000&text=[photo]"></li>
						<li><img src="http://placehold.it/1000x1000&text=[photo]"></li>
						<li><img src="http://placehold.it/1000x1000&text=[photo]"></li>
					</ul>
					
				</li>
				<li class="large-6 medium-6 small-12 main-squares columns">
					<img class="single-large" src="http://placehold.it/1000x1000&text=[photo]">
				</li>
				<li class="large-6 medium-6 small-12 main-squares columns">
					<img class="single-large" src="http://placehold.it/1000x1000&text=[photo]">
				</li>
				<li class="large-6 medium-6 small-12 main-squares columns">
					<ul class="small-block-grid-1 four-images medium-block-grid-2 large-block-grid-2">
						<li><img src="http://placehold.it/1000x1000&text=[photo]"></li>
						<li><img src="http://placehold.it/1000x1000&text=[photo]"></li>
						<li><img src="http://placehold.it/1000x1000&text=[photo]"></li>
						<li><img src="http://placehold.it/1000x1000&text=[photo]"></li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
<!-- Studio Rental -->
	<div class="details-studio">
		<div class="large-12 medium-12 small-9 small-centered columns">
			<h1 class="main-title">Need A Studio</h1>
			<p class="subtitle"><span class="left-line"></span>Contact us for rental info<span class="right-line"></span></p>
		</div>
		<div class="large-7 large-centered medium-7 medium-centered small-9 small-centered columns">
			<div class="row">
				<div class="large-6 medium-6 small-12 columns">
					<img src="<?php bloginfo('template_directory');?>/images/map-studio.png" alt="map" />
					<h2>Address</h2>
					<p>6030 Wilshire Blvd, Suite 301<br /> Los Angeles 90036</p>
				</div>
				<div class="large-6 medium-6 small-12 columns">
					<img src="<?php bloginfo('template_directory');?>/images/phone-studio.png" alt="phone" />
					<h2>Phone/Email</h2>
					<p><a href="tel:<?php the_field('phone_number'); ?>" style="color: #4b4151;">310.302.8900</a></p>
					<p><a class="show-for-small-only" href="mailto:<?php the_field('email_address'); ?>" style="color: #4b4151;">Email Us</a></p>
					<p><a class="show-for-medium-up" href="mailto:<?php the_field('email_address'); ?>" style="color: #4b4151;">LA@Somethingmassive.com</a></p>
				</div>
			</div>
		</div>
	</div>	
</div>


<?php get_footer(); ?>