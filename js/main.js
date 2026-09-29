/* Athlomed LP — main.js */
(function () {
  "use strict";

  var DICT = {
    "税込。トレーナーアカウント1つあたり": "Tax included. Per trainer account. Available in Japan only.",
    "課題": "Problem", "機能": "Product", "データ連携": "Data", "アカウント": "Accounts", "選ばれる理由": "Why Athlomed", "料金": "Pricing",
    "ログイン": "Log in", "アプリを始める": "Start the app",
    "選手・コーチのアカウントは無料 ・ メディカルは月額¥3,980（税込）": "Free for athletes and coaches · Medical accounts ¥3,980/month (tax included)",
    "アカウントを作成して、今日から記録を始められます。": "Create an account and start recording today.",
    "提供準備中 ・ ご登録は無料、順番にご案内します": "Launching soon · Free to join, invitations sent in order",
    "Athlomedは現在、提供準備中です。ウェイティングリストにご登録いただいた方から順に、ご案内をお送りします。": "Athlomed is preparing for launch. We invite people in the order they join the waiting list.",
    "メールアドレス": "Email address", "ご職種": "Your role", "担当しているチーム数": "Teams you cover",
    "その他": "Other", "1チーム": "1 team", "2〜3チーム": "2–3 teams", "4チーム以上": "4 or more teams", "これから担当予定": "Starting soon",
    "ご登録は無料です。提供開始のご案内以外の目的でメールアドレスを利用することはありません。": "Joining is free. We will only use your address to let you know when Athlomed opens.",
    "ご登録ありがとうございます": "Thanks for joining", "提供開始のご案内を、ご登録のメールアドレスへお送りします。順番にご案内するため、しばらくお待ちください。": "We will email you when Athlomed opens. Invitations go out in order, so please bear with us.", "無料で始める": "Start for free", "Athlomedを見る": "See Athlomed", "Athlomedを始める": "Get started with Athlomed",
    "Athlete Life Log Platform — 提供準備中": "Athlete Life Log Platform — launching soon",
    "選手のすべてを、": "Everything about an athlete,", "ひとつにつなぐ。": "connected in one place.",
    "SOAP、測定、傷害、リハビリ、コンディション。": "SOAP notes, measurements, injuries, rehab and daily condition.",
    "スポーツ現場に分散する選手データを、ひとつのプラットフォームへ。": "All the athlete data scattered across your practice, on a single platform.",
  
    "ダッシュボード": "Dashboard", "選手": "Athletes", "チーム": "Teams", "スケジュール": "Schedule", "測定": "Measurement", "傷害": "Injury",
    "リハビリ": "Rehab", "コンディション": "Condition", "レポート": "Reports", "設定": "Settings",
    "山田 太郎": "Taro Yamada", "カスタマイズ": "Customize", "選手数": "Athletes", "SOAP記録": "SOAP records", "測定記録": "Measurements",
    "傷害中の選手": "Injured athletes", "+2 今週": "+2 this week", "+5 今週": "+5 this week", "+8 今週": "+8 this week", "+1 今週": "+1 this week",
    "コンディションアラート": "Condition alerts", "5件": "5", "鈴木 大輝": "Daiki Suzuki", "田中 翔太": "Shota Tanaka", "佐藤 陸": "Riku Sato",
    "髙橋 悠斗": "Yuto Takahashi", "渡辺 海斗": "Kaito Watanabe",
    "コンディション低下": "Condition drop", "疲労蓄積": "Fatigue build-up", "睡眠不足": "Lack of sleep", "痛みの訴え": "Pain reported",
    "最近のSOAP記録": "Recent SOAP records",
    "鈴木 大輝 — 右足関節捻挫": "Daiki Suzuki — Right ankle sprain", "田中 翔太 — 腰部違和感": "Shota Tanaka — Lower back discomfort",
    "佐藤 陸 — 練習後ケア": "Riku Sato — Post-practice care", "渡辺 海斗 — 復帰後評価": "Kaito Watanabe — Post-return assessment",
    "今週の測定実施状況": "Measurements completed this week", "21 / 28 名が実施済み": "21 of 28 athletes completed", "未実施 7 名": "7 not yet completed",
    "傷害ステータス": "Injury status", "治療中": "In treatment", "リハビリ中": "In rehab", "経過観察": "Monitoring", "復帰済み": "Returned",
    "※ 画面はプロトタイプのイメージです": "* Screens shown are prototype images.",
    "アスレティックトレーナー": "Athletic trainers", "理学療法士": "Physical therapists", "S&Cコーチ": "S&C coaches",
    "スポーツドクター": "Sports physicians", "柔道整復師": "Judo therapists",
    "選手の情報は、現場の": "Athlete information is scattered", "あちこちに散らばっている。": "all over the practice.",
    "紙のカルテ、Excel、チャット、担当者の記憶。記録は残っていても、必要なときに、必要な形で取り出せません。": "Paper charts, spreadsheets, chat threads, and someone's memory. The records exist — but not in a form you can retrieve when you need them.",
    "情報が複数の場所に分散する": "Information lives in too many places",
    "紙・Excel・チャット・個人のメモ。同じ選手の情報が、別々の場所に別々の形式で残る。": "Paper, Excel, chat, personal notes. The same athlete's data ends up in different places in different formats.",
    "過去の記録を探すのに時間がかかる": "Past records take too long to find",
    "「去年の同じ部位の受傷はいつだったか」を、その場で確認できない。": "\"When did he injure the same area last season?\" can't be answered on the spot.",
    "記録と測定がつながらない": "Notes and measurements don't connect",
    "カルテとROM・筋力の測定値が別管理で、経過を並べて判断できない。": "Charts and ROM/strength data are managed separately, so progress can't be judged side by side.",
    "傷害とリハビリが分断される": "Injury and rehab are disconnected",
    "受傷からRTPまでの経過が一本の線にならず、判断の根拠が残らない。": "From injury to return to play, the story never forms one line — and the reasoning is lost.",
    "担当者が変わると引き継げない": "Handovers lose the context",
    "スタッフの異動・卒業とともに、蓄積された文脈が失われる。": "When staff change or students graduate, accumulated context disappears.",
    "Athlomedは、それを": "Athlomed brings it", "ひとつにまとめます。": "all together.", "解決する仕組みを見る →": "See how it works →",
    "6つのモジュールが、": "Six modules,", "ひとりの選手に集約される。": "converging on one athlete.",
    "それぞれ独立したツールではなく、同じデータ構造の上に成り立つひとつのプラットフォームです。": "Not six separate tools — one platform built on a single shared data structure.",
    "選手一覧": "Athletes", "選手プロフィール": "Athlete Profile", "タイムライン": "Timeline",
    "鈴木 大輝 / タイムライン": "Daiki Suzuki / Timeline", "鈴木 大輝 / SOAP記録": "Daiki Suzuki / SOAP record",
    "鈴木 大輝 / 測定記録": "Daiki Suzuki / Measurement", "鈴木 大輝 / 傷害記録": "Daiki Suzuki / Injury record",
    "すずき だいき": "Daiki Suzuki", "生年月日": "Date of birth", "身長 / 体重": "Height / Weight", "所属チーム": "Team",
    "トップチーム": "First team", "利き足": "Dominant foot", "右": "Right", "ステータス": "Status",
    "最新のコンディション": "Latest condition", "良い": "Good", "疲労感": "Fatigue", "睡眠の質": "Sleep quality", "筋肉痛": "Soreness", "ストレス": "Stress",
    "今週のアクティビティ": "This week's activity", "3回": "3", "2回": "2", "5回": "5", "1件": "1", "トレーニング": "Training",
    "傷害の記録": "Injury records", "直近の傷害": "Latest injury", "右足関節捻挫": "Right ankle sprain", "受傷日 2026/07/10": "Injured on 2026/07/10",
    "すべて": "All", "2026年8月": "August 2026", "2026年7月": "July 2026",
    "Subjective（主観的情報）": "Subjective", "Objective（客観的情報）": "Objective", "Assessment（評価）": "Assessment", "Plan（計画）": "Plan",
    "右膝に違和感あり。走るときに軽い痛みを感じる。特に方向転換時に違和感が強い。": "Discomfort in the right knee. Mild pain when running, more pronounced during change of direction.",
    "右膝外側に圧痛あり。可動域：正常。MMT：5/5。腫脹：軽度。": "Tenderness on the lateral right knee. ROM normal. MMT 5/5. Mild swelling.",
    "右膝外側のオーバーユースによる炎症の可能性。靱帯損傷の可能性は低い。": "Likely overuse inflammation of the lateral right knee. Ligament injury unlikely.",
    "アイシング、ストレッチ、負荷調整。明日再評価。": "Icing, stretching, load adjustment. Reassess tomorrow.",
    "記録日": "Date", "記録者": "Recorded by", "山田 太郎（AT）": "Taro Yamada (AT)", "カテゴリ": "Category", "トレーニング後": "Post-training",
    "タグ": "Tags", "右膝": "Right knee", "違和感": "Discomfort", "+ タグを追加": "+ Add tag",
    "この記録は自動的に連携されます": "This record is linked automatically",
    "選手プロフィール / タイムライン / 傷害「右足関節捻挫」の経過に紐づきます。": "It attaches to the athlete profile, the timeline, and the \"Right ankle sprain\" injury history.",
    "キャンセル": "Cancel", "保存": "Save",
    "体組成 ・ 前回比": "Body composition · vs. last", "項目": "Item", "測定値": "Value", "前回比": "vs. last",
    "体重": "Weight", "体脂肪率": "Body fat", "筋肉量": "Muscle mass", "体水分率": "Body water",
    "膝屈曲 ROM": "Knee flexion ROM", "等尺性筋力（健側比）": "Isometric strength (LSI)",
    "膝関節屈曲 ROM 推移": "Knee flexion ROM trend", "測定メモ": "Measurement notes", "PDF出力": "Export PDF", "Excel出力": "Export Excel",
    "コンディション良好。筋肉量が増加傾向。健側比 92%、次回で復帰判定の再評価を実施予定。": "Condition good. Muscle mass trending up. LSI at 92%; return-to-play reassessment scheduled next session.",
    "SOAPへ自動反映：": "Auto-filled into SOAP: ",
    "膝屈曲ROM +6°、健側比 92% がSOAPの「A（評価）」に追記されます。": "Knee flexion ROM +6° and LSI 92% are appended to the Assessment section of the SOAP note.",
    "受傷日": "Injury date", "受傷状況": "Mechanism", "トレーニング中の着地時に内反": "Inversion on landing during training",
    "重症度": "Severity", "部位": "Body region", "右足関節（外側）": "Right ankle (lateral)", "ICD-10コード": "ICD-10", "担当者": "Clinician",
    "RTP予定": "Planned RTP", "経過": "Progress",
    "受傷": "Injury", "初期評価": "Initial assessment", "リハビリ開始": "Rehab started", "ランニング開始": "Running started",
    "競技復帰テスト（予定）": "Return-to-play testing (planned)",
    "トレーニング中に受傷。腫脹・疼痛あり。": "Injured during training. Swelling and pain present.",
    "荷重制限、可動域制限を確認。": "Weight-bearing and range-of-motion limitations confirmed.",
    "可動域訓練・荷重訓練を開始。": "Started range-of-motion and weight-bearing exercises.",
    "軽いジョギングから段階的に負荷を増加。": "Progressive loading, starting with light jogging.",
    "方向転換動作を含む機能テストを実施予定。": "Functional testing including change-of-direction planned.",
    "本日のセッション": "Today's sessions", "コンディションマトリクス（今週）": "Condition matrix (this week)",
    "月": "Mon", "火": "Tue", "水": "Wed", "木": "Thu", "金": "Fri", "土": "Sat", "日": "Sun",
    "すべての記録が、選手に紐づく": "Every record belongs to an athlete",
    "SOAP・測定・傷害・リハビリは、独立したフォームではなく同じ選手レコードの一部として保存されます。": "SOAP notes, measurements, injuries and rehab aren't separate forms — they are parts of the same athlete record.",
    "入力した数値が、そのまま評価になる": "Numbers you enter become the assessment",
    "測定記録は自動でグラフ化され、その結果はSOAPの「A（評価）」へ自動反映。転記の手間なく、経過が評価につながります。": "Measurements are charted automatically and flow into the Assessment section of your SOAP note — no re-typing, no lost context.",
    "共有パスワードで引き継げる": "Hand over with a shared password",
    "チームごとの共有パスワードを渡すだけで、他のトレーナーと同じカルテを扱えます。担当が交代する日も情報が途切れません。": "Share a team password and another trainer works from the same charts. Nothing is lost when cover changes.",
    "SOAP記録": "SOAP record", "コンディション記録": "Condition record", "トレーニング記録": "Training record", "傷害記録": "Injury record", "リハビリ記録": "Rehab record",
    "トレーニング後の右膝の違和感について": "Right knee discomfort after training",
    "体組成・ジャンプテスト・スプリント測定": "Body composition, jump and sprint measurements",
    "コンディション：良い": "Condition: good", "フィジカルトレーニング": "Physical training",
    "右足関節捻挫（受傷）": "Right ankle sprain (injury)", "受傷後の初期評価": "Initial assessment after injury",
    "記録を、データへ。": "Turn records into data.", "データを、次の判断へ。": "Turn data into decisions.",
    "受傷から復帰まで、現場で発生するすべての情報がひとつの流れとしてつながります。": "From injury to return, everything that happens in the field connects into one continuous flow.",
    "それぞれの記録は、選手というひとつの軸の上に時系列で積み上がります。": "Every record stacks up chronologically along a single axis: the athlete. ",
    "選手の過去を、未来につなげる。": "Connect an athlete's past to their future.",
    "すべての起点となる選手レコード": "The athlete record everything starts from",
    "起きたことを時系列で一本の線に": "Everything that happened, on one chronological line",
    "現場での評価と処置の記録": "Field assessments and treatment notes",
    "ROM・筋力・パフォーマンスの数値": "ROM, strength and performance numbers",
    "受傷部位・診断・重症度の管理": "Body region, diagnosis and severity",
    "段階的な復帰プログラムの経過": "Progress through a staged return program",
    "復帰判断の根拠が記録として残る": "The reasoning behind the decision stays on record",
    "記録アプリではなく、": "Not a note-taking app —", "データ基盤であること。": "a data foundation.",
    "すべての情報が「選手」を中心に整理されます。部署でも書式でもなく、選手が主語です。": "Everything is organized around the athlete — not around departments or document formats.",
    "高校から大学、プロへ。年をまたいでデータが蓄積され、キャリアを通じた記録になります。": "High school to university to professional. Data accumulates across years into a career-long record.",
    "重要な情報は自由記述のまま埋もれず、検索・比較・集計できる構造化データになります。": "Key information doesn't stay buried in free text — it becomes structured data you can search, compare and aggregate.",
    "SOAP・測定・傷害・タイムラインが相互に参照され、判断の根拠がひと目で追えます。": "SOAP notes, measurements, injuries and the timeline reference each other, so the reasoning is easy to follow.",
    "担当するチームが増えても減っても、カルテはあなたのアカウントに残り続けます。": "Whether you take on more teams or fewer, the charts stay in your account.",
    "アカウント種別ごとの権限とアクセス履歴により、医療情報として扱うべきデータを保護します。": "Per-role permissions and access history protect data that must be handled as medical information.",
    "カルテはあなたのもの。": "The charts are yours.", "共有範囲は、あなたが決める。": "You decide who sees them.",
    "Athlomedの管理者はメディカルスタッフです。アカウント種別ごとにできることを明確に分け、選手・スタッフ・他のトレーナーへ必要な範囲だけを開きます。": "In Athlomed the administrator is the medical staff member. Each account type has a clearly defined scope, so athletes, coaching staff and fellow trainers see only what they need to.",
    "管理者": "Administrator", "メディカルスタッフ": "Medical staff",
    "AT・PT・柔道整復師・スポーツドクターなど、現場で記録を書く人のためのアカウント。": "For ATs, PTs, judo therapists and sports physicians — the people writing the records.",
    "カルテの作成・編集・閲覧（すべての権限）": "Create, edit and view charts (full permissions)",
    "複数チームのカルテをチームごとに作成・管理": "Create and manage charts for multiple teams, team by team",
    "記録テンプレートを自分で追加・編集": "Add and edit your own record templates",
    "アカウント発行と共有範囲の設定": "Issue accounts and set sharing scope",
    "入力＋閲覧": "Input + view", "選手アカウント": "Athlete account",
    "選手本人が、毎日のコンディションを自分で入力するためのアカウント。": "For athletes to submit their own daily condition check.",
    "日々のコンディションチェックの入力": "Daily condition check input", "自分の記録の閲覧": "View their own records",
    "それ以外の項目は閲覧のみ（編集不可）": "Everything else is view-only (no editing)",
    "他の選手の情報にはアクセス不可": "No access to other athletes' information",
    "閲覧のみ": "View only", "スタッフアカウント": "Coaching staff account",
    "監督・コーチなど、選手の状態を把握する必要があるチームスタッフ向け。": "For head coaches and coaching staff who need to know where athletes stand.",
    "選手のコンディション・出場可否の閲覧": "View athlete condition and availability",
    "チーム全体の状況の把握": "See the status of the whole squad",
    "記録の入力・編集はできません": "Cannot create or edit records",
    "公開範囲はメディカルスタッフが設定": "Visibility is set by the medical staff member",
    "パスワードで、チームのカルテを他のトレーナーと共有": "Share a team's charts with another trainer via password",
    "チームごとに発行される共有パスワードを渡すだけで、他のトレーナーが同じチームのカルテにアクセスできます。帯同が交代する日も、複数人で担当する現場も、情報が途切れません。共有はいつでも停止でき、アクセス履歴も残ります。": "Hand over the password issued for a team and another trainer can access the same charts. Whether cover rotates or several people share the role, information never breaks. Sharing can be revoked at any time, and access history is kept.",
    "チーム共有パスワード": "Team sharing password", "コピー": "Copy",
    "現在 2名のトレーナーが共有中 ・ 有効期限 30日": "Currently shared with 2 trainers · Valid for 30 days",
    "料金プラン": "Pricing",
    "Athlomedは、メディカルスタッフ個人がご契約いただくサービスです。チーム単位・組織単位の契約はありません。価格は1名あたりの月額です。": "Athlomed is licensed to individual medical staff — there are no team or organization contracts. Prices are per person, per month.",
    "まず1チームから試したい方へ": "For trying it with your first team", "/ 月": "/ month", "/ 月・1名": "/ month per person",
    "チーム 1つ ・ 選手 5名まで": "1 team · up to 5 athletes",
    "SOAP・測定・傷害・リハビリの記録": "SOAP, measurement, injury and rehab records",
    "測定記録の自動グラフ化": "Automatic charts from measurements",
    "選手アカウント（コンディション入力）": "Athlete accounts (condition input)",
    "おすすめ": "Recommended", "複数チームを担当するメディカルスタッフへ": "For medical staff covering several teams",
    "Freeのすべての機能": "Everything in Free", "チーム数・選手数 無制限": "Unlimited teams and athletes",
    "記録テンプレートの追加・編集": "Add and edit record templates",
    "測定結果のSOAP「A」への自動反映": "Measurements auto-filled into the SOAP Assessment",
    "グラフ・結果表のPDF出力 / Excel出力": "Charts and result tables to PDF / Excel",
    "パスワードによるカルテ共有": "Password-based chart sharing",
    "スタッフアカウント（閲覧のみ）の発行": "Issue view-only coaching staff accounts",
    "メールサポート": "Email support", "先行利用に申し込む": "Request early access",
    "選手データを、次のステージへ。": "Take athlete data to the next stage.",
    "まずは担当する1チームから。今ある記録を、これからのデータ基盤に変えていきましょう。": "Start with one team you cover. Turn the records you already keep into a foundation you can build on.",
    "選手のすべてを、ひとつにつなぐ。": "Everything about an athlete, connected in one place.",
    "スポーツ現場のためのアスリートデータプラットフォーム。": "An athlete data platform for the sports field.",
    "アカウントと共有": "Accounts & sharing", "Athlomedについて": "About Athlomed",
    "セキュリティ": "Security"
  };

  var TAB_DEFS = {
    dashboard: { crumb: "ダッシュボード", nav: "n0" },
    profile:   { crumb: "鈴木 大輝", nav: "n1" },
    timeline:  { crumb: "鈴木 大輝 / タイムライン", nav: "n1" },
    soap:      { crumb: "鈴木 大輝 / SOAP記録", nav: "n4" },
    measure:   { crumb: "鈴木 大輝 / 測定記録", nav: "n5" },
    injury:    { crumb: "鈴木 大輝 / 傷害記録", nav: "n6" }
  };
  var tabStyle = function (a) {
    return "cursor:pointer;font-family:inherit;font-size:13.5px;font-weight:700;padding:11px 20px;border-radius:999px;transition:all .18s ease;" +
      (a ? "background:#0F172A;color:#fff;border:1px solid #0F172A" : "background:#fff;color:#334155;border:1px solid #E2EBF6");
  };
  var navStyle = function (a) {
    return "display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:7px;font-size:12.5px;transition:background .2s ease;" +
      (a ? "background:#2563EB;color:#fff;font-weight:500" : "color:#94A3B8");
  };

  /* ---------- scroll reveal ---------- */
  var reveals = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    Array.prototype.forEach.call(reveals, function (el, i) {
      el.style.transitionDelay = (i % 3) * 70 + "ms";
      io.observe(el);
    });
  } else {
    Array.prototype.forEach.call(reveals, function (el) { el.classList.add("is-in"); });
  }

  /* ---------- mobile menu ---------- */
  var menu = document.getElementById("mobile-menu");
  var menuBtn = document.getElementById("menu-toggle");
  function setMenu(open) {
    if (!menu || !menuBtn) return;
    menu.hidden = !open;
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    menuBtn.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
  }
  if (menuBtn) menuBtn.addEventListener("click", function () { setMenu(menu.hidden); });
  Array.prototype.forEach.call(document.querySelectorAll("[data-menu-close]"), function (a) {
    a.addEventListener("click", function () { setMenu(false); });
  });
  window.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  /* ---------- product UI tabs ---------- */
  var tabBtns = document.querySelectorAll(".tab-btn");
  var panels = document.querySelectorAll(".tabpanel");
  var crumbEl = document.getElementById("mock-crumb");
  function selectTab(id) {
    Array.prototype.forEach.call(tabBtns, function (b) {
      var on = b.getAttribute("data-tab") === id;
      b.setAttribute("style", tabStyle(on));
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    Array.prototype.forEach.call(panels, function (p) { p.hidden = p.getAttribute("data-tab") !== id; });
    var def = TAB_DEFS[id];
    if (crumbEl && def) crumbEl.textContent = translate(def.crumb);
    Array.prototype.forEach.call(document.querySelectorAll("[data-nav]"), function (n) {
      n.setAttribute("style", navStyle(def && n.getAttribute("data-nav") === def.nav));
    });
  }
  Array.prototype.forEach.call(tabBtns, function (b) {
    b.addEventListener("click", function () { selectTab(b.getAttribute("data-tab")); });
  });

  /* ---------- language ---------- */
  var lang = "ja";
  try { lang = localStorage.getItem("athlome-lang") || "ja"; } catch (e) {}
  var store = new WeakMap();
  function translate(s) { return lang === "en" && DICT[s] ? DICT[s] : s; }
  function applyLang() {
    var en = lang === "en";
    document.documentElement.lang = en ? "en" : "ja";
    document.title = en
      ? "Athlomed | Athlete data, unified for the sports field."
      : "Athlomed | スポーツ現場のデータを、ひとつに。";
    // --- block-level translation: elements carrying data-en swap their whole innerHTML ---
    Array.prototype.forEach.call(document.querySelectorAll("[data-en]"), function (el) {
      if (!el.dataset.jaHtml) el.dataset.jaHtml = el.innerHTML;
      var next = en ? el.getAttribute("data-en") : el.dataset.jaHtml;
      if (el.innerHTML !== next) el.innerHTML = next;
    });

    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    var nodes = [], n;
    while ((n = w.nextNode())) nodes.push(n);
    nodes.forEach(function (node) {
      // skip anything inside a block that owns its own translation
      if (node.parentElement && node.parentElement.closest("[data-en]")) return;
      var cur = node.nodeValue;
      if (!cur || !cur.trim()) return;
      var rec = store.get(node);
      if (!rec || cur !== rec.applied) rec = { source: cur, applied: cur };
      var key = rec.source.trim();
      var next = rec.source;
      if (en && DICT[key]) next = rec.source.replace(key, DICT[key]);
      if (node.nodeValue !== next) node.nodeValue = next;
      rec.applied = next;
      store.set(node, rec);
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-lang-toggle]"), function (btn) {
      var spans = btn.querySelectorAll("span");
      if (spans.length >= 3) {
        spans[0].style.color = en ? "#94A3B8" : "#2563EB";
        spans[2].style.color = en ? "#2563EB" : "#94A3B8";
      }
      btn.setAttribute("aria-label", en ? "日本語に切り替える" : "Switch to English");
    });
    if (typeof updatePricing === "function") updatePricing();
    var opts = document.querySelectorAll("#waitlist-form option");
    Array.prototype.forEach.call(opts, function (o) {
      if (!o.dataset.ja) o.dataset.ja = o.textContent.trim();
      o.textContent = en && DICT[o.dataset.ja] ? DICT[o.dataset.ja] : o.dataset.ja;
    });
  }
  Array.prototype.forEach.call(document.querySelectorAll("[data-lang-toggle]"), function (btn) {
    btn.addEventListener("click", function () {
      lang = lang === "ja" ? "en" : "ja";
      try { localStorage.setItem("athlome-lang", lang); } catch (e) {}
      applyLang();
    });
  });
  applyLang();

  /* ---------- pricing (Free ¥0 / Pro ¥3,980 税込) ----------
     現段階は日本国内のみでの提供のため、通貨はJPYに統一する。
     海外価格は提供していないので、英語表示でも金額は円のまま出す。 */
  function updatePricing() {
    var pro = document.getElementById("pro-price");
    var note = document.getElementById("pro-price-note");
    var ja = lang !== "en";
    if (pro) pro.textContent = "¥3,980";
    // 無料プランは ¥0 で固定。要素の中に「/ 月」のspanが入っているため書き換えない
    if (note) note.textContent = ja
      ? "税込。トレーナーアカウント1つあたり"
      : "Tax included. Per trainer account. Available in Japan only.";
  }

  updatePricing();

  /* ---------- waiting list (Formspree AJAX) ---------- */
  var form = document.getElementById("waitlist-form");
  if (form) {
    var errBox = document.getElementById("wl-error");
    var doneBox = document.getElementById("wl-done");
    var openBox = document.getElementById("wl-open");
    var submitBtn = form.querySelector('button[type="submit"]');

    var LABEL = { ja: "ウェイティングリストに登録", en: "Join the waiting list" };
    var SENDING = { ja: "送信中…", en: "Sending…" };
    var FAIL = {
      ja: "送信に失敗しました。時間をおいて、もう一度お試しください。",
      en: "Something went wrong. Please try again in a moment."
    };

    function showError(msg) {
      if (!errBox) return;
      errBox.textContent = msg || FAIL[lang] || FAIL.ja;
      errBox.hidden = false;
    }
    function clearError() { if (errBox) errBox.hidden = true; }
    function setBusy(busy) {
      if (!submitBtn) return;
      submitBtn.disabled = busy;
      submitBtn.setAttribute("aria-busy", busy ? "true" : "false");
      submitBtn.textContent = busy ? (SENDING[lang] || SENDING.ja) : (LABEL[lang] || LABEL.ja);
    }
    function succeed() {
      clearError();
      if (openBox) openBox.hidden = true;
      if (doneBox) {
        doneBox.hidden = false;
        doneBox.setAttribute("tabindex", "-1");
        doneBox.focus();
      }
    }

    var emailInput = document.getElementById("wl-email");
    var emailError = document.getElementById("wl-email-error");
    var consentInput = document.getElementById("wl-consent");
    var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    function validate() {
      var ok = true;
      if (emailInput) {
        var v = emailInput.value.trim();
        var valid = v.length > 0 && EMAIL_RE.test(v);
        emailInput.setAttribute("aria-invalid", valid ? "false" : "true");
        if (emailError) {
          emailError.textContent = v.length === 0
            ? (lang === "en" ? "Please enter your email address." : "メールアドレスを入力してください。")
            : (lang === "en" ? "Please enter a valid email address." : "メールアドレスの形式が正しくありません。");
          emailError.hidden = valid;
        }
        ok = ok && valid;
      }
      if (consentInput && !consentInput.checked) {
        showError(lang === "en"
          ? "Please agree to the Terms of Service and Privacy Policy."
          : "利用規約とプライバシーポリシーへの同意が必要です。");
        ok = false;
      }
      return ok;
    }
    if (emailInput) {
      emailInput.addEventListener("blur", function () { if (emailInput.value.trim()) validate(); });
      emailInput.addEventListener("input", function () {
        if (emailInput.getAttribute("aria-invalid") === "true") validate();
      });
    }
    if (consentInput) consentInput.addEventListener("change", function () { if (consentInput.checked) clearError(); });

    var sending = false;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (sending) return;
      clearError();
      if (!validate()) {
        if (emailInput && emailInput.getAttribute("aria-invalid") === "true") emailInput.focus();
        return;
      }
      var action = form.getAttribute("action") || "";
      if (!action || !window.fetch) { succeed(); return; }
      sending = true;
      setBusy(true);
      fetch(action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      }).then(function (res) {
        if (res.ok) { succeed(); return; }
        return res.json().then(function (data) {
          var msg = data && data.errors && data.errors.length
            ? data.errors.map(function (x) { return x.message; }).join(" / ")
            : null;
          showError(msg); setBusy(false); sending = false;
        }).catch(function () { showError(); setBusy(false); sending = false; });
      }).catch(function () { showError(); setBusy(false); sending = false; });
    });
  }
})();
