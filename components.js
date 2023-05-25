fetch('components/header.html')
  .then(response => response.text())
  .then(data => {
    const headerPlaceholder = document.getElementById('header-placeholder');
    headerPlaceholder.innerHTML = data;
  });

  fetch('components/footer.html')
  .then(response => response.text())
  .then(data => {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    footerPlaceholder.innerHTML = data;
  });
