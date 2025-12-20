import { useEffect } from "react";

export default function Stars() {
  useEffect(() => {
    const starsContainer = document.getElementById("stars-bg");
    if (!starsContainer) return;

    starsContainer.innerHTML = "";

    const starCount = 80;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("span");
      star.className = "star";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.animationDelay = Math.random() * 3 + "s";
      starsContainer.appendChild(star);
    }
  }, []);

  return <div id="stars-bg" />;
}
