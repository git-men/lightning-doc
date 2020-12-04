(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return o}));var a=n(3),i=n(7),l=(n(0),n(95)),c={id:"start",title:"\u5feb\u901f\u5f00\u59cb"},r={unversionedId:"start",id:"start",isDocsHomePage:!1,title:"\u5feb\u901f\u5f00\u59cb",description:"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u9700\u8981\u5148\u5b66\u4e60 Python \u4e0e Django",source:"@site/docs/start.md",slug:"/start",permalink:"/lightning-doc/docs/start",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/start.md",version:"current",sidebar:"someSidebar",previous:{title:"lightning\u7b80\u4ecb",permalink:"/lightning-doc/docs/"},next:{title:"\u793a\u4f8b\u5e94\u7528\uff1aCRM -- \u5ba2\u6237\u5173\u7cfb\u7ba1\u7406",permalink:"/lightning-doc/docs/crm"}},b=[{value:"\u51c6\u5907",id:"\u51c6\u5907",children:[]},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"Migrate",id:"migrate",children:[]},{value:"\u751f\u6210\u7ba1\u7406\u754c\u9762",id:"\u751f\u6210\u7ba1\u7406\u754c\u9762",children:[]},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",children:[]}],p={rightToc:b};function o(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u9700\u8981\u5148\u5b66\u4e60 ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.python.org/"}),"Python")," \u4e0e ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.djangoproject.com/"}),"Django")),Object(l.b)("h3",{id:"\u51c6\u5907"},"\u51c6\u5907"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Python")," \u6700\u4f4e\u9700\u8981 3.6 \u7248\u672c"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Django")," \u9700\u8981 2.2.9 \u7248\u672c\uff0cDjango 3.x \u672a\u5b8c\u6574\u6d4b\u8bd5\uff0c\u6682\u4e0d\u5efa\u8bae\u4f7f\u7528\u3002")),Object(l.b)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(l.b)("p",null,"\u65b9\u6cd5\u4e00\uff1a\u901a\u8fc7pip \u5b89\u88c5 lightning"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"pip install lightning\n")),Object(l.b)("p",null,"\u65b9\u6cd5\u4e8c\uff1a\u4ece\u4ee3\u7801\u5b89\u88c5 lightning"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ git clone git@gitee.com:gitmen/lightning.git\n$ cd lightning\n$ python setpu.py install\n")),Object(l.b)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\u5728 ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.djangoproject.com/en/2.2/ref/settings/"}),"Django settings")," \u4e2d\u5bfc\u5165",Object(l.b)("inlineCode",{parentName:"li"},"lightning.settings"),"\u4e0b\u7684\u914d\u7f6e")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from lightning.settings import *\n")),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"\u5728 ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.djangoproject.com/en/2.2/ref/settings/"}),"Django settings")," \u7684",Object(l.b)("inlineCode",{parentName:"li"},"INSTALLED_APPS"),"\u4e2d\u6dfb\u52a0",Object(l.b)("inlineCode",{parentName:"li"},"lightning.APPS"))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"import lightning\nINSTALLED_APPS += lightning.APPS\n")),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"\u914d\u7f6e\u6839\u8def\u7531\uff0c\u5728\u9879\u76ee\u7684urls.py\u4e2d\uff0c\u628a",Object(l.b)("inlineCode",{parentName:"li"},"lightning.urls"),"\u7684\u8def\u7531\u6dfb\u52a0\u5230\u6700\u540e\u4e00\u884c\u3002")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from django.urls import path, include\n\nurlpatterns = [\n    # ...\n    path('', include('lightning.urls')),  # \u6dfb\u52a0\u5230\u6700\u540e\u4e00\u884c\n]\n")),Object(l.b)("h3",{id:"migrate"},"Migrate"),Object(l.b)("p",null,"\u9700\u8981migrate\u4e00\u6b21\uff0c\u4e3alightning\u5c31\u7528\u521b\u5efa\u6570\u636e\u8868\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"./manage.py migrate\n")),Object(l.b)("h3",{id:"\u751f\u6210\u7ba1\u7406\u754c\u9762"},"\u751f\u6210\u7ba1\u7406\u754c\u9762"),Object(l.b)("p",null,"\u4f7f\u7528",Object(l.b)("inlineCode",{parentName:"p"},"./manage.py light <app_label>")," \u751f\u6210\u6307\u5b9a\u5e94\u7528\u7684\u9875\u9762\u914d\u7f6e\u5185\u5bb9"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"./manage.py light my_app\n")),Object(l.b)("h3",{id:"\u8fd0\u884c"},"\u8fd0\u884c"),Object(l.b)("p",null,"\u4f7f\u7528",Object(l.b)("inlineCode",{parentName:"p"},"./manage.py runserver")," \u8fd0\u884cDjango\u9879\u76ee"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"./manage.py runserver\n")),Object(l.b)("p",null,"\u6b64\u65f6\uff0c\u901a\u8fc7\u6d4f\u89c8\u5668\u6253\u5f00 http://localhost:8000/lightning \u5373\u53ef\u8fdb\u5165\u7ba1\u7406\u754c\u9762\uff0c\u4f7f\u7528\u7ba1\u7406\u5458\u5e10\u53f7\u767b\u5f55\u5373\u53ef\u3002\u82e5\u672a\u6709\u5e10\u53f7\uff0c\u4f7f\u7528",Object(l.b)("inlineCode",{parentName:"p"},"./manage.py createsuperuser")," \u547d\u4ee4\u521b\u5efa\u4e00\u4e2a\u3002"))}o.isMDXComponent=!0}}]);