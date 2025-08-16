import React from "react";
import { Card, Grid } from "../components/UI";

export default function Resources({ resources }) {
  return (
    <Grid>
      {resources.map((r) => (
        <Card key={r.title}>
          {r.image && <img src={r.image} alt={r.title} />}
          <h3>{r.title}</h3>
          <p>{r.summary}</p>
          <p><a className="btn" href={r.link} target="_blank" rel="noreferrer">Open →</a></p>
        </Card>
      ))}
    </Grid>
  );
}
