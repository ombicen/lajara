<?php
/**
 * Theme functionality.
 *
 * @author WebDevStudios
 * @package wds-headless-theme
 * @since 1.0.0
 */

// Theme functionality here.
register_nav_menus( ['primary_menu' => 'Primary'] );
add_theme_support( 'post-thumbnails', array( 'post', 'page' ) );

function wds_add_logo_support() {
    $defaults = array(
        'height'               => 50,
        'width'                => 150,
        'flex-height'          => true,
        'flex-width'           => true,
        'header-text'          => array( 'site-title', 'site-description' ),
        'unlink-homepage-logo' => true, 
    );
 
    add_theme_support( 'custom-logo', $defaults );
}
add_action( 'after_setup_theme', 'wds_add_logo_support' );

add_action( 'graphql_register_types', function() {
    
    $field_config = [
      'type' => 'CustomLogo',
      'resolve' => function( $source, $args, $context, $info ) {
        $iid =  get_theme_mod('custom_logo');
        list($file['file'],$file['width'],$file['height']) = wp_get_attachment_image_src( $iid  , 'full' );
        $file['alt'] = get_bloginfo('name');
        return $file;
      },
    ];
  
    register_graphql_field( 'RootQuery', 'custom_logo', $field_config);
  });
  add_action( 'graphql_register_types', 'register_custom_logo_type' );

function register_custom_logo_type() {
    register_graphql_object_type( 'CustomLogo', [
      'description' => __( "Your custom theme logo", 'your-textdomain' ),
      'fields' => [
        'width' => [
            'type' => 'Integer',
            'description' => __( 'Width of the logo', 'your-textdomain' ),
        ],
        'height' => [
            'type' => 'Integer',
            'description' => __( 'Height of the logo', 'your-textdomain' ),
        ],
        'file' => [
            'type' => 'String',
            'description' => __( 'Url of the logo', 'your-textdomain' ),
        ],
        'alt' => [
            'type' => 'String',
            'description' => __( 'Alt text of the website', 'your-textdomain' ),
        ],
      ],
    ] );
}


if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page();
	
}
