import dongDong from "./App"
const Dong = {
    install(Vue,options){
        Vue.component(dongDong.name,dongDong)
    }
}
export default Dong