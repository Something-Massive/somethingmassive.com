<div class="large-12 columns">
	<div class="fixed">
	
	<!-- If you want to use the more traditional "fixed" navigation.
		 simply replace "sticky" with "fixed" -->

		<nav class="top-bar" data-topbar data-options="is_hover: false"r>
			<ul class="title-area">
				<!-- Title Area -->
				<li class="name">
					<h1> <a href="<?php echo home_url(); ?>" rel="nofollow"><?php bloginfo('name'); ?></a></h1>
				</li>
				<li class="toggle-topbar">
					<a href="#"><span></span></a>
				</li>
			</ul>		
			<section class="top-bar-section">
				<?php joints_main_nav(); ?>
			</section>
		</nav>
	</div>
</div>