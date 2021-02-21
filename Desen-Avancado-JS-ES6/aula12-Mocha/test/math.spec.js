const assert = require('assert')
const Math = require('../src/math.js')
const expect = require('chai').expect
const sinon  = require('sinon')

let value = 0

describe('Math class', function() {
   //hooks
   beforeEach(function() { // hooks => before - beforeEach - after - afterEach
    value = 0; // la em multiply ele 5 * 0 = 0
   })
    it('sum two numbers', function(done) {const math = new Math()
       this.timeout(3000)
        
        value = 5 // 5 +5 = 10

        math.sum(value, 5, value => {
            expect(value).to.equal(10) // sem o chai ficava assim --> assert.equal(value, 10)
            done()
        })  //metodo it.only() vai fazer apenas que um teste seja executado
    });     //metodo it.skip() vai ignorar o teste

    it('Multiply two numbers', function() {
        const math = new Math()
        const obj = {
            name: 'Willian Mateus Betim'
        }
        
        const obj2 = {
            name: 'Willian Mateus Betim'
        }
        
        expect(obj).to.deep.equal(obj2) // sem chai ---> assert.equal(, 0);
    });

    it.only('Calls req with sum and index values', function () {
        const req = {}
        const res = {
            load: function load() {
            console.log('Called!');
            }
        }

        sinon.stub(res, 'load').returns('xpto')

        const math = new Math

        math.printSum(req, res, 5, 5)

        expect(res.load.args[0][0]).to.equal('index')
    })
});