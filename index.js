addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // The URL you want to redirect to
  const redirectURL = "https://coltonsr77.pages.dev"; 
  return Response.redirect(redirectURL, 302) // 301 for permanent, 302 for temporary
}
