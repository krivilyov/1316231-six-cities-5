import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OffersSorting} from "./offers-sorting";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {testInitialState} from "../../test-data";

configure({adapter: new Adapter()});
const mockStore = configureMockStore();
const store = mockStore(testInitialState);

const noop = () => {};

it(`click on OffersSorting correctly`, () => {
  const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <OffersSorting
            toggle={false}
            onOptionClick={noop}
            onToggleClick={noop}
            sortingType={`type1`}
          />
        </MemoryRouter>
      </Provider>
  );

  const menuButton = wrapper.find(`#places__sorting-type`);
  let typeList = wrapper.find(`.places__options--custom`);
  menuButton.simulate(`click`);
  typeList = wrapper.find(`.places__options--custom`);
  expect(typeList.hasClass(`places__options--opened`)).toEqual(false);
});
