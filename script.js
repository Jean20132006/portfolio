/*This JavaScript code that adds the class "scroll-top" to the body whenever the body is at the top of the page and removes it otherwise*/
window.onscroll = onScroll;


function onScroll() {
  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.body.classList.remove("scroll-top");
  } else {
    document.body.classList.add("scroll-top");
  }
}

function hireMe() {
    const email = "jeanerictsanga8@gmail.com";
    const subject = "Job Opportunity";
    const body =
        "Hello,\n\nI would like to discuss a potential opportunity with you.\n\nBest regards,";

    window.location.href =
        `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
