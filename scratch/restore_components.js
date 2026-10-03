const fs = require('fs');
const path = require('path');

const indexJs = fs.readFileSync('app/dist/assets/index-1mL59Vig.js', 'utf8');

// 1. Extract Familiar.tsx
const familiarStart = indexJs.indexOf('function y(){const{locale:');
const familiarEnd = indexJs.indexOf('function b(){const[t,n]=a.useState("introHero")');
console.log('=== Familiar JS ===');
console.log(indexJs.substring(familiarStart, familiarEnd));
