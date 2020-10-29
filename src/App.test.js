import React from "react";
import * as rtl from '@testing-library/react'
import 'jest-dom/extend-expect'
import App from './App'

//install @testing-libary/react react-test-render jest-dom --save-dev
//describe our test and wrap around our App

it('returns a label element w/ First Name ', () => {
  const wrapper = rtl.render(
    <ContactForm/>
  );
  console.log(wrapper.debug())
});
