# aidai
MindARを使った画像トレッキングです<br>
URLに遷移し、ターゲット画像を認識すると別の画像が表示されます<br>
このコードはchat gptを使って数秒で作成されたコードです<br>
https://jirochanf.github.io/aidai/kantan.html<br>
<p align="center">
<a href="https://jirochanf.github.io/aidai/kantan.html"><img src="./barcero.jpg" alt="MindArを利用したWebAR" width="700" height="365"></a>
</p>

ファイル構成
aidai/<br>
├── kantan.html<br>
├── targets_barcero.mind<br>
└── seikai.jpg<br>

ターゲットスキャン中にオーバーレイ画像を表示する<br>
chatgptがkantan.htmlを修正<br>
https://jirochanf.github.io/aidai/k_overl.html<br>

<head>
  <style>
      #example-scanning-overlay {
      }
      #example-scanning-overlay.hidden {
        display: none;
      }
      ...
  </style>
</head>
<body>
  <div id="example-scanning-overlay" class="hidden">
    ...
  </div>
  <a-scene mindar-image="uiScanning: #example-scanning-overlay; imageTargetSrc: ./targets.mind">
    ...
  </a-scene>
</body>



## dejisa
デジタルサイネージテンプレート<br>
デジタルサイネージをWebで実現します<br>
このテンプレートの画像・動画を変更するだけで完了します<br>
https://jirochanf.github.io/aidai/dejisa/index.html
