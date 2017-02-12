import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <h1>Angular 2 サンプル3</h1>
    <h3>ディレクティブ（繰り返し・条件分岐）</h3>
    <ul>
      <!-- *ngFor属性で繰り返し ...（1）-->
      <li *ngFor="let phone of phones">
        <!-- phoneオブジェクトの値を参照 ...（2）-->
        {{phone.name}}は{{phone.vendor}}の製品です。
        <!-- *ngIf属性で条件分岐 ...（3）-->
        <span *ngIf="phone.locale=='JP'" [ngStyle]="{'color':'red'}">
          ※国産です
        </span>
      </li>
    </ul>
  `
})
export class AppComponent {
  // 表示するデータ
  phones = [
    {"name":"Xperia Z5", "vendor":"ソニー", "locale": "JP"},
    {"name":"Galaxy S7 edge", "vendor":"サムスン", "locale": "KR"},
    {"name":"Zenfone 3", "vendor":"エイスース", "locale": "TW"},
    {"name":"HUAWEI P9", "vendor":"ファーウェイ", "locale": "CN"},
    {"name":"arrows M03", "vendor":"富士通", "locale": "JP"},
  ];
}