import React from "react";
import styles from "./golf-widget.module.css";

const GolfWidget = ({ list = [] }) => {
  const tableStyle =
    "border-stone-500 border border-slate-700 font-mono leading-loose text-center p-1 rounded";
  return (
    <div className={styles.golfWidget}>
      <table className={`table-auto min-w-full ${tableStyle}`}>
        <thead>
          <tr>
            <th className={tableStyle}>Name</th>
            <th className={tableStyle}>DateTime</th>
            <th className={tableStyle}>Price</th>
          </tr>
        </thead>
        <tbody>
          {list.map((val) => (
            <tr key={val.name}>
              <td className={tableStyle}>{val.name}</td>
              <td className={tableStyle}>{val.datetime}</td>
              <td className={tableStyle}>{val.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GolfWidget;
