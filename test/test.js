const expect = require('chai').expect;
const Calculator = require("../calculator");

let calc = new Calculator();

describe("Can do arithmetic", () => {
    describe('can add two numbers', () => {
        it ('can add two positive integers', () => {
            expect(calc.add(1, 1)).to.equal(2);
        })
        it ('can add an integer to zero', () => {
            expect(calc.add(1, 0)).to.equal(1);
        })
    });
    describe('can subtract two numbers', () => {
        it ('can subtract an integer from zero', () => {
            expect(calc.subtract(5,0)).to.equal(5);
        });
        it ('can subtract two integers', () => {
            expect(calc.subtract(4,2)).to.equal(2);
        });
        // it ('can subtract a number and a function', () => {
        //     expect(calc.subtract(4, () => {})).to.equal('3()=>{}');
        // });
    });
    describe('can divide two numbers', () => {
        it ('can divide two integers', () => {
            expect(calc.divide(6,2)).to.equal(3);
        });
        // it ('can divide an integer and zero', () => {
        //     expect(calc.divide(5,0)).to.equal(0);
        // });
    });
    describe('can multiply two numbers asynchronously', () => {
        it ('can multiple two integers asynchronously', (done) => {
            calc.multiplyAsync(3,2, (val) => {
                if (val === 6) {
                    done();
                } else {
                    don(new Error("can multiply. goodbye"));
                }
            })
        })
    })
});

// describe('taking a first stab at TDD', () => {
//     it('basic check', () => {
//         expect(1).to.equal(1);
//     });
// });