(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a7066d8"],{"0b81":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("CVselect",{attrs:{name:"Camera",list:e.cameraList},model:{value:e.currentCameraIndex,callback:function(t){e.currentCameraIndex=t},expression:"currentCameraIndex"}}),a("CVselect",{attrs:{name:"Resulotion",list:e.resolutionList},model:{value:e.cameraSettings.resolution,callback:function(t){e.$set(e.cameraSettings,"resolution",t)},expression:"cameraSettings.resolution"}}),a("CVselect",{attrs:{name:"Stream Resulotion",list:["1:1","1:2","1:4","1:6"]},model:{value:e.cameraSettings.streamDivisor,callback:function(t){e.$set(e.cameraSettings,"streamDivisor",t)},expression:"cameraSettings.streamDivisor"}}),a("CVnumberinput",{attrs:{name:"Diagonal FOV"},model:{value:e.cameraSettings.fov,callback:function(t){e.$set(e.cameraSettings,"fov",t)},expression:"cameraSettings.fov"}}),a("v-btn",{staticStyle:{"margin-top":"10px"},attrs:{small:"",color:"#4baf62"},on:{click:e.sendCameraSettings}},[e._v("Save Camera Settings")])],1)},n=[],r=a("8384"),i=a("9696"),l={name:"CameraSettings",components:{CVselect:r["a"],CVnumberinput:i["a"]},data(){return{}},methods:{sendCameraSettings(){this.handleInput("cameraSettings",this.cameraSettings)}},computed:{currentCameraIndex:{get(){return this.$store.state.currentCameraIndex},set(e){this.$store.commit("currentCameraIndex",e)}},cameraList:{get(){return this.$store.state.cameraList},set(e){this.$store.commit("cameraList",e)}},resolutionList:{get(){return this.$store.state.resolutionList}},cameraSettings:{get(){return this.$store.state.cameraSettings},set(e){this.$store.commit("cameraSettings",e)}}}},c=l,o=a("2877"),m=a("6544"),u=a.n(m),d=a("8336"),p=Object(o["a"])(c,s,n,!1,null,"04c1992d",null);t["default"]=p.exports;u()(p,{VBtn:d["a"]})},9696:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-row",{attrs:{dense:"",align:"center"}},[a("v-col",{attrs:{cols:2}},[a("span",[e._v(e._s(e.name))])]),a("v-col",[a("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"70px"},attrs:{dark:"","hide-details":"","single-line":"",type:"number"},model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}})],1)],1)],1)},n=[],r={name:"NumberInput",props:["name","value"],data(){return{}},computed:{localValue:{get(){return this.value},set(e){this.$emit("input",parseInt(e))}}}},i=r,l=a("2877"),c=a("6544"),o=a.n(c),m=a("62ad"),u=a("0fd9"),d=a("8654"),p=Object(l["a"])(i,s,n,!1,null,"10e05c36",null);t["a"]=p.exports;o()(p,{VCol:m["a"],VRow:u["a"],VTextField:d["a"]})}}]);
//# sourceMappingURL=chunk-1a7066d8.1b23c0c0.js.map