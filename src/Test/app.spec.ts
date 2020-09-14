import { main } from './app';

describe('Main test', () => {
    test('that console.log is outputted', () => {
        expect.assertions(1);
        const result = main();
        expect(result).toEqual(true);
    });
});
