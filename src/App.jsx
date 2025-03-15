import { useState, useEffect } from "react";
import UpdateItem from "./components/UpdateItem";

const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [itemId, setItemId] = useState(1); // Example: Default ID 1
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`${API_URI}/${itemId}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((err) => console.error("Error fetching item:", err));
  }, [itemId]);

  return <UpdateItem item={item} itemId={itemId} />;
}

export default App;