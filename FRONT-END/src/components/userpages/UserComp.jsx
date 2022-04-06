import UserAvatar from "./userAvatar";

export default function UserComp(userInfo) {
  return (
    <div className="bg-danger fluid-container">
      <div
        className=" row alert alert-primary my-1"
        //style={{ borderRadius: "20px" }}
      >
        <div className="col-md-2 ">
          <UserAvatar userName={userInfo.userName} />
        </div>
        <div className="col-md-10 d-flex align-items-center ">
          <h5 className="text-align-left mx-2">{userInfo.userName}</h5>
        </div>
      </div>
    </div>
  );
}
