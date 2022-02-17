(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{256:function(t,a,e){"use strict";e.r(a);var o=e(0),r=Object(o.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"upgrade-from-5-1-to-5-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-from-5-1-to-5-2"}},[t._v("#")]),t._v(" Upgrade from 5.1 to 5.2")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("IMPORTANT")]),t._v(" "),e("p",[t._v("Laratrust 5.2 requires Laravel >= 5.6 and php >= 7.1.")])]),t._v(" "),e("p",[t._v("In order to upgrade from Laratrust 5.1 to 5.2 you have to follow these steps:")]),t._v(" "),e("ol",[e("li",[t._v("Change your "),e("code",[t._v("composer.json")]),t._v(" to require the 5.2 version of Laratrust:")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"santigarcor/laratrust"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5.2.*"')]),t._v("\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[t._v("Run "),e("code",[t._v("composer update")]),t._v(" to update the source code.")])]),t._v(" "),e("li",[e("p",[t._v("Run "),e("code",[t._v("php artisan config:clear")]),t._v(" and "),e("code",[t._v("php artisan cache:clear")]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Update your "),e("code",[t._v("config/laratrust.php")]),t._v(" in the cache ttl from 60 to 3600 or the value you had but now put it in seconds.")])]),t._v(" "),e("li",[e("p",[t._v("Run "),e("code",[t._v("composer dump-autoload")]),t._v(".")])])]),t._v(" "),e("p",[t._v("Now you can use the 5.2 version without any problem.")])])}],!1,null,null,null);a.default=r.exports}}]);