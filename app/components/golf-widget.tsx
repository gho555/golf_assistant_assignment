import React from "react";
import styles from "./golf-widget.module.css";

const GolfWidget = ({ list = [] }) => {
  return (
    <div className={styles.golfBackground}>
      <div className={styles.weatherWidgetData}>
        <table className="table-auto">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Tags</th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default GolfWidget;
