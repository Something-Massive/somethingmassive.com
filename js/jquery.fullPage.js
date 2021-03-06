/**
 * fullPage 2.1.7
 * https://github.com/alvarotrigo/fullPage.js
 * MIT licensed
 *
 * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo
 */
(function(a) {
	a.fn.fullpage = function(b) {
		function M() {
			a(".fp-section").each(function() {
				var c = a(this).find(".fp-slide");
				c.length ? c.each(function() {
					z(a(this))
				}) : z(a(this))
			});
			a.isFunction(b.afterRender) && b.afterRender.call(this)
		}
		function N() {
			if (!b.autoScrolling) {
				var c = a(window).scrollTop(),
					d = a(".fp-section").map(function() {
						if (a(this).offset().top < c + 100) return a(this)
					}),
					d = d[d.length - 1];
				if (!d.hasClass("active")) {
					var e = a(".fp-section.active").index(".fp-section") + 1;
					F = !0;
					var f = G(d);
					d.addClass("active").siblings().removeClass("active");
					var g = d.data("anchor");
					a.isFunction(b.onLeave) && b.onLeave.call(this, e, d.index(".fp-section") + 1, f);
					a.isFunction(b.afterLoad) && b.afterLoad.call(this, g, d.index(".fp-section") + 1);
					H(g);
					I(g, 0);
					b.anchors.length && !t && (v = g, location.hash = g);
					clearTimeout(O);
					O = setTimeout(function() {
						F = !1
					}, 100)
					console.log("hey");
				};
				
				
			}
		}
		function da(c) {
			var d = c.originalEvent;
			b.autoScrolling && c.preventDefault();
			if (!P(c.target) && (c = a(".fp-section.active"), !t && !p)) if (d = Q(d), w = d.y, A = d.x, c.find(".fp-slides").length && Math.abs(B - A) > Math.abs(x - w)) Math.abs(B - A) > a(window).width() / 100 * b.touchSensitivity && (B > A ? a.fn.fullpage.moveSlideRight() : a.fn.fullpage.moveSlideLeft());
			else if (b.autoScrolling && (d = c.find(".fp-slides").length ? c.find(".fp-slide.active").find(".fp-scrollable") : c.find(".fp-scrollable"), Math.abs(x - w) > a(window).height() / 100 * b.touchSensitivity)) if (x > w) if (0 < d.length) if (C("bottom", d)) a.fn.fullpage.moveSectionDown();
			else return !0;
			else a.fn.fullpage.moveSectionDown();
			else if (w > x) if (0 < d.length) if (C("top", d)) a.fn.fullpage.moveSectionUp();
			else return !0;
			else a.fn.fullpage.moveSectionUp()
		}
		function P(c, d) {
			d = d || 0;
			var e = a(c).parent();
			return d < b.normalScrollElementTouchThreshold && e.is(b.normalScrollElements) ? !0 : d == b.normalScrollElementTouchThreshold ? !1 : P(e, ++d)
		}
		function ea(c) {
			c = Q(c.originalEvent);
			x = c.y;
			B = c.x
		}
		function n(c) {
			if (b.autoScrolling) {
				c = window.event || c;
				c = Math.max(-1, Math.min(1, c.wheelDelta || -c.deltaY || -c.detail));
				var d;
				d = a(".fp-section.active");
				if (!t) if (d = d.find(".fp-slides").length ? d.find(".fp-slide.active").find(".fp-scrollable") : d.find(".fp-scrollable"), 0 > c) if (0 < d.length) if (C("bottom", d)) a.fn.fullpage.moveSectionDown();
				else return !0;
				else a.fn.fullpage.moveSectionDown();
				else if (0 < d.length) if (C("top", d)) a.fn.fullpage.moveSectionUp();
				else return !0;
				else a.fn.fullpage.moveSectionUp();
				return !1
			}
		}
		function R(c) {
			var d = a(".fp-section.active").find(".fp-slides");
			if (d.length && !p) {
				var e = d.find(".fp-slide.active"),
					f = null,
					f = "prev" === c ? e.prev(".fp-slide") : e.next(".fp-slide");
				if (!f.length) {
					if (!b.loopHorizontal) return;
					f = "prev" === c ? e.siblings(":last") : e.siblings(":first")
				}
				p = !0;
				q(d, f)
			}
		}
		function k(c, d, e) {
			var f = {},
				g = c.position();
			if ("undefined" !== typeof g) {
				var g = g.top,
					y = G(c),
					r = c.data("anchor"),
					h = c.index(".fp-section"),
					p = c.find(".fp-slide.active"),
					s = a(".fp-section.active"),
					l = s.index(".fp-section") + 1,
					E = D;
				if (p.length) var n = p.data("anchor"),
					q = p.index();
				if (b.autoScrolling && b.continuousVertical && "undefined" !== typeof e && (!e && "up" == y || e && "down" == y)) {
					e ? a(".fp-section.active").before(s.nextAll(".fp-section")) : a(".fp-section.active").after(s.prevAll(".fp-section").get().reverse());
					u(a(".fp-section.active").position().top);
					var k = s,
						g = c.position(),
						g = g.top,
						y = G(c)
				}
				c.addClass("active").siblings().removeClass("active");
				t = !0;
				"undefined" !== typeof r && S(q, n, r);
				b.autoScrolling ? (f.top = -g, c = "." + T) : (f.scrollTop = g, c = "html, body");
				var m = function() {
						k && k.length && (e ? a(".fp-section:first").before(k) : a(".fp-section:last").after(k), u(a(".fp-section.active").position().top))
					};
				b.css3 && b.autoScrolling ? (a.isFunction(b.onLeave) && !E && b.onLeave.call(this, l, h + 1, y), U("translate3d(0px, -" + g + "px, 0px)", !0), setTimeout(function() {
					m();
					a.isFunction(b.afterLoad) && !E && b.afterLoad.call(this, r, h + 1);
					setTimeout(function() {
						t = !1;
						a.isFunction(d) && d.call(this)
					}, V)
				}, b.scrollingSpeed)) : (a.isFunction(b.onLeave) && !E && b.onLeave.call(this, l, h + 1, y), a(c).animate(f, b.scrollingSpeed, b.easing, function() {
					m();
					a.isFunction(b.afterLoad) && !E && b.afterLoad.call(this, r, h + 1);
					setTimeout(function() {
						t = !1;
						a.isFunction(d) && d.call(this)
					}, V)
				}));
				v = r;
				b.autoScrolling && (H(r), I(r, h))
			}
		}
		function W() {
			if (!F) {
				var c = window.location.hash.replace("#", "").split("/"),
					a = c[0],
					c = c[1],
					b = "undefined" === typeof v,
					f = "undefined" === typeof v && "undefined" === typeof c && !p;
				(a && a !== v && !b || f || !p && J != c) && K(a, c)
			}
		}
		function q(c, d) {
			var e = d.position(),
				f = c.find(".fp-slidesContainer").parent(),
				g = d.index(),
				h = c.closest(".fp-section"),
				r = h.index(".fp-section"),
				k = h.data("anchor"),
				l = h.find(".fp-slidesNav"),
				s = d.data("anchor"),
				m = D;
			if (b.onSlideLeave) {
				var n = h.find(".fp-slide.active").index(),
					q;
				q = n == g ? "none" : n > g ? "left" : "right";
				m || a.isFunction(b.onSlideLeave) && b.onSlideLeave.call(this, k, r + 1, n, q)
			}
			d.addClass("active").siblings().removeClass("active");
			"undefined" === typeof s && (s = g);
			h.hasClass("active") && (b.loopHorizontal || (h.find(".fp-controlArrow.fp-prev").toggle(0 != g), h.find(".fp-controlArrow.fp-next").toggle(!d.is(":last-child"))), S(g, s, k));
			b.css3 ? (e = "translate3d(-" + e.left + "px, 0px, 0px)", c.find(".fp-slidesContainer").toggleClass("fp-easing", 0 < b.scrollingSpeed).css(X(e)), setTimeout(function() {
				m || a.isFunction(b.afterSlideLoad) && b.afterSlideLoad.call(this, k, r + 1, s, g);
				p = !1
			}, b.scrollingSpeed, b.easing)) : f.animate({
				scrollLeft: e.left
			}, b.scrollingSpeed, b.easing, function() {
				m || a.isFunction(b.afterSlideLoad) && b.afterSlideLoad.call(this, k, r + 1, s, g);
				p = !1
			});
			l.find(".active").removeClass("active");
			l.find("li").eq(g).find("a").addClass("active")
		}
		function fa(c, d) {
			var b = 825,
				f = c;
			825 > c || 900 > d ? (900 > d && (f = d, b = 900), b = (100 * f / b).toFixed(2), a("body").css("font-size", b + "%")) : a("body").css("font-size", "100%")
		}
		function I(c, d) {
			b.navigation && (a("#fp-nav").find(".active").removeClass("active"), c ? a("#fp-nav").find('a[href="#' + c + '"]').addClass("active") : a("#fp-nav").find("li").eq(d).find("a").addClass("active"))
		}
		function H(c) {
			b.menu && (a(b.menu).find(".active").removeClass("active"), a(b.menu).find('[data-menuanchor="' + c + '"]').addClass("active"))
		}
		function C(c, a) {
			if ("top" === c) return !a.scrollTop();
			if ("bottom" === c) return a.scrollTop() + 1 + a.innerHeight() >= a[0].scrollHeight
		}
		function G(c) {
			var b = a(".fp-section.active").index(".fp-section");
			c = c.index(".fp-section");
			return b > c ? "up" : "down"
		}
		function z(c) {
			c.css("overflow", "hidden");
			var a = c.closest(".fp-section"),
				e = c.find(".fp-scrollable");
			if (e.length) var f = e.get(0).scrollHeight;
			else f = c.get(0).scrollHeight, b.verticalCentered && (f = c.find(".fp-tableCell").get(0).scrollHeight);
			a = l - parseInt(a.css("padding-bottom")) - parseInt(a.css("padding-top"));
			f > a ? e.length ? e.css("height", a + "px").parent().css("height", a + "px") : (b.verticalCentered ? c.find(".fp-tableCell").wrapInner('<div class="fp-scrollable" />') : c.wrapInner('<div class="fp-scrollable" />'), c.find(".fp-scrollable").slimScroll({
				allowPageScroll: !0,
				height: a + "px",
				size: "10px",
				alwaysVisible: !0
			})) : Y(c);
			c.css("overflow", "")
		}
		function Y(a) {
			a.find(".fp-scrollable").children().first().unwrap().unwrap();
			a.find(".slimScrollBar").remove();
			a.find(".slimScrollRail").remove()
		}
		function Z(a) {
			a.addClass("fp-table").wrapInner('<div class="fp-tableCell" style="height:' + $(a) + 'px;" />')
		}
		function $(a) {
			var d = l;
			if (b.paddingTop || b.paddingBottom) d = a, d.hasClass("fp-section") || (d = a.closest(".fp-section")), a = parseInt(d.css("padding-top")) + parseInt(d.css("padding-bottom")), d = l - a;
			return d
		}
		function U(a, b) {
			h.toggleClass("fp-easing", b);
			h.css(X(a))
		}
		function K(c, b) {
			"undefined" === typeof b && (b = 0);
			var e = isNaN(c) ? a('[data-anchor="' + c + '"]') : a(".fp-section").eq(c - 1);
			c === v || e.hasClass("active") ? aa(e, b) : k(e, function() {
				aa(e, b)
			})
		}
		function aa(a, b) {
			if ("undefined" != typeof b) {
				var e = a.find(".fp-slides"),
					f = e.find('[data-anchor="' + b + '"]');
				f.length || (f = e.find(".fp-slide").eq(b));
				f.length && q(e, f)
			}
		}
		function ga(a, d) {
			a.append('<div class="fp-slidesNav"><ul></ul></div>');
			var e = a.find(".fp-slidesNav");
			e.addClass(b.slidesNavPosition);
			for (var f = 0; f < d; f++) e.find("ul").append('<li><a href="#"><span></span></a></li>');
			e.css("margin-left", "-" + e.width() / 2 + "px");
			e.find("li").first().find("a").addClass("active")
		}
		function S(a, d, e) {
			var f = "";
			b.anchors.length && (a ? ("undefined" !== typeof e && (f = e), "undefined" === typeof d && (d = a), J = d, location.hash = f + "/" + d) : ("undefined" !== typeof a && (J = d), location.hash = e))
		}
		function ha() {
			var a = document.createElement("p"),
				b, e = {
					webkitTransform: "-webkit-transform",
					OTransform: "-o-transform",
					msTransform: "-ms-transform",
					MozTransform: "-moz-transform",
					transform: "transform"
				};
			document.body.insertBefore(a, null);
			for (var f in e) void 0 !== a.style[f] && (a.style[f] = "translate3d(1px,1px,1px)", b = window.getComputedStyle(a).getPropertyValue(e[f]));
			document.body.removeChild(a);
			return void 0 !== b && 0 < b.length && "none" !== b
		}
		function ba() {
			return window.PointerEvent ? {
				down: "pointerdown",
				move: "pointermove"
			} : {
				down: "MSPointerDown",
				move: "MSPointerMove"
			}
		}
		function Q(a) {
			var b = [];
			window.navigator.msPointerEnabled ? (b.y = a.pageY, b.x = a.pageX) : (b.y = a.touches[0].pageY, b.x = a.touches[0].pageX);
			return b
		}
		function u(a) {
			b.css3 ? U("translate3d(0px, -" + a + "px, 0px)", !1) : h.css("top", -a)
		}
		function X(a) {
			return {
				"-webkit-transform": a,
				"-moz-transform": a,
				"-ms-transform": a,
				transform: a
			}
		}
		function ia() {
			u(0);
			a("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove();
			a(".fp-section").css({
				height: "",
				"background-color": "",
				padding: ""
			});
			a(".fp-slide").css({
				width: ""
			});
			h.css({
				height: "",
				position: "",
				"-ms-touch-action": ""
			});
			a(".fp-section, .fp-slide").each(function() {
				Y(a(this));
				a(this).removeClass("fp-table active")
			});
			h.find(".fp-easing").removeClass("fp-easing");
			h.find(".fp-tableCell, .fp-slidesContainer, .fp-slides").each(function() {
				a(this).replaceWith(this.childNodes)
			});
			a("html, body").scrollTop(0);
			h.addClass("fullpage-used")
		}
		b = a.extend({
			verticalCentered: !0,
			resize: !0,
			sectionsColor: [],
			anchors: [],
			scrollingSpeed: 700,
			easing: "easeInQuart",
			menu: !1,
			navigation: !1,
			navigationPosition: "right",
			navigationColor: "#000",
			navigationTooltips: [],
			slidesNavigation: !1,
			slidesNavPosition: "bottom",
			controlArrowColor: "#fff",
			loopBottom: !1,
			loopTop: !1,
			loopHorizontal: !0,
			autoScrolling: !0,
			scrollOverflow: !1,
			css3: !1,
			paddingTop: 0,
			paddingBottom: 0,
			fixedElements: null,
			normalScrollElements: null,
			keyboardScrolling: !0,
			touchSensitivity: 5,
			continuousVertical: !1,
			animateAnchor: !0,
			normalScrollElementTouchThreshold: 5,
			sectionSelector: ".section",
			slideSelector: ".slide",
			afterLoad: null,
			onLeave: null,
			afterRender: null,
			afterResize: null,
			afterSlideLoad: null,
			onSlideLeave: null
		}, b);
		b.continuousVertical && (b.loopTop || b.loopBottom) && (b.continuousVertical = !1, console && console.log && console.log("Option loopTop/loopBottom is mutually exclusive with continuousVertical; continuousVertical disabled"));
		var V = 600;
		a.fn.fullpage.setAutoScrolling = function(c) {
			b.autoScrolling = c;
			c = a(".fp-section.active");
			b.autoScrolling ? (a("html, body").css({
				overflow: "hidden",
				height: "100%"
			}), c.length && u(c.position().top)) : (a("html, body").css({
				overflow: "auto",
				height: "auto"
			}), u(0), a("html, body").scrollTop(c.position().top))
		};
		a.fn.fullpage.setScrollingSpeed = function(a) {
			b.scrollingSpeed = a
		};
		a.fn.fullpage.setMouseWheelScrolling = function(a) {
			a ? document.addEventListener ? (document.addEventListener("mousewheel", n, !1), document.addEventListener("wheel", n, !1)) : document.attachEvent("onmousewheel", n) : document.addEventListener ? (document.removeEventListener("mousewheel", n, !1), document.removeEventListener("wheel", n, !1)) : document.detachEvent("onmousewheel", n)
		};
		a.fn.fullpage.setAllowScrolling = function(b) {
			b ? (a.fn.fullpage.setMouseWheelScrolling(!0), L && (MSPointer = ba(), a(document).off("touchstart " + MSPointer.down).on("touchstart " + MSPointer.down, ea), a(document).off("touchmove " + MSPointer.move).on("touchmove " + MSPointer.move, da))) : (a.fn.fullpage.setMouseWheelScrolling(!1), L && (MSPointer = ba(), a(document).off("touchstart " + MSPointer.down), a(document).off("touchmove " + MSPointer.move)))
		};
		a.fn.fullpage.setKeyboardScrolling = function(a) {
			b.keyboardScrolling = a
		};
		var p = !1,
			L = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|Windows Phone|Tizen|Bada)/),
			h = a(this),
			l = a(window).height(),
			t = !1,
			D = !1,
			v, J, T = "fullpage-wrapper";
		a.fn.fullpage.setAllowScrolling(!0);
		b.css3 && (b.css3 = ha());
		a(this).length ? (h.css({
			height: "100%",
			position: "relative",
			"-ms-touch-action": "none"
		}), h.addClass(T)) : console.error("Error! Fullpage.js needs to be initialized with a selector. For example: $('#myContainer').fullpage();");
		a(b.sectionSelector).each(function() {
			a(this).addClass("fp-section")
		});
		a(b.slideSelector).each(function() {
			a(this).addClass("fp-slide")
		});
		if (b.navigation) {
			a("body").append('<div id="fp-nav"><ul></ul></div>');
			var m = a("#fp-nav");
			m.css("color", b.navigationColor);
			m.addClass(b.navigationPosition)
		}
		a(".fp-section").each(function(c) {
			var d = a(this),
				e = a(this).find(".fp-slide"),
				f = e.length;
			c || 0 !== a(".fp-section.active").length || a(this).addClass("active");
			a(this).css("height", l + "px");
			(b.paddingTop || b.paddingBottom) && a(this).css("padding", b.paddingTop + " 0 " + b.paddingBottom + " 0");
			"undefined" !== typeof b.sectionsColor[c] && a(this).css("background-color", b.sectionsColor[c]);
			"undefined" !== typeof b.anchors[c] && a(this).attr("data-anchor", b.anchors[c]);
			if (b.navigation) {
				var g = "";
				b.anchors.length && (g = b.anchors[c]);
				c = b.navigationTooltips[c];
				"undefined" === typeof c && (c = "");
				m.find("ul").append('<li data-tooltip="' + c + '"><a href="#' + g + '"><span></span></a></li>')
			}
			if (1 < f) {
				var g = 100 * f,
					h = 100 / f;
				e.wrapAll('<div class="fp-slidesContainer" />');
				e.parent().wrap('<div class="fp-slides" />');
				a(this).find(".fp-slidesContainer").css("width", g + "%");
				a(this).find(".fp-slides").after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>');
				"#fff" != b.controlArrowColor && (a(this).find(".fp-controlArrow.fp-next").css("border-color", "transparent transparent transparent " + b.controlArrowColor), a(this).find(".fp-controlArrow.fp-prev").css("border-color", "transparent " + b.controlArrowColor + " transparent transparent"));
				b.loopHorizontal || a(this).find(".fp-controlArrow.fp-prev").hide();
				b.slidesNavigation && ga(a(this), f);
				e.each(function(c) {
					c || 0 != d.find(".fp-slide.active").length || a(this).addClass("active");
					a(this).css("width", h + "%");
					b.verticalCentered && Z(a(this))
				})
			} else b.verticalCentered && Z(a(this))
		}).promise().done(function() {
			a.fn.fullpage.setAutoScrolling(b.autoScrolling);
			var c = a(".fp-section.active").find(".fp-slide.active");
			if (c.length && (0 != a(".fp-section.active").index(".fp-section") || 0 == a(".fp-section.active").index(".fp-section") && 0 != c.index())) {
				var d = b.scrollingSpeed;
				a.fn.fullpage.setScrollingSpeed(0);
				q(a(".fp-section.active").find(".fp-slides"), c);
				a.fn.fullpage.setScrollingSpeed(d)
			}
			b.fixedElements && b.css3 && a(b.fixedElements).appendTo("body");
			b.navigation && (m.css("margin-top", "-" + m.height() / 2 + "px"), m.find("li").eq(a(".fp-section.active").index(".fp-section")).find("a").addClass("active"));
			b.menu && b.css3 && a(b.menu).closest(".fullpage-wrapper").length && a(b.menu).appendTo("body");
			b.scrollOverflow ? (h.hasClass("fullpage-used") && M(), a(window).on("load", M)) : a.isFunction(b.afterRender) && b.afterRender.call(this);
			c = window.location.hash.replace("#", "").split("/")[0];
			c.length && (d = a('[data-anchor="' + c + '"]'), !b.animateAnchor && d.length && (b.autoScrolling ? u(d.position().top) : (u(0), a("html, body").scrollTop(d.position().top)), H(c), I(c, null), a.isFunction(b.afterLoad) && b.afterLoad.call(this, c, d.index(".fp-section") + 1), d.addClass("active").siblings().removeClass("active")));
			a(window).on("load", function() {
				var a = window.location.hash.replace("#", "").split("/"),
					b = a[0],
					a = a[1];
				b && K(b, a)
			})
		});
		var O, F = !1;
		a(window).on("scroll", N);
		var x = 0,
			B = 0,
			w = 0,
			A = 0;
			
		
		
		a.fn.fullpage.moveSectionUp = function() {
			var c = a(".fp-section.active").prev(".fp-section");
			c.length || !b.loopTop && !b.continuousVertical || (c = a(".fp-section").last());
			c.length && k(c, null, !0);
		};
		a.fn.fullpage.moveSectionDown = function() {
			var c = a(".fp-section.active").next(".fp-section");
			c.length || !b.loopBottom && !b.continuousVertical || (c = a(".fp-section").first());
			(0 < c.length || !c.length && (b.loopBottom || b.continuousVertical)) && k(c, null, !1)
		};
		a.fn.fullpage.moveTo = function(b, d) {
			var e = "",
				e = isNaN(b) ? a('[data-anchor="' + b + '"]') : a(".fp-section").eq(b - 1);
			"undefined" !== typeof d ? K(b, d) : 0 < e.length && k(e)
		};
		a.fn.fullpage.moveSlideRight = function() {
			R("next")
		};
		a.fn.fullpage.moveSlideLeft = function() {
			R("prev")
		};
		a(window).on("hashchange", W);
		a(document).keydown(function(c) {
			if (b.keyboardScrolling && !t) switch (c.which) {
			case 38:
			case 33:
				a.fn.fullpage.moveSectionUp();
				break;
			case 40:
			case 34:
				a.fn.fullpage.moveSectionDown();
				break;
			case 36:
				a.fn.fullpage.moveTo(1);
				break;
			case 35:
				a.fn.fullpage.moveTo(a(".fp-section").length);
				break;
			case 37:
				a.fn.fullpage.moveSlideLeft();
				break;
			case 39:
				a.fn.fullpage.moveSlideRight()
			}
		});
		a(document).on("click", "#fp-nav a", function(b) {
			b.preventDefault();
			b = a(this).parent().index();
			k(a(".fp-section").eq(b))
		});
		a(document).on({
			mouseenter: function() {
				var c = a(this).data("tooltip");
				a('<div class="fp-tooltip ' + b.navigationPosition + '">' + c + "</div>").hide().appendTo(a(this)).fadeIn(200)
			},
			mouseleave: function() {
				a(this).find(".fp-tooltip").fadeOut().remove()
			}
		}, "#fp-nav li");
		b.normalScrollElements && (a(document).on("mouseover", b.normalScrollElements, function() {
			a.fn.fullpage.setMouseWheelScrolling(!1)
		}), a(document).on("mouseout", b.normalScrollElements, function() {
			a.fn.fullpage.setMouseWheelScrolling(!0)
		}));
		a(".fp-section").on("click", ".fp-controlArrow", function() {
			a(this).hasClass("fp-prev") ? a.fn.fullpage.moveSlideLeft() : a.fn.fullpage.moveSlideRight()
		});
		a(".fp-section").on("click", ".toSlide", function(b) {
			b.preventDefault();
			b = a(this).closest(".fp-section").find(".fp-slides");
			b.find(".fp-slide.active");
			var d = null,
				d = b.find(".fp-slide").eq(a(this).data("index") - 1);
			0 < d.length && q(b, d)
		});
		var ca;
		a(window).resize(function() {
			L ? a.fn.fullpage.reBuild() : (clearTimeout(ca), ca = setTimeout(a.fn.fullpage.reBuild, 500))
		});
		a.fn.fullpage.reBuild = function() {
			D = !0;
			var c = a(window).width();
			l = a(window).height();
			b.resize && fa(l, c);
			a(".fp-section").each(function() {
				parseInt(a(this).css("padding-bottom"));
				parseInt(a(this).css("padding-top"));
				b.verticalCentered && a(this).find(".fp-tableCell").css("height", $(a(this)) + "px");
				a(this).css("height", l + "px");
				if (b.scrollOverflow) {
					var c = a(this).find(".fp-slide");
					c.length ? c.each(function() {
						z(a(this))
					}) : z(a(this))
				}
				c = a(this).find(".fp-slides");
				c.length && q(c, c.find(".fp-slide.active"))
			});
			a(".fp-section.active").position();
			c = a(".fp-section.active");
			c.index(".fp-section") && k(c);
			D = !1;
			a.isFunction(b.afterResize) && b.afterResize.call(this)
		};
		a(document).on("click", ".fp-slidesNav a", function(b) {
			b.preventDefault();
			b = a(this).closest(".fp-section").find(".fp-slides");
			var d = b.find(".fp-slide").eq(a(this).closest("li").index());
			q(b, d)
		});
		a.fn.fullpage.destroy = function(c) {
			a.fn.fullpage.setAutoScrolling(!1);
			a.fn.fullpage.setAllowScrolling(!1);
			a.fn.fullpage.setKeyboardScrolling(!1);
			a(window).off("scroll", N).off("hashchange", W);
			a(document).off("click", "#fp-nav a").off("mouseenter", "#fp-nav li").off("mouseleave", "#fp-nav li").off("click", ".fp-slidesNav a").off("mouseover", b.normalScrollElements).off("mouseout", b.normalScrollElements);
			a(".fp-section").off("click", ".fp-controlArrow").off("click", ".toSlide");
			c && ia()
		}
	}
})(jQuery);