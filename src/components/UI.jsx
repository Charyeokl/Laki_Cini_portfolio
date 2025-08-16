import React from "react";

export function Header({ name }) {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand">{name}</div>
        <Nav items={[
          {label: "Basic Info", href: "#basic"},
          {label: "Work", href: "#work"},
          {label: "Skills", href: "#skills"},
          {label: "Resources", href: "#resources"},
        ]}/>
      </div>
    </header>
  );
}

export function Nav({ items }) {
  return (
    <nav className="nav">
      {items.map(i => <a key={i.href} href={i.href}>{i.label}</a>)}
    </nav>
  );
}

export function Section({ id, title, children, subtitle }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <h2>{title}</h2>
        {subtitle && <p className="small">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

export function Card({ children }) { return <div className="card">{children}</div>; }
export function Grid({ children }) { return <div className="grid">{children}</div>; }
export function Badge({ children }) { return <span className="badge">{children}</span>; }

export function Footer(){
  return (
    <footer className="footer">
      <div className="container"><small>© {new Date().getFullYear()} Cini Laki — All rights reserved.</small></div>
    </footer>
  );
}
