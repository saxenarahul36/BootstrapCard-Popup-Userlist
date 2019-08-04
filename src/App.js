import React, { useState } from "react";
import userDetails from "./userDetails";

const App = () => {
  const [classNm, openPopFun] = useState("modal");
  const [search, setUserName] = useState("");
  const [users, setUserList] = useState(userDetails);
  const [selUsers, selectedUser] = useState({});

  const searchuserInput = e => {
    const { value } = e.target;
    let result = value.trim();
    if (result.length) {
      setUserName(result);
      return;
    }
    setUserList(userDetails);
    setUserName("");
  };

  const oepnPopup = (user, e) => {
    openPopFun("openPop modal");
    selectedUser(user);
  };
  const closePopup = e => {
    openPopFun("modal");
  };

  const filterUserList = () => {
    const filterUser = userDetails.filter(
      item =>
        item.userName.toLowerCase().indexOf(search.toLowerCase().trim()) !== -1
    );
    setUserList(filterUser);
  };

  const popUpModal = (
    <div id="myModal" className={classNm}>
      <div className="modal-content">
        <span className="close" onClick={closePopup}>
          &times;
        </span>
        <div>
          <img
            className="card-img-top img-popup"
            src="https://www.w3schools.com/w3images/team2.jpg"
            alt="user name"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{selUsers.userName}</h5>
          <h5 className="card-title">{selUsers.designation}</h5>
          <label className="card-text">{selUsers.emailId}</label>
          <p className="card-text">{selUsers.userinfor}</p>
        </div>
      </div>
    </div>
  );
  const searchInpupBox = (
    <div className="row">
      <div className="col-6">
        <div className="people-text">People</div>
      </div>
      <div className="col-sm-6">
        <div className="navbar-form" role="search">
          <div className="input-group add-on">
            <input
              className="form-control"
              placeholder="Search"
              name="srch-term"
              value={search}
              onChange={e => searchuserInput(e)}
              id="srch-term"
              type="text"
            />
            <div className="input-group-btn">
              <button
                className="btn btn-default"
                onClick={filterUserList}
                type="submit"
              >
                <i className="glyphicon glyphicon-search" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const userCards = (
    <div className="row">
      {users.map((user, i) => (
        <div className="col-sm-3 mb-4" key={user.userId}>
          <div
            className="card pt-3 pb-5 text-center"
            onClick={() => oepnPopup(user)}
          >
            <div>
              <img
                className="card-img-top imges rounded-circle"
                src="https://www.w3schools.com/w3images/team2.jpg"
                alt="user name"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{user.userName}</h5>
              <h5 className="card-title">{user.designation}</h5>
              <p className="card-text">{user.emailId}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container App">
      {searchInpupBox}
      {userCards}
      {popUpModal}
    </div>
  );
};

export default App;
