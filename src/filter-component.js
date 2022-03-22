import React from "react";

import { statusFilters, priorityFilters, issueTypeFilters } from "./filters.js";
import { Box, Typography, Card, Grid, Checkbox } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function FilterComponent({ onFilterChange, ...props }) {
  const handleStatusChange = (event) => {
    statusFilters.filter(
      (x) => x.value === event.target.value
    )[0].isChecked = !statusFilters.filter(
      (x) => x.value === event.target.value
    )[0].isChecked;
    onFilterChange(
      statusFilters.filter((x) => x.isChecked).map((x) => x.value),
      issueTypeFilters.filter((x) => x.isChecked).map((x) => x.value),
      priorityFilters.filter((x) => x.isChecked).map((x) => x.value)
    );
  };
  const handleTypeChange = (event) => {
    issueTypeFilters.filter(
      (x) => x.value === event.target.value
    )[0].isChecked = !issueTypeFilters.filter(
      (x) => x.value === event.target.value
    )[0].isChecked;
    onFilterChange(
      statusFilters.filter((x) => x.isChecked).map((x) => x.value),
      issueTypeFilters.filter((x) => x.isChecked).map((x) => x.value),
      priorityFilters.filter((x) => x.isChecked).map((x) => x.value)
    );
  };
  const handlePriorityChange = (event) => {
    priorityFilters.filter(
      (x) => x.value === event.target.value
    )[0].isChecked = !priorityFilters.filter(
      (x) => x.value === event.target.value
    )[0].isChecked;
    onFilterChange(
      statusFilters.filter((x) => x.isChecked).map((x) => x.value),
      issueTypeFilters.filter((x) => x.isChecked).map((x) => x.value),
      priorityFilters.filter((x) => x.isChecked).map((x) => x.value)
    );
  };
  return (
    <Box>
      <Grid item container lg={12}>
        <Card radius="lg" md={12}>
          <Typography variant="h2" color="primary">
            Filters
          </Typography>
          <Grid container spacing={1}>
            <Grid item md={4} sx={{ pr: 1.5 }}>
              <Card variant="outlined">
                <Typography variant="h4">Status</Typography>
                {statusFilters.map((item, i) => (
                  //<div key={item.name}>
                  <>
                    <Checkbox
                      {...label}
                      key={item.name + i}
                      onChange={handleStatusChange}
                      size="small"
                      value={item.value}
                    />
                    <span>{item.name}</span>
                  </>
                  // </div>
                ))}
              </Card>
            </Grid>
            <Grid item md={4} sx={{ pr: 1.5 }}>
              <Card variant="outlined">
                <Typography variant="h4">Issue Type</Typography>
                {issueTypeFilters.map((item, i) => (
                  //<div key={item.name}>
                  <>
                    <Checkbox
                      {...label}
                      key={item.name + i}
                      onChange={handleTypeChange}
                      size="small"
                      value={item.value}
                    />
                    <span>{item.name}</span>
                  </>
                  //</div>
                ))}
              </Card>
            </Grid>
            <Grid item md={4} sx={{ pr: 1.5 }}>
              <Card variant="outlined">
                <Typography variant="h4">Priority</Typography>
                {priorityFilters.map((item, i) => (
                  //<div key={item.name}>
                  <>
                    {" "}
                    <Checkbox
                      {...label}
                      key={item.name + i}
                      onChange={handlePriorityChange}
                      size="small"
                      value={item.value}
                    />
                    <span>{item.name}</span>
                  </>
                  //</div>
                ))}
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Box>
  );
}

export default FilterComponent;
