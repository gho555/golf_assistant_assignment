"use client";

import React, { useState } from "react";
import styles from "../shared/page.module.css";
import Chat from "../../components/chat";
import GolfWidget from "../../components/golf-widget";
import { getGolfCourse } from "../../utils/golf";
import { RequiredActionFunctionToolCall } from "openai/resources/beta/threads/runs/runs";

const FunctionCalling = () => {
  const [golfData, setGolfData] = useState([]);

  const functionCallHandler = async (call: RequiredActionFunctionToolCall) => {
    if (call?.function?.name !== "search_availability") return;
    const args = JSON.parse(call.function.arguments);
    const data = await getGolfCourse(args.location);
    setGolfData(data);
    return JSON.stringify(data);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.column}>
          <GolfWidget list={golfData} />
        </div>
        <div className={styles.chatContainer}>
          <div className={styles.chat}>
            <Chat functionCallHandler={functionCallHandler} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default FunctionCalling;
