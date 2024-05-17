import "./BugReport.css";

const BugReport = () => {
  return (
    <div className="bugreport" data-scroll-to="bugReportContainer">
      <div className="value-container-wrapper">
        <b className="value-container">
          <p className="if-you-got">
            If You got any troubles using our app, You can contact our support
            via this form:
          </p>
        </b>
      </div>
      <div className="record-reader">
        <div className="report-generator">
          <div className="sendername">
            <div className="usernameplaceholder">
              <input className="name" placeholder="Name" type="text" />
            </div>
          </div>
          <div className="problemmail">
            <div className="usernameplaceholder1">
              <input className="mail" placeholder="Mail" type="email" />
            </div>
          </div>
          <textarea
            className="problemdescription"
            placeholder="Describe your problem..."
            rows={17}
            cols={28}
          />
        </div>
      </div>
      <div className="regular-expression-processor">
        <button className="sendreport">
          <b className="send-report">Send report</b>
        </button>
      </div>
    </div>
  );
};

export default BugReport;
