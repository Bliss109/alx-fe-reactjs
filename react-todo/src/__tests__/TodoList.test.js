import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('adds a new todo item', () => {
  const { getByText, getByPlaceholderText } = render(<TodoList />);
  const input = getByPlaceholderText('Enter a todo');
  const addButton = getByText('Add Todo');

  fireEvent.change(input, { target: { value: 'Learn React Testing' } });
  fireEvent.click(addButton);

  expect(getByText('Learn React Testing')).toBeInTheDocument();
});

test('toggles a todo item', () => {
  const { getByText } = render(<TodoList />);
  const todoItem = getByText('Learn React Testing');

  fireEvent.click(todoItem);

  expect(todoItem).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo item', () => {
  const { getByText, queryByText } = render(<TodoList />);
  const deleteButton = getByText('Delete');

  fireEvent.click(deleteButton);

  expect(queryByText('Learn React Testing')).not.toBeInTheDocument();
});

