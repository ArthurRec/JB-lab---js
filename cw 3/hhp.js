function hhp(){
    function A(k){
        var array;
        array = Array.prototype.slice.call(arguments[0], 0);
        array.addClass = function(cls){
            var i;
            for (i=0; i< this.length; i++){
                this[i].classList.add(cls);
            }
            return this;
        }
        array.each = function(f, args){
            var i;
            for(i = 0; i< this.length; i++){
                args.push(i);
                f.apply(this[i], args);
                args.pop();
            }
        }
        array.attr = function(k, v){
            var i;
            if(v){
                for(i=0;i<this.length; i++){
                    this[i].setAttribute(k,v);
                }
                return this;
            }else{
                return this[0].getAttribute(k);
            }
        }
        return array;
    }
    if(this instanceof hhp){
        console.log('set param')
    }else{
        if(typeof arguments[0] == 'string'){
            return new A(document.querySelectorAll(arguments[0]))
        }else return {};
    }
}