# Athlomed LP

「選手のすべてを、ひとつにつなぐ。」— スポーツ現場のメディカルスタッフ向けデータ管理SaaS Athlomed のランディングページ（本番用・静的サイト）。

## ファイル構成

```text
athlome-lp/
├── index.html            # LP（エントリーポイント）
├── terms.html            # 利用規約（日本語・正文）
├── terms-en.html         # Terms of Service（英語）
├── privacy.html          # プライバシーポリシー（日本語）
├── privacy-en.html       # Privacy Policy（英語）
├── dpa.html              # データ処理契約（日本語）
├── dpa-en.html           # Data Processing Agreement（英語）
├── legal.html            # 特定商取引法に基づく表記（日本法固有）
├── contact.html          # お問い合わせ
├── checkout.html         # Pro Plan お申し込み内容の確認（決済前の法務導線・Stripe未接続）
├── css/
│   ├── style.css         # LPスタイル
│   └── legal.css         # 法務ページ共通スタイル
├── js/
│   ├── main.js           # ナビ・タブ切替・日英切替・スクロール演出・フォーム送信
│   └── legal.js          # 法務ページの目次ハイライト
├── assets/
│   ├── icons/
│   │   └── athlome-mark.png   # アプリアイコン（apple-touch-icon）
│   └── images/
│       └── athlome-og.png     # OGP画像（1200×630）
├── 404.html              # 404ページ
├── netlify.toml          # publish設定 / クリーンURL / セキュリティヘッダー / キャッシュ
├── robots.txt
├── sitemap.xml
├── favicon.png           # 32px。他に favicon-192 / favicon-512 / apple-touch-icon
├── TASKS.md              # 公開後タスクリスト（法務・課金の確定事項）
└── README.md
```

## ローカルでの確認方法

ビルド不要です。次のいずれかで確認できます。

1. `index.html` をブラウザで直接開く
2. 簡易サーバーを使う（推奨）

```bash
cd athlome-lp
python3 -m http.server 8000
# → http://localhost:8000
```

## 公開URL

本番ドメイン：**https://athlomedonline.com**

| パス | ページ |
|---|---|
| `/` | LP |
| `/terms` | 利用規約 |
| `/privacy` | プライバシーポリシー |
| `/legal` | 特定商取引法に基づく表記 |
| `/contact` | お問い合わせ |
| `/dpa` | データ処理契約（DPA） |
| `/terms-en` `/privacy-en` `/dpa-en` | 上記の英語版 |
| `/checkout` | Pro Plan お申し込み内容の確認（noindex・Stripe未接続） |

`netlify.toml` で `/terms.html` → `/terms` の301と、`/terms` → `terms.html` の200書き換えを設定しています。ローカルでは `.html` 付きで、本番ではクリーンURLで動作します。

## Netlifyへのデプロイ

### A. Netlify Drop（最速）

1. https://app.netlify.com/drop を開く
2. `athlome-lp` フォルダをドラッグ＆ドロップ
3. 公開完了（`netlify.toml` が自動で読み込まれます）

### B. Git連携（更新を継続する場合に推奨）

1. リポジトリに `athlome-lp` の中身をコミット
2. Netlify → Add new site → Import an existing project
3. Build command：**空欄**／Publish directory：`.`（リポジトリ直下に置いた場合）
4. Deploy

ビルド不要の静的サイトのため、環境変数は使用しません。

## Cloudflare で athlomedonline.com を Netlify へ接続する

> **接続済みです（2026-08-10 時点）。** 以下は再設定・確認用の手順です。
>
> | 項目 | 状態 |
> |---|---|
> | ネームサーバー | Cloudflare（`gannon.ns.cloudflare.com` / `clarissa.ns.cloudflare.com`） |
> | apex `athlomedonline.com` | Aレコード `75.2.60.5`（Netlify LB） |
> | HTTPS | 有効（`https://athlomedonline.com/` が200を返す） |
> | `www` サブドメイン | **未設定**（`netlify.toml` に www→apex の301があるため、必要なら追加） |
> | `app` サブドメイン | **未設定**（LPのログインリンクが `app.athlomedonline.com/dashboard` を指しているため、アプリ公開時に必要） |

