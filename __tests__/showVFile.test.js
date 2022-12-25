import gl, { isInstance, removeShowVFile, createShowVFile } from '../stream/ject-ws.js';
import { expect, test, describe } from 'vitest';

describe('show v file', () => {
  test('removeShowVFile', removeShowVFile);

  test('init', () => {
    expect(isInstance()).toBe(false);
    createShowVFile();
    removeShowVFile();
  });
});
