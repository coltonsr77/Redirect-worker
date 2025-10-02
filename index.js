export default {
  async fetch(request) {
    const destinationURL = "https://coltonsr77.pages.dev";
    const statusCode = 301;
    return Response.redirect(destinationURL, statusCode);
  },
};
