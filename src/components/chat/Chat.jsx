import { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./chat.css"

const Chat = () => {
  const [open, setOpen] = useState(false) //useState becomes true on click
  const [text, setText] = useState("")

  const endRef = useRef(null)

  //on refresh the last text will be displayed
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth"});
  }, []);

  //both text and emoji can be typed as input
  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false)
  };

  console.log(text);

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor, sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
            <div className="texts">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla, tortor sit amet malesuada pellentesque, diam nisi sollicitudin nulla, ac scelerisque turpis nunc et justo. Fusce ac erat non arcu semper fringilla.</p><span>1 min ago</span>
            </div>
        </div>
        <div className="message own">
            <div className="texts">
              <img src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla, tortor sit amet malesuada pellentesque, diam nisi sollicitudin nulla, ac scelerisque turpis nunc et justo. Fusce ac erat non arcu semper fringilla.</p><span>1 min ago</span>
            </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
            <div className="texts">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla, tortor sit amet malesuada pellentesque, diam nisi sollicitudin nulla, ac scelerisque turpis nunc et justo. Fusce ac erat non arcu semper fringilla.</p><span>1 min ago</span>
            </div>
        </div>
        <div className="message own">
            <div className="texts">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla, tortor sit amet malesuada pellentesque, diam nisi sollicitudin nulla, ac scelerisque turpis nunc et justo. Fusce ac erat non arcu semper fringilla.</p><span>1 min ago</span>
            </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
            <div className="texts">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla, tortor sit amet malesuada pellentesque, diam nisi sollicitudin nulla, ac scelerisque turpis nunc et justo. Fusce ac erat non arcu semper fringilla.</p><span>1 min ago</span>
            </div>
        </div>
        <div className="message own">
            <div className="texts">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla, tortor sit amet malesuada pellentesque, diam nisi sollicitudin nulla, ac scelerisque turpis nunc et justo. Fusce ac erat non arcu semper fringilla.</p><span>1 min ago</span>
            </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder="Type a message..." value ={text}
        onChange={(e) => setText(e.target.value)}/>
        <div className="emoji">
          <img src="./emoji.png" alt="" 
          onClick={() => setOpen((prev) => !prev)} /> 
          {/* emoji library will open on click and useState will become true */}
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji}/> 
            {/* emoji can be inputed along with text */}
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  )
}

export default Chat