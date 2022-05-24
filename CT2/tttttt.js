import fetch from "node-fetch";

fetch("https://nghttp2.org/httpbin/get", {
    headers: {
        accept: "application/json",
    },
});
