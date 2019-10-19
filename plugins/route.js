import iView from "iview"
export default({app})=>{
    app.router.beforeEach((to,from,next)=>{
        iView.LoadingBar.start()
        console.info("start",to,from,next)
    });
    app.router.afterEach((to,from)=>{
        console.info("end",to,from)
        iView.LoadingBar.finish()
        window.scrollTo(0, 0)
    })
}