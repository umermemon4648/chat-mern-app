import React, { useState } from "react";
import Picker from "emoji-picker-react";
import { Avatar, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ChatWindow from "../../components/chat/ChatWindow";
import { FaSmile } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import { BiSolidSend } from "react-icons/bi";
const chatlist = [
  {
    id: uuidv4(),
    profilePic:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    username: "Alice Smith",
    message: "Hey there!",
    timeStamp: "8:22 pm",
    msgCount: 3,
  },
  {
    id: uuidv4(),
    profilePic:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    username: "Bob Johnson",
    message: "How's it going?",
    timeStamp: "9:45 am",
    msgCount: 1,
  },
  {
    id: uuidv4(),
    profilePic:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    username: "Charlie Johnson",
    message: "Need your help with something.",
    timeStamp: "11:30 am",
    msgCount: 5,
  },
  {
    id: uuidv4(),
    profilePic:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    username: "David Williams",
    message: "What's up?",
    timeStamp: "1:15 pm",
    msgCount: 2,
  },
  {
    id: uuidv4(),
    profilePic:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    username: "Eva Davis",
    message: "Let's catch up soon!",
    timeStamp: "3:00 pm",
    msgCount: 10,
  },
  {
    id: uuidv4(),
    profilePic:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    username: "Frank Miller",
    message: "Long time no see!",
    timeStamp: "4:45 pm",
    msgCount: 1,
  },
  {
    id: uuidv4(),
    profilePic:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    username: "Grace Anderson",
    message: "Did you get my email?",
    timeStamp: "6:20 pm",
    msgCount: 4,
  },
];

const Chat = () => {
  const [chosenEmoji, setChosenEmoji] = useState("");
  const [isEmojiPickerOpen, setEmojiPickerOpen] = useState(false);

  const onEmojiClick = (e) => {
    setChosenEmoji((prev) => prev + e.emoji);
  };
  console.log(chosenEmoji.length);
  return (
    <>
      {/* f1f1f1 */}
      <div className="text-4xl text-purple-900 border-4 border-red-400 w-full h-screen bg-[#fff]">
        <div className="flex flex-row w-[90%] h-full mx-auto bg-white border-2 border-blue-400 ">
          {/* left container */}
          <div className="w-[30%] border-2 border-pink-500 h-full">
            <div className="w-full h-24 shadow-lg  border-b-2">
              <h3>Message</h3>
            </div>
            {/* below container (seach bar + contact list) */}
            <div className="">
              {/* seacch bar */}
              <div className="mx-4 bg-[#f1f1f1] my-4 rounded-lg">
                <form>
                  <label
                    for="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative rounded-lg">
                    <div className="absolute inset-y-0  left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full px-4 py-[10px] pl-10 text-sm outline-none text-gray-900  rounded-lg bg-gray-50 "
                      placeholder="Search or start a new chat..."
                      required
                    />
                  </div>
                </form>
              </div>
              {/* contact list */}
              {chatlist &&
                chatlist.map(
                  (
                    { id, profilePic, username, message, timeStamp, msgCount },
                    index
                  ) => (
                    <Link
                      onClick={() => alert(id)}
                      className="cursor-pointer"
                      key={index}
                    >
                      <div className=" mx-4 border-b-2 flex py-4 overflow-y-auto">
                        <div className="flex text-sm items-start w-full relative ">
                          {/* avatar */}
                          <div className="rounded-full flex mr-2">
                            <Avatar
                              className="rounded-full"
                              src={profilePic}
                              alt="it's me"
                            />
                          </div>
                          {/* name, message */}
                          <div>
                            <p className="text-sm font-semibold">{username}</p>
                            <p className="text-[10px]">{message}</p>
                          </div>
                          {/* time, count */}
                          <div className=" flex flex-col absolute right-0 items-end gap-1">
                            <p className="text-xs font-semibold">{timeStamp}</p>
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#865CC2] ">
                              <p className="text-xs text-white">{msgCount}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                )}
            </div>
          </div>

          {/* right container */}
          <div className="w-[70%] border-2 border-yellow-400 ">
            <div className="w-full h-24 shadow-lg  border-b-2">
              <h3>David lee</h3>
            </div>
            <div className="h-full flex flex-col">
              <ChatWindow />
              {/* <div className="w-[80%] mx-auto my-2 rounded-full flex space-x-4"> */}
              <div className="w-[80%] mx-auto my-2 rounded-full flex">
                <div className="w-full items-center flex justify-center h-[3rem] bg-[#f1f1f1]  rounded-full text-base space-x-4 ">
                  <div className="relative">
                    <FaSmile
                      onClick={() => setEmojiPickerOpen((prev) => !prev)}
                      className="cursor-pointer fill-gray-400 text-2xl mx-4"
                    />
                    {isEmojiPickerOpen && (
                      <div
                        style={{
                          width: "100%",
                          position: "absolute",
                          bottom: "35px",
                          left: "0",
                        }}
                      >
                        <Picker
                          className="w-full border-4"
                          onEmojiClick={(e) => onEmojiClick(e)}
                        />
                      </div>
                    )}
                  </div>

                  <input
                    value={chosenEmoji}
                    onChange={(e) => setChosenEmoji(e.target.value)}
                    type="search"
                    id="default-search"
                    className="text-gray-500 flex-1 h-full px-2 rounded-full focus:outline-none bg-[#f1f1f1] "
                    placeholder="Send your message..."
                    required
                  />

                  <div className="flex items-center">
                    <GrAttachment className="cursor-pointer fill-gray-400 text-xl mx-2" />

                    <button type="button">
                      <BiSolidSend className="fill-[#865CC2] text-4xl mx-4" />
                    </button>
                  </div>
                </div>
              </div>
              {/* <form>
                  <label
                    for="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative rounded-lg flex items-center ">
                    <FaSmile className="absolute fill-gray-400 mx-4" />
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full px-4 py-[16px] pl-10 text-sm outline-none text-gray-900   bg-gray-50 rounded-full"
                      placeholder="Send your message..."
                      required
                    />
                  </div>
                </form> */}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Chat;
