import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import About from './aboutMe';
import { Paper } from '@material-ui/core';

configure({ adapter: new Adapter() });

describe('about page', () => {
  it('should render contact page based on screen size', () => {
    const wrapper = shallow(<About />);

    expect(wrapper.find(Paper)).toHaveLength(1);
  });
});
