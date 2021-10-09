import { beforeEach } from './index.js';
import VisitHistory from '../model/VisitHistory.js';

jest.mock('../model/VisitHistory.js', () => ({ increaseVisitCount: jest.fn() }));

describe('beforeEach', () => {
  afterEach(() => {
    VisitHistory.increaseVisitCount.mockClear();
  });

  it('should increase visit count when going to route with checking visit history', () => {
    const to = {
      matched: [{ meta: { shouldCheckVisitHistory: true } }]
    };
    const next = jest.fn();

    beforeEach(to, undefined, next);

    expect(VisitHistory.increaseVisitCount).toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
  });

  it('should ignore to increase visit count when going to route without checking visit history', () => {
    const to = {
      matched: [{ meta: { shouldCheckVisitHistory: false } }]
    };
    const next = jest.fn();

    beforeEach(to, undefined, next);

    expect(VisitHistory.increaseVisitCount).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
  });
});
