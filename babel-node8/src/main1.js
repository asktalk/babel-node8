/**
 * Created by keep on 2017/7/9.
 */


// main.js
import {firstName, lastName, year} from './profile';
import ddd  from "./clazz"
function test1() {
    let ret = firstName + ' ' + lastName;
    console.log(ret)
}

test1()

var  a = new ddd()
a.say()