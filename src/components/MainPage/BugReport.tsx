import "./BugReport.css";

const BugReport = () => {
  return (
    <div className="bugreport" data-scroll-to="bugReportContainer">
          <p className="title-text">
            If You got any troubles using our app, You can contact our support
            via this form:
          </p>
      <div className="report">
        <div className="report-generator">
          <div className="sender-name">
              <input className="name" placeholder="Name" type="text" />
          </div>
          <div className="problem-mail">
              <input className="mail" placeholder="Mail" type="email" />
          </div>
          <textarea
            className="problem-description"
            placeholder="Describe your problem..."
            rows={17}
            cols={28}
          />
        </div>
      </div>
      <div className="send-report-div">
        <button className="send-report-button">
          <b className="send-report">Send report</b>
        </button>
      </div>
    </div>
  );
};

export default BugReport;
