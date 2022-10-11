const url = process.env.NEXT_PUBLIC_WORDPRESS_URL

export default class Wordpress {


    static getURL() {
        return `${url}/wp-json`;
    }

    static getBaseURL() {
        return url;
    }
    
    static getMenuItemUrl(item) {
        let url = item.url;

        // Support services in menu data.
        if (item.type == 'post_type' && item.object == 'services') {
            url = `/tjanst${item.url.replace(Wordpress.getBaseURL(), '')}`;
            url = url.substring(0, url.length - 1);
        }

        // Support pages in menu data.
        if (item.type == 'post_type' && item.object == 'page') {
            url = `${item.url.replace(Wordpress.getBaseURL(), '')}`;
            url = url.substring(0, url.length - 1);
        }

        return url;
    }

    static async getLogo() {
        return (await this.get("/next/logo")).url;
    }

    static async getMenu() {
        return await this.get(`/next/menu`);
    }


    static async checkCached(ep) {
        return;
        if (typeof window == "undefined" || typeof localStorage == "undefined" || localStorage === null) {
            return;
        }

        let json = await (await fetch(`${url}/wp-json${ep}`)).json();
        if (JSON.stringify(json) === localStorage.getItem(ep)) {
        } else {
            localStorage.setItem(ep, JSON.stringify(json));
        }
    }

    static async getPageBySlug(slug) {

        if(!slug) return;
        const page = await this.get(`/wp/v2/pages?slug=${slug}`)
        if (page == undefined) throw '500';
        return page[0];

    }

    static async post(ep, body = {}) {
        return await (await fetch(`${url}/wp-json${ep}`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })).json();
    }

    static async get(ep) {
        if (!url) return;

        let resp = await fetch(`${url}/wp-json${ep}`);

        try {
            let json = await resp.json();
            if (typeof sessionStorage !== "undefined") {
                sessionStorage.setItem(ep, JSON.stringify(json));
            }
            return json;
        } catch(e) {

        }


        return resp;
    }

    static async getPages() {
        return await this.get(`/wp/v2/pages?per_page=99`);
    }

    static objectToParams(args) {
        let params = Object.entries(args).filter(([k, v]) => v != undefined).map(([key, value]) => `${key}=${encodeURIComponent(value)}`).join('&')
        return `?${params}`
    }

    /* === Posts === */
    static async getPosts(args) {
        args = Object.assign({
            _embed: true
        }, args)

        let res = await fetch(`${Wordpress.getBaseURL()}/wp-json/wp/v2/posts${this.objectToParams(args)}`);

        let json = await res.json();

        if (json?.code == 'rest_post_invalid_page_number') return;

        return {
            posts: json, 
            totalPages: Number(res.headers.get('X-WP-TotalPages'))
        }
    }

    static async getPost(id) {
        return await this.get(`/wp/v2/posts/${id}?_embed=true`);
    }

    static async getPostsByCategory(slug) {
        return await this.get(`/wp/v2/posts?category_slug=${slug}&per_page=99&_embed=true`);
    }
    
    static async getPostCategories() {
        return await this.get(`/wp/v2/categories?per_page=99&_embed=true`);
    }

    static async getPostBySlug(slug) {
        const post = await this.get(`/wp/v2/posts?slug=${slug}&_embed=true`)
        if(!post) return;
        return post[0];
    }

    static async getLatestPost() {
        const post = await this.get(`/wp/v2/posts?per_page=1&_embed=true`)
        if(!post) return;
        return post[0];
    }

    static async getTaxonomi(slug) {
        return await this.get(`/wp/v2/${slug}`);
    }


    /* === Projects === */

    static async getProjects({page = 1, limit = 48, query = {}}) {

        
        return await this.get(`/wp/v2/projects?order=asc&page=${page}&_embed=true&per_page=${limit}&${Object.entries(query).map(([k, v]) => `${k}=${v}`).join('&')}`);
    }

    static async getProject(id) {
        return await this.get(`/wp/v2/projects/${id}&_embed=true`);
    }
    

    static async getProjectBySlug(slug) {
        const post = await this.get(`/wp/v2/projects/?slug=${slug}&_embed=true`)
        if(!post) return;
        return post[0];
    }

    static async getLatestProject() {
        const post = await this.get(`/wp/v2/projects/?per_page=1&_embed=true`)
        if(!post) return;
        return post[0];
    }

    static async getOptions() {
        return (await this.get(`/acf/v3/options/options`)).acf;
    }


}




export function renderTitle(title) {
    return `${title} - Lajara`;
}

export function localLink(link) {
    return link.replace(Wordpress.getBaseURL(), '').replace(/\/$/, '');
}

export function getPageUrl(page) {
    return `${page?.link?.replace(Wordpress.getBaseURL(), '')}`
}

export function getAbsolutePageUrl(page) {
    return `http://localhost:3000/${page?.link?.replace(Wordpress.getBaseURL(), '')}`
}

export const wait = time => new Promise(res => setTimeout(res, time))