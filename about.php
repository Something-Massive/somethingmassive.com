<?php
/*
Template Name: About Page
*/
get_header(); ?>

<div class="about">
<!-- About -->
	<div class="intro-about page-section">
		<div class="row vert-align">
			<div class="large-12 medium-12 small-12 columns">
				<h1 class="main-title">About Us</h1>
				<p class="intro-subtitle"><span>We're</span> Something Massive</p>
			</div>
		</div>
		<div class="scroll-container">
			<span class="scroll-btn toSlide" data-index="2" id="scroll-arrow"><img src="<?php bloginfo('template_directory');?>/images/scroll_arrow.png" /></span>
		</div>
	</div>
<!-- Mission Statement -->
	<div class="mission-about page-section light">
		<div class="row vert-align">
			<div class="large-12 medium-12 small-9 small-centered columns">
				<h1 class="main-title"><?php the_field('title'); ?></h1>
				<p class="subtitle"><span class="left-line"></span><?php the_field('subtitle'); ?><span class="right-line"></span></p>
			</div>
			<div class="large-10 large-centered medium-10 medium-centered small-9 small-centered columns">
				<p class="copy"><?php the_field('mission_statement'); ?></p>
			</div>
		</div>
	</div>	
<!-- The Crew -->
	<div class="the-crew-about page-section">
		<div class="crew-title">
			<div class="row">
				<div class="large-12 medium-12 small-12 columns">
					<h1 class="main-title">The Crew</h1>
				</div>
			</div>
		</div>
		<ul class="small-block-grid-2 medium-block-grid-3 large-block-grid-4">
			<?php
			/*
			*  Loop through a Repeater field
			*/
			 
			if( get_field('employee') ): ?>
			 
				<?php while( has_sub_field('employee') ): ?>
					<li><span class="crew-info"><h1><?php the_sub_field('name'); ?></h1><p><?php the_sub_field('title'); ?></p></span><img src="<?php the_sub_field('image'); ?>"></li>
				<?php endwhile; ?>
			 
			<?php endif; ?>
		</ul>
	</div>
	
</div>


<?php get_footer(); ?>