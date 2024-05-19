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
          <div className="sender-name">
            <div className="username-placeholder">
              <input className="name" placeholder="Name" type="text" />
            </div>
          </div>
          <div className="problem-mail">
            <div className="username-placeholder1">
              <input className="mail" placeholder="Mail" type="email" />
            </div>
          </div>
          <textarea
            className="problem-description"
            placeholder="Describe your problem..."
            rows={17}
            cols={28}
          />
        </div>
      </div>
      <div className="regular-expression-processor">
        <button className="send-report-button">
          <b className="send-report">Send report</b>
        </button>
      </div>
    </div>
  );
};

export default BugReport;
