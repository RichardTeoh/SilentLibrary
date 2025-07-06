function adjustHeaderPaths(level) {
  let prefix = level === 0 ? "" : "../";

  // Update image and logo link
  $("#logo-img").attr("src", prefix + "assets/LogoSillentLibrary.jpg");
  $("#logo-link").attr("href", prefix + "index.html");

  // Update nav links
  $("#nav-home").attr("href", prefix + "index.html");
  $("#nav-books").attr("href", prefix + "pages/books.html");
  $("#nav-events").attr("href", prefix + "pages/events.html");
  $("#nav-contact").attr("href", prefix + "pages/contact.html");
}
