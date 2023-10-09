
import React, { useState, useEffect } from "react";
import axios from "axios";
function DisplayFriend() {
    const URL = process.env.REACT_APP_BACKEND_URL;
    const [friends, setFriends] = useState([]);
    // const [Id, setId] = useState([]);

  useEffect(() => {
    // Fetch the user's friend list when the component mounts
    const fetchFriendList = async () => {
        //`${URL}/api/users/addFriend`
      try {
        const response = await axios.get(`${URL}/api/users/getFriends`); // Replace with your API endpoint
        setFriends(response.data.friends);
        // setId(response.data.friendId);
      } catch (error) {
        console.error("Failed to fetch friend list:", error);
      }
    };

    fetchFriendList();
  }, []);

  return (
<div>
  <h2>Friend List</h2>
  <ul>
    {friends.map((friend, index) => (
      <li key={index}>
        {friend.name}
        <button onClick={() => alert(`Id: ${friend._id}`)}>Ride Request</button>
      </li>
    ))}
  </ul>
</div>
  );
};

export default DisplayFriend

