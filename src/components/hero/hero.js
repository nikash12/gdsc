import { useState, useEffect } from "react";
import './hero.css'

let quotes = [
    "Where Experiences Come to Life: Your Destination for Memorable Events.",
    "Discover, Connect, Experience: Join Us for Unforgettable Events.",
    "Your Journey, Your Events: Creating Moments That Matter.",
    "Events That Make Life Extraordinary - Join the Celebration!",
    "Every Event Tells a Story: Write Yours with Us.",
    "Unlock the World of Possibilities: One Event at a Time.",
    "Empowering You to Explore, Engage, and Enjoy Every Event.",
    "Your Passport to Adventure: Explore a World of Events.",
    "Events for Every Passion: Find Yours Today!",
    "Creating Memories, One Event at a Time."
];

export default function Hero() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((index) => (index + 1) % quotes.length);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="text-white bg-black hero">
      <h1>{quotes[quoteIndex]}</h1>
    </div>
  );
}
