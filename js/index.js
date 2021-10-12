function toggleFAQ(f) {
  let faqs = Array.from(document.getElementsByClassName("faq"));
  let filterFAQ = faqs.slice();
  filterFAQ.splice(f, 1);

  if (faqs[f].classList.contains("selected")) {
    faqs[f].classList.remove("selected");
  } else {
    faqs[f].classList.add("selected");
    filterFAQ.forEach((x) => {
      x.classList.remove("selected");
    });
  }
}
