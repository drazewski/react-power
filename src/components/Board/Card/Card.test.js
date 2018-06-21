import React from 'react';
import {Link} from "react-router-dom";
import Card from './Card';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({ adapter: new Adapter() })

describe('<Link/>',() => {
    it('renders the link', () => {
        const wrapper = shallow(<Card />);
        expect(wrapper.contains(<a><h4></h4></a>));
    })
} )