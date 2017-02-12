import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <h1>Angular 2 サンプル2</h1>

    <h3>イベント</h3>
    <!-- (click)属性でクリックイベントを定義 -->
    <button (click)="onClickButton()">ボタン1</button>
    <button (click)="onClickButtonWithEvent($event)">ボタン2</button>
    <button (click)="onClickButtonWithEvent($event)">ボタン3</button>
  `
})
export class AppComponent {
  /**
   * イベント引数なしのハンドラ ...（1）
   */
  onClickButton() {
    alert("ボタンが押されました");
  }
  /**
   * イベント引数ありのハンドラ ...（2）
   */
  onClickButtonWithEvent(event:any) {
    // targetプロパティでイベントを発生させたオブジェクトを取得 ...（3）
    var button = event.target;
    // ボタンのラベルをtextContentプロパティから取得して表示 ...（4）
    alert("ボタン「" + button.textContent + "」が押されました");
  }
}