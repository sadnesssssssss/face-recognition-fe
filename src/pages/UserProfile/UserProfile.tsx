import "./UserProfile.css";
import Header from "../../components/MainPage/Header"
import {useCookies} from "react-cookie";
import axios from "axios";
import {useCallback, useEffect, useState} from "react";

const UserProfile = () => {
  const [cookies] = useCookies(["token"]);
  const [user, setUser] = useState({name: "", email: ""});
  const [subscription, setSubscription] = useState({subscription_plan: "", valid_until: "", app_key:""});


  const getData = useCallback(() =>{
    const header = {Authorization: "Token " + cookies.token};
    axios.get("http://localhost:8000/api/subscriptions/subscription/", {
      headers: header
    }).then((res) => {
      setSubscription(res.data);
    });
    axios.get("http://localhost:8000/api/user/me/", {
      headers: header
    }).then((res) => {
      setUser(res.data);
    });
  }, [cookies.token]);

  useEffect(() => {
    getData();
  }, [getData]);
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
            <p className="subscription-state">Subscription: <b>Active</b></p>
            <p className="subscription-state">Plan: <b>{subscription.subscription_plan}</b></p>
            <p className="subscription-state">Valid until: <b>{subscription.valid_until}</b></p>
            <button className="user-profile-button">Manage subscription</button>
          </div>
        </div>
      </div>
  );
};

export default UserProfile;
