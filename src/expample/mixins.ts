// class Disposable {
//     isDisposed: boolean;
//     constructor() {
//         this.isDisposed = false
//     }
//     dispose() {
//         this.isDisposed = true
//     }
// }
// class Activatable{
//     isActive: boolean;
//     constructor() {
//         this.isActive = false
//     }
//     activate() {
//         this.isActive = true
//     }
//     deactivate() {
//         this.isActive = false
//     }
// }
//
//
// class SmartObject implements Disposable, Activatable {
//     constructor() {
//        setInterval(() => {
//            console.info(this.isActive + ':' + this.isDisposed)
//        },500)
//     }
//     interact() {
//         this.activate();
//     }
//
//
// }
