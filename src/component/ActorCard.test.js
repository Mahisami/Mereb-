import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import axios from 'axios';
import sinon from 'sinon';
import ActorCard from './ActorCard';

describe('ActorCard Component', () => {
  const mockActor = {
    name: 'Luke Skywalker',
    height: '172',
    birth_year: '19BBY',
  };

  let axiosGetStub;

  beforeEach(() => {
    axiosGetStub = sinon.stub(axios, 'get').resolves({ data: mockActor });
  });

  afterEach(() => {
    axiosGetStub.restore();
  });

  it('renders actor name', async () => {
    const wrapper = mount(<ActorCard actor={mockActor} />);
    await new Promise(setImmediate);
    wrapper.update();
    expect(wrapper.text()).contain('Luke Skywalker');
  });

  it('renders actor height', async () => {
    const wrapper = mount(<ActorCard actor={mockActor} />);
    await new Promise(setImmediate);
    wrapper.update();
    expect(wrapper.text()).contain('Height: 172');
  });

  it('renders actor birth year', async () => {
    const wrapper = mount(<ActorCard actor={mockActor} />);
    await new Promise(setImmediate);
    wrapper.update();
    expect(wrapper.text()).contain('Birth Year: 19BBY');
  });

  it('renders detail button', async () => {
    const wrapper = mount(<ActorCard actor={mockActor} />);
    await new Promise(setImmediate);
    wrapper.update();
    expect(wrapper.find('button').text()).equal('Detail');
  });
});
