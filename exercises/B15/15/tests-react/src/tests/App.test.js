import renderWithRouter from "../renderWithRouter";
import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import App from '../App'
import ApiDetails from "../ApiDetails";

describe('Tests of this application', () => {
  test('if there is a joke on the page', async () => {
    const joke = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    };
  
    jest.spyOn(global, "fetch")
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(joke),
    });

    renderWithRouter(<App />);
    const jokeScreen = await screen.findByText(/whiteboards/i);
    expect(jokeScreen).toBeInTheDocument();
  });

  test('if Link works and redirect to the page with path /details', async () => {
    const joke = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    };
  
    jest.spyOn(global, "fetch")
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(joke),
    });

    
    const { history } = renderWithRouter(<App />);
    await screen.findByText(/whiteboards/i);
    const linkBtn  = screen.getByText(/about/i);
    fireEvent.click(linkBtn);
    expect(history.location.pathname).toBe('/details')
  })
  test('if component ApiDetails works', () => {
    renderWithRouter(<ApiDetails />)
    expect(screen.getByText(/no details/i)).toBeInTheDocument();
  })
});
