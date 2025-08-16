import React from "react";
import { Card } from "../components/UI";

export default function BasicInfo({ info }) {
  return (
    <Card>
      <p><strong>Name:</strong> {info.name}</p>
      <p><strong>Email:</strong> <a href={`mailto:${info.email}`}>{info.email}</a></p>
      <p><strong>Program:</strong> {info.program}</p>
      <p><strong>About:</strong> {info.about}</p>
      <p><strong>Links:</strong> <a href={info.links.github} target="_blank" rel="noreferrer">GitHub</a> · <a href={info.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> · <a href={info.links.cv} target="_blank" rel="noreferrer">Résumé (PDF)</a></p>
    </Card>
  );
}
