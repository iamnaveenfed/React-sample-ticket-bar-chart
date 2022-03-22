import React, { useEffect, useState } from "react";

import { Chart, Series } from "devextreme-react/chart";
import { dummydata } from "./data.js";
import { Skeleton } from "@mui/material";
import _ from "lodash";
function ChartComponent({ statuses, types, priorities, ...props }) {
  const [ticketData, setTicketData] = useState([]);
  let dummyRecords = [];

  useEffect(() => {
    dummyRecords = _.cloneDeep(dummydata.records);
    getData(statuses, types, priorities);
  }, [statuses, types, priorities]);
  useEffect(() => {
    console.log("statuses", statuses);
    console.log("types", types);
    console.log("priorities", priorities);
  }, [statuses, types, priorities]);
  const getData = (statuses, types, priorities) => {
    let finalData = [];

    //Apply Filters
    if (statuses && statuses.length > 0) {
      dummyRecords = dummyRecords.filter((ticket) =>
        statuses.some((x) => x === ticket.status)
      );
    }
    if (types && types.length > 0) {
      dummyRecords = dummyRecords.filter((ticket) =>
        types.some((x) => x === ticket.issue_type)
      );
    }
    if (priorities && priorities.length > 0) {
      dummyRecords = dummyRecords.filter((ticket) =>
        priorities.some((x) => x === ticket.priority)
      );
    }
    //GroupData
    if (dummyRecords.length > 0) {
      dummyRecords.reduce((categories, ticket) => {
        const assignee = ticket.assignee;

        if (assignee in categories) {
          categories[assignee]++;
          finalData.filter((x) => x.name === assignee)[0].count =
            categories[assignee];
        } else {
          categories[assignee] = 1;
          finalData.push({ name: assignee, count: categories[assignee] });
        }
        return categories;
      }, {});
      setTicketData(finalData);
    }
  };

  return (
    <>
      {ticketData && ticketData.length > 0 ? (
        <Chart id="chart" dataSource={ticketData}>
          <Series
            valueField="count"
            argumentField="name"
            name="My Tickets"
            type="bar"
            color="blue"
          />
        </Chart>
      ) : (
        <Skeleton width="100%" />
      )}
    </>
  );
}

export default ChartComponent;
