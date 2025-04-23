document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".star");
  const reviewForm = document.getElementById("reviewForm");
  const reviewsContainer = document.getElementById("reviews");
  const averageRatingDisplay = document.getElementById("average-rating");

  let totalRating = 0;
  let reviewCount = 0;

  // Handle star rating
  let currentRating = 0;
  stars.forEach((star) => {
    star.addEventListener("click", () => {
      currentRating = parseInt(star.dataset.value);
      stars.forEach((s) => s.classList.remove("selected"));
      for (let i = 0; i < currentRating; i++) {
        stars[i].classList.add("selected");
      }
    });
  });

  // Handle review submission
  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (currentRating === 0) {
      alert("يرجى اختيار عدد النجوم!");
      return;
    }

    const reviewText = document.getElementById("review").value;

    // Add review to the list
    const reviewCard = document.createElement("div");
    reviewCard.classList.add("review-card");
    reviewCard.innerHTML = `
      <h4>تقييم: ${currentRating} نجوم</h4>
      <p>${reviewText}</p>
    `;
    reviewsContainer.appendChild(reviewCard);

    // Update overall rating
    totalRating += currentRating;
    reviewCount++;
    const averageRating = (totalRating / reviewCount).toFixed(1);
    averageRatingDisplay.textContent = averageRating;

    // Reset form
    document.getElementById("review").value = "";
    stars.forEach((s) => s.classList.remove("selected"));
    currentRating = 0;
  });
});
