import Link from 'next/link'

export const projectsList = [
  {
    title: 'ショッピングサイト',
    skills: ['React.js', 'Next.js', 'Redux', 'Typescript'],
    description: (
      <p>
        Next.jsで実装したシンプルなショッピングサイトです。
        商品一覧、商品詳細、カート、支払いページの4画面で構成しています。
        商品一覧ページと商品詳細ページはSSGで実装しています。
        カートのアイテムはReduxで管理しています。
        <br />
        支払いページでは任意の数字を入力し進めてください。
      </p>
    ),
    src: 'ecサイト',
    url: 'https://nextjs-ec-website.vercel.app/',
    repoUrl: 'https://github.com/michiru-dev/EC-Website-Next.js',
  },
  {
    title: '人事管理アプリ',
    skills: ['React.js', 'Redux', 'SCSS', 'Cloud Firestore'],
    description: (
      <p>
        React.jsで実装した社員情報を登録、閲覧、検索、編集できる人事管理アプリです。
        データの管理はReduxおよびCloud Firestoreを使い実装しています。
        また、Cloud Firestoreの代わりにMySQLを使い書き換えたバージョンも
        <Link
          className='font-bold'
          rel='noreferrer noopener'
          target='_blank'
          href='https://github.com/michiru-dev/HR-App-MySQL'
        >
          こちら
        </Link>
        に置いています。（デプロイはしていません）
        <br />
        ダミーデータを登録しているので、自由に追加や編集等行ってください。
      </p>
    ),
    src: 'hrapp社員検索',
    url: 'https://hr-app-nu.vercel.app/',
    repoUrl: 'https://github.com/michiru-dev/HR-App-Cloud-FireStore',
  },
  {
    title: 'ニュースアプリ',
    skills: ['React.js', 'Typescript', 'Node.js', 'Express'],
    description: (
      <p>
        React.jsで実装したニュースフィードアプリです。フリーAPIからニュースデータを取得し、表示しています。このAPIとの繋ぎ込みのため、Node.js/Expressを使いバックエンドも実装しています。
        苦戦したのはドロップダウンメニューのスタイルです。ホバーされた時の挙動が思うようにいかず、
      </p>
    ),
    src: 'newspp',
    url: 'https://news-app-with-react-ten.vercel.app/',
    repoUrl: 'https://github.com/michiru-dev/News-App-with-React',
  },
  {
    title: '国旗クイズアプリ',
    skills: ['React.js', 'Typescript', 'SCSS'],
    description: (
      <p>
        React.jsで実装した4択の国旗当てゲームです。フリーAPIから国旗関連の情報を取得しランダムに問題が出題されるよう構成しています。
      </p>
    ),
    src: 'flagQuizApp',
    url: 'https://flag-quiz-app.vercel.app/',
    repoUrl: 'https://github.com/michiru-dev/Flag-Quiz-App',
  },
] as const