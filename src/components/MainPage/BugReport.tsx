import "./BugReport.css";
import {memo, useState} from "react";
import axios from "axios";

const BugReport = memo(() => {

    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [issue, setIssue] = useState("")
    const [error, setError] = useState("")

    const handleIssueCreate = () => {
        axios.post("http://localhost:8000/api/feedback/feedback/", {
            name: name, email: mail, issue: issue,
        }).then((res) => {
            setName("");
            setMail("");
            setIssue("");
            setError("");
        }).catch((res) => {
            setError("Please enter a correct e-mail.");
            return;
        })
    }

    return (<div className="bugreport" data-scroll-to="bugReportContainer">
        <p className="title-text">
            If You got any troubles using our app, You can contact our support
            via this form:
        </p>
        <div className="report">
            <div className="report-generator">
                <div className="problem-mail">
                    <input value={name} onChange={(e) => (setName(e.target.value))} className="name" placeholder="Name"
                           type="text"/>
                </div>
                <div className="problem-mail">
                    <input value={mail} onChange={(e) => (setMail(e.target.value))} className="name" placeholder="Mail"
                           type="email"/>
                </div>
                <textarea
                    value={issue}
                    onChange={(e) => (setIssue(e.target.value))}
                    className="problem-description"
                    placeholder="Describe your problem..."
                    rows={17}
                    cols={28}
                />
            </div>
        </div>
        <div className="send-report-div">
            <button disabled={!(mail !== "" && issue !== "" && name !== "")} onClick={handleIssueCreate}
                    className={"send-report-button"}>
                <b className="send-report">Send report</b>
            </button>
            {(error) && <p className="error-display">{error}</p>}
        </div>
    </div>);
})


export default BugReport;
