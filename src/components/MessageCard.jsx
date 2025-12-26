import { useEffect, useState } from "react";

const text = `
Surpriseee! 🎉

HAPPY NEW YEAR! 💫
Wishing you a year filled with joy, adventure and all your heart's desires! 🌈
May your dreams turn into plans and your goals into achievements 🥳
Here's to new beginnings, fresh starts and making unforgettable memories! 🎈

`;

export default function Message() {
  const [display, setDisplay] = useState("");
  let i = 0;

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplay((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(timer);
    }, 35);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="glass" style={card}>
      <h2>💖 A New Year Message 💖</h2>
      <p style={{ whiteSpace: "pre-line" }}>{display}</p>
    </div>
  );
}

const card = {
  maxWidth: "560px",
  margin: "0 auto 50px",
  padding: "40px",
  textAlign: "center",
};
