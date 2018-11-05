/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals.
        factory(jQuery);
    }
}(function($) {

    var pluses = /\+/g;

    function raw(s) {
        return s;
    }

    function decoded(s) {
        return decodeURIComponent(s.replace(pluses, ' '));
    }

    function converted(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }
        try {
            return config.json ? JSON.parse(s) : s;
        } catch (er) {}
    }

    var config = $.cookie = function(key, value, options) {

        // write
        if (value !== undefined) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires,
                    t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = config.json ? JSON.stringify(value) : String(value);

            return (document.cookie = [
                config.raw ? key : encodeURIComponent(key),
                '=',
                config.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path ? '; path=' + options.path : '',
                options.domain ? '; domain=' + options.domain : '',
                options.secure ? '; secure' : ''
            ].join(''));
        }

        // read
        var decode = config.raw ? raw : decoded;
        var cookies = document.cookie.split('; ');
        var result = key ? undefined : {};
        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = decode(parts.join('='));

            if (key && key === name) {
                result = converted(cookie);
                break;
            }

            if (!key) {
                result[name] = converted(cookie);
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function(key, options) {
        if ($.cookie(key) !== undefined) {
            // Must not alter options, thus extending a fresh object...
            $.cookie(key, '', $.extend({}, options, {
                expires: -1
            }));
            return true;
        }
        return false;
    };

}));

(function( $, window, document ) {

'use strict';

var PFTX = window.PFTX = window.PFTX || {},
    $body = $( 'body' );

PFTX.pages = {};
PFTX.modules = {};

PFTX.init = function() {

    // Funções executadas a todas as páginas
    PFTX.pages.common.init();

    // Executa as funcões correspondentes à página atual
    $.each( PFTX.pages, function() {
        if ( $body.hasClass( this.pageClass ) ) {
            if ( this.hasOwnProperty( 'init' ) ) {
                this.init();
            }
        }
    });
};

})( jQuery, window, document );

(function($, window, document, undefined) {

    'use strict';

    PFTX.constructor = PFTX.constructor || {};

    // Class module onstructor
    PFTX.constructor.module = function(module) {
        //
    };

    // init
    PFTX.constructor.module.init = function(options) {

        for (var index in options) {
            if (PFTX.modules.buyButtonAsync.hasOwnProperty(index)) {
                PFTX.modules.buyButtonAsync[index] = options[index];
            }
        }
    };


    // Instanciondo um modulo
    /*#

        PFTX.modules.buyButtonAsync.init({
            $target: 0,
            floated: true
        });

        // xasxanlsx

        var buyButton = new PFTX.modules.buyButtonAsync();


        buyButton.init({
            x: 1,
            y: 1
        });
    */


})(jQuery, window, document);

(function( $, window, document, undefined ) {

'use strict';

PFTX.constructor = {};

// Class Page onstructor
PFTX.constructor.page = function( page ) {

    this.pageClass = page;

    this.DOMReady = function() {};
    this.winLoad = function() {};
    this.ajaxStop = function() {};
    this.common = function() {};

    this.init = function() {
        $( window ).load($.proxy(function() {
            this.winLoad();
        }, this));

        $( document )
        .ready($.proxy(function(){
            this.common();
            this.DOMReady();
        }, this))
        .ajaxStop($.proxy(function(){
            this.common();
            this.ajaxStop();
        }, this));
    };
};

})( jQuery, window, document );
/**
 *   Pesquisa Inteligente
 *   @description Execurar buscas sem recarregar a pÃ¡gina
 *   @author Carlos Vinicius
 *   @contributor Edson Domingos JÃºnior
 *   @version 3.9
 *   @date 2012-10-22
 */
"function" !== typeof String.prototype.replaceSpecialChars && (String.prototype.replaceSpecialChars = function() {
    var b = {
        "\u00e7": "c",
        "\u00e6": "ae",
        "\u0153": "oe",
        "\u00e1": "a",
        "\u00e9": "e",
        "\u00ed": "i",
        "\u00f3": "o",
        "\u00fa": "u",
        "\u00e0": "a",
        "\u00e8": "e",
        "\u00ec": "i",
        "\u00f2": "o",
        "\u00f9": "u",
        "\u00e4": "a",
        "\u00eb": "e",
        "\u00ef": "i",
        "\u00f6": "o",
        "\u00fc": "u",
        "\u00ff": "y",
        "\u00e2": "a",
        "\u00ea": "e",
        "\u00ee": "i",
        "\u00f4": "o",
        "\u00fb": "u",
        "\u00e5": "a",
        "\u00e3": "a",
        "\u00f8": "o",
        "\u00f5": "o",
        u: "u",
        "\u00c1": "A",
        "\u00c9": "E",
        "\u00cd": "I",
        "\u00d3": "O",
        "\u00da": "U",
        "\u00ca": "E",
        "\u00d4": "O",
        "\u00dc": "U",
        "\u00c3": "A",
        "\u00d5": "O",
        "\u00c0": "A",
        "\u00c7": "C"
    };
    return this.replace(/[\u00e0-\u00fa]/g, function(a) {
        return "undefined" != typeof b[a] ? b[a] : a
    })
});
"function" !== typeof String.prototype.trim && (String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "")
});
jQuery.fn.vtexSmartResearch = function(opts) {
    $this = jQuery(this);

    var log = function(msg, type) {
        if (typeof console == "object")
            console.log("[Smart Research - " + (type || "Erro") + "] " + msg);
    };

    var defaults = {
        pageLimit: null, // NÃºmero mÃ¡ximo de pÃ¡ginas que o script irÃ¡ retornar. Exemplo "pageLimit=3" sÃ³ serÃ¡ retornado resultados atÃ© a terceira pÃ¡gina
        loadContent: ".prateleira[id^=ResultItems]", // Elemento que esta em volta da(s) prateleira(s) de produtos.
        shelfClass: ".prateleira", // Pratelira de produtos (filha do elemento definido de um "loadContent")
        filtersMenu: ".search-multiple-navigator", // Menu com os filtros
        linksMenu: ".search-single-navigator", // Menu de links
        menuDepartament: ".navigation .menu-departamento", // seletor do menu da pÃ¡gina de departamentos
        mergeMenu: true, // Define se o menu de links serÃ¡ mesclado com o de filtros serÃ¡ mesclado na pÃ¡gina de departamento
        insertMenuAfter: ".search-multiple-navigator h3:first", // O menu de links serÃ¡ inserido apÃ³s este elemento
        emptySearchElem: jQuery('<div class="vtexsr-emptySearch"></div>'), // Elemento Html (em Objeto jQuery) no qual serÃ¡ adicionado a mensagem de busca vazia
        elemLoading: '<div id="scrollLoading">Carregando ... </div>', // Elemento com mensagem de carregando ao iniciar a requisiÃ§Ã£o da pÃ¡gina seguinte
        returnTopText: '<span class="text">voltar ao</span><span class="text2">TOPO</span>', // Mensagem de "retornar ao topo"
        emptySearchMsg: '<h3>Esta combinação de filtros não retornou nenhum resultado!</h3>', // Html com a mensagem para ser apresentada quando nÃ£o existirem resultados para os filtros selecionados
        filterErrorMsg: "Houve um erro ao tentar filtrar a página!", // Mensagem de erro exibida quando existe algum erro de servidor ao aplicar os filtros
        searchUrl: null, // Url da pÃ¡gina de busca (opicional)
        usePopup: false, // OpÃ§Ã£o p/ definir se deseja que a mensagem de nÃ£o localizado seja exibida em um popup
        showLinks: true, // Exibe o menu de links caso o de filtro nÃ£o seja encontrado
        popupAutoCloseSeconds: 3, // Caso esteja utilizando popup, defina aqui o tempo para que ele feche automaticamente
        // FunÃ§Ã£o que retorna o valor p/ onde a pÃ¡gina deve rolar quando o usuÃ¡rio marca ou desmarca um filtro
        filterScrollTop: function(shelfOffset) {
            return (shelfOffset.top - 20);
        },
        callback: function() {},
        // CÃ¡lculo do tamanho do conteÃºdo/vitrine para que uma nova pÃ¡gina seja chamada antes do usuÃ¡rio chegar ao "final" do site
        getShelfHeight: function(container) {
            return (container.scrollTop() + container.height());
        },
        // Callback apÃ³s inserir a prateleira na pÃ¡gina
        shelfCallback: function() {
            // var btn = loadContentE.find('.btn-load-more');
            // btn.remove();
            // loadContentE.append(btn);
            // loadContentE.find('.btn-load-more').show();

            console.log('shelfCallback');
        },
        // Callback em cada requisiÃ§Ã£o Ajax (Para requisiÃ§Ãµes feitas com sucesso)
        // Recebe como parÃ¢metro um objeto contendo a quantidade total de requisiÃ§Ãµes feitas e a quantidade de filtros selecionados
        ajaxCallback: function() {
            console.log('ajaxCallback');
        },
        // FunÃ§Ã£o que Ã© executada quando a seleÃ§Ã£o de filtros nÃ£o retorna nenhum resultado
        // Recebe como parÃ¢metro um objeto contendo a quantidade total de requisiÃ§Ãµes feitas e a quantidade de filtros selecionados
        emptySearchCallback: function() {
            console.log('emptySearchCallback');
        },
        // FunÃ§Ã£o para permitir ou nÃ£o que a rolagem infinita execute na pÃ¡gina esta deve retornar "true" ou "false"
        // Recebe como parÃ¢metro um objeto contendo a quantidade total de requisiÃ§Ãµes feitas e a quantidade de filtros selecionados
        authorizeScroll: function() {
            console.log('authorizeScroll');

            return true;
        },
        // FunÃ§Ã£o para permitir ou nÃ£o que o conteÃºdo de "loadContent" seja atualizado. Esta deve retornar "true" ou "false"
        // Recebe como parÃ¢metro um objeto contendo a quantidade total de requisiÃ§Ãµes feitas e a quantidade de filtros selecionados
        authorizeUpdate: function() {
            console.log('authorizeUpdate');

            return true;
        },
        // Callback de cada laÃ§o percorrendo os fildsets e os labels. Retorna um objeto com algumas informaÃ§Ãµes
        labelCallback: function(data){
            console.log('labelCallback');
        }
    };

    var options = jQuery.extend(defaults, opts),
        _console = "object" === typeof(console),
        $empty = jQuery(""),
        elemLoading = jQuery(options.elemLoading),
        currentPage = 2,
        moreResults = true,
        _window = jQuery(window),
        _document = jQuery(document),
        _html = jQuery("html,body"),
        body = jQuery("body"),
        currentSearchUrl = "",
        urlFilters = "",
        searchUrl = "",
        animatingFilter = false,
        loadContentE = jQuery(options.loadContent),
        filtersMenuE = jQuery(options.filtersMenu),
        ajaxCallbackObj = {
            requests: 0,
            filters: 0,
            isEmpty: false
        },
        labelCallbackData = {};

    var fn = {
        getUrl: function(scroll) {
            var s = scroll || false;
            if (s)
                return currentSearchUrl.replace(/PageNumber=[0-9]*/, "PageNumber=" + currentPage);
            else
                return (searchUrl + urlFilters).replace(/PageNumber=[0-9]*/, "PageNumber=" + pageNumber);
        },
        getSearchUrl: function() {
            var url, content, preg;
            jQuery("script:not([src])").each(function() {
                content = jQuery(this)[0].innerHTML;
                preg = /\/buscapagina\?.+&PageNumber=/i;
                if (content.search(/\/buscapagina\?/i) > -1) {
                    url = preg.exec(content);
                    return false;
                }
            });

            if (typeof(url) !== "undefined" && typeof(url[0]) !== "undefined")
                return url[0];
            else {
                log("Não foi possível localizar a url de busca da página.\n Tente adicionar o .js ao final da página. \n[Método: getSearchUrl]");
                return "";
            }
        },
        scrollToTop: function() {
            var elem = body.find("#returnToTop");

            if (elem.length < 1) {
                elem = jQuery('<div id="returnToTop"><a href="#">' + options.returnTopText + '<span class="arrowToTop"></span></a></div>');
                body.append(elem);
            }

            var windowH = _window.height();
            _window.bind("resize", function() {
                windowH = _window.height();
            });
            _window.bind("scroll", function() {
                if (_window.scrollTop() > (windowH))
                    elem.stop(true).fadeTo(300, 1, function() {
                        elem.show();
                    });
                else
                    elem.stop(true).fadeTo(300, 0, function() {
                        elem.hide();
                    });
            });
            elem.bind("click", function() {
                _html.animate({
                    scrollTop: 0
                }, "slow");
                return false;
            });
        },
        infinitScroll: function() {

            var elementPages, pages, currentStatus, tmp;

            elementPages = body.find(".pager:first").attr("id");
            tmp = (elementPages || "").split("_").pop();
            pages = (null !== options.pageLimit) ? options.pageLimit : window["pagecount_" + tmp];
            currentStatus = true;
            //console.log(pages);

            // Reportando erros
            // if("undefined"===typeof pages) log("NÃ£o foi possÃ­vel localizar quantidade de pÃ¡ginas.\n Tente adicionar o .js ao final da pÃ¡gina. \n[MÃ©todo: infinitScroll]");

            if ("undefined" === typeof pages)
                pages = 99999999;
            if(pages > 1){
                loadContentE.append("<div class='btn-load-more confira-todos-produtos'><span>Carregar mais produtos</span></div>");
            }

            loadContentE.live('click', '.btn-load-more', function(){
            //console.log('click');
            // _window.bind('scroll', function() {
                var _this = jQuery(this);
                if (!animatingFilter && currentPage <= pages && moreResults && options.authorizeScroll(ajaxCallbackObj)) {
                    //console.log(currentPage + " + " + pages );
                    if ((_this.scrollTop() + _this.height()) >= (options.getShelfHeight(loadContentE)) && currentStatus ) {
                        var currentItems = loadContentE.find(options.shelfClass).filter(":last");
                        currentItems.after(elemLoading);
                        currentStatus = false;
                        pageJqxhr = jQuery.ajax({
                            url: fn.getUrl(true),
                            success: function(data) {
                                if (data.trim().length < 1) {
                                    moreResults = false;
                                    console.log("Não existem mais resultados a partir da página: " + (currentPage - 1), "Aviso");
                                    loadContentE.find('.btn-load-more').fadeOut('fast');

                                } else {
                                    if ($('.btn-load-more').length > 0) {
                                        console.log('maior que 0');
                                        if(currentPage > pages){
                                          loadContentE.find('.btn-load-more').fadeOut('fast');
                                        }
                                    } else{
                                        console.log('menor que 0');
                                    };
                                    currentItems.after(data);
                                }
                                currentStatus = true;
                                elemLoading.remove();
                                ajaxCallbackObj.requests++;
                                options.ajaxCallback(ajaxCallbackObj);
                            }
                        });
                        currentPage++;
                    }
                } else {
                    loadContentE.find('.btn-load-more').fadeOut('fast');
                    // return false;
                }

            });
        }
    };

    if (null !== options.searchUrl) {
        currentSearchUrl = searchUrl = options.searchUrl;
    } else {
        currentSearchUrl = searchUrl = fn.getSearchUrl();
    }

    // Reporting Errors
    if ($this.length < 1) {
        log("Nenhuma opção de filtro encontrada", "Aviso");
        if (options.showLinks) jQuery(options.linksMenu).css("visibility", "visible").show();
        fn.infinitScroll();
        fn.scrollToTop();
        return $this;
    }

    // Reporting Errors
    if (loadContentE.length < 1) {
        log("Elemento para destino da requisição não foi encontrado \n (" + loadContentE.selector + ")");
        return false;
    }
    if (filtersMenuE.length < 1) log("O menu de filtros não foi encontrado \n (" + filtersMenuE.selector + ")");

    var currentUrl = document.location.href,
        linksMenuE = jQuery(options.linksMenu),
        prodOverlay = jQuery('<div class="vtexSr-overlay"></div>'),
        departamentE = jQuery(options.menuDepartament),
        loadContentOffset = loadContentE.offset(),
        pageNumber = 1,
        shelfJqxhr = null,
        pageJqxhr = null;

    options.emptySearchElem.append(options.emptySearchMsg);
    loadContentE.before(prodOverlay);

    var fns = {
        exec: function() {
            fns.setFilterMenu();
            fns.fieldsetFormat();
            $this.each(function() {
                var _this = jQuery(this),
                    label = _this.parent();

                if (_this.is(":checked")) {
                    urlFilters += "&" + (_this.attr("rel") || "");
                    // Adicionando classe ao label
                    label.addClass("sr_selected");
                }

                fns.adjustText(_this);
                // Add span vazio (depois de executar de "adjustText")
                label.append('<span class="sr_box"></span><span class="sr_box2"></span>');

                _this.bind("change", function() {
                    fns.inputAction();
                    if (_this.is(":checked"))
                        fns.addFilter(_this);
                    else
                        fns.removeFilter(_this);
                    ajaxCallbackObj.filters = $this.filter(":checked").length;
                });
            });

            if ("" !== urlFilters)
                fns.addFilter($empty);
        },
        mergeMenu: function() {
            if (!options.mergeMenu) return false;

            var elem = departamentE;
            elem.insertAfter(options.insertMenuAfter);
            fns.departamentMenuFormat(elem);
        },
        mergeMenuList: function() {
            var i = 0;
            filtersMenuE.find("h3,h4").each(function() {
                var ul = linksMenuE.find("h3,h4").eq(i).next("ul");
                ul.insertAfter(jQuery(this));
                fns.departamentMenuFormat(ul);
                i++;
            });
        },
        departamentMenuFormat: function(elem) {
            elem.find("a").each(function() {
                var a = jQuery(this);
                a.text(fns.removeCounter(a.text()));
            });
        },
        fieldsetFormat: function() {
            labelCallbackData.fieldsetCount = 0;
            labelCallbackData.tmpCurrentLabel = {};

            filtersMenuE.find("fieldset").each(function() {
                var $t = jQuery(this),
                    label = $t.find("label"),
                    fieldsetClass = "filtro_" + ($t.find("h5:first").text() || "").toLowerCase().replaceSpecialChars().replace(/\s/g, "-");

                labelCallbackData[fieldsetClass] = {};

                // Ocultar fieldset quando nÃ£o existe filtro e sair desste mÃ©todo
                if (label.length < 1) {
                    $t.hide();
                    return;
                }

                // Adicionar classe ao fieldset
                $t.addClass(fieldsetClass);

                // Adicionando classe e tÃ­tulo ao label
                label.each(function(ndx) {
                    var t = jQuery(this),
                        v = (t.find("input").val() || ""),
                        labelClass = "sr_" + v.toLowerCase().replaceSpecialChars().replace(/\s/g, "-");

                    labelCallbackData.tmpCurrentLabel = {
                        fieldsetParent: [$t, fieldsetClass],
                        elem: t
                    };

                    labelCallbackData[fieldsetClass][ndx.toString()] = {
                        className: labelClass,
                        title: v
                    };

                    t.addClass(labelClass).attr({
                        "title": v,
                        "index": ndx
                    });

                    options.labelCallback(labelCallbackData);
                });

                labelCallbackData.fieldsetCount++;
            });
        },
        inputAction: function() {
            if (null !== pageJqxhr) pageJqxhr.abort();
            if (null !== shelfJqxhr) shelfJqxhr.abort();
            currentPage = 2;
            moreResults = true;
        },
        addFilter: function(input) {
            urlFilters += "&" + (input.attr("rel") || "");
            prodOverlay.fadeTo(300, 0.6);
            currentSearchUrl = fn.getUrl();
            shelfJqxhr = jQuery.ajax({
                url: currentSearchUrl,
                success: fns.filterAjaxSuccess,
                error: fns.filterAjaxError
            });
            // Adicionando classe ao label
            input.parent().addClass("sr_selected");
        },
        removeFilter: function(input) {
            var url = (input.attr("rel") || "");
            prodOverlay.fadeTo(300, 0.6);
            if (url !== "")
                urlFilters = urlFilters.replace("&" + url, "");

            currentSearchUrl = fn.getUrl();
            shelfJqxhr = jQuery.ajax({
                url: currentSearchUrl,
                success: fns.filterAjaxSuccess,
                error: fns.filterAjaxError
            });
            // Removendo classe do label
            input.parent().removeClass("sr_selected");
        },
        filterAjaxSuccess: function(data) {
            var $data = jQuery(data);
            prodOverlay.fadeTo(300, 0, function() {
                jQuery(this).hide();
            });
            fns.updateContent($data);
            ajaxCallbackObj.requests++;
            options.ajaxCallback(ajaxCallbackObj);
            _html.animate({
                scrollTop: options.filterScrollTop((loadContentOffset || {
                    top: 0,
                    left: 0
                }))
            }, 600);
        },
        filterAjaxError: function() {
            prodOverlay.fadeTo(300, 0, function() {
                jQuery(this).hide();
            });
            // alert(options.filterErrorMsg);
            console.log(options.filterErrorMsg);
            log("Houve um erro ao tentar fazer a requisição da página com filtros.");
        },
        updateContent: function($data) {
            animatingFilter = true;
            if (!options.authorizeUpdate(ajaxCallbackObj)) return false;

            var shelf = $data.filter(options.shelfClass);
            var shelfPage = loadContentE.find(options.shelfClass);

            (shelfPage.length > 0 ? shelfPage : options.emptySearchElem).slideUp(600, function() {
                jQuery(this).remove();

                // Removendo a mensagem de busca vazia, esta remoÃ§Ã£o "forÃ§ada" foi feita para
                // corrigir um bug encontrado ao clicar em vÃ¡rios filtros
                if (options.usePopup)
                    body.find(".boxPopUp2").vtexPopUp2();
                else
                    options.emptySearchElem.remove();

                if (shelf.length > 0) {
                    shelf.hide();
                    if ($('.btn-load-more').length>0) {
                        // loadContentE.append(shelf);
                        loadContentE.find('.btn-load-more').fadeIn('fast').before(shelf);
                    } else{
                        loadContentE.append(shelf);
                    };
                    options.shelfCallback();
                    shelf.slideDown(600, function() {
                        animatingFilter = false;
                    });
                    ajaxCallbackObj.isEmpty = false;
                } else {
                    ajaxCallbackObj.isEmpty = true;

                    if (options.usePopup)
                        options.emptySearchElem.addClass("freeContent autoClose ac_" + options.popupAutoCloseSeconds).vtexPopUp2().stop(true).show();
                    else {
                        loadContentE.append(options.emptySearchElem);
                        console.log('mlezao - 492');
                        options.emptySearchElem.show().css("height", "auto").fadeTo(300, 0.2, function() {
                            options.emptySearchElem.fadeTo(300, 1);
                        });
                    }

                    options.emptySearchCallback(ajaxCallbackObj);
                }
            });
        },
        adjustText: function(input) {
            var label = input.parent(),
                text = label.text();
            qtt = "";

            text = fns.removeCounter(text);

            label.text(text).prepend(input);
        },
        removeCounter: function(text) {
            return text.replace(/\([0-9]+\)/ig, function(a) {
                qtt = a.replace(/\(|\)/, "");
                return "";
            });
        },
        setFilterMenu: function() {
            if (filtersMenuE.length > 0) {
                linksMenuE.hide();
                filtersMenuE.show();
            }
        }
    };

    if (body.hasClass("departamento"))
        fns.mergeMenu();
    else if (body.hasClass("categoria") || body.hasClass("resultado-busca"))
        fns.mergeMenuList();

    fns.exec();
    fn.infinitScroll();
    fn.scrollToTop();
    options.callback();

    // Exibindo o menu
    filtersMenuE.css("visibility", "visible");
};


