import React, { useState } from "react";
import Picker from "emoji-picker-react";

const Home = () => {
  const [chosenEmoji, setChosenEmoji] = useState("");
  const [isEmojiPickerOpen, setEmojiPickerOpen] = useState(false);

  const onEmojiClick = (e) => {
    setChosenEmoji((prev) => prev + e.emoji);
  };
  console.log(chosenEmoji);
  return (
    <>
      <div>
        <button
          onClick={() => setEmojiPickerOpen((prev) => !prev)}
          className="py-2 px-4 bg-primary"
        >
          {isEmojiPickerOpen ? "Close" : "Open"}
        </button>
        <input
          className="border-4 p-4 "
          type="text"
          value={chosenEmoji}
          onChange={(e) => setChosenEmoji(e.target.value)}
        />
        {isEmojiPickerOpen && <Picker onEmojiClick={(e) => onEmojiClick(e)} />}
      </div>
    </>
  );
};

export default Home;
