import { toURL } from "./toUrl";

describe('toUrl helper function', () => {
    it('should return a correctly formatted URL', () => {
        expect(toURL('/Testing-One')).toEqual('/testing-one')
        expect(toURL('/Testing One Two')).toEqual('/testing-one-two')
        expect(toURL('/Testing!!')).toEqual('/testing')
    })
})