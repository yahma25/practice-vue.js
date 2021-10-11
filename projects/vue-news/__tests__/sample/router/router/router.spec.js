import { beforeEach, beforeResolve } from './index.js';
import VisitHistory from '../model/VisitHistory.js';

jest.mock('../model/VisitHistory.js', () => ({ checkAuthorization: jest.fn() }));

describe('beforeEach', () => {
  afterEach(() => {
    VisitHistory.checkAuthorization.mockClear();
  });

  it('should increase visit count when going to the route with checking visit history', () => {
    const to = {
      matched: [{ meta: { shouldCheckVisitHistory: true } }]
    };
    const next = jest.fn();

    beforeResolve(to, undefined, next);

    expect(VisitHistory.checkAuthorization).toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
  });

  it('should ignore to increase visit count when going to the route without checking visit history', () => {
    const to = {
      matched: [{ meta: { shouldCheckVisitHistory: false } }]
    };
    const next = jest.fn();

    beforeResolve(to, undefined, next);

    expect(VisitHistory.checkAuthorization).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
  });
});
