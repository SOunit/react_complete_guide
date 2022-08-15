import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders Hello World as a text", () => {
  // 1. Arrange
  render(<Greeting />);

  // 2. Act
  // ...nothing

  // 3. Assert
  // get, throw error
  // query, throw no error
  // find, return promise
  const helloWorldElement = screen.getByText("Hello World!");
  expect(helloWorldElement).toBeInTheDocument();
});
