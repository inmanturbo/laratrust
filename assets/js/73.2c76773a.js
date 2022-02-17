(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{208:function(e,t,r){"use strict";r.r(t);var a=r(0),o=Object(a.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"troubleshooting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("If you make changes directly to the Laratrust tables and when you run your code the changes are not reflected, please clear your application cache using::")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("php artisan cache:clear\n")])])]),r("p",[e._v("Remember that Laratrust uses cache in the roles and permissions checks.")]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("If you encounter an error when doing the migration that looks like::")]),e._v(" "),r("div",{staticClass:"language-log extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("SQLSTATE[HY000]: General error: 1005 Can't create table 'laravelbootstrapstarter.#sql-42c_f8' (errno: 150)\n    (SQL: alter table `role_user` add constraint role_user_user_id_foreign foreign key (`user_id`)\n    references `users` (`id`)) (Bindings: array ())\n")])])]),r("p",[e._v("Then it is likely that the "),r("code",[e._v("id")]),e._v(" column in your user table does not match the "),r("code",[e._v("user_id")]),e._v(" column in "),r("code",[e._v("role_user")]),e._v(".\nMake sure both are "),r("code",[e._v("INT(10)")]),e._v(".")]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("When trying to use the LaratrustUserTrait methods, you encounter the error which looks like::")]),e._v(" "),r("pre",[r("code",[e._v("Class name must be a valid object or a string\n")])]),e._v(" "),r("p",[e._v("Then probably you do not have published Laratrust assets or something went wrong when you did it.\nFirst of all check that you have the "),r("code",[e._v("laratrust.php")]),e._v(" file in your "),r("code",[e._v("app/config")]),e._v(" directory.\nIf you don't, then try "),r("code",[e._v("php artisan vendor:publish")]),e._v(" and, if it does not appear, manually copy the "),r("code",[e._v("/vendor/santigarcor/laratrust/src/config/config.php")]),e._v(" file in your config directory and rename it "),r("code",[e._v("laratrust.php")]),e._v(".")]),e._v(" "),r("hr")])}],!1,null,null,null);t.default=o.exports}}]);