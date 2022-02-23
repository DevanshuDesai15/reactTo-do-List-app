import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import TodoList from '../TodoList';

test("render header component", async () => {
    render(<TodoList />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
}) 