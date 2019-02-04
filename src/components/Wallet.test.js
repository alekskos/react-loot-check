import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Wallet } from './Wallet'

Enzyme.configure({ adapter: new Adapter() })

describe('Wallet', () => {
  const props = { balance: 20 }
  const wallet = shallow(<Wallet {...props} />)

  it('render properly', () => {
    expect(wallet).toMatchSnapshot()
  })

  it('dislays the balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20')
  })
})
