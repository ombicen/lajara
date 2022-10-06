const url = process.env.NEXT_PUBLIC_WORDPRESS_URL

export default class Wordpress {


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

    static async getOptions() {
        return (await this.get(`/acf/v3/options/options`)).acf;
    }

}