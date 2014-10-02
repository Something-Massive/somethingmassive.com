<footer class="<?php global $post; $post_slug=$post->post_name; echo $post_slug; ?> footer" role="contentinfo">

	<div id="inner-footer" class="row clearfix">
       
        <div class="large-12 medium-12 columns">		
			<?php joints_footer_links(); ?>
			<ul class="social-footer">
				<?php
				/*
				*  Loop through a Repeater field
				*/
				 
				if( get_field('footer_social_links', 'option') ): ?>
				 
					<?php while( has_sub_field('footer_social_links', 'option') ): ?>
						<li>
							<a href="<?php the_sub_field('url'); ?>" target="_blank" ><img src="<?php the_sub_field('image'); ?>" alt="<?php the_sub_field('site_name'); ?>" /></a>
						</li>
					<?php endwhile; ?>
				 
				<?php endif; ?>
			</ul>
		</div>		
	</div> <!-- end #inner-footer -->			
</footer> <!-- end .footer -->