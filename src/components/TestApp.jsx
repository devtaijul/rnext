import { useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleLoading = () => {
    setIsLoading(true);

    //* CONTINUE  TO FINISH FN (Loading true) (UI not updated)

    setTimeout(() => {
      //* WAITING  2 SECONDS (UI not updated)
      setIsLoading(false);
      //* AFTER 2 SECONDS (UI  updated as false)
    }, 2000);

    //* CONTINUE  TO FINISH FN (NOT WAITING) (UI not updated)

    //* FINISHED .
    //* FN FINISHED,  UI UPDATED as true  (NOT WAITING) [ becouse setIsLoading(false) is in setTimeout and waiting 2 seconds]
  };

  //TODO: in these schenario, loading is updated in UI, becouse setIsLoading(false) is called before setTimeout

  return (
    <div>
      <h1>My React App</h1>
      <p>{isLoading ? "Loading" : "Loaded"}</p>

      <button onClick={handleToggleLoading}>Toggle Loading</button>
    </div>
  );
}
