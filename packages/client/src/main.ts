
(async function(){
  const src = new URL(import.meta.url);
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

  const { body } = await fetch(request);

  const reader = body?.getReader();
  
  if(!reader) return
  
  const stream = new ReadableStream({
      start(controller) {
        function push() {
          reader?.read().then(({ done, value }) => {
            if (done) {
              controller.close();
              return;
            }
            controller.enqueue(value);
            push();
          });
        }

        push();
      },
    });

    const html = await new Response(stream, { headers: { "Content-Type": "text/html" } }).text()

  if(target) target.innerHTML = html
})();
