/**
 * Created by tu on 2016/3/14.
 */
define(['react','rootaction','consts','jquery'], function (React,rootaction,consts,$) {
    var margin={marginTop:"10px"};
    //var paddingleft=10;
    //var titlestyle={paddingLeft:paddingleft+"px"};
    //var childstyle={paddingLeft:(paddingleft+10)+"px"};

    var createMenus= function () {
        var Menus = React.createClass({displayName: "Menus",
            componentDidMount: function () {
                $('.leftMnTab_title').on('click', function () {
                    var willshow=$($(this).attr('data-target')).attr('class').indexOf('in')==-1;
                    if(willshow){
                        $(this).parent().find("div").each(function (index,item) {
                            $(item).css({color:'#333333'});
                        });
                        $(this).css({color:'#0084e4'/*'#70abd6'*/});
                    }
                    else
                        $(this).css({color:'#333333'});
                });
            },
            handleClick: function (data) {
                //rootaction[consts.AddTab].call(window,data);
                //EventEmitter.dispatch('addtab', data);
                window.location.hash="#/"+data.MenuKey;
            },
            render: function () {
                var list = this.props.list;

                var items = [];
                for (var i = 0; i < list.length; i++) {
                    var module = list[i];
                    items.push(React.createElement("div", {className: "leftMnTab_title", "data-toggle": "collapse", "data-parent": "#leftmenus", 
                                    "data-target": "#child"+module.ID, _id: module.ID}, React.createElement("span", null, module.MenuTitle)));
                    var itemschild = [];
                    for (var j = 0; j < module.children.length; j++) {
                        var func = module.children[j];
                        itemschild.push(React.createElement("li", {_id: "function"+func.ID, 
                                            _title: func.MenuTitle, 
                                            _key: func.Key, 
                                            onClick: this.handleClick.bind(this,func)}, 
                            React.createElement("span", null, func.MenuTitle)));
                    }
                    items.push(React.createElement("ul", {id: "child"+module.ID, className: i==0?"leftMnTab_lt collapse in":"leftMnTab_lt collapse"}, itemschild));
                }

                return (React.createElement("div", {id: "leftmenudiv", className: "panel leftMnTab", style: margin}, items));
            }
        });

        return Menus;
    };

    var data={createMenus:createMenus};
    return data;
});