import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  styles: [`
    /* 1回以上選択された場合 */
    .ng-touched {
      background:#afafaf
    }
    /* 1回も選択されてない場合 */
    .ng-untouched {
      background:#ffffff
    }
    /* 値が変更された場合 */
    .ng-dirty {
      font-style:italic;
    }
    /* 値が変更されていない */
    .ng-pristine {
      font-weight:normal;
    }
    /* バリデーターが正しい値と判断 */
    .ng-valid {
      border:#000000 2px solid;
    }
    /* バリデーターが誤った値と判断 */
    .ng-invalid {
      border:#ff0000 2px solid;
    }
  `],
  template: `
    <h1>Angular 2 サンプル4</h1>
    <h3>フォームとバリデーター</h3>

    <!-- ngForm形式でフォームを記述 ...（1）-->
    <form #myForm="ngForm" (ngSubmit)="onSubmitForm(myForm)" novalidate>

      <h4>名前</h4>
      <!-- 必須バリデーター ...（2）-->
      <input type="text" name="familyName"
        [(ngModel)]="formData.familyName" required>
      <input type="text" name="givenName"
        [(ngModel)]="formData.givenName" required>

      <h4>年齢</h4>
      <!-- パターンバリデーター ...（3）-->
      <input type="text" name="age"
        [(ngModel)]="formData.age" pattern="1?[0-9]{0,2}">歳

      <h4>趣味</h4>
      <!-- 最短長バリデーター ...（4）-->
      <input type="text" name="hobby"
        [(ngModel)]="formData.hobby" minlength="4">

      <div style="margin-top:20px">
        <button type="submit">フォーム送信</button>
      </div>
    </form>
  `
})
export class AppComponent {
  // フォームの初期値
  formData = {
    familyName: "山田",
    givenName: "太郎",
    age: 40,
    hobby: "映画鑑賞"
  };

  /**
   * サブミット時の処理
   */
  onSubmitForm(form) {
    // フォームが誤った値の場合はエラー表示してサブミット中止
    if (!form.valid) {
      alert("Validatorエラー発生");
      return false;
    }
    // フォームが正しい値の場合はサブミット
    form.submit();
  }
}