import { serve } from "./deps.js";
import { configure, renderFile } from "./deps.js";

configure({
    views: `${Deno.cwd()}/views/`,
});

const responseDetails = {
    headers: {
        "Content-Type": "text/html;charset=UTF-8",
    },
};

const data = {
    count: 0,
};

const handleRequest = async (request) => {
    const url = new URL(request.url);
    const path = url.pathname;
    if(path === "/count") {
        data.count++;
        return new Response(await renderFile("count.eta", data), responseDetails);
    }

    return new Response("Hello you!");
}

serve(handleRequest, { port: 7777 });