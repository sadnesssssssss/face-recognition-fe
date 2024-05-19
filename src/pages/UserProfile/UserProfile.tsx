import { FunctionComponent, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./UserProfile.css";
import Header from "../../components/MainPage/Header"

const UserProfile = () => {

  const user = {"name":"alex bodanyuk", "email":"wfalexa1488@mail.ru", "app_key":"eldajojonamarse"}
  const subData = {"status":"active", "plan":"Free", "valid_to":"22.05.14888"}

  return (
      <div className="user-profile">
      <Header/>
        <div className="user-data">
          <div className="user-image-wrapper"></div>
          <div className="user-info">
            <p className="user-name"><b className="user-info-name">{user.name}</b></p>
            <p><b>E-mail: </b>{user.email}</p>
            <button className="user-profile-button">Copy app key</button>
          </div>
          <div className="user-sub-data">
            <p className="subscription-state">Subscription: <b>{subData.status}</b></p>
            <p className="subscription-state">Plan: <b>{subData.plan}</b></p>
            <p className="subscription-state">Valid until: <b>{subData.valid_to}</b></p>
            <button className="user-profile-button">Manage subscription</button>
          </div>
        </div>
      </div>
  );
};

export default UserProfile;