### 1. Netlify側

1. Site configuration → Domain management → **Add a domain** → `athlomedonline.com`
2. `www.athlomedonline.com` も追加
3. **Primary domain** を `athlomedonline.com` に設定
4. Netlifyが表示する `xxxxx.netlify.app` の値を控える

### 2. Cloudflare DNS側

Cloudflare ダッシュボード → athlomedonline.com → DNS → Records に次を追加します。

| Type | Name | Content | Proxy status |
|---|---|---|---|
| CNAME | `@`（athlomedonline.com） | `xxxxx.netlify.app` | **DNS only（グレー雲）** |
| CNAME | `www` | `xxxxx.netlify.app` | **DNS only（グレー雲）** |

> Cloudflare Registrarで取得したドメインはapexのCNAMEフラット化に対応しているため、`@` にCNAMEを設定できます。
> Aレコードで設定する場合は `75.2.60.5`（Netlify Load Balancer）を使用してください。

**Proxy（オレンジ雲）は必ずOFF**にしてください。ONのままだとNetlifyのLet's Encrypt証明書が発行できず、リダイレクトループになることがあります。

### 3. HTTPS

1. DNS反映後（数分〜最大24時間）、Netlify → Domain management → HTTPS → **Verify DNS configuration**
2. **Let's Encrypt certificate** を発行
3. **Force HTTPS** を有効化

Cloudflare側のSSL/TLSモードは、Proxyを使わない場合は影響しません。将来Proxyを有効にする場合は必ず **Full (strict)** にしてください（Flexibleはリダイレクトループの原因になります）。

### 4. 接続確認

- https://athlomedonline.com が表示される
- https://www.athlomedonline.com が athlomedonline.com へ301される
- http:// が https:// へリダイレクトされる
- https://athlomedonline.com/terms が表示される

## 公開前に必要な作業

| 項目 | 場所 | 内容 |
|---|---|---|
| ウェイティングリスト送信先 | 設定済み | Formspree エンドポイント `https://formspree.io/f/mppaqeqw` に接続済み。初回送信時は Formspree からの確認メールを承認してください |
| 正規URL | 設定済み | すべてのページで `https://athlomedonline.com` を設定済み |
| 法務ページ | 設定済み | `/legal/terms` `/legal/privacy` `/legal/tokushoho` `/legal/security` `/legal/consent/*` `/contact`。旧URLから301 |
| 料金 | 設定済み | Free ¥0 / Pro ¥3,980（税込）。日本国内のみでの提供のため通貨はJPYに統一。LP・利用規約・特商法・Checkoutで一致 |

環境変数は使用していません。

## 実装済みの機能

- レスポンシブ（Desktop 1440 / Tablet 768–1024 / Mobile 390）
- モバイルメニュー（開閉・Escで閉じる・リンククリックで自動クローズ）
- プロダクトUIのタブ切替（Dashboard / Athlete Profile / Timeline / SOAP / Measurement / Injury）
- 日本語⇔英語の全文切替（選択は localStorage に保持、`<html lang>`・`<title>` も連動）
- スクロールリビール、hover・focusステート、スムーススクロール
- 価格表示（Free ¥0 / Pro ¥3,980 税込）。現段階は日本国内のみでの提供のため、英語表示でも金額はJPYのまま
- FAQ（9項目・アコーディオン）、運営者情報セクション、404ページ
- ウェイティングリスト登録フォーム（Formspree／メール形式検証・同意必須・エラー表示・二重送信防止・送信中表示）
- SEO：title / description / OGP / Twitter Card / favicon / robots.txt / sitemap.xml / セマンティックHTML / 見出し階層（canonical はドメイン確定後）
- アクセシビリティ：alt属性、aria-label、キーボード操作、フォーカスリング、コントラスト確保、`prefers-reduced-motion` 対応

## 法務ページ

