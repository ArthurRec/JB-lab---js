(function(w, d){
    function lo(){
        console.log('koko go turnik koko');
    }
    var template, sel;
    template = {
        'hi':'Пpивет',
        'a':'aga-aga'
    }

    lo.send = function(mes){
        sel.innerText = template[mes];
    }
    lo.view_temp = function(temp){
        var i;var a;
        if(temp){
            var a = 'asd';
            console.log(
                template[temp] || '-_-'
            );
        }else{
            for(i in template){
                if(template.hasOwnProperty(i))
                console.log(i + ': ' + template[i]);
            }
        }
    }
    lo.add_temp = function(){
        //(name, text)?(obj)?(array)?
        var name, text;
        name = arguments[0];
        text = arguments[1];
        template[name] = text;
    }
    lo.set_area = function(selector){
        sel = document.querySelectorAll(selector)[0];
    }
    lo.extend_temp = function(parent){
        console.log(arguments);
        template.prototype = parent;
    }
    w['lo'] = lo;
})(window, document);
