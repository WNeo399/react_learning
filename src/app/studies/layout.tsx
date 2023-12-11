import "./studies.css";

export default function StudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="demo"> {children}</div>
      <div className="markdown"></div>
    </main>
  );
}
