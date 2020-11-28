import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {user} from "./user";
import {ActionType} from "../../action";
import {APIRoute, AuthorizationStatus} from "../../../const";
import {checkAuth, login} from "../../api-actions";

const api = createAPI(() => {});

it(`Reducer user without additional parameters should return initial state`, () => {
  expect(user(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    authInfo: {}
  });
});

it(`Reducer user should update authorizationStatus to "auth"`, () => {
  expect(user({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /login 1`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const questionLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return questionLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`Should make a correct API call to /login 2`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {login: `test@test.ru`, password: `123456`};
    const questionLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return questionLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_AUTH_INFO,
          payload: {
            "avatarUrl": undefined,
            "email": undefined,
            "id": undefined,
            "isPro": undefined,
          },
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`Reducer user should update authInfo`, () => {
    expect(user({
      authInfo: {},
    }, {
      type: ActionType.LOAD_AUTH_INFO,
      payload: {id: `2`}
    })).toEqual({
      authInfo: {id: `2`}
    });

    expect(user({
      authInfo: {id: `1`},
    }, {
      type: ActionType.LOAD_AUTH_INFO,
      payload: {id: `2`}
    })).toEqual({
      authInfo: {id: `2`}
    });
  });

});
