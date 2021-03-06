import { afterEach, beforeEach, beforeResolve } from './index.js';
import VisitHistory from '../model/VisitHistory.js';

jest.mock('../model/VisitHistory.js', () => ({
  increaseVisitCount: jest.fn(),
  checkAuthorization: jest.fn(),
  reportHistory: jest.fn()
}));

describe('router test', () => {
  describe('beforeEach', () => {
    it('should increase visit count when going to the route with checking visit history', () => {
      VisitHistory.increaseVisitCount.mockClear();

      const to = {
        matched: []
      };
      const next = jest.fn();

      beforeEach(to, undefined, next);

      expect(VisitHistory.increaseVisitCount).toHaveBeenCalled();
      expect(next).toHaveBeenCalled();
    });
  });

  describe('beforeResolve', () => {
    it('should check authorization when going to the route with checking visit history', () => {
      VisitHistory.checkAuthorization.mockClear();
      const to = {
        matched: [{ meta: { shouldCheckVisitHistory: true } }]
      };
      const next = jest.fn();

      beforeResolve(to, undefined, next);

      expect(VisitHistory.checkAuthorization).toHaveBeenCalled();
      expect(next).toHaveBeenCalled();
    });

    it('should ignore to check authorization when going to the route without checking visit history', () => {
      VisitHistory.checkAuthorization.mockClear();
      const to = {
        matched: [{ meta: { shouldCheckVisitHistory: false } }]
      };
      const next = jest.fn();

      beforeResolve(to, undefined, next);

      expect(VisitHistory.checkAuthorization).not.toHaveBeenCalled();
      expect(next).toHaveBeenCalled();
    });
  });

  describe('afterEach', () => {
    it('should report visit history', () => {
      VisitHistory.reportHistory.mockClear();
      afterEach({}, undefined);
      expect(VisitHistory.reportHistory).toHaveBeenCalled();
    });
  });
});
