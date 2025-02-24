document.addEventListener("DOMContentLoaded", () => {
  const favoriteButtons = document.querySelectorAll(".favorite-button");

  // Load favorites from localStorage
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  favoriteButtons.forEach((button) => {
    const product = button.closest(".product-card");
    const productId = product.dataset.productId;

    // Check if this product is favorited
    if (favorites.includes(productId)) {
      button.classList.add("active");
    }

    // Click event to toggle favorite status
    button.addEventListener("click", () => {
      button.classList.toggle("active");

      if (button.classList.contains("active")) {
        favorites.push(productId); // Add to favorites
      } else {
        const index = favorites.indexOf(productId);
        if (index > -1) favorites.splice(index, 1); // Remove from favorites
      }

      localStorage.setItem("favorites", JSON.stringify(favorites)); // Save to localStorage
    });
  });
});
