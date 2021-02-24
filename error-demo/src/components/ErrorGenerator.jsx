import React from 'react';

const ErrorGenerator = ({ action }) => (
  <p>
    <button onClick={() => action('ACTION_ERROR_IN_PUT')}>Action erro in put</button>{' '}
    <button onClick={() => action('ACTION_ERROR_IN_SELECT')}>Action erro in select</button>{' '}
    <button onClick={() => action('ACTION_ERROR_IN_CALL_SYNC')}>Action erro in call sync</button>{' '}
    <button onClick={() => action('ACTION_ERROR_IN_CALL_ASYNC')}>Action erro in call async</button>{' '}
    <button onClick={() => action('ACTION_ERROR_IN_CALL_INLINE')}>Action erro in call inline</button>{' '}
    <button onClick={() => action('ACTION_ERROR_IN_CALL_FORK')}>Action erro in call fork</button>{' '}
    <button onClick={() => action('ACTION_ERROR_IN_CALL_SPAWN')}>Action erro in call spawn</button>{' '}
    <button onClick={() => action('ACTION_ERROR_IN_CALL_RACE')}>Action erro in call race</button>{' '}
    <button onClick={() => action('ACTION_CAUGHT_ERROR')}>Action caught error</button>{' '}
    <button onClick={() => action('ACTION_INLINE_SAGA_ERROR')}>Action error inlined error</button>{' '}
    <button onClick={() => action('ACTION_IN_DELEGATE_ERROR')}>Action error in delegated error</button>{' '}
    <button onClick={() => action('ACTION_FUNCTION_EXPRESSION_ERROR')}>Action error in saga as function expression</button>
    <button onClick={() => action('ACTION_ERROR_IN_RETRY')}>Error in retry</button>
    <button onClick={() => action('ACTION_ERROR_PRIMITIVE')}>Error as a primitive</button>
  </p>
);

export default ErrorGenerator;
