import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('Render canvas', () => {
  render(<App />);
  /*const linkElement = screen.getByText('canvas');
  expect(linkElement).toBeInTheDocument();*/
});
