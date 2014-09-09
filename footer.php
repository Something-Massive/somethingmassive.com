					<footer class="footer" role="contentinfo">
					
						<div id="inner-footer" class="row clearfix">
						
							<div class="large-12 medium-12 columns">
								<nav role="navigation">
		    						<?php joints_footer_links(); ?>
		    					</nav>
		    				</div>
			               
			                <div class="large-12 medium-12 columns">		
								<p class="source-org copyright">&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>.</p>
							</div>		
						</div> <!-- end #inner-footer -->			
					</footer> <!-- end .footer -->
				</div> <!-- end #container -->
			</div> <!-- end .inner-wrap -->
		</div> <!-- end .off-canvas-wrap -->
		<script type="text/javascript" src="<?php bloginfo('template_directory');?>/js/jquery.silver_track.js" charset="utf-8"></script>
		<script type="text/javascript" src="<?php bloginfo('template_directory');?>/js/jquery.silver_track_recipes.js" charset="utf-8"></script>
		<script type="text/javascript" src="<?php bloginfo('template_directory');?>/js/plugins/jquery.silver_track.navigator.js" charset="utf-8"></script>
		<script type="text/javascript" src="<?php bloginfo('template_directory');?>/js/plugins/jquery.silver_track.bullet_navigator.js" charset="utf-8"></script>
		<script type="text/javascript" src="<?php bloginfo('template_directory');?>/js/plugins/jquery.silver_track.responsive_hub_connector.js" charset="utf-8"></script>
		<script>
			var container = $(".work-slider");
			var track = container.find(".slider-container").silverTrack();
			
			// install the plugins you want, in our case Navigator
			track.install(new SilverTrack.Plugins.Navigator({
			  prev: $("a.prev", container),
			  next: $("a.next", container)
			}));
			
			track.start();
	    
		</script>
		<!--
<script src="<?php bloginfo('template_directory');?>/js/jquery.panelSnap.js"></script>
	    <script>
			$(document).ready(function(){
		        // Basic demo
		        $('.container').panelSnap(options);
		        
		        var options = {
				  $menu: false,
				  panelSelector: 'div',
				  directionThreshold: 50,
				  slideSpeed: 200
				};
	
				});
	      
	      
	
	    </script>
-->
					
				<!-- all js scripts are loaded in library/joints.php -->
				<?php wp_footer(); ?>

	</body>

</html> <!-- end page -->