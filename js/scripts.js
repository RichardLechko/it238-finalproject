// FAQ dropdown functionality on faq.html
// Explanation: Controls the dropdown behavior to display FAQ answers based on user selection.
// Reason for Usage: Enhances user interaction by dynamically showing relevant FAQ answers without reloading the page.

var a = document.getElementById("faqSelect");

if (a) {
  a.addEventListener("click", function () {
    document.querySelectorAll(".faq-answer").forEach(function (answer) {
      answer.style.display = "none";
    });

    var selectedValue = this.value;

    if (selectedValue) {
      document.getElementById(selectedValue).style.display = "block";
    }
  });
}

// Currency Converter functionality on travel.html
// Explanation: Handles the conversion of currency values based on user input and selection of currency types, which is either Euro or USD.
// Reason for Usage: Provides users with currency conversion capabilities, enhancing usability and functionality.

// As of July 6, this is the conversion rate.
const USD_TO_EUR = 0.92; // 1 USD = 0.92 EUR
const EUR_TO_USD = 1.09; // 1 EUR = 1.09 USD

const firstCurr = document.getElementById("firstCurr");
const firstVal = document.getElementById("firstVal");
const secondCurr = document.getElementById("secondCurr");
const secondVal = document.getElementById("secondVal");

function convertCurrency() {
  const fromCurrency = firstCurr.value;
  const toCurrency = secondCurr.value;
  const amount = parseFloat(firstVal.value);

  if (isNaN(amount)) {
    secondVal.value = "";
    return;
  }

  if (fromCurrency === toCurrency) {
    secondVal.value = amount;
  } else {
    let convertedAmount;

    if (fromCurrency === "USD" && toCurrency === "EUR") {
      convertedAmount = amount * USD_TO_EUR;
    } else if (fromCurrency === "EUR" && toCurrency === "USD") {
      convertedAmount = amount * EUR_TO_USD;
    }
    secondVal.value = convertedAmount.toFixed(2); // Set the converted value
  }
}

if (firstCurr) {
  firstVal.addEventListener("input", convertCurrency);
  firstCurr.addEventListener("change", convertCurrency);
  secondCurr.addEventListener("change", convertCurrency);
}

// Image Slider on attractions.html
// Explanation: Implements functionality for navigating through a series of images (slides) using next and previous buttons.
// Reason for Usage: Enhances user experience by providing interactive visual content presentation of the French Alps.

const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

if (totalSlides > 0) {
  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");

  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.style.display = "none";
    });
    slides[index].style.display = "block";
  }

  let currentSlide = 0;
  showSlide(currentSlide);

  if (nextButton && prevButton) {
    nextButton.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    });

    prevButton.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
    });
  }
}

// Countdown Timer on history.html
// Explanation: Displays a countdown to Bastille Day (July 14, 2024) from the current date.
// Reason for Usage: Provides a visual representation of time remaining until Bastille Day, enhancing user engagement and awareness of historical significance.

function updateCountdown() {
  const targetDate = new Date("July 14, 2024 00:00:00").getTime();
  const currentDate = new Date().getTime();
  const timeDifference = targetDate - currentDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  var a = document.getElementById("days");

  if (a) {
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    setTimeout(updateCountdown, 1000);
  }
}

updateCountdown();
