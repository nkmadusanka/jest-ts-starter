import { ITester } from './tester.i';

export class JestTester implements ITester {
  constructor(private testerGreeting: string) {}

  public doTest(): string {
    return 'Hold on ' + this.testerGreeting;
  }

  public stop(): boolean {
    return true;
  }
}
