/*<![CDATA[*/

(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'silvan-soeters.myshopify.com',
      apiKey: '4f5715812d361d8f12e865845178b532',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
        id: 444855626,
        node: document.getElementById('collection-component-0f2dbaa47e3'),
        moneyFormat: '%E2%82%AC%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "isButton": true,
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "options": false,
      "description": false,
      "buttonWithQuantity": false,
      "button": false,
      "quantity": false
    },
    "templates": {
      "price": '<div class="{{data.classes.product.prices}}" data-element="product.prices"><span class="{{data.classes.product.beforePrice}}">from</span> {{#data.selectedVariant}}<span class="{{data.classes.product.price}} {{data.priceClass}}" data-element="product.price">{{data.formattedPrice}}</span>{{#data.selectedVariant.compareAtPrice}}<span class="{{data.classes.product.compareAt}}" data-element="product.compareAt">{{data.formattedCompareAtPrice}}</span>{{/data.selectedVariant.compareAtPrice}}{{/data.selectedVariant}}</div>'
    },
    "classes": {
      "beforePrice": 'price--before',
      "blockButton": 'shopify-buy__btn--parent'
    },
    "text": {
      "button": "view"
    },
    "styles": {
      "product": {
        "min-width": "100px !important",
        "margin": "0px -1px -1px 0px !important",
        "padding-bottom": "15px",
        "background-color": "#fff",
        "border": "1px solid #ececec",
        "@media (min-width: 311px) and (max-width: 678px)": {
          "width": "calc(50% + 1px) !important",
          "padding-bottom": "10px !important"
        },
        "@media (min-width: 679px) and (max-width: 1179px)": {
          "width": "calc(33.333% + 1px) !important"
        },
        "@media (min-width: 1180px) and (max-width: 1539px)": {
          "width": "calc(25% + 1px) !important"
        },
        "@media (min-width: 1540px)": {
          "width": "calc(20% + 1px) !important"
        }
      },
      "img": {
        /*"@media (max-width: 991px)": {
          "border": "2px solid #ececec !important"
        },*/
        "@media (min-width: 311px) and (max-width: 678px)": {
          "padding": "12% !important",
          "margin": "0 auto 10px auto !important",
        },
        "margin": "0 auto 15px auto",
        "padding": "20%",
        "border-bottom": "1px solid #ececec",
        /*"border-radius": "5px",*/
        /*"box-shadow": "0px 2px 7px 1px rgba(0,0,0,0.1)",*/
            ":hover": {
              /*"opacity": "0.5"*/
              /*"transition": "0.3s ease"*/
              "background-color": "#f5f5f5"
            },
            ":focus": {
              "outline": "none"
            }
        },
      "buttonWrapper": {
        "@media (max-width: 682px)": {
          "margin-top": "20px !important",
          "margin-bottom": "1px"
        },
        "margin-top": "20px"
      },
      "button": {
        "@media (max-width: 682px)": {
          "font-size": "14px"
        },
        "padding": ".6em 1em .6em",
        "background-color": "#fff",
        "color": "#333333",
        "border": "1px solid #333333",
        "font-family": "Mada, sans-serif",
        ":hover": {
          "background-color": "#333333",
          "color": "#ffffff",
          "border": "1px solid #333333",
          "transition": "all .3s ease-in-out"
        },
        "border-radius": "3px",
        ":focus": {
          "background-color": "#333333",
          "color": "#ffffff",
          "outline": "none"
        },
        ":active": {
          "background-color": "#333333",
          "color": "#ffffff"
        },
        "font-weight": "500"
      },
      "blockButton": {
        ":focus": {
          "outline": "none"
        }
      },
      "variantTitle": {
        "font-family": "Mada, sans-serif",
        "font-weight": "normal"
      },
      "title": {
        "@media (max-width: 682px)": {
          "font-size": "15px"
        },
        "@media (min-width: 683px)": {
          "font-size": "19px"
        },
        "font-family": "Mada, sans-serif",
        "font-weight": "600",
        /*"margin-bottom": "5px",*/
        "margin-bottom": "1px",
        /*"text-align": "left",
        "padding-left": "15px",*/
        "color": "#333333"
      },
      "description": {
        "font-family": "Mada, sans-serif",
        "font-weight": "normal"
      },
      "prices": {
        "margin-bottom": "0 !important",/*
        "text-align": "left",
        "padding-left": "15px"*/
      },
      "price": {
        "@media (max-width: 682px)": {
          "font-size": "12px"
        },
        "@media (min-width: 683px)": {
          "font-size": "14px"
        },
        "font-family": "Mada, sans-serif",
        "color": "#333333",
        "font-weight": "500"
      },
      "beforePrice": {
        "@media (max-width: 682px)": {
          "font-size": "12px"
        },
        "@media (min-width: 683px)": {
          "font-size": "14px"
        },
        "font-family": "Mada, sans-serif",
        "color": "#333333",
        "font-weight": "500"
      },
      "compareAt": {
        "font-family": "Mada, sans-serif",
        "font-weight": "normal",
        "color": "#ffffff"
      }
    },
    "googleFonts": [
      "Mada",
      "Mada",
      "Mada",
      "Mada",
      "Mada",
      "Mada"
    ]
  },
  "modal": {
    "styles": {
      "close": {
        ":focus": {
          "outline": "none"
        },
        ":hover": {
          "transform": "scale(0.9)"
        },
        "color": "#333333",
        "font-size": "35px",
        "font-weight": "400",
        "@media (min-width: 500px)": {
            "top": "-3px"
        },
      },
      "modal": {
        "background-color": "#fff",
        "border-radius": "0",
        "@media (min-width: 500px)": {
            "border": "0px",
            "background-color": "#fff"
            },
        "@media (min-width: 991px)": {
            /*"border": "1px solid #333333",*/
            "background-color": "#fff"
            }
        }
    }
  },
  "cart": {
    "popup":false,
    "contents": {
      "button": true
    },
    "text": {
      "title": "Items in Cart",
      "button": "Check Out"
    },
    "styles": {
      "button": {
        "background-color": "#fff",
        "color": "#333333",
        "border": "1px solid #333333",
        "font-family": "Mada, sans-serif",
        "padding": "12px 20px",
        "font-size": "14px",
        ":hover": {
          "background-color": "#333333",
          "color": "#ffffff",
          "border": "1px solid #333333"
        },
        "border-radius": "5px",
        ":focus": {
          "background-color": "#333333",
          "color": "#ffffff",
          "outline": "none"
        },
        ":active": {
          "background-color": "#333333",
          "color": "#ffffff"
        },
        "font-weight": "bold"
      },
      "cart": {
        "box-shadow": "none",
        "border-left": "1px solid #ececec",
        "background-color": "rgba(255, 255, 255, 1)"
      },
      "title": {
        "color": "#333333",
        "font-weight": "500",
        "font-family": "Mada, sans-serif",
        "font-size": "20px"
      },
      "footer": {
        "background-color": "rgba(255, 255, 255, 1)"
      },
      "header": {
        "color": "#333333",
        "background-color": "rgba(255, 255, 255, 1)",
        "padding-top": "17px"
      },
      "lineItems": {
        "color": "#333333"
      },
      "subtotalText": {
        "color": "#333333"
      },
      "subtotal": {
        "color": "#333333"
      },
      "notice": {
        "color": "#333333"
      },
      "currency": {
        "color": "#333333"
      },
      "close": {
        ":focus": {
          "outline": "none"
        },
        ":hover": {
          "transform": "scale(0.9)"
        },
        "color": "#333333",
        "top": "2px"
      },
      "emptyCart": {
        "color": "#333333"
      }
    },
    "googleFonts": [
      "Mada"
    ]
  },
  "modalProduct": {
    "contents": {
      "img": true,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": false,
      "button": true,
      "quantity": false
    },
    "templates": {
      "img": '{{#data.currentImage.srcLarge}}<div class="{{data.classes.product.imgWrapper}}" data-element="product.imgWrapper"><img style="box-shadow: none;" data-element="product.img" class="{{data.classes.product.img}}" src="{{data.currentImage.srcLarge}}" /></div>{{/data.currentImage.srcLarge}}',
      "imgWithCarousel": '<div style="margin-top: 25px; max-height: 80px !important;" class="{{data.classes.product.imgWrapper}}" data-element="product.imageWrapper">\n <div class="main-image-wrapper" style="display: none;">\n <button type="button" class="carousel-button carousel-button--previous">\n Left\n <img class="carousel-button-arrow" src="//sdks.shopifycdn.com/buy-button/latest/arrow.svg" alt="Carousel Arrow"/>\n </button>\n <img class="{{data.classes.product.img}}" src="{{data.currentImage.src}}" data-element="product.img" />\n <button type="button" class="carousel-button carousel-button--next">\n Right\n <img class="carousel-button-arrow" src="//sdks.shopifycdn.com/buy-button/latest/arrow.svg" alt="Carousel Arrow"/>\n </button>\n </div>\n <div class="{{data.classes.product.carousel}}">\n {{#data.carouselImages}}\n <a data-element="product.carouselitem" href="{{src}}" class="{{data.classes.product.carouselItem}} {{#isSelected}} {{data.classes.product.carouselItemSelected}} {{/isSelected}}" data-image-id="{{id}}" style="background-image: url({{carouselSrc}})"></a>\n {{/data.carouselImages}}\n </div>\n </div>'
    },
    "text": {
      "button": "Add to Cart"
    },
    "styles": {
      "img": {
        "border": "0",
        "border-radius": "0",
        "background-color": "#fff",
        "@media (min-width: 601px)": {
          "max-width": "67% !important",
        },
        ":hover": {
          "background-color": "#fff"
        },
      },
      "product": {
        "border": "0",
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px !important",
          "margin-bottom": "0px"
        },
        "@media (max-width: 499px) and (orientation: portrait)": {
          "margin-top": "45px",
          "background-color": "#fff",
          "padding-bottom": "45px"
        }
      },
      "button": {
        "padding": "12px 20px",
        "width": "100%",
        "background-color": "#fff",
        "color": "#333333",
        "border": "1px solid #333333",
        "font-family": "Mada, sans-serif",
        ":hover": {
          "background-color": "#333333",
          "color": "#ffffff",
          "border": "1px solid #333333"
        },
        "border-radius": "5px",
        ":focus": {
          "background-color": "#333333",
          "color": "#ffffff",
          "outline": "none"
        },
        ":active": {
          "background-color": "#333333",
          "color": "#ffffff"
        },
        "font-weight": "bold"
      },
      "buttonWrapper": {
        "margin-top": "15px"
      },
      "variantTitle": {
        "font-family": "Mada, sans-serif",
        "color": "#333333",
        "font-weight": "normal"
      },
      "title": {
        "@media (max-width: 499px)": {
            "margin-top": "0px !important"
        },
        "font-family": "Mada, sans-serif",
        "font-size": "25px",
        "font-weight": "600",
        "color": "#333333"
      },
      "description": {
        "color": "#333333",
        "font-family": "Mada, sans-serif",
        "font-weight": "normal"
      },
      "price": {
        "@media (max-width: 682px)": {
          "font-size": "14px"
        },
        "font-family": "Mada, sans-serif",
        "color": "#333333",
        "font-weight": "500"
      },
      "compareAt": {
        "font-family": "Mada, sans-serif",
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Mada",
      "Mada",
      "Mada",
      "Mada",
      "Mada",
      "Mada"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Mada, sans-serif",
        "background-color": "rgba(255, 255, 255, 0)",
        /*"border-radius": "5px 0 0 5px",*/
        ":hover": {
          "background-color": "rgba(255, 255, 255, 0)"
        },
        ":focus": {
          "background-color": "rgba(255, 255, 255, 0)"
        },
        "font-weight": "500",
        "border-radius": "0"
      },
      "count": {
        "color": "#333333",
        "font-weight": "700",
        ":hover": {
          "color": "#333333"
        }
      },
      "iconPath": {
        "fill": "#333333"
      }
    },
    "googleFonts": [
      "Mada"
    ]
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Mada, sans-serif",
        "color": "#333333",
        "font-weight": "bold"
      },
      "select": {
        "font-family": "Mada, sans-serif",
        "color": "#b9b9b9",
        "padding": "8px 20px",
        "font-weight": "600",
        ":focus": {
          "outline": "none"
        }
      },
      "wrapper": {
        "border": "1px solid #d9d9d9",
        "background-color": "#fafafa",
        "border-radius": "5px",
        ":hover": {
          "background-color": "#f5f5f5"
        }
      },
      "selectIcon": {
        "fill": "#b9b9b9",
        ":hover": {
          "fill": "#333333"
        }
      }
    },
    "googleFonts": [
      "Mada",
      "Mada"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "text-align": "left",
        "margin-left": "-1px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        /*"color": "#9e9e9e",*/
        "color": "#333333",
        "font-size": "12px",
        "font-weight": "normal"
      },
      "title": {
        "color": "#333333"
      },
      "itemTitle": {
        "font-weight": "600"
      },
      "price": {
        "color": "#333333",
        "font-weight": "normal"
      },
      "quantity": {
        "color": "#333333"
      },
      "quantityIncrement": {
        "color": "#b9b9b9",
        "border-color": "#d9d9d9",
        "border-radius": "0 5px 5px 0",
        "background-color": "#fafafa",
        ":hover": {
          "background-color": "#f5f5f5"
        },
        ":focus": {
          "outline": "none"
        }
      },
      "quantityDecrement": {
        "color": "#b9b9b9",
        "border-color": "#d9d9d9",
        "border-radius": "5px 0 0 5px",
        "background-color": "#fafafa",
        ":hover": {
          "background-color": "#f5f5f5"
        },
        ":focus": {
          "outline": "none"
        }
      },
      "quantityInput": {
        "color": "#b9b9b9",
        "border-color": "#d9d9d9",
        "background-color": "#fafafa",
        ":focus": {
          "outline": "none"
        }
      }
    }
  }
}
      });
    });
  }
})();
/*]]>*/
