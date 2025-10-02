    addEventListener('fetch', event => {
      event.respondWith(handleRequest(event.request))
    })

    async function handleRequest(request) {
      const url = new URL(request.url)
      if (url.pathname === '/old-path') { // Specify the path to redirect from
        return Response.redirect('https://coltonsr77.pages.dev', 301) // Specify the target URL and status code
      }
      return fetch(request)
    }
