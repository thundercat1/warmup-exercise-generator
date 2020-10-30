import Head from "next/head";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";

import {
  createIntervalAssignmet,
  keys,
  intervals,
  rootPositions,
} from "../exercises/intervals";

export default function Home() {
  const [assignment, setAssignment] = useState();
  const [selectedKeys, setSelectedKeys] = useState(["C"]);
  return (
    <div className={styles.container}>
      Choose Keys
      <ul>
        {keys.map((k) => (
          <li key={k}>
            {k}
            <input
              type="checkbox"
              checked={selectedKeys.indexOf(k) > -1}
              onChange={(e) =>
                e.target.checked
                  ? setSelectedKeys([...selectedKeys, k])
                  : setSelectedKeys(selectedKeys.filter((s) => s !== k))
              }
            />
          </li>
        ))}
      </ul>
      Choose keys
      <button
        onClick={() =>
          setAssignment(
            // createIntervalAssignmet("hello")
            createIntervalAssignmet({
              rootPositions,
              keys: selectedKeys,
              intervals,
            })
          )
        }
      >
        Create Assignment
      </button>
      <h3>Your Assignment:</h3>
      <div>{assignment}</div>
    </div>
  );
}
