import {getSeconds, getHours, getMinutes} from "./full-video-player"


describe('Testing getSeconds function', () => {
    test('07', () => {
        expect(getSeconds(7)).toBe('07')
    })
    test('67', () => {
        expect(getSeconds(67)).toBe('07')
    })
    test('27', () => {
        expect(getSeconds(87)).toBe('27')
    })
    test('127', () => {
        expect(getSeconds(127)).toBe('07')
    })
    test('0', () => {
        expect(getSeconds(0)).toBe('00')
    })


})

describe('Testing getMinutes function', () => {
    test('77', () => {
        expect(getMinutes(77)).toBe('01')
    })
    test('7', () => {
        expect(getMinutes(7)).toBe('00')
    })
    test('127', () => {
        expect(getMinutes(127)).toBe('02')
    })
    test('3540', () => {
        expect(getMinutes(3540)).toBe('59')
    })
    test('3600', () => {
        expect(getMinutes(3600)).toBe('00')
    })
})

describe('Testing getHours function', () => {
    test('77', () => {
        expect(getHours(77)).toBe('00')
    })
    test('7', () => {
        expect(getHours(7)).toBe('00')
    })
    test('3600', () => {
        expect(getHours(3600)).toBe('01')
    })
    test('36000', () => {
        expect(getHours(36000)).toBe('10')
    })
    test('3540', () => {
        expect(getHours(3540)).toBe('00')
    })
})




