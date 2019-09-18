import videoLogic from './VideoLogic'
import {RequirementError} from '../../common/errors'


const results = 10
const resultsOffline = require('../../common/fixedResults.json')

describe('videoLogic', () => {

    describe('search', () => {
        let term
        beforeEach(() => {
            term = 'video ' + (Math.floor(Math.random()*10).toString())
        })

        it('should succeed on correct arguments - useAPI TRUE', async () => {
            const data = await videoLogic.SearchVideo(true, term)
            expect(data).toBeDefined()
            expect(data.etag).toBeDefined()
            expect(data.items.length).toBe(results)
        })

        it('should succeed on correct arguments - useAPI FALSE', async () => {
            const data = await videoLogic.SearchVideo(false, term)
            expect(data).toBeDefined()
            expect(data.etag).toBeDefined()
            expect(data.items.length).toBe(resultsOffline.items.length)
            expect(data === resultsOffline).toBeTruthy()
        })

        it('should fail on undefined use argument', async () => {
            expect(() => videoLogic.SearchVideo(undefined, term)).toThrowError(RequirementError, `use is not optional`)
        })

        it('should fail on undefined term argument - USE true', () => {
            expect(() => videoLogic.SearchVideo(true, undefined)).toThrowError(RequirementError, `term is not optional`)
        })

        it('should fail on undefined term argument - USE false', () => {
            expect(() => videoLogic.SearchVideo(false, undefined)).toThrowError(RequirementError, `term is not optional`)
        })
    })
})
