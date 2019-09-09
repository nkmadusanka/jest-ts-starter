import { JestTester } from '../../src/tester/jest-tester';
import { ITester } from '../../src/tester/tester.i';

describe('JestTester', () => {
  let tester: ITester;
  beforeEach(() => {
    tester = new JestTester('Unit Tests');
  });
  describe('doTest', () => {
    it('should start testing', () => {
      expect(tester.doTest()).toEqual('Hold on Unit Tests');
    });
  });

  describe('stop', () => {
    it('should stop the tester', () => {
      expect(tester.stop()).toBeTruthy();
    });
  });
});
