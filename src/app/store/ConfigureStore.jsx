import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers/rootReducer'

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
})

export const ConfigureStore = () => {
  const store = createStore(
    rootReducer,
    /* preloadedState, */ composeEnhancers(
      applyMiddleware()
      // other store enhancers if any
    )
  )

  return store
}
