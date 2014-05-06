define(function() {

    console.log("Function : toggleTab");

    var toggleTab = {

        init: function() {
            this.tab = $(".js-tab");
            this.bindEvents();
        },

        bindEvents: function() {
            this.tab.on("click", this.switchTab);
            //this.tab.on("click", $.proxy(this.toggleTab, this));
        },

        switchTab: function(e) {
            var showTab = $(this).data("tab-content");
            e.preventDefault();

            $(".js-tab").each(function() {
                if ($(this).data("tab-content") === showTab) {
                    $(".js-tab-" + showTab).removeClass("hide");
                } else {
                    $(".js-tab-" + $(this).data("tab-content")).addClass("hide");
                }
            });
        }

    };

    return toggleTab.init();

});
