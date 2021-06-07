import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRedux from './helpers/renderWithRedux';

describe('testing render of the three cars', () => {
  beforeEach(cleanup);
  test('the page should have a red car', () => {
    renderWithRedux(<App />, { initialState: {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }});
    const redCar = screen.getByTestId('red-car');
    expect(redCar).toBeInTheDocument();
  });
  test('the page should have a yellow car', () => {
    renderWithRedux(<App />, { initialState: {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }});
    const yellowCar = screen.getByTestId('yellow-car');
    expect(yellowCar).toBeInTheDocument();
  });
  test('the page should have a blue car', () => {
    renderWithRedux(<App />, { initialState: {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }});
    const blueCar = screen.getByTestId('blue-car');
    expect(blueCar).toBeInTheDocument();
  });
});

describe('Test the rendering and function of the three buttons', () => {
  beforeEach(cleanup);
  test('The page should have three buttons', () => {
    renderWithRedux(<App />, { initialState: {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }});
    const buttons = screen.queryAllByRole('button');
    expect(buttons.length).toBe(3);
  });
  test('Test the movement of the red car', () => {
    renderWithRedux(<App />, { initialState: {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }});
    const buttonRed = screen.getByTestId('buttonRedCar');
    const redCarBefore = screen.getByTestId('red-car');
    expect(redCarBefore.className).toBe('car-left');
    userEvent.click(buttonRed);
    const redCar = screen.getByTestId('red-car');
    expect(redCar.className).toBe('car-right');
  });
  test('Test the movement of the yellow car', () => {
    renderWithRedux(<App />, { initialState: {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }});
    const buttonYellow = screen.getByTestId('buttonYellowCar');
    const yellowCarBefore = screen.getByTestId('yellow-car');
    expect(yellowCarBefore.className).toBe('car-left');
    userEvent.click(buttonYellow);
    const yellowCar = screen.getByTestId('yellow-car');
    expect(yellowCar.className).toBe('car-right');
  });
  test('Test the movement of the blue car', () => {
    renderWithRedux(<App />, { initialState: {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }});
    const buttonBlue = screen.getByTestId('buttonBlueCar');
    const blueCarBefore = screen.getByTestId('blue-car');
    expect(blueCarBefore.className).toBe('car-left');
    userEvent.click(buttonBlue);
    const blueCar = screen.getByTestId('blue-car');
    expect(blueCar.className).toBe('car-right');
  });
});