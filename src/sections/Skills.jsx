import React from "react";
import { Card, Grid, Badge } from "../components/UI";

export default function Skills({ skills }) {
  return (
    <Grid>
      <Card>
        <h3>Description</h3>
        <p>{skills.description}</p>
      </Card>
      <Card>
        <h3>Languages / Frameworks</h3>
        <div className="badges">
          {skills.languagesFrameworks.map((l) => <Badge key={l}>{l}</Badge>)}
        </div>
      </Card>
      <Card>
        <h3>Tools</h3>
        <div className="badges">
          {skills.tools.map((t) => <Badge key={t}>{t}</Badge>)}
        </div>
      </Card>
    </Grid>
  );
}
