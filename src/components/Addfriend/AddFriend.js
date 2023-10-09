import React, { useState } from "react";
import axios from "axios"; // You may need to install axios
import styles from "./addfriend.css";
import { toast } from "react-toastify";
const URL = process.env.REACT_APP_BACKEND_URL;
const AddFriend = () => {
  const [friendName, setFriendName] = useState("");

  const [addedFriendName, setAddedFriendName] = useState(""); // State to store the added friend's name

  const handleAddFriend = async () => {
    try {
      if (friendName === "") {
        return toast.error("Please Enter Your Friend's UserName");
      }
      const response = await axios.post(`${URL}/api/users/addFriend`, {
        name: friendName,
      });
      toast.success("Friend added successfully");

      setFriendName(""); // Clear the input field
    } catch (error) {
      return toast.error("No friend Found");
    }
  };

  return (
    <div className="home-links ">
      <input
        type="text"
        placeholder="Enter friend's name"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      />
      <button onClick={handleAddFriend} className="--btn --btn-primary">
        Add Friend
      </button>
    </div>
  );
};

export default AddFriend;
