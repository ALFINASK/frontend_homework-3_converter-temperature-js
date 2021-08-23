const { Converter } = require("../src/scripts/converter");

const converter = new Converter();
test("from 10 celcius to 50 farenheit", () => {
    expect(converter.celcius("farenheit", 10)).toBe(50);
});

test("from 10 celcius to 10 celcius", () => {
    expect(converter.celcius("celcius", 10)).toBe(10);
});

test("from 50 farenheit to 50 farenheit", () => {
    expect(converter.farenheit("farenheit", 50)).toBe(50);
});

test("from 50 farenheit to 10 celcius", () => {
    expect(converter.farenheit("celcius", 50)).toBe(10);
});