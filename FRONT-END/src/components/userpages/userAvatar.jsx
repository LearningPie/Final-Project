import React from "react";
import { Avatar } from "@fluentui/react-northstar";
import { AcceptIcon } from "@fluentui/react-icons-northstar";

function getInitials(name) {
  name.split(" ").map((word) => `${word[0]}.`);
}

const UserAvatar = (user) => (
  <div
    className="bg-secondary text-center d-flex align-items-center justify-content-center text-light"
    style={{ height: "40px", width: "40px", borderRadius: "20px" }}
  >
    <Avatar
      name={user.userName}
      getInitials={getInitials(name)}
      status={{
        color: "green",
        //backgroundColor: "yellow",
        //icon: <AcceptIcon />,
        title: "Available",
      }}
    />
  </div>
);

export default UserAvatar;
