import Post from './Post'
import json from './assets/json'
import WebpackLogo from './assets/webpack-logo.png'
import './styles/style.css'
import './styles/less.less'

const post = new Post('Webpack Title', WebpackLogo)

console.log('Post to String', post.toString())

console.log('JSON:', json)