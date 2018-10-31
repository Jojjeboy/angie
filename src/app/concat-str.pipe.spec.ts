import { ConcatStrPipe } from './concat-str.pipe';

describe('ConcatStrPipe', () => {
  it('create an instance', () => {
    const pipe = new ConcatStrPipe();
    expect(pipe).toBeTruthy();
  });
});
