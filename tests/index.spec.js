const expect = require('chai').expect
const BL = require('../index.js')

describe('Bob Luthra Module', function(){
  describe('#foo', function(){
    it('should be defined', function(){
      expect(BL.foo).is.not.equal(undefined)
    })
    it('should be a function', function(){
      expect(BL.foo).is.a('function')
    })
    it('should return an object containing a name, dob and address', function(){
      let result = BL.foo()
      expect(result).is.an('object')
      expect(result).to.have.property('name')
      expect(result).to.have.property('dob')
      expect(result).to.have.property('address')
      expect(result.name).is.a('string')
      expect(result.address).is.a('string')
      expect(result.dob).is.a('date')
    })
  })
})