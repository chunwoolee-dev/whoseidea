import { signup } from './users/signup'
import { signout } from './users/signout'
import { login } from './users/login'
import { logout } from './users/logout'
import { auth } from './users/auth'
import { myPost } from './users/my-post'
import { myComment } from './users/my-comment'

const controllers = {
    signup:signup,
    signout:signout,
    login:login,
    logout:logout,
    auth:auth,
    myPost:myPost,
    myComment:myComment
}

export default controllers
