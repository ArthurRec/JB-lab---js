(function(w, d){
    var def = {
        type:'node'
    }

})(window, document);

new Node('','')
function Node(parent, url){
    var obj = {
        _viewData:undefined,
        update:function(){
            //TODO
        },
        depends:[]
    };

    Object.defineProperty(
        obj,
        'view',
        {
            get:function(){
                return obj._viewData;
            },
            set:function(newView){
                obj._viewData = newView;
            }
        }
    );
}
var array = [];
Object.defineProperty(
    array,
    'pull',
    {
        value:function(){
            console.log('kokoko');
            var e = array[array.length-1];
            array.length--;
            return e;
        },
        enumerable:false,
        writable:false
    }
);