import { useEffect, useState } from "react";
import { useQueryParams } from "./Utils";


export default function useProjects({args = {}, limit = 4} = {}) {


    console.log(limit)
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(0)
    const [loading, setLoading] = useState(false)
    const [projects, setProjects] = useState(undefined) 
    const [query, setQuery] = useQueryParams()

    const load = async () => {

        setLoading(true)

        let url = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/projects?order=asc&_embed=true&page=${page}&per_page=${limit}&${Object.entries(query).map(([k, v]) => `${k}=${v}`).join('&')}`;

        let resp = await fetch(url);
        let projects = await resp.json();
        let totalPages = resp.headers.get('X-WP-TotalPages');

        setProjects(projects)
        setPages(totalPages)
        setLoading(false)

    }


    useEffect(() => {
      load()
    }, [query, page])



    return {
        page,
        setPage,
        projects,
        pages
    }


    
}