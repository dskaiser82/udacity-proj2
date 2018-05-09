import { combineReducers } from 'redux'
import comments from './comments'
import posts from './posts'


const app = combineReducers({
  comments, posts
});

export default app
