import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Dominick',

  expect(user.name).toEqual('Dominick')
})
