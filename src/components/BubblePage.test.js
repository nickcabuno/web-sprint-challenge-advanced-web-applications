import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import Login from "./Login";

test("Renders BubblePage without errors", () => {
  // Finish this test

  // render(<Login/>)

  // const usernameInput = screen.getByLabelText(/username: /i);
  // userEvent.type(usernameInput, "Lambda School");

  // const passwordInput = screen.getByLabelText(/password: /i);
  // userEvent.type(passwordInput, "i<3Lambd4");

  // const button = screen.getByRole("button");
  // userEvent.click(button);

  // render(<BubblePage/>) 
  render(<BubblePage/>)
});

test("Fetches data and renders the bubbles on mounting", () => {
  // Finish this test

  render(<BubblePage/>)

  // const bubbles = screen.queryByTitle("g")
  // expect(bubbles).toBeInTheDocument();

  // const colors = screen.queryByTestId("color")
  // expect(colors).toBeInTheDocument()
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading