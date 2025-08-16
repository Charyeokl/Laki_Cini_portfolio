import React from "react";
import { Card, Grid, Badge } from "../components/UI";

export default function Work({ projects }) {
  return (
    <Grid>
      {projects.map((p) => (
        <Card key={p.title}>
          {p.image && <img src={p.image} alt={p.title} />}
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <div className="badges">
            {p.tech.map((t) => <Badge key={t}>{t}</Badge>)}
          </div>
          <p><a className="btn" href={p.link} target="_blank" rel="noreferrer">Open Project →</a></p>
        </Card>
      ))}
    </Grid>
  );
}
