import React from "react";
import { render } from "@testing-library/react";
import Dropdown from "react-dropdown";
import App from './App'

test("Episodes shows data when rendered with new episode data", () => {
    const { queryAllByTestId } = render(<Dropdown />);
  
    expect(queryAllByTestId(/season/i)).toBeDefined;
  });