/*global describe, it*/
describe('functions', () => {
  describe('happyHolidays', () => {
    it('returns "Happy holidays!"', ($name) => {
      expect(happyHolidays()).toEqual('Happy holidays!')
    })
  })
}
  describe('happyHolidaysTo(name)', ($name) => {
    it('returns "Happy holidays, ${name}!"', () => {
      expect(happyHolidaysTo('you')).toEqual('Happy holidays, you!')
    })
  })

  describe('happyHolidayTo(holiday, name)', ($name) => {
    it('returns "Happy ${holiday}, ${name}!"', () => {
      expect(happyHolidayTo('Independence Day', 'you')).toEqual('Happy Independence Day, you!')
    })
  })

  describe('holidayCountdown(holiday, days)', ($name) => {
    it('returns "It\'s ${days} days until ${holiday}!"', () => {
      expect(holidayCountdown("Mother's Day", 20)).toEqual("It's 20 days until Mother's Day!")
    })
  })
})
