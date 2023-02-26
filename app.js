import { serve } from "./deps.js";

const handleRequest = (request) => {
    return new Response("Hello World!");
}

serve(handleRequest, { port: 7777 });