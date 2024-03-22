import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderTypedTitle from './TypedTitle';

describe('<HeaderTypedTitle />', () => {
  test('it should mount', () => {
    render(<HeaderTypedTitle />);
    
    const headerTypedTitle = screen.getByTestId('HeaderTypedTitle');

    expect(headerTypedTitle).toBeInTheDocument();
  });
});