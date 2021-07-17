import getBuffer from '../js/getBuffer';
import ArrayBufferConverter from '../js/arrayBC';

test('check output', () => {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

    expect(ArrayBufferConverter.toString(getBuffer())).toBe(data);
});
