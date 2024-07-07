import Appbar from "./Appbar";
import Users from "./Users";

import Balance from "./Balance";

function Dashboard() {
  return (
    <div>
      <Appbar />
      <div>
      <Balance />
        <Users />
      </div>
    </div>
  );
}

export default Dashboard;
