import React, { useState, useEffect } from "react";
import "./write.css";
// import EditIcon from "@mui/icons-material/Edit";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
export default function Write() {
  const [value, setValue] = useState([]);
  const [stories, setStories] = useState("");
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://dummyjson.com/posts`;
      const response = await fetch(url);
      const data = await response.json();
      setValue(data.posts);
    };

    fetchApi();
  }, []);

  function addPost() {
    const copyArray = [...value];
    copyArray.unshift({
      userId: 10,
      name: "Abhinav",
      tags: ["HTML", "JSON"],
      body: stories,
    });
    setValue(copyArray);
    setStories(" ");
    console.log("helo");
  }

  function handleOnClick() {
    if(liked===false ) {
      setLiked(true);
    }
 
    else{
      setLiked(false);
    }
   }

  return (
    <div className="write">
      <div className="inside_write">
        <div className="search_bar">
          <div className="icon_input_post">
            {/* <span>
              <EditIcon style={{ marginTop: "-33px" }} />
            </span> */}
            <input
              type="text"
              className="input"
              value={stories}
              placeholder="Write something..."
              onChange={(e) => setStories(e.target.value)}
            />
            <button className="button_btn" onClick={addPost}>
              POST
            </button>
          </div>
          <div className="photo">
            <span>
              <button>
                <AddPhotoAlternateIcon />
              </button>
            </span>
            <span>Photo</span>
          </div>
        </div>
      </div>
        {value &&
          value.slice(0, 3).map((data) => (
            <div className="story_post">
                <div>
                  <AccountCircleIcon sx={{ fontSize: "45px" }} />
                {/* <div>USER ID:{data.id}</div> */}
                </div>
              {/* <div><h3>Title:{data.title}</h3></div> */}
              <div>{data.body}</div>
              <div onClick={handleOnClick}>
              <span>
                  {liked ? <ThumbUpIcon style={{marginTop:"20px"}}/> : <ThumbUpOffAltIcon style={{marginTop:"20px"}}/> }
                </span>
               
              </div>
            </div>
          ))}
    </div>
  );
}
