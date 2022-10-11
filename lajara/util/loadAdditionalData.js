import Wordpress from "./Wordpress";
import useProjects from "./useProjects";

/**
 * Checks all blocks that the page wants to load and loads additional data if needed.
 */
 export default async function loadAdditionalData(blocks) {


    if (!blocks || typeof blocks != 'object') return;

    for (let block of blocks) {

        if (block.acf_fc_layout == 'featured_posts') {

            let posts = [];

            // Add selected products.
            if (typeof block.posts == 'object' && block.posts?.length != 0) {
                posts = [...posts, ...(await Wordpress.getPosts({
                    include: block.posts.join(','),
                    '_embed': true,
                })).posts];
            }

            let freeSlots = 3 - posts.length;



            if (freeSlots > 0) {
                posts = [...posts, ...(await Wordpress.getPosts({
                    per_page: freeSlots,
                    // exclude: block.posts.join(','),
                    orderby: 'date',
                    '_embed': true,
                })).posts];
            }

            block.data_posts = posts
        }

        if (block.acf_fc_layout == 'last_posts') {

            let posts = [];

            // Add selected products.
            if (typeof block.posts == 'object' && block.posts?.length != 0) {
                posts = [...posts, ...(await Wordpress.getPosts({
                    include: block.posts.join(','),
                    '_embed': true,
                })).posts];
            }

            let limit = block.limit ?? 6
            let freeSlots = limit - posts.length;



            if (freeSlots > 0) {
                posts = [...posts, ...(await Wordpress.getPosts({
                    per_page: freeSlots,
                    // exclude: block.posts.join(','),
                    orderby: 'date',
                    '_embed': true,
                })).posts];
            }

            block.data_posts = posts
        }

        if (block.acf_fc_layout == 'residences') {
            block.projects = await Wordpress.getProjects({
                
            })
        }

    }
}