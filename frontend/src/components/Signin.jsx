import Button from "./Button";
import Heading from "./Heading";
import InputBox from "./InputBox";
import Subheading from "./Subheading";
import Footer2 from "./Footer2";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="bg-slate-300 flex justify-center h-screen">
      <div className="flex flex-col justify-center">
        <div className="bg-white rounded-lg w-100 text-center p-2 h-max px-4">
          <Heading label={"Sign in"} />
          <Subheading
            label={"Enter your information to sign in to your account"}
          />
          <InputBox
            type={"email"}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="him@gmail.com"
            label={"Email"}
          />
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            type={"password"}
            placeholder="123456"
            label={"Password"}
          />
          <div className="pt-4">
            <Button
              onClick={async () => {
                const response = await axios.post(
                  "http://localhost:3000/api/v1/user/signin",
                  {
                    username,
                    password,
                  }
                );
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
              }}
              label={"Sign up"}
            />
          </div>
          <Footer2 label={"Dont't have an account"} />
        </div>
      </div>
    </div>
  );
}

export default Signin;
