
    var gridster;

    $(function(){

      gridster = $(".gridster > ul").gridster({
          widget_margins: [25, 10	],
          widget_base_dimensions: [100, 60]
      }).data('gridster');

      var widgets = [
          ['<li>0</li>', 1, 2],
          ['<li>1</li>', 1, 2],
          ['<li>2</li>', 1, 2],
          ['<li>3</li>',  1, 2],
          ['<li>4</li>', 1, 2],
          ['<li>5</li>',  1, 2],
          ['<li>6</li>',  1, 2],
          ['<li>7</li>',  1, 2],
          ['<li>8</li>',  1, 2],
          ['<li>9</li>',  1, 2],
        
      ];

      $.each(widgets, function(i, widget){
          gridster.add_widget.apply(gridster, widget)
      });

    });
    