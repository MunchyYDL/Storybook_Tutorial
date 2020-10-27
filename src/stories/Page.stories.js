import React from "react";

import { Page } from "./Page";
import * as HeaderStories from "./Header.stories";

const Default = {
  title: "Example/Page",
  component: Page,
};
export default Default;

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};