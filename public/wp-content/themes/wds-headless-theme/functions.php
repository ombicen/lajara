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