import { LikedOnlyPipe } from './liked-only.pipe';

describe('LikedOnlyPipe', () => {
  it('create an instance', () => {
    const pipe = new LikedOnlyPipe();
    expect(pipe).toBeTruthy();
  });
});
