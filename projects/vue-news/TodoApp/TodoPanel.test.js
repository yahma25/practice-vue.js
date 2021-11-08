import { render, screen, fireEvent } from '@testing-library/vue';

import '@testing-library/jest-dom';

import TodoPanel from './TodoPanel.vue';

describe('TodoPanel', () => {
  const handleInput = jest.fn();
  const handleClick = jest.fn();

  beforeEach(() => {
    handleInput.mockClear();
    handleClick.mockClear();
  });

  function renderTodoPanel() {
    return render(TodoPanel, {
      propsData: {
        onInputChangeText: handleInput,
        text: '아무것도 안하기',
        onClickAddTask: handleClick
      }
    });
  }

  it('renders input, button', () => {
    renderTodoPanel();

    expect(screen.getByPlaceholderText('할 일을 적어주세요.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '추가하기' })).toBeInTheDocument();
  });

  it('listens input event', async () => {
    renderTodoPanel();

    await fireEvent.update(screen.getByRole('textbox'), '아무것도 안하기');

    expect(handleInput).toHaveBeenCalled();
  });

  it('listens click event', async () => {
    renderTodoPanel();

    await fireEvent.update(screen.getByRole('textbox'), '아무것도 안하기');
    await fireEvent.click(screen.getByRole('button', { name: '추가하기' }));

    expect(handleClick).toHaveBeenCalled();
  });
});
