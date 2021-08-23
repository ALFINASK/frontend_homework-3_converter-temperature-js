const { Converter } = require("../src/scripts/converter");

const converter = new Converter();
test("celcius 8 + equal 10", () => {
    expect(converter.celcius("farenheit", 10)).toBe(50);
});