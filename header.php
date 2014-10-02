<!doctype html>

<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" <?php language_attributes(); ?>> <![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?>> <!--<![endif]-->

	<head>
		<meta charset="utf-8">

		<title><?php wp_title(''); ?></title>
		
		<!-- site meta -->
		<meta name="title" content="" />
		<meta name="description" content="" />
		<meta name="keywords" content="" />
		
		<meta name="twitter:title" content="" />
		<meta name="twitter:description" content="" />
		<meta name="twitter:site" content="" />
		<meta name="twitter:url" content="" />
		<meta name="twitter:creator" content="" />
		<meta name="twitter:image" content="" />
		
		<meta name="og:title" content="" />
		<meta name="og:description" content="" />
		<meta property="og:url" content="http://somethingmassive.com/" />
		<meta name="og:site_name" content="" />
		<meta property="og:image" content="" />
		<meta property="og:type" content="website" />
		<meta property="fb:app_id" content="" />

		<!-- Google Chrome Frame for IE -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

		<!-- mobile meta -->
		<meta name="HandheldFriendly" content="True">
		<meta name="MobileOptimized" content="320">
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

		<!-- icons & favicons -->
		<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/library/images/apple-icon-touch.png">
		<link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
		<!--[if IE]>
			<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
		<![endif]-->
		<meta name="msapplication-TileColor" content="#f01d4f">
		<meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/library/images/win8-tile-icon.png">

	  	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
	  	
	  	<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri() ?>/css/structure.css">
	  	<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri() ?>/css/fonts/fonts.css" type="text/css" charset="utf-8" />
	  	<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_directory');?>/js/jcarousel.responsive.css">

        <script type="text/javascript" src="<?php bloginfo('template_directory');?>/js/jquery.jcarousel.js"></script>
        <script type="text/javascript" src="<?php bloginfo('template_directory');?>/js/jcarousel.responsive.js"></script>

	  	
	  	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script> 
        
        <!-- <script type="text/javascript" src="<?php bloginfo('template_directory');?>/js/jquery.slimscroll.min.js"></script> -->
       <!--  <script type="text/javascript" src="<?php bloginfo('template_directory');?>/js/jquery.fullPage.js"></script> -->
        <script type="text/javascript" src="<?php echo get_stylesheet_directory_uri() ?>/js/scripts.js"></script>
	  	
	  	<script type="text/javascript" src="//use.typekit.net/hoj6fxg.js"></script>
		<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
		
		<?php wp_head(); ?>
		
		<!-- Drop Google Analytics here -->
		<!-- end analytics -->

	</head>

	<body <?php body_class(); ?>>

	<div class="off-canvas-wrap">
		<div class="inner-wrap">
			<div id="container">
	
				<header class="header" role="banner">
					<a class="sm-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php bloginfo('template_directory');?>/images/logo.png" alt="logo" /></a>
					<h4 class="nav-icon"><img src="<?php bloginfo('template_directory');?>/images/nav-icon.png" alt="nav-icon" /></h4>
					<div id="inner-header" >
						<nav class="naver reset" data-naver-options='{"maxWidth":"2560px"}'>
							<?php wp_nav_menu( array( 'theme_location' => 'main-nav' ) ); ?>
							<ul class="social-header">
								<?php
								/*
								*  Loop through a Repeater field
								*/
								 
								if( get_field('header_social_links', 'option') ): ?>
								 
									<?php while( has_sub_field('header_social_links', 'option') ): ?>
										<li>
											<a href="<?php the_sub_field('url'); ?>" target="_blank" ><img src="<?php the_sub_field('image'); ?>" alt="<?php the_sub_field('site_name'); ?>" /></a>
										</li>
									<?php endwhile; ?>
								 
								<?php endif; ?>
							</ul>
						</nav>
						
						 <?php  //get_template_part( 'partials/nav', 'offcanvas' ); ?> 
						
						 <?php // get_template_part( 'partials/nav', 'topbar' ); ?>
						 
						 <?php // get_template_part( 'partials/nav', 'offcanvas-sidebar' ); ?>  								
						
						<!-- You only need to use one of the above navigations.
							 Offcanvas-sidebar adds a sidebar to a "right" offcanavas menus. -->
										
					</div> <!-- end #inner-header -->
	
				</header> <!-- end header -->
	<div id="fullpage">