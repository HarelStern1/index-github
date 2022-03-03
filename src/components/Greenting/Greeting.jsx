import React from "react";
import { GreetingContent, GreetingWrraper } from "./Greeting.styled";

function Greeting() {
  return (
    <GreetingWrraper>
      <GreetingContent>
        Welcome to <span>Index Github!</span>
      </GreetingContent>
    </GreetingWrraper>
  );
}

export default Greeting;
