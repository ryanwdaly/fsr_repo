// We write the tests for the Modash library in
// this file in the Unit Testing chapter
import Modash from './Modash';

describe('Modash', () => {
    const string = 'there was one catch';

    describe('`truncate()`', () => {

        it('`truncate()`: truncate is a string', () => {
            expect(Modash.truncate(string, 18)
            ).toEqual('there was one catc...');
        });
        
        it('no-ops if <= length', () => {
            expect(Modash.truncate(string, string.length)
            ).toEqual(string);
        })
    })

    describe('`capitalize()`', () => {
        it('`capitalize()`: should make the first letter a capital', () => {
            expect(Modash.capitalize(string)
            ).toEqual('There was one catch');
        });
    });

    describe('`camelCase()`', () => {
        it('`camelCast()` should turn string into camel case', () => {
            expect(Modash.camelCase(string)
            ).toEqual('thereWasOneCatch')
        })
    });
});

// let string, actual, expected;

// function assertEqual(description, actual, expected) {
//     if (actual === expected) {
//         console.log(`[PASS] ${description}`)
//     } else {
//         console.log(`[FALL] ${description}`);
//         console.log(`\tactual: '${actual}'`);
//         console.log(`\texpected: '${expected}'`);
//     }
// }

// /************** */

// string = 'there was one catch, and that was CATCH-22';
// actual = Modash.truncate(string, 19);
// expected = 'there was one catch...';

// assertEqual('`truncate()`: truncates a string', actual, expected);

// actual = Modash.truncate(string, string.length);
// expected = string;

// assertEqual('`truncate()`: no-ops if <= length', actual, expected);

// actual = Modash.capitalize(string);
// expected = 'There was one catch, and that was catch-22';

// assertEqual('capitalize(): capitalizes the string', actual, expected);

// string = 'customer responded at';
// actual = Modash.camelCase(string);
// expected = 'customerRespondedAt';

// assertEqual('camelCase(): string with spaces', actual, expected);

// string = 'customer_responded_at';
// actual = Modash.camelCase(string);
// expected = 'customerRespondedAt';

// assertEqual('camelCase(): string with underscores', actual, expected);