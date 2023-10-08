import "@testing-library/react";
import {
  Matcher,
  MatcherOptions,
  waitForOptions,
} from "@testing-library/react";

declare module "@testing-library/react" {
  export interface Queries {
    getByText: (
      text: Matcher,
      options?: MatcherOptions,
      waitForOptions?: waitForOptions
    ) => HTMLElement;
  }
}
