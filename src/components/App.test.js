import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

Enzyme.configure({ adapter: new Adapter() })

describe('App', () => {
    let app = shallow(<App />)

    it('render properly', () => {
        expect(app).toMatchSnapshot()
    })

    it('contains a connected Wallet component', () => {
        console.log(app.debug());
        
        expect(app.find('Connect(Wallet)').exists()).toBeTruthy()
    })
})