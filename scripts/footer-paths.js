
function adjustFooterPaths(level) {
  let prefix = level === 0 ? "" : "../";

  // Update image and logo link
  $("#fb-img").attr("src", prefix + "assets/fb.png");
  $("#ig-img").attr("src", prefix + "assets/ig.png");
  $("#x-img").attr("src", prefix + "assets/x.png");
  $("#tiktok-img").attr("src", prefix + "assets/tiktok.png");


  // Update nav links
  $("#nav-privacypolicy").attr("href", prefix + "pages/privacypolicy.html");
  $("#nav-sitemap").attr("href", prefix + "pages/sitemap.html");

}
