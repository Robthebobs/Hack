document.addEventListener('DOMContentLoaded', () => {

  // Get references to the buttons
  const aboutus = document.querySelector(".about-us");
  const faqs = document.querySelector(".faqs");
  const rounds = document.querySelector(".rounds");

  // Get references to the div elements you want to scroll to
  const magnicon = document.querySelector('.what-is-magnificus');
  const round = document.querySelector(".round-2");
  const faq = document.querySelector(".do-i-need");

  // Add click event listeners to each button
  aboutus.addEventListener('click', () => {
    // Scroll to the desired div
    magnicon.scrollIntoView({ behavior: 'auto' });
  });

  faqs.addEventListener('click', () => {
    // Scroll to the desired div
    faq.scrollIntoView({ behavior: 'auto' });
  });

  rounds.addEventListener('click', () => {
    // Scroll to the desired div
    round.scrollIntoView({ behavior: 'auto' });
  });
});