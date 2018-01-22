describe('select', function() {
    beforeAll(function() {
        this.select = require('../../builders/select');
    });

    afterAll(function() {
        this.select = null;
    });

    it('should create select * sql when passed no fields', function() {
        expect(this.select()('', { name: 'test', options: {} }))
            .toBe('select * from test');
    });

    it('should append its text to the beginning of the given sql', function() {
        expect(this.select()('', { name: 'test', options: {} }))
            .toBe('select * from test');
    });

    it('should append all fields to its sql statement', function() {
        const fields = ['name', 'age', 'height'];
        expect(this.select(...fields)('', { name: 'test', options: {} }))
            .toBe(`select ${fields.join(',')} from test`);
    });
});