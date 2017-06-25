/// <reference path="../src/FindUnique.ts"/>

describe('findUniq', () => {
    it('should handle sample cases', () => {
        expect(FindUnique.findUniq([ 1, 1, 1, 2, 1, 1 ])).toEqual(2);
        expect(FindUnique.findUniq([ 0, 0, 0.55, 0, 0 ])).toEqual(0.55);
        expect(FindUnique.findUniq([3,0,3,3,3,3])).toEqual(0);
    });
    it('should handle basic case', () => {
        expect(FindUnique.findUniq([0,0,1])).toEqual(1);
        expect(FindUnique.findUniq([1,0,1])).toEqual(0);
        expect(FindUnique.findUniq([1,0,1,1])).toEqual(0);
        expect(FindUnique.findUniq([0,1,1,1])).toEqual(0);
    });
});