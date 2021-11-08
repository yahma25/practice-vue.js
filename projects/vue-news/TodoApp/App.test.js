import { render, screen, fireEvent } from '@testing-library/vue';

import '@testing-library/jest-dom';

import App from './App.vue';

describe('App', () => {
  it('renders title', () => {
    render(App);

    expect(screen.getByText('Todo-App')).toBeInTheDocument();
  });

  it('renders input, button', () => {
    render(App);

    expect(screen.getByPlaceholderText('할 일을 적어주세요.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '추가하기' })).toBeInTheDocument();
  });

  /**
   * 할 일
   * 추가하기 버튼 눌렀을 때 할 일이 추가 되는지
   * 할 일을 클릭을 했을 때 class이름이 done이 되는가?
   * 삭제하기 버튼을 눌렀을 때 할 일이 삭제가 되는가?
   */

  it('adds task when click "추가하기" button', async () => {
    render(App);

    await fireEvent.update(screen.getByRole('textbox'), '아무것도 안하기');
    await fireEvent.click(screen.getByRole('button', { name: '추가하기' }));

    expect(screen.getByText('아무것도 안하기')).toBeInTheDocument();
  });

  it('checks done of task', async () => {
    render(App);

    await fireEvent.update(screen.getByRole('textbox'), '아무것도 안하기');
    await fireEvent.click(screen.getByRole('button', { name: '추가하기' }));
    await fireEvent.click(screen.getByText('아무것도 안하기'));

    expect(screen.getByText('아무것도 안하기')).toHaveClass('done');
  });

  it('deletes task when click "삭제하기" button', async () => {
    render(App);

    await fireEvent.update(screen.getByRole('textbox'), '아무것도 안하기');
    await fireEvent.click(screen.getByRole('button', { name: '추가하기' }));
    await fireEvent.click(screen.getByRole('button', { name: '삭제하기' }));

    // getBy <- 없으면 에러가 뜸
    // queryBy <- 없을때 사용합니다.
    expect(screen.queryByText('아무것도 안하기')).not.toBeInTheDocument();
  });
});
