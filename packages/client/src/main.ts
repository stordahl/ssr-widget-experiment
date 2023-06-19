
(async function(){
  const src = new URL(import.meta.url);
  // get params from script source url
  const search = new URLSearchParams(src.search);
  const url = `http://localhost:3006?username=${search.get("username")}`;
  const headers = new Headers();

  const request = new Request(url, {
    method: "GET",
    headers,
    mode: "cors",
    cache: "default",
    referrerPolicy: "strict-origin-when-cross-origin",
  });
  
  const target = document.getElementById("app");

  
  const raw = await fetch(request);
  // parse response as text/html
  const html = await raw.text();
  // insert HTML into the target
  if(target) target.innerHTML = html
})();
