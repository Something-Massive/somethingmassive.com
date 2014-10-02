		</div>
		<!-- #fullpage END -->

				</div> <!-- end #container -->
				<?php include (TEMPLATEPATH . '/footer-area.php'); ?>
			</div> <!-- end .inner-wrap -->
		</div> <!-- end .off-canvas-wrap -->
		<script type="text/javascript" src="<?php bloginfo('template_directory');?>/js/jquery.silver_track.js" charset="utf-8"></script>
		<script type="text/javascript" src="<?php bloginfo('template_directory');?>/js/jquery.silver_track_recipes.js" charset="utf-8"></script>
		<script type="text/javascript" src="<?php bloginfo('template_directory');?>/js/plugins/jquery.silver_track.navigator.js" charset="utf-8"></script>
		<script type="text/javascript" src="<?php bloginfo('template_directory');?>/js/plugins/jquery.silver_track.bullet_navigator.js" charset="utf-8"></script>
		<script type="text/javascript" src="<?php bloginfo('template_directory');?>/js/plugins/jquery.silver_track.responsive_hub_connector.js" charset="utf-8"></script>
		
		<!--
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
-->
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
				
		<script type="text/javascript">
	  		$.noConflict();
			$(document).ready(function() {
			
			
			
				
				//makes scroll bounce
				$(window).on('load',function(){
					doBounce($("#scroll-arrow"), 3, '10px', 400); 
				});
				function doBounce(element, times, distance, speed) {
				    for(i = 0; i < times; i++) {
				        element.animate({marginTop: '-='+distance},speed)
				            .animate({marginTop: '+='+distance},speed);
				    }        
				}
					
		
			/*
	$('#fullpage').fullpage({
					scrollOverflow: true,
					sectionSelector: '.page-section',
					touchSensitivity: 2,
					afterRender: function(anchorLink, index){
						logocolor();
						if(index == '1'){
						 	doBounce($("#scroll-arrow"), 3, '10px', 400); 
						}
					},
					onLeave: function(anchorLink, index){
						logocolor();
						if(index == '1'){
						 	doBounce($("#scroll-arrow"), 3, '10px', 400); 
						}
					}
				});
*/
			});
		</script>

	</body>

</html> <!-- end page -->