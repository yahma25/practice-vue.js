import { render, screen, fireEvent } from '@testing-library/vue';

import '@testing-library/jest-dom';

import TodoList from './TodoList.vue';

import TASKS from './fixtures/tasks';

describe('TodoList', () => {
  const handleClickToggleDone = jest.fn();
  const handleClickDeleteTask = jest.fn();

  beforeEach(() => {
    handleClickToggleDone.mockClear();
    handleClickDeleteTask.mockClear();

    given('tasks', () => TASKS);
  });

  function renderTodoList() {
    return render(TodoList, {
      propsData: {
        tasks: given.tasks,
        onClickToggleDone: handleClickToggleDone,
        onClickDeleteTask: handleClickDeleteTask
      }
    });
  }

  // 리스트 그리기
  // 삭제하기 그리기
  // happy path

  // 긍정적인 결과부터 테스트 한다.
  it('renders tasks', () => {
    renderTodoList();

    expect(screen.getByText('할 일-1')).toBeInTheDocument();
    expect(screen.getByText('할 일-2')).toBeInTheDocument();
  });

  it('listens "삭제하기" click event', () => {
    renderTodoList();

    fireEvent.click(screen.getAllByRole('button', { name: '삭제하기' })[0]);

    expect(handleClickDeleteTask).toHaveBeenCalledWith(0);
  });

  it('listens task click event', () => {
    renderTodoList();

    fireEvent.click(screen.getByText('할 일-1'));

    expect(handleClickToggleDone).toHaveBeenCalledWith(0);
  });

  context('without tasks', () => {
    beforeEach(() => {
      given('tasks', () => []);
    });
    it('renders tasks', () => {
      renderTodoList();

      expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
    });
  });
});
