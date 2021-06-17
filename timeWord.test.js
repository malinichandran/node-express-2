const { timeWord } = require('./timeWord');

describe('timeWord', function() {
  test('works noon', function() {
    let time = timeWord("12:00");
    expect(time).toEqual("noon");
    
  });
});