import { useState } from "react";
import Screen from "./components/screen";
import "./style/index.css";

function App() {
  const contacs = [
    { name: "Sophia Turner", email: "sophia.turner@example.com" },
    { name: "Logan Mitchell", email: "logan.mitchell@example.com" },
    { name: "Ella Reed", email: "ella.reed@example.com" },
    { name: "William Clark", email: "william.clark@example.com" },
    { name: "Madison Lewis", email: "madison.lewis@example.com" },
    { name: "Jackson Walker", email: "jackson.walker@example.com" },
    { name: "Aria Anderson", email: "aria.anderson@example.com" },
    { name: "James Baker", email: "james.baker@example.com" },
    { name: "Abigail Martinez", email: "abigail.martinez@example.com" },
    { name: "Lucas Wilson", email: "lucas.wilson@example.com" },
    { name: "Lily Moore", email: "lily.moore@example.com" },
    { name: "Jack Turner", email: "jack.turner@example.com" },
    { name: "Ava Martinez", email: "ava.martinez@example.com" },
    { name: "Noah Adams", email: "noah.adams@example.com" },
    { name: "Emma Hall", email: "emma.hall@example.com" },
    { name: "Chris Walker", email: "chris.walker@example.com" },
    { name: "Olivia White", email: "olivia.white@example.com" },
    { name: "Daniel Turner", email: "daniel.turner@example.com" },
    { name: "Grace Harris", email: "grace.harris@example.com" },
    { name: "Ethan Baker", email: "ethan.baker@example.com" },
    { name: "Sarah Miller", email: "sarah.miller@example.com" },
    { name: "Ryan Wilson", email: "ryan.wilson@example.com" },
    { name: "Megan Anderson", email: "megan.anderson@example.com" },
    { name: "David Garcia", email: "david.garcia@example.com" },
    { name: "Sophie Taylor", email: "sophie.taylor@example.com" },
    { name: "Grace Foster", email: "grace.foster@example.com" },
    { name: "Benjamin Carter", email: "benjamin.carter@example.com" },
    { name: "Scarlett Hayes", email: "scarlett.hayes@example.com" },
    { name: "Owen Robinson", email: "owen.robinson@example.com" },
    { name: "Isabella White", email: "isabella.white@example.com" },
    { name: "Carter Lee", email: "carter.lee@example.com" },
    { name: "Zoe Hall", email: "zoe.hall@example.com" },
    { name: "Henry Turner", email: "henry.turner@example.com" },
    { name: "Avery Adams", email: "avery.adams@example.com" },
    { name: "Natalie Cooper", email: "natalie.cooper@example.com" },
  ];

  const [contactRoot,setContactRoot] = useState(contacs);

  return (
    <center>
      <Screen contacs={contactRoot} setContactRoot={setContactRoot}  />
    </center>
  );
}

export default App;
