import "./UserProfile.css";
import Header from "../../components/MainPage/Header"
import {useCookies} from "react-cookie";
import axios from "axios";
import {useCallback, useEffect, useState} from "react";
import {format} from "date-fns"
import {useNavigate} from "react-router-dom";

const UserProfile = () => {
  const src = "https://drive.usercontent.google.com/download?id=1o0xvontoBo0KqRWySLbzBg-xg4ySmLnA&export=download&authuser=0";
  const navigate = useNavigate();
  const [cookies] = useCookies(["token"]);
  const [user, setUser] = useState({name: "", email: ""});
  const [subscription, setSubscription] = useState({subscription_plan: "", valid_until: "", app_key:""});

  const getData = useCallback(() =>{
    const header = {Authorization: "Token " + cookies.token};
    axios.get("http://localhost:8000/api/subscriptions/subscription/", {
      headers: header
    }).then((res) => {
      console.log(res);
      let date = new Date(res.data.valid_until);
      res.data.valid_until = format(date, "yyyy-MM-dd");
      setSubscription(res.data);
    });
    axios.get("http://localhost:8000/api/user/me/", {
      headers: header
    }).then((res) => {
      setUser(res.data);
    });
  }, [cookies.token]);

  useEffect(() => {
    if (!cookies.token) {
      navigate("/login");
      return;
    }
    getData();
  }, [getData, navigate, cookies.token]);
  return (
      <div className="user-profile">
      <Header/>
        <div className="user-data">
          <div className="user-info">
            <p className="user-name"><b className="user-info-name">{user.name}</b></p>
            <p><b>E-mail: </b>{user.email}</p>
            <button className="user-profile-button" onClick={() => navigator.clipboard.writeText(subscription.app_key)}>Copy app key</button>
          </div>
          <div className="user-sub-data">
            <p className="subscription-state">Subscription: <b>Active</b></p>
            <p className="subscription-state">Plan: <b>{subscription.subscription_plan}</b></p>
            <p className="subscription-state">Valid until: <b>{subscription.valid_until}</b></p>
            <button className="user-profile-button">Manage subscription</button>
          </div>
          <div className="download-button"><a href={src}><button className="user-profile-button">Download App</button></a></div>
        </div>
      </div>
  );
};

export default UserProfile;
