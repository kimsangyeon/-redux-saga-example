import { take, put, call, fork, select } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import {
  SELECT_REDDIT,
  INVALIDATE_REDDIT,
  requestPosts,
  receivePosts
} from '../actions';
import { selectRedditSelector, postsByRedditSelector } from '../reducers/selectors';

export function fetchPostsApi(reddit) {
  return fetch(`https://www.reddit.com/r/${reddit}.json`)
    .then(response => response.json())
    .then(json => json.data.children.map(child => child.data));
}

export function* fetchPosts(reddit) {
  yield put(requestPosts(reddit));
  const posts = yield call(fetchPostsApi, reddit);
  yield put(receivePosts(reddit, posts));
}

export function* invalidateReddit() {
  while(true) {
    const { reddit } = yield take(INVALIDATE_REDDIT);
    yield call(fetchPosts, reddit);
  }
}

export function* nextRedditChange() {
  while(true) {
    const prevReddit = yield select(selectRedditSelector);
    yield take(SELECT_REDDIT);

    const newReddit = yield select(selectRedditSelector);
    const postsByReddit = yield select(postsByRedditSelector);
    if (prevReddit !== newReddit && !postsByReddit[newReddit])
      yield fork(fetchPosts, newReddit);
  }
}

export function* startup() {
  const selectReddit = yield select(selectRedditSelector);
  yield fork(fetchPosts, selectReddit);
}

export default function * root() {
  yield fork(startup);
  yield fork(nextRedditChange);
  yield fork(invalidateReddit);
}
