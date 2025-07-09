const threeDots = document.querySelector(".three-dots");
      const container = document.querySelector(".container");
      threeDots.addEventListener("click", () => {
        container.style.width = "51vw";
      });
      const cut = document.querySelector(".cut");
      cut.addEventListener("click", () => {
        container.style.width = "0";
      });