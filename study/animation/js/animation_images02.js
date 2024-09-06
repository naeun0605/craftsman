const loading = document.querySelector("#loading");
const loadingScreen = document.querySelector("#loading-screen");
const loadingText = document.querySelector("#loading>p");

window.addEventListener("load", () => {
  loading.animate(
    {
      opacity: [1, 0],
      visibility: "hidden",
    },
    {
      duration: 2000,
      delay: 1200,
      easing: "ease",
      fill: "forwards",
    }
  );

  loadingScreen.animate(
    {
      translate: ["0 100vh", "0 0", "0 -100vh"],
    },
    {
      duration: 2000,
      delay: 800,
      easing: "ease",
      fill: "forwards",
    }
  );

  loadingText.animate(
    [
    {
      opacity: 1,
      offset: 0.8
    },
    {
        opacity: 0,
        offset: 1
      },
  ],
  {
    duration: 1200,
    easing: "ease",
    fill: "forwards",
  }

);
});
