<?php
/**
 * Theme functions and definitions
 *
 * @package HelloElementorChild
 */

/**
 * Load child theme css and optional scripts
 *
 * @return void
 */
function hello_elementor_child_enqueue_scripts() {
	wp_enqueue_style(
		'hello-elementor-child-style',
		get_stylesheet_directory_uri() . '/style.css',
		[
			'hello-elementor-theme-style',
		],
		'1.0.0'
	);
}
add_action( 'wp_enqueue_scripts', 'hello_elementor_child_enqueue_scripts', 20 );



if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page();
	
}


add_action('init', function() {
    register_nav_menu('main-menu', 'Huvudmeny' );
	header("Access-Control-Allow-Origin: *");
	
});




function get_logo() {
    return array( 'url' => wp_get_attachment_image_src(get_theme_mod( 'custom_logo' ), 'full')[0] );
}




add_action( 'rest_api_init', function () {
	
    // Endpoint: /next/menu
    register_rest_route( 'next', '/menu', array(
	    'methods' => 'GET',
		'callback' => function($args) {
		    

			// $mypages = get_pages();

		    $mainMenu = wp_get_nav_menu_items('main-menu');
			
			
		    $mainMenu = array_map(function($item) {
		       
		        $item->is_primary = get_field('is_primary', $item->ID);
		        return $item;
		    }, $mainMenu);
		    
			
			return array(
			    'main_menu' => $mainMenu
			);
		},
		'args' => [
			'id'
		],
	));
	
	// Endpoint: /next/logo
	register_rest_route( 'next', '/logo', array(
		'methods' => 'GET',
		'callback' => function($args) {
			return get_logo();
		}
	));
	//adds elementor content with inline styling
	 if (class_exists("\\Elementor\\Plugin")) {
	 register_rest_field(
          "page"
        , "elementor"
        , ["get_callback" => function ($req) {

                $contentElementor = "";

               
                    $post_ID = $req['id'];

                    $pluginElementor = \Elementor\Plugin::instance();
                    $contentElementor = $pluginElementor->frontend->get_builder_content($post_ID,true);
                


                return $contentElementor;

            },
        ]
    );
	 }
}); 

function my_acf_init() {
    acf_update_setting('google_api_key', 'AIzaSyBnMgJhPHF27a742WUj7IvwSl1ZC9t-Ebw');
}
add_action('acf/init', 'my_acf_init');

function add_data_to_projects($response, $post) {
    
    
    $term = get_the_terms( $post->ID, 'status' );
    $status_label = get_field('card_label', $term[0]);
    
    if (isset($post)) {
        $response->data['card_label'] = $status_label;
        
    }
    
    return $response;
}
add_filter('rest_prepare_projects', 'add_data_to_projects', 10, 3);


add_theme_support( 'post-thumbnails' );