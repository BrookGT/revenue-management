const { readToken, writeToken, clearToken } = require('../../lib/storage');

function createMemoryStorage() {
  const store = new Map();
  return {
    getItem: (key) => (store.has(key) ? store.get(key) : null),
    setItem: (key, value) => store.set(key, value),
    removeItem: (key) => store.delete(key),
  };
}

describe('storage helpers', () => {
  it('reads and writes auth tokens', () => {
    const storage = createMemoryStorage();
    expect(readToken(storage)).toBe('');
    expect(writeToken(storage, 'abc')).toBe(true);
    expect(readToken(storage)).toBe('abc');
    expect(writeToken(storage, '')).toBe(true);
    expect(readToken(storage)).toBe('');
  });

  it('clears auth tokens', () => {
    const storage = createMemoryStorage();
    writeToken(storage, 'abc');
    expect(clearToken(storage)).toBe(true);
    expect(readToken(storage)).toBe('');
  });

  it('handles invalid storage backends', () => {
    expect(readToken(null)).toBe('');
    expect(writeToken(null, 'abc')).toBe(false);
    expect(clearToken(null)).toBe(false);
  });
});
