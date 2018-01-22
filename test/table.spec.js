describe('table', function() {
    beforeAll(function() {
        this.Table = require('../table');
    });

    afterAll(function() {
        this.Table = null;
    });

    describe('constructor', function() {
        it('should be a function', function() {
            expect(this.Table).toEqual(jasmine.any(Function));
        });

        it('should throw an exception if name is not passed to table function', function() {
            expect(() => this.Table({})).toThrowError(`Invalid argument. 'name' must be a string.`);
        });

        it('should throw an exception if options is not an object', function() {
            expect(() => this.Table({ name: 'test', options: null })).toThrowError(`Invalid argument. 'options' must be an object.`);
        });
    });

    describe('instance', function() {
        it('should be a function that throws an exception when its arguments are not functions', function() {
            const table = this.Table({ name: 'test '});
            expect(table).toEqual(jasmine.any(Function));

            [
                [1, 2],
                [() => {}, 1],
                [null, []],
                [{}, 'test']
            ].forEach(value => expect(() => table(...value)).toThrowError('Invalid argument. Each builder must be a builder function.'));
        });

        it('should return an object with valueOf method that returns created sql', function() {
            const actual = this.Table({ name: 'test' })(() => 'testing', sql => [sql, 'more'].join(' '));
            expect(actual.valueOf()).toEqual('testing more');
        });
    });
});