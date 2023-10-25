import React from "react";
import { BsCheck2All, BsCheck2 } from "react-icons/bs";
import { formattedTime } from "../../utils/timeStamp";
const messages = [
  {
    isSender: true,
    isReceive: false,
    message: "Hey Bob, how are you?",
    timestamp: new Date("2023-10-25T10:30:00"),
    isRead: true,
  },
  {
    isSender: false,
    isReceive: true,
    message: "Hi Alice! I'm doing well, thanks for asking.",
    timestamp: new Date("2023-10-25T11:15:00"),
    isRead: false,
  },
  {
    isSender: false,
    isReceive: true,
    message: "Great to hear! Want to grab lunch later?",
    timestamp: new Date("2023-10-25T12:00:00"),
    isRead: false,
  },
  {
    isSender: true,
    isReceive: false,
    message: "Sure, I'm up for lunch. Let's meet at the usual spot.",
    timestamp: new Date("2023-10-25T12:30:00"),
    isRead: false,
  },
];

const ChatWindow = () => {
  return (
    <>
      <div className=" h-[75vh] border-2 border-red-900 bg-[#fafafa] overflow-y-auto">
        <div className="h-full px-12 bg-[#f1f1f1] flex flex-col">
          {messages &&
            messages.map(
              ({ isSender, isReceive, message, timestamp, isRead }) => (
                <div className="flex flex-col w-full">
                  {isReceive && (
                    <div className="flex justify-start ">
                      {/* Sender Message */}
                      <div className="my-4 sender-message w-1/2">
                        <div className="text-left items-start rounded-md bg-[#D9D9D9] p-4">
                          <p className="text-sm">{message}</p>
                          <div className="text-gray flex text-sm font-semibold items-center justify-end space-x-2 select-none">
                            <span className="text-secondary">
                              {formattedTime(timestamp)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {isSender && (
                    <div className="flex justify-end ">
                      {/* Receiver Message */}
                      <div className="my-4 receiver-message w-1/2">
                        <div className="text-right items-start rounded-md bg-[#865CC2] p-4">
                          <p className="text-sm text-white">{message}</p>
                          <div className="text-gray flex text-sm font-semibold items-center justify-end space-x-2 select-none">
                            <span className="text-white">
                              {formattedTime(timestamp)}
                            </span>
                            {isRead ? (
                              <BsCheck2All className=" fill-secondary text-lg" />
                            ) : (
                              <BsCheck2 className=" fill-white text-lg" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
        </div>
      </div>
    </>
  );
};

export default ChatWindow;
