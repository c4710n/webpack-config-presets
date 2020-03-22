/* eslint-disable */
/* global APP_ENV */

import './global.css'
import './global.scss'
import macro from './macro.val.js'
import image from '../res/placeholder.png'

console.log('[PASS] JavaScript.')

if (APP_ENV) {
  console.log('[PASS] Environment')
} else {
  console.error('[FAIL] Environment')
}

macro()

const elementTestMedia = document.querySelector('.test-media')
elementTestMedia.style.color = 'green'
elementTestMedia.style.background = `url(${image})`