var smartResearch;

(function( $, window, document, undefined ) {

'use strict';

PFTX.pages.account = new PFTX.constructor.page( 'account' );


})( jQuery, window, document );
(function( $, window, document, undefined ) {

'use strict';

PFTX.pages.ondeEncontrar = new PFTX.constructor.page( 'assistencia' );

PFTX.pages.ondeEncontrar.DOMReady = function() {

    // Modulo que controla as lojas de assistencia tecnica
    PFTX.modules.assistenciaManagement.init();

};

})( jQuery, window, document );

(function($, window, document, undefined) {

    'use strict';

    PFTX.pages.catalog = new PFTX.constructor.page('catalogo');

    PFTX.pages.catalog.openFilter = function(){
		var $h3 = $('.menu-departamento').find('h3');
		var $h5 = $('.menu-departamento').find('h5');
		$h3.on('click', function(event) {
			event.preventDefault();
			$(this).next('ul').slideToggle();
		});

		$h5.on('click', function() {
			event.preventDefault();
			$(this).next('ul').slideToggle();
		});
    }
    PFTX.pages.catalog.orderBy = function(){
		var $select = $('.orderBy').find('select');
		var prefix = $select.attr('onchange');
		prefix = prefix.split('+')[0].split('href=')[1].split('\'')[1];
		var $filter = $('.catalog__orderFilter');
		$filter.on('click', function(e) {
			e.preventDefault();
			var order = $(this).attr('href');
			window.location.href = prefix + 'O=' + order;
		});
    }

    PFTX.pages.catalog.removeQtyFilter = function(){
		var links = $('.search-single-navigator a');
			links.each(function() {
		var text = $(this).text();
			text = text.replace(/\(\d*\)/g, '');
			$(this).text(text);
		});
    }
    PFTX.pages.catalog.activeFilters = function(){
		var $filtroAtivo = $('.filtro-ativo');
			$filtroAtivo.each(function() {
				$(this).clone().appendTo('.catalog__active-filter');
				$(this).next('.ver-filtros').clone().appendTo('.catalog__active-filter');
			});

		if($('.filtro-ativo').length > 0) {
			var newUrl = $('.search-single-navigator h3 a').attr('href')
				$('.catalog__remove-filters').attr('href', newUrl);
				$('.catalog__remove-filters').show();
		}
    }
    PFTX.pages.catalog.toggleFilter = function(){
		$('.btn-filtro').on('click', function() {
			$('.catalog__sidebar').toggleClass('active');
			$('.mobile__overlay').show();
			//$('.btn-busca-filtro').show();
			$('.zopim').hide();
		});

		$('.mobile__overlay').on('click', function() {
			if($('.catalog__sidebar').hasClass('active')) {
				$('.catalog__sidebar').removeClass('active');
				$(this).hide();
			}
		});
     	 $('.close-sidebar').on('click', function() {
        	if($('.catalog__sidebar').hasClass('active')) {
          		$('.catalog__sidebar').removeClass('active');
          		$('.mobile__overlay').hide();
        	}
        	//$('.btn-busca-filtro').hide();
          	$('.zopim').show();
      	});
    }
    PFTX.pages.catalog.NewFilter = function(){
    	$('.menu-departamento').prepend('<div class="title-filtros">Filtrar</div>');
    	var mobileBreak = 425;
        if ($('body').width() <= mobileBreak) {
        	$(".refino div").hide('slow');
        }
		$(".refino h5").click(function() {
			$(this).parent().children(".refino div").slideToggle(500);
		});

		var buscaBtn = $('.bt-refinar');
		$('body').append('<div class="btn-busca-filtro"> </div>');
		$('.btn-busca-filtro').append(buscaBtn);


    }
    PFTX.pages.catalog.moveOrderBy = function(){
    	$('select option:contains("Mais vendidos")').prop('selected',true);
		$('.sub').eq(1).remove();
		var filtros = $('.sub');
		$(filtros).insertAfter('.titulo-catalog');
		// $('.catalog__result').prepend(filtros);
    }

    PFTX.pages.catalog.changeTags = function(){
    	var firstFilter = $('.search-multiple-navigator > h4');
		var classes = $(firstFilter).attr('class');
		$(firstFilter).replaceWith('<h3 class="'+classes+'">'+$(firstFilter).html()+'</h3>');
    }

    PFTX.pages.catalog.DOMReady = function(){

	    $('.search-single-navigator h5.Especificações').eq(1).hide();
	    $('.search-single-navigator h5.Especificações').eq(1).next().hide();
		$('a[title="oculosofficina7"]').text('Início');
	    $('.catalog__active-filter .filtro-ativo').each(function() {
	      if($(this).text().length > 10) {
	        $(this).addClass('bigger');
	      }
	    });
	    
	    PFTX.pages.catalog.changeTags();
	    PFTX.pages.catalog.openFilter();
	    PFTX.pages.catalog.orderBy();
	    PFTX.pages.catalog.removeQtyFilter();
	    PFTX.pages.catalog.activeFilters();
	    PFTX.pages.catalog.toggleFilter();
	    PFTX.pages.catalog.NewFilter();
	    PFTX.pages.catalog.moveOrderBy();


	    $('.catalog__sidebar input[type=\'checkbox\']').vtexSmartResearch({
		    emptySearchMsg: '<h3>Esta combinação de filtros não retornou nenhum resultado!</h3>',
		    loadContent: '.prateleira-padrao[id^=ResultItems]', // .search_results
		    shelfClass: '.prateleira-padrao',
			filtersMenu: '.catalog__sidebar',
			shelfCallback: function(){
				PFTX.pages.common.miniaturaSkuProdutoSimilarApi();				
				console.log('%c Recarregar a vitrine de similar! :: 0-88', 'background: gold; color: #000');
			},
			ajaxCallback: function(){
				PFTX.pages.common.miniaturaSkuProdutoSimilarApi();				
				console.log('%c Recarregar a vitrine de similar! :: 0-99', 'background: red; color: #000');
			}							
		});

			var pathName = window.location.pathname.toLowerCase();
			if(pathName.indexOf('/oculos/oculos-de-sol') >= 0 || pathName.indexOf('/oculos/oculos-de-sol/feminino') >=0 || pathName.indexOf('/oculos/oculos-de-sol/masculino') >=0 || pathName.indexOf('/oculos/oculos-de-sol/infantil') >=0) {
			    $('.sr_oculos-de-grau').hide();
			}
			if(pathName.indexOf('/oculos/oculos-de-grau') >= 0 || pathName.indexOf('/oculos/oculos-de-grau/feminino') >=0 || pathName.indexOf('/oculos/oculos-de-grau/masculino') >=0 || pathName.indexOf('/oculos/oculos-de-grau/infantil') >=0){
				$('.sr_oculos-de-sol').hide();
			}
    }
    PFTX.pages.catalog.ajaxStop = function() {
    }

})(jQuery, window, document);

