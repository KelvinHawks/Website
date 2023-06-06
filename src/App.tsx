import { useState } from "react";
import Button from "./components/button";
import Alert from "./components/alert";

// import ListGroup from "./components/ListGroup";
function App() {
  // let items = ["Nairobi", "Kisumu", "Narok", "Thika"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  // return (
  //   <div>
  //     <ListGroup
  //       items={items}
  //       heading="Cities"
  //       onSelectItem={handleSelectItem}
  //     />
  //   </div>
  // );
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        MyButton
      </Button>
    </div>
  );
}

export default App;