| パス | 内容 |
|---|---|
| `terms.html` / `terms-en.html` | 利用規約（全27条・日英）。第25条 国外からの利用／第26条 消費者の権利／第27条 準拠法 |
| `privacy.html` / `privacy-en.html` | プライバシーポリシー（全17条＋附属書A〜D・日英）。GDPR法的根拠、健康データ、国際移転、地域別の権利 |
| `dpa.html` / `dpa-en.html` | データ処理契約（全17条＋附属書A〜C・日英）。契約者組織＝管理者、当方＝処理者、SCC、サブプロセッサー |
| `legal.html` | 特定商取引法に基づく表記（日本法固有）＋第6条に国外利用者向けの事業者情報 |
| `contact.html` | お問い合わせ窓口 |
| `checkout.html` | Pro Plan申し込み内容の確認（プラン名・料金・請求頻度・自動更新・次回請求・解約方法・返金条件・法務リンク・同意チェック） |

フッターのLegal / Contact列から全ページにアクセスできます（Desktop / Mobile 共通）。

### 公開前に必ず対応が必要な項目

- **施行日・最終更新日**：現在は「公開日確定後に表示されます」。各法務ページの `lg-updated` を実日付に置き換え
- **電話番号**：特商法上の表示義務・省略可否が未確認のため「メールにてお問い合わせください」と表示。番号は創作していません
- **消費税の内税／外税の別**：「決済画面でご確認いただけます」と表示。確定後に差し替え
- **安全管理措置（プライバシーポリシー第11条）**：実装済みの措置のみを記載する方針のため、現在は具体項目を記載していません
- **解約CTA**：特商法の「解約方法」欄はWebアプリ設定画面の解約ボタンの存在を前提としています。公開前に実装が必須
- **同意記録の保存**：登録時の同意チェックはUIのみで、同意日時・規約バージョンのサーバー保存は未実装
- **Stripe連携**：`checkout.html` は未接続（`cancel_at_period_end` 方式を想定）

### 禁止表現

「無料トライアル」「お試し期間」「即時解約」「日割り返金」「株式会社／合同会社」はサイト全体で使用していません。Free PlanとFree Trialを混同する表現を追加しないでください。

## 外部依存

- Google Fonts（Noto Sans JP / Roboto Mono）
- Formspree（ウェイティングリスト送信先 `mppaqeqw`。AJAX送信のためページ遷移なし。送信項目：`email` / `role` / `teams`）

それ以外のライブラリ・ビルドツールは使用していません。

> 公開後の残タスク（法務文書の確定・Stripe連携等）は **`TASKS.md`** にまとめています。

## 本番公開判定

**本番公開可能**（下記の「公開前に必要な作業」を完了した時点で公開可）。

- ビルド不要の静的サイトのため build エラーなし
- コンソールエラーなし / broken link・broken image なし / 横スクロールなし
- Desktop / Tablet / Mobile で表示確認済み
- 法務ページ（利用規約・プライバシーポリシー・特商法）と LP の料金・解約・返金・運営者情報が一致
- 実績数値・導入事例・未実装機能は記載していません

### 未実装（意図的）

| 項目 | 状態 |
|---|---|
| 認証・アカウント登録 | 未実装。LPからのCTAはすべてウェイティングリストに集約 |
| Stripe決済 | 未接続。`checkout.html` は契約内容確認UIのみで課金は発生しません |
| 同意記録のサーバー保存 | 未実装（同意チェックはUIのみ） |
| Webアプリ設定画面の解約CTA | 未実装。特商法の「解約方法」欄はこの存在を前提としています（公開前に必須） |

### Netlify Drop 公開手順

1. https://app.netlify.com/drop を開く
2. `athlome-lp` フォルダをドラッグ＆ドロップ
3. 公開完了（ビルド設定・環境変数不要。`404.html` と `_headers` は自動で認識されます）
4. Domain settings から独自ドメインを設定
5. ドメイン確定後、`sitemap.xml` / `robots.txt` / 各ページの canonical・og:url を更新して再アップロード