(function( $, window, document, undefined ) {

'use strict';

PFTX.pages.category = new PFTX.constructor.page( 'categoria' );

PFTX.pages.category.DOMReady = function() {

};

})( jQuery, window, document );
(function($, window, document, undefined) {

    'use strict';

    PFTX.pages.common = new PFTX.constructor.page('common');


    PFTX.pages.common.menuDeslizante = function (){
		$('.nav__item').mouseenter(function(){
	      $('.submenu', this).stop(true, true).slideDown()
	    })
	    $('.nav__item').mouseleave(function(){
	      $('.submenu', this).stop(true, true).hide()
	    })
    }

    PFTX.pages.common.economiadeaVista = function() {
        $(".prateleira-padrao li").each(function() {

            // PREÇO À VISTA
            var a = $(this).find(".prateleira__preco").text();
            a = a.replace("R$", "").replace(".", ""), a = parseFloat(a.replace("R$", "").replace(",", "."));
            var b = .95,
                c = a * b,
                d = c.formatMoney(2, ",", ".");
            $(this).find(".a-vista").html('ou R$ <strong>' + d + '</strong> à vista no cartão de crédito');

            // CALCULA O DESCONTO DA ECONOMIA E INSERE
            if ($('.prateleira__preco-de', this).text() != '') {

                var por = $(this).find(".prateleira__preco").text();
                var de = $(this).find(".preco-de-ativo").text();

                por = por.replace("R$", "").replace(".", ""), por = parseFloat(por.replace("R$", "").replace(",", "."));
                de = de.replace("R$", "").replace(".", ""), de = parseFloat(de.replace("R$", "").replace(",", "."));

                var result = de - por,
                    d = result.formatMoney(2, ",", ".");

                $(this).find(".preco-de-ativo").after('<span class="economia">Parabéns! Economia de R$ ' + d + '</span>');
            }
        })
    }

    PFTX.pages.common.brandsMenu = function() {
        $('.nav__item').on('hover', function() {
            $(this).find('.submenu__brands').each(function(brands) {
                var marcasQty = $(this).find('a').length;
                marcasQty = marcasQty + 1;
                var outW = $(this).width();
                var calcW = outW / marcasQty
                calcW = calcW + 'px';
                console.log(calcW);
                $(this).find('a').css({
                    'width': calcW
                });
            });
        });
    }

    PFTX.pages.common.openMenu = function (){
		$('.header__sandwich').on('click', function() {
			$('.mobile__menu').toggleClass('active');
			$('.mobile__overlay').show();
		});

		$('.mobile__overlay').on('click', function() {
			$('.mobile__menu').removeClass('active');
			$(this).hide();
		});
		$('.mobile__close').on('click', function() {
			$('.mobile__menu').removeClass('active');
			$('.mobile__overlay').hide();
		});
    }

    PFTX.pages.common.openSubmenuMobile = function(){
	    $('.mobile__item').on('click', function(e) {
	      $(this).find('.mobile__sub').slideToggle();
	      $(this).toggleClass('active');
	    });
	    $('.mobile__link').on('click', function(e){
	      e.preventDefault();
	    });
    }

    PFTX.pages.common.envioEmailfooter = function() {
        $('.news__submit').on('click', function(e) {
            e.preventDefault();
            var nMail = $('.news__mail').val();
            var nGender = $(this).text();

            function validateEmail(email) {
                var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                return re.test(email);
            }
            if (validateEmail(nMail)) {
                $('.news__mail').removeClass('error');
                var jsonData = {
                    "email": nMail,
                    "genero": nGender,
                };

                $.ajax({
                    url: 'https://api.vtexcrm.com.br/oculosofficina7/dataentities/NT/documents/',
                    dataType: 'json',
                    type: 'PATCH',
                    crossDomain: true,
                    data: JSON.stringify(jsonData),
                    headers: {
                        'Accept': 'application/vnd.vtex.ds.v10+json',
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    success: function(data) {
                        $('.footer__news').html('<span class="sucesso">Email cadastrado!</span>');
                    }
                });
            } else {
                $('.news__mail').addClass('error');
            }
        });
    }

    PFTX.pages.common.footerMobile = function() {
    	var mobileBreak = 425;
		var tabletBreak = 768;
        if ($('body').width() <= mobileBreak) {
            $('.footer__title').on('click', function() {
                $('.footer__list').not($(this).next('.footer__list')).slideUp();
                $('.footer__list').not($(this).next('.footer__list')).removeClass('active');
                $(this).next('.footer__list').slideToggle();
                $(this).toggleClass('active');
            });
        }
    }

    PFTX.pages.common.discountHighlight = function() {
        $('.prateleira-padrao li').each(function() {
            if ($(this).find('.preco-de-ativo').length) {
                // Pegando e tratando valores
                var precoDe = $(this).find('.preco-de-ativo').text();
                var precoPor = $(this).find('.prateleira__preco').text();
                precoPor = precoPor.replace('R$', '').replace('.', '');
                precoPor = parseFloat(precoPor.replace('R$', '').replace(',', '.'));
                precoDe = precoDe.replace('R$', '').replace('.', '');
                precoDe = parseFloat(precoDe.replace('R$', '').replace(',', '.'));
                var pctg = Math.floor(((precoPor / precoDe) * 100) - 100) + '%';
                $(this).append('<span class="percent-discount">' + pctg + '</span>');
            }
        });
    }

    PFTX.pages.common.shelfPrices = function() {
        $('.prateleira-padrao li').each(function() {
            // if($(this).find('.preco-de-ativo').length) {
            //   // Pegando e tratando valores
            //   var precoDe = $(this).find('.preco-de-ativo').text();
            //   var precoPor = $(this).find('.prateleira__preco').text();
            //   precoPor = precoPor.replace('R$','').replace('.','');
            //   precoPor = parseFloat(precoPor.replace('R$','').replace(',','.'));
            //   precoDe = precoDe.replace('R$','').replace('.','');
            //   precoDe = parseFloat(precoDe.replace('R$','').replace(',','.'));
            //   var pct = Math.floor( (precoPor / precoDe) * 100);
            //   console.log(pct);
            //   pct = 100 - pct;
            //   pct = pct + '%';
            //   $(this).append('<span class="percent-discount">' + pct + '<span class="percent-off">OFF</span></span>');
            // }
            // Novo preço de produto
            var currentPrice = $(this).find('.prateleira__preco').text();
            currentPrice = currentPrice.replace('R$', '').replace('.', '');
            currentPrice = parseFloat(currentPrice.replace('R$', '').replace(',', '.'));
            var discountPercent = 0.95;
            var discountPrice = currentPrice * discountPercent;
            var finalPrice = discountPrice.formatMoney(2, ',', '.');
            var parcelText = 'R$ ' + $(this).find('.prateleira__preco').text();;
            $(this).find('.prateleira__preco').text('R$' + finalPrice);


            // Montando valor parcelado.
            // if($(this).find('.'))
            // $(this).find('.prateleira__preco-por').after('<span class="prateleira__preco-parcelado"></span>')
            // $(this).find('.prateleira__preco-parcelado').html('<span class="prateleira__preco-parcelas">ou '+ currentPrice +' em até 6x s/ juros</span>');
            // var newText = $(this).find('.prateleira__preco-parcelas').text().replace(/(R\$ \d*\,\d{2})/g, parcelText);
            // $(this).find('.prateleira__preco-parcelas').text(newText);

        });
    }

    PFTX.pages.common.shelfThumbs = function() {
        //$('.prateleira-padrao li').one('mouseover', function() {
        $('.prateleira-padrao li').each(function() {
            var Idproduto = $(this).find('.prod-id').text();
            var liOver = $(this);

            vtexjs.catalog.getProductWithVariations(Idproduto).done(function(product) {
                if ($(this).find('.thumbsCor').length == 0) {
                    liOver.find('.data').append('<ul class="thumbsCor"></ul>');
                    if (product.dimensionsMap.Cor) {
                      for (var a = 0; a < product.dimensionsMap.Cor.length; a++) {
                          var CorNome = product.dimensionsMap.Cor[a];
                          CorNome2 = CorNome.replace('/', '-');
                          // console.log('CorNome:' + CorNome);
                          // console.log('CorNome2:' + CorNome2);
                          var thumbImg;

                          for (x = 0; x < product.skus.length; x++) {
                              if (product.skus[x].dimensions.Cor == CorNome) {
                                  thumbImg = product.skus[x].image.replace('-875-700', '-425-340');
                              }
                          }
                          liOver.find('.thumbsCor').append('<li class="' + CorNome2 + ' thumbSku" data-thumb-img="' + thumbImg + '"></li>')
                      }
                    }
                }
            });
        });

        $('.thumbSku').live('click', function() {
            var ImgThumb = $(this).attr('data-thumb-img');
            $(this).parent().parent().parent().find('.prateleira__imagem img').attr('src', ImgThumb);
            $('.thumbSku').not($(this)).removeClass('active')
            $(this).addClass('active');
        });
    }

    PFTX.pages.common.priceDiscount = function() {
        var currentPrice;
        var attrPrice = $('.valor-por').find('.skuBestPrice').attr('data-full-value');

        if (typeof attrPrice !== typeof undefined && attrPrice !== false) {
            currentPrice = $('.valor-por').find('.skuBestPrice').attr('data-full-value');
        } else {
            currentPrice = $('.valor-por').find('.skuBestPrice').text();
            currentPrice = currentPrice.replace('R$', '').replace('.', '');
            currentPrice = parseFloat(currentPrice.replace('R$', '').replace(',', '.'));
            $('.valor-por').find('.skuBestPrice').attr('data-full-value', currentPrice);
        }

        var discountPercent = 0.95;
        var discountPrice = currentPrice * discountPercent;
        var finalPrice = discountPrice.formatMoney(2, ',', '.');
        $('.valor-por').find('.skuBestPrice').html('<small>R$ </small>' + finalPrice);
    }

    PFTX.pages.common.installmentsVal = function() {
        if ($('.avista-cartao').length > 0 && $('.installments-text').length > 0) {
            $('.avista-cartao').remove();
            $('.installments-text').remove();
        }
        var installments = $('.skuBestInstallmentNumber').text();
        var installmentsPrice = $('.skuBestInstallmentValue').text();
        $('.descricao-preco').append('<span class="avista-cartao">à vista no cartão de crédito(1x)</span><span class="installments-text">ou em até <strong>' + installments + '</strong> de <strong>' + installmentsPrice + '</strong> s/ juros.</span>');
    }

    PFTX.pages.common.breaks = function(){
        if($('body').width() > mobileBreak) {
          PFTX.pages.common.sliderThumb();
        }

        window.setInterval(function() {
          PFTX.pages.common.installmentsVal();

          // Desconto de 5% no preço a vista
          //PFTX.pages.common.priceDiscount();
        }, 1000);
    }

    PFTX.pages.common.desconto = function() {
        var a, b = $(".preco-a-vista").find(".skuPrice").attr("data-full-value");
        "undefined" != typeof b && b !== !1 ? a = $(".preco-a-vista").find(".skuPrice").attr("data-full-value") : (a = $(".preco-a-vista").find(".skuPrice").text(), a = a.replace("R$", "").replace(".", ""), a = parseFloat(a.replace("R$", "").replace(",", ".")), $(".preco-a-vista").find(".skuPrice").attr("data-full-value", a));
        var c = .95,
            d = a * c,
            e = d.formataMoeda(2, ",", ".");
        $(".preco-a-vista").find(".skuPrice").html("<small>R$ </small>" + e)
    }

    PFTX.pages.common.medidas = function() {
        var d = '<img src="/arquivos/img-espec-oculos-de-sol.jpg" width="50%" />';
        $(".container-especificacao").prepend(d);
        var e = [];
        e[0] = $(".value-field.Largura-da-Lente").text() + " cm",
            e[1] = $(".value-field.Ponte").text() + " cm",
            e[2] = $(".value-field.Altura-da-Lente").text() + " cm",
            e[3] = $(".value-field.Largura").text() + " cm",
            e[4] = $(".value-field.Comprimento-da-Haste").text() + " cm";
        for (var f = 0; f < e.length; f++)
            $(".container-especificacao").append('<span class="texto-' + f + '">' + e[f] + "</span>");
    };

    PFTX.pages.common.envioImediato = function() {
        if ($('.buy-button.buy-button-ref').is(':visible') == true) {
            $('.buy-button.buy-button-ref').after('<span class="disponivel">Produto disponÃ­vel para envio imediato</span>');
        }
    }

    PFTX.pages.common.escondeParcela = function() {
        if ($('.sku-notifyme').is(':visible') == true) {
            $('.x-parcel').remove();
        }
    };

    PFTX.pages.common.parcelamento = function() {
        var preco = $('.skuPrice').text();
        $('.other-payment-method-content li:first').html('Ã  vista ' + preco);
        $('.x-parcel > strong').on('click', function() {
            $('.other-payment-method-content').slideToggle();
        })
    };

    PFTX.pages.common.display2Img = function() {

        setTimeout(function() {

            $('.prateleira__imagem_hover').each(function(){

                //console.log($(this).children().length);
                if($(this).children().length == 0){
                    $(this).siblings('img').addClass('notImg2');
                }
            })

        }, 100);
    };

    PFTX.pages.common.openSearch = function (){
    	$('.header__search').on('click', function() {
	 		$('.header__autocomplete').toggle();
	 	});
	 	$('.fulltext-search-box').on('focus', function() {
      		$('.header__autocomplete').addClass('bigger');
    	});
	    $('.fulltext-search-box').on('blur', function() {
	      $('.header__autocomplete').removeClass('bigger');
		});
    	$('.header__autocomplete').find('.busca').prepend('<span class="close-search">Fechar X</span>');
	    $('.close-search').on('click', function() {
	      $('.header__autocomplete').toggle();
	    });
    };

    PFTX.pages.common.textoApoioSeo = function (){
        if($('#textoSeo')){
            
            var descricaoDoProduto = $('#textoSeo');
            
            var conteudoDescricao = descricaoDoProduto.html();
            
            if(descricaoDoProduto.length == 1){
            
                if(conteudoDescricao.length > 270){
                    
                    $( "<p class='showMoreDescription'>Leia +</p>" ).insertAfter( '#textoSeo' );
                    $('.showMoreDescription').on('click', function(){
                                
                        $('#textoSeo').toggleClass('showDesc');
                        $('#textoSeo').toggleClass('moreLessIcon');
                                    
                                    
                        $.fn.extend({
                            toggleText: function(a, b){
                                return this.text(this.text() == b ? a : b);
                            }
                        });	
                
                        $(".showMoreDescription").toggleText('Leia +', 'ler -');
                               
                    });        
                }
            }
        }
    };

    PFTX.pages.common.miniaturaSkuProdutoSimilarApi = function (){
        
        /* remove duplicado */
        $.fn.removeDuplicates = function() {
            var original = [];

            this.each(function() {
              var el = this, $el, isDuplicate;

              $.each(original, function() {
                $el = $(el);

                // check whichever properties 
                // you believe determine whether 
                // it's a duplicate or not
                if (el.tagName === this.tagName && 
                    el.className === this.className && 
                    el.id === this.id && 
                    el.value === this.value && 
                    el.href === this.href && 
                    $el.html() === $(this).html()) {
                  isDuplicate = true;
                  $el.remove();
                }
              });

              if (!isDuplicate) {
                original.push(el);
              }
            });
          };

        $(".miniaturaProduto").remove();

        //if(location.search == "?profite_dev=true"){
        	//$("body").addClass("profiteDev");
            $(".prateleira-padrao li .list_product").each(function(){

                var itemVitrine = $(this);

                var idProduto = $(itemVitrine).find(".prod-id").text();

                var tituloItem = $(this).find(".prateleira__preco-parcelado");
                var tituloItem = $(this).find(".prateleira__preco-de");
                
                $("<div class='miniaturaProduto jorge'>").insertBefore(tituloItem);                

                var urlProdSimilar = "/api/catalog_system/pub/products/crossselling/similars/"+ idProduto;
                //var uniqueProdSimilar = [];
                $.ajax({
                    url: urlProdSimilar,
                    type: "GET",
                    success: function(data) {
                        
                        $(itemVitrine).find(".miniaturaProduto").append("<span class='similarLoad'></span>")
                        $(data).each(function(idx, val){

                            var _that = this;
                            var tableSimilares = [];

                            /* usar map future */
                            $(val['Cor da Armação']).each(function(u, armItem){                                
                                
                                tableSimilares.push(armItem);
                                                              
                            });

                            /* gnna */
                            if(tableSimilares.length === 2){

                                var similarSkuCorName = tableSimilares[0].toLowerCase() + '-' + tableSimilares[1].toLowerCase();
                                
                                var simiUrlImg = _that.items[0].images[0].imageUrl;
                                var simiUrlProduto = _that.link;
                                var simiThumb = "<img src='" + simiUrlImg + "' />";
                                
                                if(similarSkuCorName) {
                                    if( window.screen.width > 768 ){
                                        var ItemSimilar = "<li class='icon-thumb-similarList '><a class='thickbox icon-thumb-similar " + similarSkuCorName + "' href='/quick-view/?idproduto=" + _that.productId + "&KeepThis=true&TB_iframe=true'></a></li>";
                                        $(itemVitrine).find(".miniaturaProduto").append( ItemSimilar ).addClass("esperaCarregar");
                                    
                                    }else{
                                        var ItemSimilar = "<li class='icon-thumb-similarList '><a class='icon-thumb-similar " + similarSkuCorName + "' href='"+ _that.link +"'></a></li>";
                                        $(itemVitrine).find(".miniaturaProduto").append( ItemSimilar ).addClass("esperaCarregar");    
                                    }          
                                }

                            }else if(tableSimilares.length === 1){

                                var similarSkuCorName2 = tableSimilares[0].toLowerCase();                               

                                var simiUrlImg = _that.items[0].images[0].imageUrl;
                                var simiUrlProduto = _that.link;
                                var simiThumb = "<img src='" + simiUrlImg + "' />";

                                if( !similarSkuCorName2 === undefined ){
                                
                                    if( window.screen.width > 768 ){

                                        var ItemSimilar = "<li class='icon-thumb-similarList '><a class='thickbox icon-thumb-similar " + similarSkuCorName + "' href='/quick-view/?idproduto=" + _that.productId + "&KeepThis=true&TB_iframe=true'></a></li>";
                                        $(itemVitrine).find(".miniaturaProduto").append( ItemSimilar ).addClass("esperaCarregar");
                                    
                                    }else{

                                        var ItemSimilar = "<li class='icon-thumb-similarList '><a class='icon-thumb-similar " + similarSkuCorName + "' href='"+ _that.link +"'></a></li>";
                                        $(itemVitrine).find(".miniaturaProduto").append( ItemSimilar ).addClass("esperaCarregar");    
                                    }

                                }                    

                            }
                                                      
                            var tableSimilares = [];  
                 
                        });
                    },

                    complete: function(){

                        setTimeout(function(){
                            
                            $(".miniaturaProduto").removeClass("esperaCarregar");                                           
                            
                            $(".similarLoad").remove();                          
                                            
                        }, 2500);
                        
                    }
                });
            });
        //}   
    };

    PFTX.pages.common.sliderFotoQuickView = function(){
        
        if( $("#productQuickView").length > 0 ){
            if( $("#productQuickView .thumbs li").length > 4 ){
                $("#productQuickView .thumbs").slick({
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3
                });
            }
        } 
        
    }
    PFTX.pages.common.linkVitrineMobile = function(){
        setTimeout(function(){
            if(window.screen.with < 768 ){
                if(".prateleira-padrao"){
                    $(".prateleira-padrao li").each(function(){
                        var cloneUrl = $(this).find(".quickView").children('a');
                        $(this).find(".quickView").children('a').remove();
                        $(this).find(".quickView").append(cloneUrl).removeClass('quickView');
                    });
                }            
            }
        }, 3000);
    }

    PFTX.pages.common.DOMReady = function() {
        PFTX.pages.common.menuDeslizante();
        PFTX.pages.common.economiadeaVista();
        PFTX.pages.common.brandsMenu();
        PFTX.pages.common.openMenu();
        PFTX.pages.common.openSubmenuMobile();
        PFTX.pages.common.envioEmailfooter();
        PFTX.pages.common.footerMobile();

        PFTX.pages.common.miniaturaSkuProdutoSimilarApi();

        /* correcao no quickview provisorio mobile */
        PFTX.pages.common.linkVitrineMobile();
        //PFTX.pages.common.sliderFotoQuickView();

        //PFTX.pages.common.discountHighlight();
        //PFTX.pages.common.shelfPrices();

        //PFTX.pages.common.shelfThumbs();

        //PFTX.pages.common.priceDiscount();
        //PFTX.pages.common.desconto();

        PFTX.pages.common.medidas();
        PFTX.pages.common.envioImediato();
        PFTX.pages.common.escondeParcela();
        PFTX.pages.common.display2Img();
        PFTX.pages.common.openSearch();

        /**/
        
        

        PFTX.pages.common.textoApoioSeo();

        

       // $('.prateleira-padrao ul').on('init', function(event, slick, direction){
            //alert("testing inicio do slider!");
            //PFTX.pages.common.miniaturaSkuProdutoSimilar();
            //console.log("miniatura similar!!!");
        //});
          
        // EXIBE O CALCULAR FRETE
        $('.shipping-value').trigger("click");
        $('#image').append( $('.flag-colecao') );

        
    }

})(jQuery, window, document);


$(document).ready(function() {

    var mobileBreak = 425;
    var tabletBreak = 768;

    $('.helperComplement').remove();
    if($('body').width() <= 1024 && $('body').width() > mobileBreak) {
      $('.produto-imagem').append($('.produto-descricao'));
    }
    (function(d) {
        var
            ce = function(e, n) {
                var a = document.createEvent("CustomEvent");
                a.initCustomEvent(n, true, true, e.target);
                e.target.dispatchEvent(a);
                a = null;
                return false
            },
            nm = true,
            sp = { x: 0, y: 0 },
            ep = { x: 0, y: 0 },
            touch = {
                touchstart: function(e) { sp = { x: e.touches[0].pageX, y: e.touches[0].pageY } },
                touchmove: function(e) {
                    nm = false;
                    ep = { x: e.touches[0].pageX, y: e.touches[0].pageY }
                },
                touchend: function(e) {
                    if (nm) { ce(e, 'fc') } else {
                        var x = ep.x - sp.x,
                            xr = Math.abs(x),
                            y = ep.y - sp.y,
                            yr = Math.abs(y);
                        if (Math.max(xr, yr) > 20) { ce(e, (xr > yr ? (x < 0 ? 'swl' : 'swr') : (y < 0 ? 'swu' : 'swd'))) }
                    };
                    nm = true
                },
                touchcancel: function(e) { nm = false }
            };
        for (var a in touch) { d.addEventListener(a, touch[a], false); }

    })(document);

    Number.prototype.formatMoney = function(c, d, t) {
        var n = this,
            c = isNaN(c = Math.abs(c)) ? 2 : c,
            d = d == undefined ? "." : d,
            t = t == undefined ? "," : t,
            s = n < 0 ? "-" : "",
            i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
            j = (j = i.length) > 3 ? j % 3 : 0;
        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    };

    if($('.bread-crumb li').eq(2).text().indexOf('de sol') >= -1) {
      var imgEspec = '<img src="/arquivos/img-espec-oculos-de-sol.jpg" width="50%" />';
      $('.container-especificacao').prepend(imgEspec);

      var textos = [];
      textos[0] = $('.value-field.Largura-da-Lente').text() + ' cm';
      textos[1] = $('.value-field.Ponte').text() + ' cm';
      textos[2] = $('.value-field.Altura-da-Lente').text() + ' cm';
      textos[3] = $('.value-field.Largura').text() + ' cm';
      textos[4] = $('.value-field.Comprimento-da-Haste').text() + ' cm';
      for(var i = 0; i < textos.length; i++) {
        $('.container-especificacao').append('<span class="texto-'+i+'">'+textos[i]+'</span>');
      };
    }

        $('.topic.Cor .specification').text('Cor: Armação/Lente');
        $('.sku-selector-container .specification').on('click', function() {
            $('.skuList').not($(this).siblings('.skuList')).slideUp();
            $(this).siblings('.skuList').slideToggle();
        });

        $('.sku-selector-container label').on('click', function() {
            $('.skuList').slideUp();
            var texto = $(this).text();
            $(this).parent().parent().siblings('.specification').html($(this).clone());
        });

        $(function(){

            // INSERE QUANTIDADE DE ITENS NO CARRINHO
            
                setTimeout(function(){
                    if( vtexjs.checkout.orderForm.items != null ){
                        var a = vtexjs.checkout.orderForm.items.length,
                        b = a;
                        a > 9 && (b = "9+"), $(".header__mini-cart").attr("cart-qty", b);
                    }
                }, 4000);           
            

            // EXIBE O SKU NO NA PÃGINA DE LENTES
            skuLentes = function(){
                $(".sku-selector-container .specification").on("click", function() {
                    $(this).siblings(".skuList").slideToggle()
                })
                $(".sku-selector-container label").on("click", function() {
                    $(".skuList").slideUp();
                    $(this).text();
                    $(this).parent().parent().siblings(".specification").html($(this).clone())
                })
            }
            if($('body.lente').length){
                skuLentes();
            }

        });

    console.log("Officina 7 - Similares v0.022");
    
});


$(document).ajaxStop(function() {  
    qtyCart = function() {

        setTimeout(function(){

            if( vtexjs.checkout.orderForm.items != null ){
                
                var qty = vtexjs.checkout.orderForm.items.length;
                var text = qty;
                
                if(qty > 9) {
                    text = '9+';
                }

                $('.header__mini-cart').attr('cart-qty', text);

            }

        }, 4000);

    };

    cartFix = function() {
        $('.vtexsc-cart').addClass('minicart-content').removeClass('v2-vtexsc-cart vtexsc-cart mouseActivated preLoaded');
    };

    cartFix();

    if($('body').hasClass('produto')){
        $('.produto-categoria').text('Categoria: '+dataLayer[0].productCategoryName);
    }

    

});

(function($, window, document, undefined) {

    'use strict';

    PFTX.pages.department = new PFTX.constructor.page('page-department');
	

    PFTX.pages.department.DOMReady = function() {
    };

})(jQuery, window, document);

(function($, window, document, undefined) {

    'use strict';

    PFTX.pages.estilo = new PFTX.constructor.page('guia-de-estilo');

    PFTX.pages.estilo.faceType = function() {
        $('.saiba-mais').on('click', function(event) {
            event.preventDefault();
            var target = $(this).attr('data-formato');
            $('.section-rosto').each(function() {
                $(this).hide();
                if ($(this).hasClass(target)) {
                    $(this).show();
                    $(this).find('.prateleira .prateleira-padrao').find('ul').slick({
                        slide: 'li',
                        dots: false,
                        arrows: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        responsive: [{
                            breakpoint: tabletBreak,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        }, {
                            breakpoint: mobileBreak,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }]
                    }); // Fecha Slick
                } // Fecha if do Target
            })
        })
    }

    PFTX.pages.estilo.DOMReady = function() {
        PFTX.pages.estilo.faceType();
    };

})(jQuery, window, document);
(function($, window, document, undefined) {

    'use strict';

    PFTX.pages.home = new PFTX.constructor.page('home');


    PFTX.pages.home.shelfSliders = function(){
    	var mobileBreak = 425;
		var tabletBreak = 768;

		if($('body').width() > tabletBreak){
			$('.shelf-best-sellers ul, .shelf-promocoes ul').slick({
				slide: 'li',
				dots: false,
				arrows: true,
				slidesToShow: 3,
				slidesToScroll: 1
			});

			$('.prateleira__1-produto ul').slick({
				slide: 'li',
				dots: false,
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1
			});	

			$('.shelf-lentes ul').slick({
				slide: 'li',
				dots: false,
				arrows: true,
				slidesToShow: 4,
				slidesToScroll: 1
			});	
		     $('.brand-shelf').slick({
		       	slide: '.box-banner',
		        dots: false,
		        arrows: true,
		        slidesToShow: 5,
		        slidesToScroll: 1
		    });					
		}

		if($('body').width() <= mobileBreak){
			$('.shelf-best-sellers ul, .shelf-promocoes ul, .prateleira__1-produto ul, .prateleira__2-produtos ul, .shelf-lentes ul').slick({
				slide: 'li',
				dots: false,
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1
			});
		     $('.brand-shelf').slick({
		        slide: '.box-banner',
		        dots: false,
		        arrows: true,
		        slidesToShow: 1,
		        slidesToScroll: 1
		    });			
		}

		if($('body').width() > mobileBreak && $('body').width() <= tabletBreak){
			$('.shelf-best-sellers ul, .shelf-promocoes ul, .prateleira__1-produto ul, .prateleira__2-produtos ul, .shelf-lentes ul').slick({
				slide: 'li',
				dots: false,
				arrows: true,
				slidesToShow: 2,
				slidesToScroll: 1
			});
			$('.brand-shelf').slick({
		        slide: '.box-banner',
		        dots: false,
		        arrows: true,
		        slidesToShow: 2,
		        slidesToScroll: 1
			});
			$('.shelf-best-sellers ul, .shelf-promocoes ul, .prateleira__1-produto ul, .prateleira__2-produtos ul, .shelf-lentes ul').on('init', function(event, slick){
				
				//PFTX.pages.common.miniaturaSkuProdutoSimilar();
			});	

			$('.brand-shelf').on('init', function(event, slick){
				
				//PFTX.pages.common.miniaturaSkuProdutoSimilar();
			});	
			
		}

    };

    PFTX.pages.home.bannerSlider = function(){
		$('.home-slider').slick({
			slide: '.box-banner',
			dots: true,
			arrows: false,
      		autoplay: true,
      		autoplaySpeed: 2000
		});

		$('.home-mobile-slider').slick({
			slide: '.box-banner',
			dots: true,
			arrows: false,
		      autoplay: true,
		      autoplaySpeed: 2000
		});
	};

	PFTX.pages.common.validarEmail = function(email){
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	};
	
	PFTX.pages.common.modalOptinHome = function (){
		
		//if(location.search == "?profite=habilitaMocal"){
			var cookieModalOptIn1 = $.cookie('modalDesconto');

			if(cookieModalOptIn1 != 'modalInativo'){
				$.cookie('modalDesconto','modalAtivo', {expires: 7, path:'/'});
			}
			

			var cookieModalOptIn = $.cookie('modalDesconto');

			if(cookieModalOptIn == "modalAtivo"){
				
			
				var foxtonMensageModal = '<div id="officina7MensageModal"><div class="content"><span class="modalClose">x</span><div class="off7MidalBanner"><span></span></div><div class="modalTitle"><h3> quer dar um up no visual?</h3><h4>a gente é mara e nossas promoções são incríveis!</h4><div class="clientAction"><p> se inscreve aqui.</p><input id="off7Nome" type="text" placeholder="nome"/><input id="off7Email" type="text" placeholder="email"/><div class="off7Genero"><span>mulher</span><span>homem</span></div></div></div></div><em class="close-overlay"></em></div>';                          
				

				$('body').prepend(foxtonMensageModal);
				$('body').addClass('modalOpen');

				$(".modalClose").on('click', function(){
					$("#officina7MensageModal").remove();
					$('body').removeClass('modalOpen');
					$.cookie('modalDesconto','modalInativo', {expires: 7, path:'/'});
				});
				
				$(".close-overlay").on('click', function(){
					$("#officina7MensageModal").remove();
					$('body').removeClass('modalOpen');
					$.cookie('modalDesconto','modalInativo', {expires: 7, path:'/'});
				});

				//setTimeout(function(){
					//$("#cruzeiroMensageModal").remove();
					//$('body').removeClass('modalOpen');
				//}, 10000);

				//alert("habilitei o modal da home");

				//acao para validar antes de enviar ao MD
				$(".off7Genero span").each(function(){
					$(this).on('click', function(){
						

						if($('#off7Nome').val() === ''){

							$("#off7Nome").attr("placeholder", "Erro: Ops! Algo deu errado =(");
							$('#off7Nome').addClass("Off7Error");

							/*setTimeout(function(){
								$('#off7Nome').removeClass("Off7Error");
							}, 3000);*/

						}else if($('#off7Email').val() === ''){

							
							$('#off7Email').addClass("Off7Error");

							$("#off7Email").attr("placeholder", "Erro: Ops! Algo deu errado =(");

							/*setTimeout(function(){
								$('#off7Email').removeClass("Off7Error");
							}, 3000);*/

						}else if(!PFTX.pages.common.validarEmail($("#off7Email").val())){
							$('#off7Email').addClass("Off7Error");
							
							$("#off7Email").val("");
							$("#off7Email").attr("placeholder", "Erro: Ops! Algo deu errado =(");
							
							$("#inputEmail").css('border-bottom','1px solid #FF8080');
							$("#inputEmail").addClass("news-error");
							
						}else{
							
							var dados    = {};
							dados.nome   = $("#off7Nome").val();
							dados.email  = $("#off7Email").val();
							dados.genero = $(this).text();					
					
							$.ajax({
								accept: 'application/vnd.vtex.ds.v10+json',
								contentType: 'application/json; charset=utf-8',
								crossDomain: true,
								data: JSON.stringify(dados),
								type: 'PATCH',
								url: '//api.vtexcrm.com.br/oculosofficina7/dataentities/OP/documents',
								success: function(data) {
									console.log(data);
									var charEsp = '\s/'
									$(".clientAction").empty().append('<div class="send-success"><h2>Sucesso: Parabéns! Seu e-mail foi cadastradooo \\o/</h2></div>');

									$.cookie('modalDesconto','modalInativo', {expires: 7, path:'/'});
									
								}
							});
						}
					});
				});
			};

		//}
	};

    
    PFTX.pages.home.DOMReady = function() {
    	//PFTX.pages.common.miniaturaSkuProdutoSimilarApi();
    	PFTX.pages.home.shelfSliders();
		PFTX.pages.home.bannerSlider();

		PFTX.pages.common.modalOptinHome();
    };

})(jQuery, window, document);

(function( $, window, document, undefined ) {

    'use strict';

    PFTX.pages.institucional = new PFTX.constructor.page( 'institucional' );

    PFTX.pages.institucional.mobileLink = function(){
    	var mobileBreak = 425;
		var tabletBreak = 768;
		if($('body').width() <= mobileBreak) {
			$('.institucional__link').each(function() {
				var $url = $(this).attr('data-url');
				if(window.location.href.indexOf($url) > -1) {
					$(this).addClass('active').removeAttr('href');
					$(this).appendTo('.institucional__box-info');
				}
			});

			$('.institucional__box-info').on('click', function() {
				$('.institucional__link-box').slideToggle();
				$(this).toggleClass('active')
			});

			$('.institucional__link-box .institucional__link').on('click', function() {
				$('.institucional__link-box').slideUp();
				$('.institucional__box-info').removeClass('active');
			});
		}    	
    }
    PFTX.pages.institucional.envioEmail = function() {
        $('.central-enviar').on('click', function(e) {
            e.preventDefault();
            var cNome = $('.central-nome').val();
            var cMail = $('.central-email').val();
            var cAssunto = $('.central-assunto').val();
            var cMensagem = $('#mensagem').val();

            function validateEmail(email) {
                var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                return re.test(email);
            }
            if (validateEmail(cMail)) {
                $('.central-form').find('.erro').remove();
                var jsonData = {
                    "nome": cNome,
                    "email": cMail,
                    "assunto": cAssunto,
                    "mensagem": cMensagem
                };

                $.ajax({
                    url: 'https://api.vtexcrm.com.br/oculosofficina7/dataentities/FC/documents/',
                    dataType: 'json',
                    type: 'PATCH',
                    crossDomain: true,
                    data: JSON.stringify(jsonData),
                    headers: {
                        'Accept': 'application/vnd.vtex.ds.v10+json',
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    success: function(data) {
                        $('.central-form').prepend('<span class="sucesso">Mensagem enviada, em breve entraremos em contato.</span>');
                    }
                });
            } else {
                $('.central-form').prepend('<span class="error">Digite um email válido.</span>');
            }
        });
    }

    PFTX.pages.institucional.DOMReady = function() {
    	PFTX.pages.institucional.mobileLink();	
    	PFTX.pages.institucional.envioEmail();
    };

})( jQuery, window, document );
(function($, window, document, undefined) {

    'use strict';

    // Instanciando o objeto PRODUTO
    PFTX.pages.product = new PFTX.constructor.page('produto');

    PFTX.pages.product.toggleDescricao = function (){
		$('.notifyme-button-ok').val('Enviar');
		$('.aba-toggle').on('click', function() {
      		if($('body').width() <= 1024) {
        		var target = '.' + $(this).attr('data-target');
		        $(this).after($(target));
		        $('.aba-toggle').not($(this)).removeClass('active');
		        $('.produto-descricao div[class*="container-"]').not($(target)).slideUp();
		        $(this).addClass('active');
		        $(target).slideToggle();

      		} else {
	  			var target = '.' + $(this).attr('data-target');
	  			$('.aba-toggle').not($(this)).removeClass('active');
	  			$('.produto-descricao div[class*="container-"]').not($(target)).slideUp();
	  			$(this).addClass('active');
	  			$(target).slideToggle();
      		}
      		$('.aba-toggle').eq(0).trigger('click');
		});
    }

    PFTX.pages.product.sliderThumb = function(){
    	if($('.thumbs li').length > 4) {
			$('.thumbs').addClass('bigger');
			$('.thumbs ul').slick({
				slide: 'li',
				dots: false,
				arrows: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true,
          		centerMode: true
			});
		}
    }

    PFTX.pages.product.sliderMobile = function() {
      // Contando thumbs :D
      var thumbs = $('.thumbs li').length;
      var i = 0;
      if(!thumbs <= 1) {
        // Montando Setinhas :D
        $('#include #image').append('<span class="next"></span>');
        $('#include #image').prepend('<span class="prev"></span>');
      }

      $('#image').find('.prev').on('click', function() {

        if(i <= 0) {
          i = thumbs;
        }

        $('.thumbs li').eq(i).find('a').trigger('click');
        // $('#image-main').attr('src', img);
        // console.log(img);
        i = i - 1;
        console.log(i);
      });

      $('#image').find('.next').on('click', function() {

        if(i >= thumbs) {
          i = 0;
        }

        $('.thumbs li').eq(i).find('a').trigger('click');
        // console.log(img);
        // $('#image-main').attr('src', img);
        i = i + 1;
        console.log(i);
      });
      // Evento de Swipe pra Direita
      $('#image').on('swr', function(){
        if(i >= thumbs) {
          i = 0;
        }

        $('.thumbs li').eq(i).find('a').trigger('click');
        // console.log(img);
        // $('#image-main').attr('src', img);
        i = i + 1;
        console.log(i);
      });

      // Evento de Swipe para a Esquerda
      $('#image').on('swl', function(){
        if(i <= 0) {
          i = thumbs;
        }

        $('.thumbs li').eq(i).find('a').trigger('click');
        // $('#image-main').attr('src', img);
        // console.log(img);
        i = i - 1;
        console.log(i);
      });
    }

    PFTX.pages.product.produtoKit = function() {
        if ($('body').hasClass('produto-kit')) {
            // Função para atualizar o valor total
            function atualizaVlr() {
                var vlrTotal = 0;
                var TotalDe = 0;
                $('.kitModule > .kit').each(function() {
                    var priceProduto = parseFloat($(this).find('.kitpreco .valor-por .skuBestPrice').text().replace('R$ ', '').replace('.', '').replace(',', '.'));
                    var qtyProduto = parseInt($(this).find('.buy-in-page-quantity').val());
                    var totalProduto = priceProduto * qtyProduto;

                    var precoProdutoDe = parseFloat($(this).find('.kitpreco .valor-de .skuListPrice').text().replace('R$ ', '').replace('.', '').replace(',', '.'));
                    var totalDeMulti = precoProdutoDe * qtyProduto;

                    TotalDe = TotalDe + totalDeMulti;
                    vlrTotal = vlrTotal + totalProduto;
                });

                var parcelaVlr = vlrTotal / 10;
                $('.produto-comprar .kit-total').html('<span class="currency">R$ </span>' + vlrTotal.formatMoney(2, ',', '.'));
                $('.produto-comprar .kit-parcela').html('ou em até 10x de R$ ' + parcelaVlr.formatMoney(2, ',', '.') + ' s/juros.');

                if ($('.valor-de-kit').length == 0) {
                    $('.kit-total-label').after('<span class="valor-de-kit"></span>');
                }

                $('.produto-comprar .valor-de-kit').text('De: R$ ' + TotalDe.formatMoney(2, ',', '.'));
            };
            atualizaVlr();


            // Função para atribuir o ID do SKU de cada Produto.
            var addIdSku = function() {
                $('.kitModule > .kit .skuList').eq(0).find('input.sku-selector').each(function(i) {
                    var skuId = skuJson_1.skus[i].sku;
                    $(this).attr('data-sku-id', skuId);
                });

                $('.kitModule > .kit .skuList').eq(1).find('input.sku-selector').each(function(i) {
                    var skuId = skuJson_2.skus[i].sku;
                    $(this).attr('data-sku-id', skuId);
                });
            }
            addIdSku();

            // Criando btn comprar.
            $('.specification').on('click', function() {
                $(this).parent().parent().addClass('ativo');
            });

            // $('.sku-selector-container label').on('click', function() {
            //   $('.skuList').slideUp();
            //   var texto = $(this).text();
            //   $(this).parent().parent().siblings('.specification').html($(this).clone());
            // });

            var btnBuy = function() {
                // Atribuindo evento no btn-buy-kit
                $('.btn-buy-kit').on('click', function(e) {
                    console.log('clik')
                    e.preventDefault();
                    var erro = false;
                    var skus = [];

                    // Pegando quantidade e valor de cada item Verificando pela quantidade
                    $('.kitModule > .kit').each(function() {
                        if ($(this).find('.sku-selector-container.ativo').length == 0) {

                        } else {

                            var link = $(this).find('.buy-in-page-button').attr('href');
                            var qty = parseInt($(this).find('.buy-in-page-quantity').val());

                            if (qty > 0) {
                                $('.sku-selector-container.ativo .topic').each(function() {
                                    if ($(this).find('.skuList').find('.sku-picked').length == 0) {
                                        $(this).find('.specification').addClass('error');
                                        if ($(this).find('.msg-erro').length == 0) {
                                            $(this).prepend('<span class="msg-erro">Selecione</span>');
                                        }
                                    } else {
                                        $(this).find('.specification').removeClass('error');
                                        $(this).find('.msg-erro').remove();
                                    }
                                });
                            }

                            if (qty > 0 && link.indexOf('javascript') >= -1) {
                                // if(1==1) {
                                var skuId = parseInt(link.split('?')[1].split('&')[0].split('sku=')[1]);
                                var skuQty = qty;
                                skus = skus.concat([{ 'idSku': skuId, 'qtySku': skuQty }]);
                                console.log('passou aqui');
                            } else {
                                console.log('Nada selecionado');
                            }

                            // Adicionar ao Carrinho
                            var i = 0;

                            function addToCart() {
                                console.log('Add To Cart Skus: ' + skus);
                                var item = {
                                    id: skus[i].idSku,
                                    quantity: skus[i].qtySku,
                                    seller: 1
                                };
                                console.log(item);
                                vtexjs.checkout.addToCart([item]).done(function(orderForm) {
                                    if (skus.length > i) {
                                        addToCart();
                                    }
                                    window.location.replace("/checkout/#/cart");
                                });
                                i++;
                            }
                            addToCart();
                        }
                        // Fecha else
                    });
                });
            }
            btnBuy();



            // var createButton = function() {
            //   var sku =[]
            //   $('.btn-buy-kit').on('click', function() {
            //     $('input.sku-picked').each(function(i) {
            //       var skuPicked = $(this).attr('data-sku-id');
            //       var skuQty = $('.kitModule > .kit').eq(i).find('.buy-in-page-quantity').val();
            //       sku = sku.concat([{'idSku': skuPicked, 'qty': skuQty}]);
            //       console.log(sku);
            //     });
            //     var i = 0;
            //     function addToCart() {
            //       item = {
            //         id: sku[i].idSku,
            //         quantity: sku[i].qty,
            //         seller: 1
            //       };
            //       vtexjs.checkout.addToCart([item]).done(function(orderForm){
            //         if(sku.lenght > i) {
            //           addToCart();
            //         }
            //       });
            //       i++;
            //     }
            //     addToCart();
            //   });
            // }
            // // Fehca create button
            // createButton();

            $('.kit .buy-in-page-quantity').on('change', function() {
                atualizaVlr();
            });

            var btnPlus = '<span class="btn-plus">+</span>';
            var btnMinus = '<span class="btn-minus">-</span>';
            $('.kit .buy-in-page-quantity').after(btnPlus);
            $('.kit .buy-in-page-quantity').before(btnMinus);

            $('.btn-plus').on('click', function() {
                var current = parseInt($(this).siblings('.buy-in-page-quantity').val());
                console.log(current);
                var newVal = current + 1;
                $(this).siblings('.buy-in-page-quantity').val(newVal);
                $(this).siblings('.buy-in-page-quantity').text(newVal);
                atualizaVlr();
            });

            $('.btn-minus').on('click', function() {
                var current = parseInt($(this).siblings('.buy-in-page-quantity').val());
                if (current <= 0) {

                } else {
                    var newVal = current - 1;
                    $(this).siblings('.buy-in-page-quantity').val(newVal);
                    $(this).siblings('.buy-in-page-quantity').text(newVal);
                    atualizaVlr();
                }
            });

            function qtyMove() {
                $('.sku-selector-container').eq(0).append($('.kitbtcomprar').eq(0));
                $('.sku-selector-container').eq(1).append($('.kitbtcomprar').eq(1));
            }
            qtyMove();
        }
    }

    PFTX.pages.product.degressRedesign = function() {

        if($('body').hasClass('product-degress')){
            var btnLeft = $('[data-js="degress-left"]');
            var btnRight = $('[data-js="degress-right"]');
            var skuLeft = $('[data-js="degress-sku-left"]');
            var skuRight = $('[data-js="degress-sku-right"]');
            var overley = $('[data-js="overDegress"]');
            var closeLeft = $('[data-js="close-left"]');
            var closeRight = $('[data-js="close-right"]');
            var degreSelect = $('[data-js="degreSelect"]');
            var selectSkuLeft = $('[data-js="degress-sku-left"] label');
            var selectSkuRight = $('[data-js="degress-sku-right"] label');
            var textLeft = $('[data-js="degress-left"]');
            var textRight = $('[data-js="degress-right"]');
            var btnComprar = $('.buy-button');
            var btnMinLeft = $('[data-js="minus-left"]');
            var btnPlusLeft = $('[data-js="plus-left"]');
            var btnMinRight = $('[data-js="minus-right"]');
            var btnPlusRight = $('[data-js="plus-right"]');
            var valQtdLeft = $('[data-js="quantify-left"]');
            var valQtdRight = $('[data-js="quantify-right"]');
            var degressValidation = false;
            var urlSkuLeft = '';
            var urlSkuRight = '';
            var valueInitialLeft = 0;
            var valueInitialRight = 0;

            $.each($('.produto-comprar .disponivel'), function(i,e){
                if( i === 1){
                    $(this).remove();
                }                
            });

            setTimeout(function(){
                $(".disponivel").text("Produto disponível para envio imediato");
                
            }, 500);

            //QUANTIDADE LEFT

            btnMinLeft.on('click', function(){
                if( valueInitialLeft <= 1 ){
                    return false;
                }else{
                    valueInitialLeft = valueInitialLeft - 1;
                    valQtdLeft.val(valueInitialLeft);
                }
            });

            btnPlusLeft.on('click', function(){
                valueInitialLeft = valueInitialLeft + 1;
                valQtdLeft.val(valueInitialLeft);
            });

            //QUANTIDADE RIGHT
            btnMinRight.on('click', function(){
                if( valueInitialRight <= 1 ){
                    return false;
                }else{
                    valueInitialRight = valueInitialRight - 1;
                    valQtdRight.val(valueInitialRight);
                }
            });

            btnPlusRight.on('click', function(){
                valueInitialRight = valueInitialRight + 1;
                valQtdRight.val(valueInitialRight);
            });

            //Mesmo grau
            degreSelect.on('click', function(){
                if($('[data-js="box-left"]').hasClass('active')){
                    $('[data-js="box-left"]').removeClass('active');
                    $('[data-js="quantify-left"]').removeAttr('disabled','disabled');
                    $('[data-js="plus-left"]').removeAttr('disabled','disabled');
                    $('[data-js="minus-left"]').removeAttr('disabled','disabled');
                    $('.guambi').remove();
                    degressValidation = false;
                }else{
                    $('[data-js="box-left"]').addClass('active');
                    $('[data-js="quantify-left"]').attr('disabled','disabled');
                    $('[data-js="plus-left"]').attr('disabled','disabled');
                    $('[data-js="minus-left"]').attr('disabled','disabled');
                    $('[data-js="box-left"]').append('<div class="guambi"></teste>');
                    degressValidation = true;
                }
            });

            //Pegando a url do olho esquerdo
            selectSkuLeft.on('click', function(){
                textLeft.html($(this).html());
                skuLeft.fadeOut();
                overley.fadeOut();
                setTimeout(function(){
                    var hrefLeft = $('.buy-button').attr('href').split('&');
                    urlSkuLeft = hrefLeft[0].replace('/checkout/cart/add?sku=', '');
                }, 100)
            });

            //Pegando a url do olho direito
            selectSkuRight.on('click', function(){
                textRight.html($(this).html());
                skuRight.fadeOut();
                overley.fadeOut();

                setTimeout(function(){
                    var hrefRight = $('.buy-button').attr('href').split('&');
                    urlSkuRight = hrefRight[0].replace('/checkout/cart/add?sku=', '');
                }, 100);
            });

            //$(".produto-variacao input").val(1);

            //Finalizando compra
            btnComprar.on('click', function(e){

                e.preventDefault();

                var verifica = $(this).attr('href');

                if(verifica === "javascript:alert('Por favor, selecione o modelo desejado.');"){
                    alert('Por favor, selecione o modelo desejado.');

                }else if( degressValidation === false ){
                    
                    
                    if(urlSkuLeft != '' && urlSkuRight != ''){

                        

                        var qtdyProdutoAdicionadoLft = $('[data-js="quantify-left"]').val() != '' ? $('[data-js="quantify-left"]').val() : 1;
                        var qtdyProdutoAdicionadoRight = $('[data-js="quantify-right"]').val() != '' ? $('[data-js="quantify-right"]').val() : 1;
                        
                        var url = '/checkout/cart/add?sku='+ urlSkuLeft +'&qty='+ qtdyProdutoAdicionadoLft +'&seller=1&redirect=true&sc=1&sku='+ urlSkuRight +'&qty='+ qtdyProdutoAdicionadoRight +'&seller=1&redirect=true&sc=1';
                        //alert(url);
                        setTimeout(function(){
                            $(location).attr('href',url);
                        },1200);
                        

                    }else{
                        alert("Por favor, selecione o grau do olho esquerdo!");
                    
                    }

                }else{
                    
                    if(urlSkuRight != ''){
                        
                        var qtdyProdutoAdicionadoRight = $('[data-js="quantify-right"]').val() != '' ? $('[data-js="quantify-right"]').val() * 2: 2;
                        var url = '/checkout/cart/add?sku='+ urlSkuRight +'&qty='+ qtdyProdutoAdicionadoRight +'&seller=1&redirect=true&sc=1';
                        
                        setTimeout(function(){
                            $(location).attr('href',url);
                        },1200);

                    }else{

                        alert('Por favor, selecione o grau do olho esquerdo!');

                    }
                }

            });
            //Abrindo modal de Sku esquerdo
            btnLeft.on('click', function(){
                skuLeft.fadeIn();
                overley.fadeIn();
            });
            //Abrindo modal de Sku direito
            btnRight.on('click', function(){
                skuRight.fadeIn();
                overley.fadeIn();
            });
            //Fechando modal quando clica no fundo preto
            overley.on('click', function(){
                skuRight.fadeOut();
                skuLeft.fadeOut();
                overley.fadeOut();
            });
            //Fechando modal sku esquerdo
            closeLeft.on('click', function(){
                skuRight.fadeOut();
                skuLeft.fadeOut();
                overley.fadeOut();
            });
            //Fechando modal sku direito
            closeRight.on('click', function(){
                skuRight.fadeOut();
                skuLeft.fadeOut();
                overley.fadeOut();
            });
        }
    }

    PFTX.pages.product.seletorLenteTorica = function() {

        if($('body').hasClass('product-degress')){

            var btnLeft = $('[data-js="degress-left"]'),
                btnRight = $('[data-js="degress-right"]'),
                skuLeft = $('[data-js="degress-sku-left"]'),
                skuRight = $('[data-js="degress-sku-right"]'),
                overley = $('[data-js="overDegress"]'),
                closeLeft = $('[data-js="close-left"]'),
                closeRight = $('[data-js="close-right"]'),
                degreSelect = $('[data-js="degreSelect"]'),
                selectSkuLeft = $('[data-js="degress-sku-left"] label'),
                selectSkuCilindrico = $('[data-js="degress-sku-cilindrico"]'),
                selectSkuRight = $('[data-js="degress-sku-right"] label'),
                textLeft = $('[data-js="degress-left"]'),
                textRight = $('[data-js="degress-right"]'),
                btnComprar = $('.buy-button'),
                btnMinLeft = $('[data-js="minus-left"]'),
                btnPlusLeft = $('[data-js="plus-left"]'),
                btnMinRight = $('[data-js="minus-right"]'),
                btnPlusRight = $('[data-js="plus-right"]'),
                valQtdLeft = $('[data-js="quantify-left"]'),
                valQtdRight = $('[data-js="quantify-right"]'),
                degressValidation = false,
                urlSkuLeft = '',
                urlSkuRight = '',
                valueInitialLeft = 0,
                valueInitialRight = 0;

            $.each($('.produto-comprar .disponivel'), function(i,e){
                if( i === 1){
                    $(this).remove();
                }                
            });

            setTimeout(function(){
                $(".disponivel").text("Produto disponível para envio imediato");
                
            }, 500);

            //QUANTIDADE LEFT

            btnMinLeft.on('click', function(){
                if( valueInitialLeft <= 1 ){
                    return false;
                }else{
                    valueInitialLeft = valueInitialLeft - 1;
                    valQtdLeft.val(valueInitialLeft);
                }
            });

            btnPlusLeft.on('click', function(){
                valueInitialLeft = valueInitialLeft + 1;
                valQtdLeft.val(valueInitialLeft);
            });

            //QUANTIDADE RIGHT
            btnMinRight.on('click', function(){
                if( valueInitialRight <= 1 ){
                    return false;
                }else{
                    valueInitialRight = valueInitialRight - 1;
                    valQtdRight.val(valueInitialRight);
                }
            });

            btnPlusRight.on('click', function(){
                valueInitialRight = valueInitialRight + 1;
                valQtdRight.val(valueInitialRight);
            });

            //Mesmo grau
            degreSelect.on('click', function(){
                if($('[data-js="box-left"]').hasClass('active')){
                    $('[data-js="box-left"]').removeClass('active');
                    $('[data-js="quantify-left"]').removeAttr('disabled','disabled');
                    $('[data-js="plus-left"]').removeAttr('disabled','disabled');
                    $('[data-js="minus-left"]').removeAttr('disabled','disabled');
                    $('.guambi').remove();
                    degressValidation = false;
                }else{
                    $('[data-js="box-left"]').addClass('active');
                    $('[data-js="quantify-left"]').attr('disabled','disabled');
                    $('[data-js="plus-left"]').attr('disabled','disabled');
                    $('[data-js="minus-left"]').attr('disabled','disabled');
                    $('[data-js="box-left"]').append('<div class="guambi"></teste>');
                    degressValidation = true;
                }
            });

            //Pegando a url do olho esquerdo
            selectSkuLeft.on('click', function(){
                textLeft.html($(this).html());
                skuLeft.fadeOut();
                overley.fadeOut();
                setTimeout(function(){
                    var hrefLeft = $('.buy-button').attr('href').split('&');
                    urlSkuLeft = hrefLeft[0].replace('/checkout/cart/add?sku=', '');
                }, 100)
            });

            //Pegando a url do olho direito
            selectSkuRight.on('click', function(){
                textRight.html($(this).html());
                skuRight.fadeOut();
                overley.fadeOut();
                setTimeout(function(){
                    var hrefRight = $('.buy-button').attr('href').split('&');
                    urlSkuRight = hrefRight[0].replace('/checkout/cart/add?sku=', '');
                }, 100)
            });

            //Finalizando compra
            $(".degress-fild").val(1);

            btnComprar.on('click', function(e){

                e.preventDefault();

                var verifica = $(this).attr('href');
               
                //01 - verifica se o modelo  já foi selecionado.
                if(verifica === "javascript:alert('Por favor, selecione o modelo desejado.');"){
                    
                    alert('Por favor, selecione o modelo desejado.');
                  
                //02 - verificar se o cliente selecionou o mesmo graal.                      
                }else if( degressValidation === false ){
                    
                    if(urlSkuRight != '' && urlSkuLeft == ''){

                        alert("Por favor, selecione o grau do olho esquerdo!");
                                                             

                    }else if( $("#degress-sku-cilindrico-select .degress-selected").text() ==  "+0,00" ){
                        
                        alert("Por Favor, selecione o valor cilíndrico!");
                        
                    
                    }if( $(".box_seletor_cilindrico_2 .degress-selected").eq(0).text() ==  "cilindrico" ){
                        
                        alert("Por Favor, selecione o Cilíndrico do olho Esquerdo!");
                        

                    }else if( $(".box_seletor_eixo_0 .degress-selected").eq(0).text() ==  "cilindrico" ){
                        
                        alert("Por Favor, selecione o Cilíndrico do olho Direito!");
                        
                    
                    }else if( $(".box_seletor_eixo_1 .degress-selected").eq(0).text() ==  "eixo" ){
                        
                        alert("Por Favor, selecione o Eixo do olho Direito!");
                        

                    }else if( $(".box_seletor_eixo_3 .degress-selected").eq(0).text() ==  "eixo" ){
                        
                        alert("Por Favor, selecione o Eixo do olho Esquerdo!");
                        
                    }else{
                        
                        //alert("vou adicionar ao carrinho");

                        var qtdyProdutoAdicionado = $('[data-js="quantify-right"]').val() != '' ? $('[data-js="quantify-right"]').val() : 1;    
                        var qtdyProdutoAdicionadoLft = $('[data-js="quantify-left"]').val() != '' ? $('[data-js="quantify-left"]').val() : 1;    
                        var url = '/checkout/cart/add?sku='+ urlSkuLeft +'&qty='+ qtdyProdutoAdicionado +'&seller=1&redirect=true&sc=1&sku='+ urlSkuRight +'&qty='+ qtdyProdutoAdicionadoLft +'&seller=1&redirect=true&sc=1';
                        
                        var itemLenteAnexoLeft = {
                            id: urlSkuLeft,
                            quantity: qtdyProdutoAdicionado,
                            seller: 1
                        };

                        var itemLenteAnexoRight = {
                            id: urlSkuRight,
                            quantity: qtdyProdutoAdicionadoLft,
                            seller: 1
                        };

                        var itensCarrinho = [itemLenteAnexoLeft, itemLenteAnexoRight];

                        vtexjs.checkout.addToCart([itemLenteAnexoRight, itemLenteAnexoLeft], null, 1).done(function(orderForm){

                            console.log("vou adicionar ao carrinho");

                            var positionCount, position, name1, name2, attachmentName, attachmentName2, attachmentName1, content, nome, ilustracao;
                                positionCount = orderForm.items.length;
                                position = orderForm.items.length - 1;

                            //setTimeout(function(){
                                    
                                name1 = orderForm.items[position].attachmentOfferings[0].name;
                                name2 = orderForm.items[position].attachmentOfferings[1].name;
                                    
                                if(name1 == "cilindrico" && name2 == "eixo"){

                                    attachmentName1 = 'eixo';
                                    attachmentName2 = 'cilindrico';

                                    //var campoEixoNome = $("#degress-sku-cilindrico-select .degress-selected").text();

                                    var campoCilindricoNomeDireito = $(".box_seletor_cilindrico_0 .degress-selected").text();

                                    var campoCilindricoNomeEsquerdo = $(".box_seletor_cilindrico_2 .degress-selected").text();

                                    var campoEixoNomeDireito = $(".box_seletor_eixo_1 .degress-selected").text();

                                    var campoEixoNomeEsquerdo = $(".box_seletor_eixo_3 .degress-selected").text();

                                    var contentCilindrico = {
                                        "Valor": campoCilindricoNomeDireito//campoNome1
                                    };
                                    
                                    /*var contentEixo = {
                                        "ValorEixo": campoEixoNome//campoNome1
                                    };*/

                                    var olhoDireito = {
                                        "ValorEixo": campoEixoNomeDireito,//campoNome1
                                        "Valor": campoCilindricoNomeDireito//campoNome1
                                    };

                                    var olhoEsquerdoEixo = {
                                        "ValorEixo": campoEixoNomeEsquerdo//campoNome1
                                    };
                                    var olhoDireitoEixo = {
                                        "ValorEixo": campoEixoNomeDireito//campoNome1
                                    };

                                    var olhoDireitoCilindrico = {
                                        "Valor": campoCilindricoNomeDireito//campoNome1
                                    };

                                    var olhoEsquerdoCilindrico = {
                                        "Valor": campoCilindricoNomeEsquerdo//campoNome1
                                    };
                                    //"Valor": campoCilindricoNomeEsquerdo//campoNome1

                                    setTimeout(function(){
                                            
                                        vtexjs.checkout.addItemAttachment(0, attachmentName2, olhoDireitoCilindrico, null);
                                        //, false

                                        //vtexjs.checkout.addItemAttachment(1, attachmentName2, olhoEsquerdoCilindrico, null);
                                        //, false
                                        vtexjs.checkout.addItemAttachment(0, attachmentName1, olhoDireitoEixo, null);

                                        setTimeout(function(){
                                            vtexjs.checkout.addItemAttachment(1, attachmentName2, olhoEsquerdoCilindrico, null);

                                            vtexjs.checkout.addItemAttachment(1, attachmentName1, olhoEsquerdoEixo, null);
                                        }, 1500);
                                        
                                        //, false

                                        //vtexjs.checkout.addItemAttachment(1, attachmentName1, olhoEsquerdoEixo, null);
                                        //, false

                                        //vtexjs.checkout.addItemAttachment(1, attachmentName2, olhoEsquerdo, null, false);

                                        //
                                        //
                                        //

                                        //vtexjs.checkout.addItemAttachment(0, attachmentName1, contentEixo, null, false);
                                        //vtexjs.checkout.addItemAttachment(1, attachmentName1, contentEixo, null, false);
                                        $("#ajaxBusy").addClass('activeLoader');

                                        setTimeout(function(){
                                            var urlLink = location.origin + "/checkout/#/cart";
                                            $(location).attr('href', urlLink);

                                        }, 3000);

                                    }, 2000);

                                }

                            //}, 1500);                            
                                                        
                        });

                    }                   
                
                //02 - verificar se o cliente selecionou o mesmo graal.
                }else{ 
                    
                    if( $(".box_seletor_eixo_1 .degress-selected").eq(0).text() == "eixo" ){
                        
                        alert("Por Favor, selecione o Eixo!");
                        
                    
                    }else if( $(".box_seletor_cilindrico_0 .degress-selected").eq(0).text() ==  "cilindrico" ){
                        
                        alert("Por Favor, selecione o Cilíndrico!");
                    
                    }else if(urlSkuRight != ''){
                        
                        var idSkuSelecionado = $('.buy-button').attr('href').split('&');
                        idSkuSelecionado = idSkuSelecionado[0].replace('/checkout/cart/add?sku=', '');
                        //var qtdyProdutoAdicionado = $('[data-js="quantify-right"]').val() != '' ? $('[data-js="quantify-right"]').val() : 1;
                        var qtdyProdutoAdicionado = $('[data-js="quantify-right"]').val() ==  1 ? $('[data-js="quantify-right"]').val() * 2 : 2;
                        var url = '/checkout/cart/add?sku='+ idSkuSelecionado +'&qty='+ qtdyProdutoAdicionado +'&seller=1&redirect=true&sc=1'; 
                        //&sku='+ urlSkuRight +'&qty='+ qtdyProdutoAdicionado +'&seller=1&redirect=true&sc=1
                        
                        /*var itemLenteAnexoLeft = {
                            id: idSkuSelecionado,
                            quantity: qtdyProdutoAdicionado,
                            seller: 1
                        };*/
                        var itemLenteAnexoRight = {
                            id: idSkuSelecionado,
                            quantity: qtdyProdutoAdicionado,
                            seller: 1
                        }; 
                        
                        console.log(itemLenteAnexoRight);
                        //, itemLenteAnexoRight
                        vtexjs.checkout.addToCart([itemLenteAnexoRight]).done(function(orderForm){
                            
                            //SPEC INIT                                
                            var positionCount, position, name1, name2, attachmentName, attachmentName2, attachmentName1, content, nome, ilustracao;
								positionCount = orderForm.items.length;
                                position = orderForm.items.length - 1;
                                
                            //setTimeout(function(){
                                    
                                name1 = orderForm.items[position].attachmentOfferings[0].name;
                                name2 = orderForm.items[position].attachmentOfferings[1].name; 

                                if(name1 == "cilindrico" && name2 == "eixo"){

                                    attachmentName1 = 'eixo';
                                    attachmentName2 = 'cilindrico';
    
                                    var campoEixoNome = $(".box_seletor_eixo_1 .degress-selected").text();
                                    
                                    var campoCilindricoNome = $(".box_seletor_cilindrico_0 .degress-selected").text();

                                    var contentCilindrico = {
                                        "Valor": campoCilindricoNome//campoNome1
                                    };
                                       
                                    var contentEixo = {
                                        "ValorEixo": campoEixoNome//campoNome1
                                    };

                                    var anexosThis = [contentCilindrico, contentEixo];
                                            
                                    
                                    vtexjs.checkout.addItemAttachment(0, attachmentName1, contentEixo, null, false);    
                                    console.log("anexo 1 adicionado!");
                                    vtexjs.checkout.addItemAttachment(0, attachmentName2, contentCilindrico, null, false);
                                    console.log("anexo 2 adicionado!");
                                    /*vtexjs.checkout.addItemAttachment(position, attachmentName1, contentEixo, null);    
                                    console.log("anexo 3 adicionado!");
                                    vtexjs.checkout.addItemAttachment(position, attachmentName2, contentCilindrico, null);
                                    console.log("anexo 4 adicionado!");*/
                                    setTimeout(function(){
                                        var urlLink = location.origin + "/checkout/#/cart";
                                        $(location).attr('href', urlLink);

                                    }, 1500);

                                }                                    

                            //}, 2000);
                                
                        });
                                                
                    }else if(urlSkuRight == ''){

                        alert('Por favor, selecione o grau do olho esquerdo.');
                    }
                }

            });
            //Abrindo modal de Sku esquerdo
            btnLeft.on('click', function(){
                skuLeft.fadeIn();
                overley.fadeIn();
            });
            //Abrindo modal de Sku direito
            btnRight.on('click', function(){
                skuRight.fadeIn();
                overley.fadeIn();
            });
            //Fechando modal quando clica no fundo preto
            overley.on('click', function(){
                skuRight.fadeOut();
                skuLeft.fadeOut();
                overley.fadeOut();
            });
            //Fechando modal sku esquerdo
            closeLeft.on('click', function(){
                skuRight.fadeOut();
                skuLeft.fadeOut();
                overley.fadeOut();
            });
            //Fechando modal sku direito
            closeRight.on('click', function(){
                skuRight.fadeOut();
                skuLeft.fadeOut();
                overley.fadeOut();
            });
        }
    }
    PFTX.pages.product.seletoresAdicionais = function(nome, target, idx) {
        
        var _this = "<div class='degress-input box_seletor_" + nome + "_" + idx + "'><div class='degress-selected seletor_" + nome + "'>" + nome + "</div></div>",
            _target = target;

        //return _this;
        $(_this).eq(0).insertAfter(_target);
        var duplicate = ".box_seletor_" + nome + "_" + idx;
        $(duplicate).eq(1).remove();
    }

    PFTX.pages.product.openSeletoresAdicionais = function(seletor, valores) {    

        var _this_seletor = seletor,
            _this_valores = valores;

        $(_this_seletor).on("click", function(){            
            $(_this_valores).fadeIn();

            var active = "active_" + 0 +"_"+ $(_this_valores).parent().attr("data-js");
            //$(_this_valores).parent().attr("data-js");
            $(_this_valores).addClass('active');
            $(".overlay-degress").fadeIn();                    
            return false;
        });
    }

    PFTX.pages.product.fecharSeletoresAdicionais = function(seletor) {

        var _this_close = seletor;

        $(_this_close).on('click', function(){
            $(_this_close).parent().fadeOut();
            $("#degress-sku-cilindrico").fadeOut();
            $(".overlay-degress").fadeOut();
            //$(_this_close).parent().fadeOut();
            $('.degress-sku').fadeOut();
            $('.degress-sku').removeClass('active');
            $('.degress-sku').addClass('hide');
        });

        console.log("vou fechar o seletor");
    }

    PFTX.pages.product.fecharSeletores = function() {
        $(".overlay-degress").on('click', function(){
            $('.degress-sku').removeClass('active');
            $('.degress-sku').addClass('hide');
            $(".overlay-degress").fadeOut();
        }); 
        $('.degress-sku').fadeOut();
        $('.degress-sku').removeClass('active');
        $('.degress-sku').addClass('hide');
        $(".overlay-degress").fadeOut();
    }

    PFTX.pages.product.anexoLenteTorica = function() {
        
        //01 cria os seletores adicionais 
        var valoresCilindrico = '<div class="close-degress-sku" data-js="close-right">Fechar</div><div class="off7-seletor-cilindrico"><span>-2.25</span><span>-1.75</span><span>-1.25</span><span>-0.75</span></div>';

        var valoresEixo = '<div class="close-degress-sku" data-js="close-right">Fechar</div><div class="off7-seletor-eixo"><span>10°</span><span>20°</span><span>30°</span><span>40°</span><span>50°</span><span>60°</span><span>70°</span><span>80°</span><span>90°</span><span>100°</span><span>110°</span><span>120°</span><span>130°</span><span>140°</span><span>150°</span><span>160°</span><span>170°</span><span>180°</span></div>';

        //<div class="degress-sku" data-js="degress-sku-right" style="display: none;">
        var seletorEixoLeft = '<div class="eixo-select-p degress-sku seletorEixoLeft"><div class="degress-box" id="degress-sku-eixo" data-js="box-eixo">' + valoresEixo + '</div></div>';

        var seletorEixoRight = '<div class="eixo-select-p degress-sku seletorEixoRight"><div class="degress-box" id="degress-sku-eixo" data-js="box-eixo">' + valoresEixo + '</div></div>';

        var seletorCilindricoLeft = '<div class="cilindrico-select-p degress-sku seletorCilindricoLeft"><div class="degress-box" id="degress-sku-cilindrico" data-js="box-cilindrico">' + valoresCilindrico + '</div></div>';

        var seletorCilindricoRight = '<div class="cilindrico-select-p degress-sku seletorCilindricoRight"><div class="degress-box" id="degress-sku-cilindrico" data-js="box-cilindrico">' + valoresCilindrico + '</div></div>';

        $(".produto-variacao").append(seletorEixoRight);
        $(".produto-variacao").append(seletorEixoLeft);
        $(".produto-variacao").append(seletorCilindricoLeft);
        $(".produto-variacao").append(seletorCilindricoRight);        
        
        setTimeout(function(){
            
            if( $(".produto-variacao [data-js='box-right'] .seletor_cilindrico").length === 0 ){
                PFTX.pages.product.seletoresAdicionais("cilindrico", ".produto-variacao [data-js='box-right'] .degress-input", 0);    
            }//seletor cilindrico olho direito

            if( $(".produto-variacao [data-js='box-right'] .seletor_eixo").length === 0 ){
                PFTX.pages.product.seletoresAdicionais("eixo", ".produto-variacao [data-js='box-right'] .degress-input", 1);
            }//seletor eixo olho direito

            if( $(".produto-variacao [data-js='box-left'] .seletor_cilindrico").length === 0 ){
                PFTX.pages.product.seletoresAdicionais("cilindrico", ".produto-variacao [data-js='box-left'] .degress-input", 2);    
            }//seletor cilindrico olho esquerdo

            if( $(".produto-variacao [data-js='box-left'] .seletor_eixo").length === 0 ){
                PFTX.pages.product.seletoresAdicionais("eixo", ".produto-variacao [data-js='box-left'] .degress-input", 3);
            }

            //abertura do seletor
            PFTX.pages.product.openSeletoresAdicionais(".box_seletor_eixo_1", '.produto-variacao .seletorEixoRight');

            PFTX.pages.product.openSeletoresAdicionais(".box_seletor_eixo_3", '.produto-variacao .seletorEixoLeft');

            PFTX.pages.product.openSeletoresAdicionais(".box_seletor_cilindrico_0", '.produto-variacao .seletorCilindricoRight');

            PFTX.pages.product.openSeletoresAdicionais(".box_seletor_cilindrico_2", '.produto-variacao .seletorCilindricoLeft');
            
        }, 1400);
 
        PFTX.pages.product.fecharSeletoresAdicionais(".close-degress-sku");        
        $(".overlay-degress").on('click', function(){
            $('.degress-sku').removeClass('active');
            $('.degress-sku').addClass('hide');
            $(".overlay-degress").fadeOut();
        });  
        

        $(".seletorCilindricoLeft #degress-sku-cilindrico .off7-seletor-cilindrico span").on('click', function(){
            $(".box_seletor_cilindrico_2 .degress-selected").text($(this).text());
            PFTX.pages.product.fecharSeletores();
        });

        $(".seletorCilindricoRight #degress-sku-cilindrico .off7-seletor-cilindrico span").on('click', function(){
            $(".box_seletor_cilindrico_0 .degress-selected").text($(this).text());
            PFTX.pages.product.fecharSeletores();
        });

        $(".seletorEixoRight #degress-sku-eixo .off7-seletor-eixo span").on('click', function(){
            $(".box_seletor_eixo_1 .degress-selected").text($(this).text());
            PFTX.pages.product.fecharSeletores();
        });

        $(".seletorEixoLeft #degress-sku-eixo .off7-seletor-eixo span").on('click', function(){
            $(".box_seletor_eixo_3 .degress-selected").text($(this).text());
            PFTX.pages.product.fecharSeletores();
        });
    }
  
    PFTX.pages.product.DOMReady = function() {               
        
        PFTX.pages.product.toggleDescricao();
        
        PFTX.pages.product.produtoKit();

        //PFTX.pages.product.degressRedesign();

        setTimeout(function(){

            if( typeof vtxctx == "object" && vtxctx.categoryName == "Tórica" ){

                //if(location.search == "?dev=profite"){

                    PFTX.pages.product.anexoLenteTorica();
                //}
                
            }

            if(vtxctx.categoryName == "Tórica" ){
                
                //if(location.search == "?dev=profite"){

                    PFTX.pages.product.seletorLenteTorica();
                    window.console.log('%c PROFITE | refactor para fechar job | **030**', 'background: #000; color: gold');
                //}

            }

            if(vtxctx.categoryName != "Tórica"){
                console.log("profite debug :: teste quantity :: 001");
                PFTX.pages.product.degressRedesign();
                window.console.log('%c PROFITE | vou tratar o seletor normal anterior | **014**', 'background: #000; color: gold');
            }

            console.log("profite debug :: 001");

        }, 1000);
        console.log("profite debug");
    };  

})(jQuery, window, document);


     
(function($, window, document, undefined) {

    'use strict';

    PFTX.pages.quickview = new PFTX.constructor.page('quickview');

    PFTX.pages.quickview.sliderFotoQuickView = function(){
        
        if( $("#productQuickView").length > 0 ){
            if( $("#productQuickView .thumbs li").length > 4 ){
                $("#productQuickView .thumbs").slick({
                    verticalSwiping: true,
                    vertical: true,
                    infinite: true,                    
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerPadding: '50px'
                });
            }
        }        
        
    }

    PFTX.pages.quickview.quickViewoutrasCores = function(){

        //alert("script dentro do QuickView");

        setTimeout(function(){
            
            $(".quickview-similares .list_product").each(function(){

                console.log( $(this).attr("pftx-data") );
                var _this_p_id = $(this).attr("pftx-data");
                var urlProduto = "/quick-view/?idproduto=" + _this_p_id + "&KeepThis=true&TB_iframe=true"
                
                $(this).find("a").attr("href", urlProduto );
                $(this).find("a").addClass('thickbox');

            });

        }, 1000);
    
    }

    PFTX.pages.quickview.DOMReady = function() {

    	PFTX.pages.quickview.sliderFotoQuickView();
        PFTX.pages.quickview.quickViewoutrasCores();

    };

})(jQuery, window, document);

(function($, window, document, undefined) {

    'use strict';

    PFTX.pages.search = new PFTX.constructor.page('resultado-busca');

    PFTX.pages.search.searchResult = function(){
        if($('body').hasClass('busca-encontrada')) {
            var termo = $('.resultado-busca-termo').eq(0).find('.value').text();
            var numero = $('.resultado-busca-numero').eq(0).find('.value').text();
            var texto = numero > 1 ? 'produtos' : 'produto';

            $('.search__term').text(termo);
            $('.search__qty').text(numero + ' ' + texto);            
        }
    }
    PFTX.pages.search.DOMReady = function() {
        PFTX.pages.search.searchResult();
        $('.catalog__sidebar input[type=\'checkbox\']').vtexSmartResearch({
            emptySearchMsg: '<h3>Esta combinação de filtros não retornou nenhum resultado!</h3>',
            loadContent: '.prateleira-padrao[id^=ResultItems]', // .search_results
            shelfClass: '.prateleira-padrao',
            filtersMenu: '.catalog__sidebar',
            shelfCallback: function(){
                PFTX.pages.common.miniaturaSkuProdutoSimilarApi();              
                console.log('%c Recarregar a vitrine de similar! :: 0-88', 'background: gold; color: #000');
            },
            ajaxCallback: function(){
                PFTX.pages.common.miniaturaSkuProdutoSimilarApi();              
                console.log('%c Recarregar a vitrine de similar! :: 0-99', 'background: red; color: #000');
            }   
        });
    };

})(jQuery, window, document);
PFTX.init()