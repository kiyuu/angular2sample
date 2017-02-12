import { Component } from "@angular/core";

// コンポーネントのメタデータを設定（Decorator） ...（1）
@Component({
  selector: "my-app",
  template: `
    <h1>Angular 2 サンプル1</h1>

    <h3>片方向データバインディング</h3>
    <!-- {{ }}記述で片方向データバインディング ...（2）-->
    <p>{{message}}</p>

    <h3>双方向データバインディング</h3>
    <!-- [(ngModel)]属性で双方向データバインディング ...（3）-->
    <input type="text" [(ngModel)]="message">
  `
})
export class AppComponent {
  // バインディング変数 ...（4）
  message:string = "こんにちは！";
}