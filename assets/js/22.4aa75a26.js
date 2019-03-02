(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{171:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("At some point while making an extension, you might want to read some of the forum's settings or store certain settings specific to your extension. Thankfully, Flarum makes this very easy.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Reading or changing settings can be done using an implementation of the "),a("code",[t._v("SettingsRepositoryInterface")]),t._v(".\nBecause Flarum uses "),a("a",{attrs:{href:"https://laravel.com/docs/container",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel's service container"),a("OutboundLink")],1),t._v(" (or IoC container), you don't need to worry about where to obtain such a repository, or how to instantiate one.\nInstead, you can rely on the container to instantiate your class and inject the correct dependencies.")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),a("p",[t._v("First, setup your admin JS as discussed "),a("router-link",{attrs:{to:"./quick-start.html#environment-setup"}},[t._v("here")]),t._v(" (replacing forum with admin).")],1),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),a("p",[t._v("Always remember to use "),a("router-link",{attrs:{to:"./i18n.html"}},[t._v("internationalizations")]),t._v("!")],1),t._v(" "),t._m(24),t._v(" "),a("p",[a("em",[t._v("Oh? What's this?")]),t._v(' When you click "Save Settings" the (settings) '),a("a",{attrs:{href:"https://github.com/flarum/core/blob/master/src/Settings/Event/Saved.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("Saved"),a("OutboundLink")],1),t._v(" event is dispatched? How cool!")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#settings","aria-hidden":"true"}},[this._v("#")]),this._v(" Settings")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"the-settings-repository"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-settings-repository","aria-hidden":"true"}},[this._v("#")]),this._v(" The Settings Repository")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token php language-php"}},[a("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("acme"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("HelloWorld"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ExampleDir")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("Flarum"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Settings"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("SettingsRepositoryInterface")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ClassInterfacesWithSettings")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/**\n     * @var SettingsRepositoryInterface\n     */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$settings")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("__construct")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SettingsRepositoryInterface "),a("span",{attrs:{class:"token variable"}},[t._v("$settings")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token variable"}},[t._v("$this")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token property"}},[t._v("settings")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$settings")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Great! Now the "),s("code",[this._v("SettingsRepositoryInterface")]),this._v(" is available through "),s("code",[this._v("$this->settings")]),this._v(" in our class.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"reading-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reading-settings","aria-hidden":"true"}},[this._v("#")]),this._v(" Reading Settings")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("To read settings, all we have to do is use the repository's "),s("code",[this._v("get()")]),this._v(" function:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("$this->settings->get('forum_title')")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("get()")]),this._v(" function accepts two arguments:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("The name of the setting you are trying to read.")]),this._v(" "),s("li",[this._v("(Optional) A default value if no value has been stored for such a setting. By default, this will be "),s("code",[this._v("null")]),this._v(".")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"storing-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#storing-settings","aria-hidden":"true"}},[this._v("#")]),this._v(" Storing Settings")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Storing settings ist just as easy, use the "),s("code",[this._v("set()")]),this._v(" function:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("$this->settings->set('forum_title', 'Super Awesome Forum')")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("set")]),this._v(" function also accepts two arguments:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("The name of the setting you are trying to change.")]),this._v(" "),s("li",[this._v("The value you want to store for this setting.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"other-functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-functions","aria-hidden":"true"}},[this._v("#")]),this._v(" Other Functions")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("all()")]),this._v(" function returns an array of all known settings.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("delete($name)")]),this._v(" function lets you remove a named setting.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"a-frontend-for-your-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-frontend-for-your-settings","aria-hidden":"true"}},[this._v("#")]),this._v(" A Frontend for Your Settings")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"settingsmodal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#settingsmodal","aria-hidden":"true"}},[this._v("#")]),this._v(" SettingsModal")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You'll likely want to allow a forum admin to change a setting related to your extension to their liking. This can be achieved through the "),s("code",[this._v("SettingsModal")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v('We will continue to use the "Hello World" example, but your '),s("code",[this._v("main.js")]),this._v(" should look something like this:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-jsx harmony extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" HelloWorldSettingsModal "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"./components/HelloWorldSettingsModal"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\napp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("initializers"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'acme-hello-world'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    app"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extensionSettings"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'acme-hello-world'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" app"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("modal"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("show")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("HelloWorldSettingsModal")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Then create a "),s("code",[this._v("components")]),this._v(" folder in the same directory as your "),s("code",[this._v("main.js")]),this._v(". Next, a file called "),s("code",[this._v("HelloWorldSettingsModal.js")]),this._v(":")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-jsx harmony extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SettingsModal "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'flarum/components/SettingsModal'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("HelloWorldSettingsModal")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("SettingsModal")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("className")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Modal--small'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token function"}},[t._v("title")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" app"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("translator"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("trans")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'acme-helloworld.admin.settings.title'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token function"}},[t._v("form")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("className")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Form-group"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("\n                ")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("label")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("app"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("translator"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("trans")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'acme-helloworld.admin.settings.firstSetting'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("label")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("\n                ")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("className")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("FormControl"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("bidi")]),a("span",{attrs:{class:"token script language-javascript"}},[a("span",{attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setting")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'acme.helloworld.firstSetting'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("\n            ")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n            "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("className")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Form-group"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("\n                ")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("label")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("app"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("translator"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("trans")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'acme-helloworld.admin.settings.secondSetting'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("label")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("\n                ")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("className")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("FormControl"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("bidi")]),a("span",{attrs:{class:"token script language-javascript"}},[a("span",{attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setting")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'acme.helloworld.secondSetting'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("\n            ")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Each "),s("code",[this._v("Form-group")]),this._v(" should contain an individual input. The "),s("code",[this._v("bidi")]),this._v(' property on the input corresponds to the setting on the Settings table that the input will modify. It will be automatically propagated with the current settings value, and it will change the value once "Save Settings" button is clicked.')])}],!1,null,null,null);e.options.__file="settings.md";s.default=e.exports}}]);