describe('common', function() {
    beforeEach(function() {
        Object.assign(this, require('../common'));
    });

    describe('assert', function() {
        it('should throw an exception when the predicate is false', function() {
            const expected = 'test message';
            expect(() => this.assert(false, expected)).toThrowError(expected)
        });

        it('should return true when the predicate is true', function() {
            expect(this.assert(true, 'test')).toBeTruthy();
        });
    });

    describe('join', function() {
        it('should return a function when only given a delimiter', function() {
            expect(this.join('.')).toEqual(jasmine.any(Function));
        });

        it('should throw exception when not given an array as the second argument', function() {
            [null, undefined, {}, 2, 'test'].forEach(value => expect(() => this.join('.', value)).toThrowError());
        });

        it('should remove undefined and null values in the array', function() {
            expect(this.join('.', [undefined, 'a', null, 'b'])).toBe('a.b');
        });
    })
});