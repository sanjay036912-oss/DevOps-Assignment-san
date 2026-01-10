import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/health")
      .then(res => res.json())
      .then(data => setMsg(JSON.stringify(data)))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Frontend Running ✅</h1>
      <p>Backend response:</p>
      <pre>{msg}</pre>
    </div>
  );
}

export default App;
