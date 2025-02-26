import { useEffect, useState } from "react";
// 16 characters of the hexadecimal system valid
const letters = "0123456789ABCDEF";

export const useRandomColor = () => {
  const [randomColor, setRandomColor] = useState<string | null>(null);

  useEffect(() => {
    getRandomColor();
  }, []);

  const getRandomColor = () => {
    let color = "#";

    //remember format HEXADECIMAL has 6 characters e.g. #FFFFFF
    for (let i = 0; i < 6; i++) {
      //16 is the length of the letters
      color += letters[Math.floor(Math.random() * 16)];
    }
    setRandomColor(color);
  };

  return {
    //state
    randomColor,
    //methods
    //actions
    getRandomColor,
  };
};
