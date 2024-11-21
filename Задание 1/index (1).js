#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import {
  addOrSubtractTime,
  getCurrentDateTime,
  getCurrentYear,
  getCurrentMonth,
  getCurrentDay,
} from "./date.js";

const argv = yargs(hideBin(process.argv))
  .command(
    "current",
    "Get the current date and time in ISO format",
    (yargs) => {
      return yargs
        .options("year", {
          alias: "y",
          describe: "Get the current year",
          type: "boolean",
        })
        .options("month", {
          alias: "m",
          describe: "Get the current month",
          type: "boolean",
        })
        .options("date", {
          alias: "d",
          describe: "Get the current date",
          type: "boolean",
        });
    },
    (argv) => {
      if (argv.year) {
        console.log(getCurrentYear());
      } else if (argv.month) {
        console.log(getCurrentMonth());
      } else if (argv.date) {
        console.log(getCurrentDay());
      } else {
        console.log(getCurrentDateTime());
      }
    }
  )
  .command(
    "add",
    "Add time to current date and time",
    (yargs) => {
      return yargs
        .options("day", {
          alias: "d",
          describe: "Number of days to add",
          type: "number",
        })
        .options("month", {
          alias: "m",
          describe: "Number of months to add",
          type: "number",
        });
    },
    (argv) => {
      const { day, month } = argv;
      console.log(addOrSubtractTime("add", { day, month }));
    }
  )
  .command(
    "sub",
    "Subtract time from current date and time",
    (yargs) => {
      return yargs
        .options("day", {
          alias: "d",
          describe: "Number of days to subtract",
          type: "number",
        })
        .options("month", {
          alias: "m",
          describe: "Number of months to subtract",
          type: "number",
        });
    },
    (argv) => {
      const { day, month } = argv;
      console.log(addOrSubtractTime("subtract", { day, month }));
    }
  )
  .help().argv;