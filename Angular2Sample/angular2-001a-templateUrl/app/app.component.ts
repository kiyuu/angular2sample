import { Component } from "@angular/core";

// コンポーネントのメタデータを設定（Decorator）
@Component({
  selector: "my-app",
  templateUrl:"app/template.html"  // app/template.htmlにHTMLが記述されている
})
export class AppComponent {
  // バインディング変数
  message:string = "こんにちは！";
}