const chance = new (require('chance'))()

module.exports = {
  foo: function() {
    return {
      name: chance.name({ nationality: 'en' }),
      dob: chance.birthday(),
      address: chance.address()
    }
  }
}