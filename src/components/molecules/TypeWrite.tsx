import { useEffect, useState } from "react";

export function Typewriter() {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const words = ["Innovative Technology, At Your Fingertips."];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setText(text + words[index][text.length]);
        if (text.length === words[index].length) {
          setIndex((index + 1) % words.length);
          setText("");
        }
      }, 300);
      return () => clearInterval(interval);
    }, [text, index, words]);
    return (
      <>
        {text}
        {/* <span className='text-4xl blink'>|</span> */}
      </>
    );
  }