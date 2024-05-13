import { useCallback } from "react";
import "./Subscriptions.css";

const Subscriptions = () => {
  const onDataSinkClick = useCallback(() => {
    // Please sync "BuySub" to the project
  }, []);

  const onRectangleClick = useCallback(() => {
    // Please sync "BuySub" to the project
  }, []);

  const onRectangle2Click = useCallback(() => {
    // Please sync "BuySub" to the project
  }, []);

  return (
    <div className="subscriptions1" data-scroll-to="subscriptionsContainer">
      <div className="wrapper-background">
        <img className="background-icon" alt="" src="/background@2x.png" />
      </div>
      <div className="subdecription">
        <div className="protect-your-business-wrapper">
          <b className="protect-your-business">Protect your business</b>
        </div>
        <div className="data-processor">
          <div className="pricing-guarantee-your-plan-container">
            <b>Pricing Guarantee:</b>
            <span>
               Your plan always renews with the same price and duration
            </span>
          </div>
          <div className="select-your-subscription">
            Select your subscription plan:
          </div>
        </div>
      </div>
      <div className="number-cruncher">
        <div className="selections">
          <div className="leftbutton">
            <div className="data-sorter" />
            <div className="loop-controller">
              <b className="trial">Trial</b>
            </div>
            <div className="input-gatekeeper">
              <div className="free-for-1-container">
                <span>{`Free for `}</span>
                <b>1 Week</b>
              </div>
            </div>
            <div className="data-sink-parent">
              <div className="data-sink" onClick={onDataSinkClick} />
              <div className="select-plan">
                <p className="select-plan1">Select plan</p>
              </div>
            </div>
          </div>
          <div className="middlebutton">
            <div className="data-stream" />
            <div className="filter-factory">
              <div className="pattern-picker">
                <b className="year">1 Year</b>
                  <b className="bestdeal">Best Deal</b>
              </div>
            </div>
            <div className="splitter-sphere">
              <div className="sequencer-square">
                <div className="splitter">
                  <span className="span">$</span>
                  <b className="b">3.49</b>
                </div>
                <div className="logic-labyrinth">
                  <div className="month">
                    <p className="month1">/month</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rectangle-group">
              <div className="frame-item" onClick={onRectangleClick} />
              <div className="select-plan2">
                <span className="select-plan-txt-container">
                  <p className="select-plan3">Select plan</p>
                </span>
              </div>
            </div>
          </div>
          <div className="rightbutton">
            <div className="rightbutton-child" />
            <div className="merge-matrix">
              <b className="month2">1 Month</b>
            </div>
            <div className="calculate-cube">
              <div className="div">
                <span className="span1">$</span>
                <b className="b1">4.49</b>
              </div>
            </div>
            <div className="combine-combinator">
              <div className="splitter-sphere1">
                <div className="month3">
                  <p className="month4">/month</p>
                </div>
              </div>
              <div className="rectangle-container">
                <div className="frame-inner" onClick={onRectangle2Click} />
                <div className="select-plan4">
                  <p className="select-plan5">Select plan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
