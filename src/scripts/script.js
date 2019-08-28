$(document).ready(function(){
    $('.slickslider').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        touchmove: true,
    });
    CountTo.prototype.dataOptions = function () {
      var options = {
        from:            this.$element.data('from'),
        to:              this.$element.data('to'),
        speed:           this.$element.data('speed'),
        refreshInterval: this.$element.data('refresh-interval'),
        decimals:        this.$element.data('decimals')
      };
      
$('.panel-group').collapse({
    toggle: false
})