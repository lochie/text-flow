import styles from "./styles.module.css";

import React from "react";
import Torph from "torph";
import { Button } from "../button";
import { Box } from "../box";

type Options = {
  text: string;
  fontSize: number;
  fontWeight: number;
  textAlignment: "left" | "center" | "right";
};

export const Testbench = () => {
  const [options, setOptions] = React.useState<Options>({
    text: "Hello world",
    fontSize: 64,
    fontWeight: 400,
    textAlignment: "center",
  });
  const [latest, setLatest] = React.useState<Options>({
    ...options,
    text: "Hello",
    fontSize: 64,
    fontWeight: 400,
    textAlignment: "center",
  });
  const [prev, setPrev] = React.useState(options);

  const isChanged = JSON.stringify(options) !== JSON.stringify(latest);

  return (
    <div className={styles.testbench}>
      <div
        className={styles.demo}
        style={{
          fontSize: latest.fontSize,
          fontWeight: latest.fontWeight,
          textAlign: latest.textAlignment,
        }}
      >
        <Torph>{latest.text}</Torph>
      </div>

      <form>
        <Box
          as="div"
          flexDirection="column"
          alignItems="stretch"
          justifyContent="stretch"
          style={{ padding: "2rem 0" }}
        >
          <Box as="div">
            <label>Text</label>
            <input
              type="text"
              value={options.text}
              onChange={(e) => setOptions({ ...options, text: e.target.value })}
            />
          </Box>
          <Box as="div">
            <label>Font Size</label>
            <input
              disabled
              type="number"
              value={options.fontSize}
              onChange={(e) =>
                setOptions({ ...options, fontSize: Number(e.target.value) })
              }
            />
          </Box>
          <Box as="div">
            <label>Font Weight</label>
            <input
              disabled
              type="number"
              value={options.fontWeight}
              onChange={(e) =>
                setOptions({ ...options, fontWeight: Number(e.target.value) })
              }
            />
          </Box>
          <Box as="div">
            <label>Text Alignment</label>
            <select
              value={options.textAlignment}
              onChange={(e) =>
                setOptions({
                  ...options,
                  textAlignment: e.target.value as "left" | "center" | "right",
                })
              }
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </Box>
        </Box>

        <Box as="div">
          <Button
            type="button"
            wide
            disabled={isChanged}
            onClick={() => setLatest(prev)}
          >
            <Torph>{!isChanged ? "Revert" : "Reverted"}</Torph>
          </Button>
          <Button
            type="submit"
            wide
            disabled={!isChanged}
            onClick={() => {
              setPrev(latest);
              setLatest(options);
            }}
          >
            <Torph>{isChanged ? "Apply" : "Applied"}</Torph>
          </Button>
        </Box>
      </form>
    </div>
  );
};
