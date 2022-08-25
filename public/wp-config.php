<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';
define( 'HEADLESS_FRONTEND_URL', 'http://lajara.local:3000/' );
define( 'PREVIEW_SECRET_TOKEN', '1hH%)/h7R][|eO|*>wmy|9rF~dZb(D}e{g8kk2-;*E5>?ijGA#yc@?LH<e+~6%?C');
define( 'GRAPHQL_JWT_AUTH_SECRET_KEY', '+SRDWt$+|zAYK9s>gUo^q]>-gyJc+A<{+OL/mJAk?JG81e1=f+R,?ml.wjz@>%!$' );
define('AUTH_KEY',         'J{2u2;OoA)~9M-{~9|FDUrDQ|0M?6yqiR4_g]ivUe<&sfU*8v-m/;8c^/B5-$i)w');
define('SECURE_AUTH_KEY',  'Gp_B7^Ie)]i~Dgk.QfMEIZ/W3Ro^<S|[fzc*-IeSp9dlbE&}KL}]k:)*`n5gi@a;');
define('LOGGED_IN_KEY',    'sXA4nq/u<EB=B|</xVi}T{|uw|-MN#xKZ=qr!f= fw8-HKmC_KqW&kRdc22dE9~L');
define('NONCE_KEY',        '2eUYIV9YGe/>11nkUcU8ZN~j{B0d/y%d=O`_Z:k{jH[n6Tr-=THo5Y/)2gsyxpQ~');
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
