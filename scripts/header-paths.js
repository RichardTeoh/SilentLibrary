function adjustHeaderPaths(level) {
  let prefix = level == 0 ? "" : "../";
  $("#header img").attr("src", prefix + "assets/LogoSillentLibrary.jpg");
  $("#header a.nav-link[href$='index.html']").attr("href", prefix + "index.html");
  $("#header a.nav-link[href$='books.html']").attr("href", prefix + "pages/books.html");
  $("#header a.nav-link[href$='events.html']").attr("href", prefix + "pages/events.html");
  $("#header a.nav-link[href$='contact.html']").attr("href", prefix + "pages/contact.html");
  $("#header a[href$='index.html'] img").parent().attr("href", prefix + "index.html");
}
