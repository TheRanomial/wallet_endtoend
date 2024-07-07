import axios from "axios";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
function Balance() {
  const [balance, setBalance] = useState("");
  const token = localStorage.getItem("token");

  const newbalance=parseInt(balance)
  const parsedbalance=Number(newbalance.toFixed(2));

  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:3000/api/v1/account/balance", {
          headers: {
            // This line was missing
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setBalance(response.data.balance);
        })
        .catch((error) => {
          // Add error handling
          console.error("Error fetching balance:", error);
        });
    }
  }, [token]);

  return (
    <div className="text-2xl mt-5 mx-6">
      <span className="text-black px-3 font-bold">Your balance:</span>
      Rs {parsedbalance}
    </div>
  );
}

export default Balance;
