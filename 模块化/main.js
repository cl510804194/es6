import x,{name as name1} from './module1.js';
import y,{name as name2} from './module2.js';

setTimeout(function(){
    module1()
},1000)

setTimeout(function(){
    module2()
},2000)