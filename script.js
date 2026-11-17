
"use strict";

const $ = id => document.getElementById(id);
const M = String.raw;

const lesson = {
  title:"Көрсеткіштік теңдеулер және олардың жүйелері",
  goal:"Көрсеткіштік теңдеулерді бірдей негізге келтіру, ортақ көбейткішті жақша сыртына шығару, жаңа айнымалы енгізу, сондай-ақ екі айнымалысы бар көрсеткіштік теңдеулер жүйелерін шешуді меңгеру."
};

// ==================================
// 5 ТОЛЫҚ ТҮСІНДІРМЕ
// ==================================

const theory = [
  {
    title:"Көрсеткіштік теңдеу дегеніміз не?",
    definition:"Белгісіз айнымалысы дәреже көрсеткішінде орналасқан теңдеу көрсеткіштік теңдеу деп аталады. Мұндай теңдеудің негізі оң және бірге тең емес сан болуы тиіс.",
    explain:"Мысалы, екі санының қандай дәрежесі сегізге тең екенін іздейік. Сегіз санын екі санының кубы ретінде жазуға болады. Негіздері бірдей болғанда көрсеткіштері де бірдей болады. Сондықтан белгісіз көрсеткіш үшке тең.",
    rule:"Негіздері бірдей екі көрсеткіштік өрнек тең болса, олардың көрсеткіштері тең болады.",
    formula:M`a^{f(x)}=a^{g(x)}\iff f(x)=g(x),\quad a>0,\ a\ne1`,
    worked:[
      M`2^{x+1}=16`,
      M`16=2^4`,
      M`2^{x+1}=2^4`,
      M`x+1=4`,
      M`\boxed{x=3}`
    ],
    warning:"Көрсеткіштерді тек екі жақтағы негіздер бірдей және дұрыс көрсеткіштік функция негізі болғанда теңестіруге болады."
  },
  {
    title:"Бірдей негізге келтіру әдісі",
    definition:"Екі жақтағы сандарды бірдей негізді дәрежелерге келтіру — көрсеткіштік теңдеулерді шешудің ең қарапайым тәсілі.",
    explain:"Мысалы, тоғыз саны үштің квадраты, ал жиырма жеті саны үштің кубы. Егер тоғыздың x дәрежесі жиырма жетіге тең болса, сол жақты үш негізімен жазамыз. Дәреженің дәрежесін есептеп, көрсеткіштерді теңестіреміз.",
    rule:"Алдымен теңдеудің екі жағындағы сандардың ортақ негізін іздейміз. Дәреженің дәрежесін көбейту ережесімен ашамыз.",
    formula:M`(a^m)^n=a^{mn}`,
    worked:[
      M`9^x=27`,
      M`(3^2)^x=3^3`,
      M`3^{2x}=3^3`,
      M`2x=3`,
      M`\boxed{x=\frac32}`
    ],
    warning:"Теңдеудің бір жағындағы дәрежені өзгертсеңдер, оның көрсеткішін де дұрыс көбейту қажет."
  },
  {
    title:"Ортақ көбейткішті жақша сыртына шығару",
    definition:"Көрсеткіштік теңдеудегі ұқсас негізді дәрежелерді ортақ көбейткіш арқылы біріктіруге болады. Бұл теңдеуді қарапайым дәрежелік теңдікке айналдырады.",
    explain:"Мысалы, екі санының x дәрежесі және дәл сол дәреженің екі есе көбейтіндісі қосылсын. Екеуінде де ортақ көбейткіш бар. Оны жақша сыртына шығарсақ, қарапайым көрсеткіштік теңдеу қалады.",
    rule:"Дәреже көрсеткіштерін қасиеттер арқылы бірдей түрге келтіріп, ортақ көбейткішті бөліп шығарамыз.",
    formula:M`a^{x+1}=a\cdot a^x`,
    worked:[
      M`2^x+2^{x+1}=24`,
      M`2^x+2\cdot2^x=24`,
      M`2^x(1+2)=24`,
      M`3\cdot2^x=24`,
      M`2^x=8=2^3`,
      M`\boxed{x=3}`
    ],
    warning:"Мүшелерді қосқанда дәреже көрсеткіштерін бірден қосуға болмайды. Ортақ көбейткіш ережесін қолдану керек."
  },
  {
    title:"Жаңа айнымалы енгізу әдісі",
    definition:"Егер көрсеткіштік теңдеуде бірдей негіздің x және 2x дәрежелері кездессе, жаңа айнымалы енгізуге болады. Нәтижесінде квадрат теңдеу пайда болуы мүмкін.",
    explain:"Мысалы, екі санының екі x дәрежесін екі санының x дәрежесінің квадраты деп жазамыз. Екі санының x дәрежесін t әрпімен белгілесек, бастапқы теңдеу квадрат теңдеуге айналады. Оны шешкеннен кейін тек оң t мәндерін қабылдаймыз, себебі көрсеткіштік өрнек оң болады.",
    rule:"Жаңа айнымалы оң болуы тиіс. Квадрат теңдеуді шешіп, содан кейін бастапқы көрсеткіштік өрнекке қайта ораламыз.",
    formula:M`t=a^x>0,\qquad a^{2x}=t^2`,
    worked:[
      M`4^x-5\cdot2^x+4=0`,
      M`t=2^x>0`,
      M`t^2-5t+4=0`,
      M`(t-1)(t-4)=0`,
      M`t=1\quad\text{немесе}\quad t=4`,
      M`2^x=1\Rightarrow x=0`,
      M`2^x=4\Rightarrow x=2`,
      M`\boxed{x=0,\ 2}`
    ],
    warning:"Жаңа айнымалыны шешкеннен кейін бастапқы x-ті табуды ұмытпаңдар. t нөл немесе теріс сан бола алмайды."
  },
  {
    title:"Көрсеткіштік теңдеулер жүйесі",
    definition:"Көрсеткіштік теңдеулер жүйесі — кемінде бір теңдеуінде белгісіз айнымалы дәреже көрсеткішінде болатын екі немесе бірнеше теңдеу. Жүйенің шешімі барлық теңдеулерді бір мезгілде қанағаттандыратын мәндер жиыны.",
    explain:"Егер жүйеде екі негізді x және y дәрежелері болса, оларды уақытша a және b арқылы белгілейміз. Сонда екі айнымалысы бар кәдімгі сызықтық жүйе шығады. Алдымен a мен b-ны табамыз, кейін екі көрсеткіштік теңдеуден x пен y-ті анықтаймыз.",
    rule:"Жаңа айнымалыларды енгізген соң олардың оң болуын қадағалаймыз. Соңында табылған мәндерді жүйенің екі теңдеуіне де қойып тексереміз.",
    formula:M`u=2^x>0,\quad v=2^y>0`,
    worked:[
      M`\begin{cases}2^x+2^y=12\\2^x-2^y=4\end{cases}`,
      M`\begin{cases}u+v=12\\u-v=4\end{cases}`,
      M`2u=16\Rightarrow u=8`,
      M`v=12-8=4`,
      M`2^x=8\Rightarrow x=3`,
      M`2^y=4\Rightarrow y=2`,
      M`\boxed{(x,y)=(3,2)}`
    ],
    warning:"Жүйенің жауабын реттелген жұп түрінде жазып, екі бастапқы теңдеуге де қойып тексеріңдер."
  }
];

// ==================================
// 10 КОНСПЕКТ + 20 ӨЗІНДІК ЕСЕП
// ==================================

const notes = [
  {
    title:"Көрсеткіштік теңдеудің анықтамасы",
    text:"Белгісіз айнымалысы дәреженің көрсеткішінде кездесетін теңдеу көрсеткіштік теңдеу деп аталады. Мұндай теңдеуді шешу үшін негіздерді бірдей түрге келтіру тиімді.",
    formula:M`a^{f(x)}=a^{g(x)}\iff f(x)=g(x)`,
    example:[M`2^x=32`,M`32=2^5`,M`\boxed{x=5}`],
    self:[
      {q:M`3^x=81`,steps:[M`81=3^4`,M`x=4`],answer:M`\boxed{x=4}`},
      {q:M`5^x=125`,steps:[M`125=5^3`,M`x=3`],answer:M`\boxed{x=3}`}
    ]
  },
  {
    title:"Бірдей негізге келтіру",
    text:"Егер теңдеудің екі жағындағы сандар бірдей санның дәрежелері ретінде жазылса, теңдеуді көрсеткіштерін теңестіру арқылы шешуге болады.",
    formula:M`a^m=a^n\Longrightarrow m=n`,
    example:[M`4^x=16`,M`(2^2)^x=2^4`,M`\boxed{x=2}`],
    self:[
      {q:M`9^x=81`,steps:[M`3^{2x}=3^4`,M`2x=4`],answer:M`\boxed{x=2}`},
      {q:M`8^x=64`,steps:[M`2^{3x}=2^6`,M`3x=6`],answer:M`\boxed{x=2}`}
    ]
  },
  {
    title:"Дәреженің дәрежесі",
    text:"Бір дәрежені тағы да дәрежеге шығарғанда дәреже көрсеткіштері көбейтіледі. Бұл тәсіл әртүрлі негіздерді ортақ негізге келтіруге көмектеседі.",
    formula:M`(a^m)^n=a^{mn}`,
    example:[M`16^x=8`,M`2^{4x}=2^3`,M`\boxed{x=\frac34}`],
    self:[
      {q:M`27^x=9`,steps:[M`3^{3x}=3^2`,M`3x=2`],answer:M`\boxed{x=\frac23}`},
      {q:M`25^x=5`,steps:[M`5^{2x}=5`,M`2x=1`],answer:M`\boxed{x=\frac12}`}
    ]
  },
  {
    title:"Сызықтық көрсеткішті теңдеу",
    text:"Дәреженің көрсеткішінде сызықтық өрнек орналасса, екі жақтың негіздерін бірдей етіп, сол сызықтық өрнекті теңестіріп шешеміз.",
    formula:M`a^{kx+b}=a^n\iff kx+b=n`,
    example:[M`2^{x+2}=32`,M`x+2=5`,M`\boxed{x=3}`],
    self:[
      {q:M`3^{x-1}=81`,steps:[M`x-1=4`,M`x=5`],answer:M`\boxed{x=5}`},
      {q:M`2^{2x+1}=32`,steps:[M`2x+1=5`,M`x=2`],answer:M`\boxed{x=2}`}
    ]
  },
  {
    title:"Теріс көрсеткішті теңдеу",
    text:"Теріс дәреже көрсеткіші кері санды білдіреді. Теріс дәрежедегі сандарды бірдей негізге келтіргенде минус таңбасын сақтау қажет.",
    formula:M`a^{-n}=\frac1{a^n}`,
    example:[M`2^x=\frac18`,M`\frac18=2^{-3}`,M`\boxed{x=-3}`],
    self:[
      {q:M`3^x=\frac1{27}`,steps:[M`3^x=3^{-3}`],answer:M`\boxed{x=-3}`},
      {q:M`5^{x+1}=\frac1{25}`,steps:[M`5^{x+1}=5^{-2}`,M`x+1=-2`],answer:M`\boxed{x=-3}`}
    ]
  },
  {
    title:"Ортақ көбейткішті шығару",
    text:"Бірдей дәрежесі бар мүшелердің ортақ көбейткішін жақша сыртына шығарамыз. Бұл көрсеткіштік теңдеуді қарапайым түрге келтіреді.",
    formula:M`a^x+a\cdot a^x=(1+a)a^x`,
    example:[M`2^x+2^{x+1}=12`,M`3\cdot2^x=12`,M`\boxed{x=2}`],
    self:[
      {q:M`3^x+3^{x+1}=36`,steps:[M`4\cdot3^x=36`,M`3^x=9`],answer:M`\boxed{x=2}`},
      {q:M`2^x+2^{x+2}=40`,steps:[M`5\cdot2^x=40`,M`2^x=8`],answer:M`\boxed{x=3}`}
    ]
  },
  {
    title:"Жаңа айнымалы енгізу",
    text:"Көрсеткіштік өрнек бірнеше рет кездескенде оны жаңа оң айнымалымен белгілейміз. Сонда квадрат теңдеу шығуы мүмкін, содан кейін бастапқы айнымалыға қайта ораламыз.",
    formula:M`t=2^x>0,\quad4^x=t^2`,
    example:[M`4^x-3\cdot2^x+2=0`,M`t^2-3t+2=0`,M`t=1,\ 2`,M`\boxed{x=0,\ 1}`],
    self:[
      {q:M`4^x-5\cdot2^x+4=0`,steps:[M`(t-1)(t-4)=0`,M`t=1,\ 4`],answer:M`\boxed{x=0,\ 2}`},
      {q:M`4^x-6\cdot2^x+8=0`,steps:[M`(t-2)(t-4)=0`,M`t=2,\ 4`],answer:M`\boxed{x=1,\ 2}`}
    ]
  },
  {
    title:"Көрсеткіштік теңдеудің түбірлерін тексеру",
    text:"Теңдеуді шешкеннен кейін табылған айнымалының мәнін бастапқы өрнекке қойып тексереміз. Жаңа айнымалы енгізілген есептерде тек оң мәндерді қабылдаймыз.",
    formula:M`2^x=8\Longrightarrow x=3`,
    example:[M`2^{x+1}=16`,M`x=3`,M`2^{3+1}=16`],
    self:[
      {q:M`3^{2x}=729`,steps:[M`729=3^6`,M`2x=6`],answer:M`\boxed{x=3}`},
      {q:M`2^{3x}=64`,steps:[M`64=2^6`,M`3x=6`],answer:M`\boxed{x=2}`}
    ]
  },
  {
    title:"Екі көрсеткіштік өрнегі бар жүйе",
    text:"Жүйедегі екі көрсеткіштік өрнекті жаңа айнымалылар арқылы белгілеп, сызықтық теңдеулер жүйесін шешеміз. Кейін дәреже көрсеткіштерін анықтаймыз.",
    formula:M`\begin{cases}2^x+2^y=12\\2^x-2^y=4\end{cases}`,
    example:[M`u+v=12,\quad u-v=4`,M`u=8,\quad v=4`,M`\boxed{(x,y)=(3,2)}`],
    self:[
      {q:M`\begin{cases}2^x+2^y=6\\2^x-2^y=2\end{cases}`,steps:[M`2^x=4,\quad2^y=2`],answer:M`\boxed{(x,y)=(2,1)}`},
      {q:M`\begin{cases}3^x+3^y=12\\3^x-3^y=6\end{cases}`,steps:[M`3^x=9,\quad3^y=3`],answer:M`\boxed{(x,y)=(2,1)}`}
    ]
  },
  {
    title:"Көрсеткіштік жүйенің шешімін тексеру",
    text:"Жүйені шешкенде алынған реттелген жұп әр теңдеуді қанағаттандыруы тиіс. Сондықтан екі айнымалының мәндерін бастапқы жүйеге қойып тексереміз.",
    formula:M`\begin{cases}a^x+a^y=p\\a^x-a^y=q\end{cases}`,
    example:[M`\begin{cases}2^x+2^y=10\\2^x-2^y=6\end{cases}`,M`2^x=8,\ 2^y=2`,M`\boxed{(x,y)=(3,1)}`],
    self:[
      {q:M`\begin{cases}2^x+2^y=20\\2^x-2^y=12\end{cases}`,steps:[M`2^x=16,\quad2^y=4`],answer:M`\boxed{(x,y)=(4,2)}`},
      {q:M`\begin{cases}3^x+3^y=30\\3^x-3^y=24\end{cases}`,steps:[M`3^x=27,\quad3^y=3`],answer:M`\boxed{(x,y)=(3,1)}`}
    ]
  }
];

// ==================================
// 4 ДЕҢГЕЙ — 20 ЕСЕП
// ==================================

const levels = [
  {
    name:"I деңгей — Жеңіл",
    points:5,
    tasks:[
      {
        q:M`2^x=16`,
        value:4,
        steps:[M`16=2^4`,M`\boxed{x=4}`]
      },
      {
        q:M`3^x=27`,
        value:3,
        steps:[M`27=3^3`,M`\boxed{x=3}`]
      },
      {
        q:M`5^x=625`,
        value:4,
        steps:[M`625=5^4`,M`\boxed{x=4}`]
      },
      {
        q:M`2^{x+1}=16`,
        value:3,
        steps:[M`x+1=4`,M`\boxed{x=3}`]
      },
      {
        q:M`3^{x-2}=9`,
        value:4,
        steps:[M`x-2=2`,M`\boxed{x=4}`]
      }
    ]
  },

  {
    name:"II деңгей — Орташа",
    points:10,
    tasks:[
      {
        q:M`4^x=32`,
        value:2.5,
        steps:[
          M`2^{2x}=2^5`,
          M`2x=5`,
          M`\boxed{x=\frac52}`
        ]
      },
      {
        q:M`9^x=27`,
        value:1.5,
        steps:[
          M`3^{2x}=3^3`,
          M`\boxed{x=\frac32}`
        ]
      },
      {
        q:M`2^{2x-1}=32`,
        value:3,
        steps:[
          M`2x-1=5`,
          M`\boxed{x=3}`
        ]
      },
      {
        q:M`3^{x+2}=243`,
        value:3,
        steps:[
          M`243=3^5`,
          M`x+2=5`,
          M`\boxed{x=3}`
        ]
      },
      {
        q:M`5^{2x}=\frac1{125}`,
        value:-1.5,
        steps:[
          M`5^{2x}=5^{-3}`,
          M`2x=-3`,
          M`\boxed{x=-\frac32}`
        ]
      }
    ]
  },

  {
    name:"III деңгей — Қиын",
    points:15,
    tasks:[
      {
        q:M`2^x+2^{x+1}=48`,
        value:4,
        steps:[
          M`3\cdot2^x=48`,
          M`2^x=16`,
          M`\boxed{x=4}`
        ]
      },
      {
        q:M`3^x+3^{x+1}=108`,
        value:3,
        steps:[
          M`4\cdot3^x=108`,
          M`3^x=27`,
          M`\boxed{x=3}`
        ]
      },
      {
        q:M`2^{2x}=64`,
        value:3,
        steps:[
          M`2^{2x}=2^6`,
          M`2x=6`,
          M`\boxed{x=3}`
        ]
      },
      {
        q:M`5^x+5^{x+1}=150`,
        value:2,
        steps:[
          M`6\cdot5^x=150`,
          M`5^x=25`,
          M`\boxed{x=2}`
        ]
      },
      {
        q:M`2^{x+2}-2^x=24`,
        value:3,
        steps:[
          M`4\cdot2^x-2^x=24`,
          M`3\cdot2^x=24`,
          M`\boxed{x=3}`
        ]
      }
    ]
  },

  {
    name:"IV деңгей — Өте қиын",
    points:20,
    tasks:[
      {
        q:M`\begin{cases}2^x+2^y=12\\2^x-2^y=4\end{cases}`,
        value:5,
        system:true,
        steps:[
          M`2^x=8,\quad2^y=4`,
          M`x=3,\quad y=2`,
          M`\boxed{x+y=5}`
        ]
      },
      {
        q:M`\begin{cases}2^x+2^y=20\\2^x-2^y=12\end{cases}`,
        value:6,
        system:true,
        steps:[
          M`2^x=16,\quad2^y=4`,
          M`x=4,\quad y=2`,
          M`\boxed{x+y=6}`
        ]
      },
      {
        q:M`\begin{cases}3^x+3^y=30\\3^x-3^y=24\end{cases}`,
        value:4,
        system:true,
        steps:[
          M`3^x=27,\quad3^y=3`,
          M`x=3,\quad y=1`,
          M`\boxed{x+y=4}`
        ]
      },
      {
        q:M`\begin{cases}2^x+2^y=18\\2^x-2^y=14\end{cases}`,
        value:5,
        system:true,
        steps:[
          M`2^x=16,\quad2^y=2`,
          M`x=4,\quad y=1`,
          M`\boxed{x+y=5}`
        ]
      },
      {
        q:M`\begin{cases}3^x+3^y=90\\3^x-3^y=72\end{cases}`,
        value:6,
        system:true,
        steps:[
          M`3^x=81,\quad3^y=9`,
          M`x=4,\quad y=2`,
          M`\boxed{x+y=6}`
        ]
      }
    ]
  }
];

// ==================================
// ТОПТЫҚ ОЙЫН — 15 СҰРАҚ
// ==================================

const quiz = [
  {
    q:"Көрсеткіштік теңдеуде айнымалы қайда орналасады?",
    options:["Негізде","Дәреже көрсеткішінде","Тек бөлімде","Тек түбір астында"],
    correct:1
  },
  {
    q:"2ˣ=8 теңдеуінің шешімі?",
    options:["2","4","3","8"],
    correct:2
  },
  {
    q:"3ˣ=81 теңдеуінде x нешеге тең?",
    options:["4","3","9","2"],
    correct:0
  },
  {
    q:"Негіздері бірдей дәрежелер тең болса, не тең болады?",
    options:["Негіздері нөл","Коэффициенттері","Тек мәндері","Көрсеткіштері"],
    correct:3
  },
  {
    q:"4ˣ=16 теңдеуінің шешімі?",
    options:["4","2","8","1"],
    correct:1
  },
  {
    q:"2^(x+1)=16. x мәні?",
    options:["4","5","3","2"],
    correct:2
  },
  {
    q:"5ˣ=1 теңдеуінің шешімі?",
    options:["0","1","5","−1"],
    correct:0
  },
  {
    q:"2⁻³ өрнегінің мәні?",
    options:["−8","8","−1/8","1/8"],
    correct:3
  },
  {
    q:"Жаңа айнымалы t=2ˣ болса, t қандай?",
    options:["Теріс","Оң","Нөл","Кез келген"],
    correct:1
  },
  {
    q:"9ˣ=27 болса, x нешеге тең?",
    options:["3","2","3/2","1/2"],
    correct:2
  },
  {
    q:"2ˣ+2ˣ нешеге тең?",
    options:["2·2ˣ","2^(2x)","4ˣ","2^(x+1)+1"],
    correct:0
  },
  {
    q:"3^(x−1)=9 болса, x мәні?",
    options:["2","1","4","3"],
    correct:3
  },
  {
    q:"Көрсеткіштік жүйенің шешімі нені қанағаттандырады?",
    options:["Бір теңдеуді","Барлық теңдеуді","Тек бірінші теңдеуді","Кез келгенін"],
    correct:1
  },
  {
    q:"2ˣ=32 теңдеуінде x нешеге тең?",
    options:["4","6","5","3"],
    correct:2
  },
  {
    q:"2ˣ+2ʸ=12 және 2ˣ−2ʸ=4 болса, x+y қанша?",
    options:["5","6","4","3"],
    correct:0
  }
];

// ==================================
// ҮЙ ЖҰМЫСЫ
// ==================================

const homework = [
  {
    title:"1. Көрсеткіштік теңдеулер",
    text:"Әр теңдеуді бірдей негізге келтіріп, шешу жолын толық жазыңдар. Табылған жауаптарды бастапқы теңдеулерге қойып тексеріңдер.",
    formulas:[
      M`2^{3x-1}=128`,
      M`9^{x+1}=27^{x-1}`,
      M`5^{x+2}=\frac1{125}`
    ]
  },
  {
    title:"2. Көрсеткіштік теңдеулер жүйелері",
    text:"Жүйедегі көрсеткіштік өрнектерді жаңа айнымалы арқылы алмастырып шешіңдер. Әр жүйенің жауабын (x,y) түрінде жазыңдар.",
    formulas:[
      M`\begin{cases}2^x+2^y=40\\2^x-2^y=24\end{cases}`,
      M`\begin{cases}3^x+3^y=36\\3^x-3^y=18\end{cases}`
    ]
  },
  {
    title:"3. Түсіндірме жұмысы",
    text:"«Көрсеткіштік теңдеулерді шешудің үш әдісі» тақырыбында 8–10 сөйлем жазыңдар. Бірдей негізге келтіру, ортақ көбейткішті шығару және жаңа айнымалы енгізу тәсілдеріне мысал келтіріңдер.",
    formulas:[]
  }
];

// ==================================
// 37 СЛАЙД
// ==================================

const slides=[{type:"intro",title:"Кіріспе"}];

theory.forEach((_,i)=>slides.push({
  type:"theory",index:i,title:`Түсіндірме ${i+1}`
}));
notes.forEach((_,i)=>slides.push({
  type:"note",index:i,title:`Конспект ${i+1}`
}));
levels.forEach((_,i)=>slides.push({
  type:"level",index:i,title:`${i+1}-деңгей`
}));
quiz.forEach((_,i)=>slides.push({
  type:"game",index:i,title:`${i%3+1}-топ, ${i+1}-сұрақ`
}));
slides.push(
  {type:"homework",title:"Үй жұмысы"},
  {type:"finish",title:"Қорытынды"}
);

let page=0;
let personalScore=0;
let teamScores=[0,0,0];

const solved=new Set();
const gameAnswers=new Map();

let secondsLeft=4800;
let timerInterval=null;
let timerDeadline=0;

// ==================================
// КӨМЕКШІ ФУНКЦИЯЛАР
// ==================================

function safe(value){
  return String(value).replace(/[&<>"']/g,c=>({
    "&":"&amp;","<":"&lt;",">":"&gt;",
    '"':"&quot;","'":"&#39;"
  }[c]));
}

function math(tex){
  return `<div class="math">\\[${tex}\\]</div>`;
}

function card(color,title,body){
  return `<section class="card ${color}">
    <h3>${safe(title)}</h3>${body}
  </section>`;
}

function stepsHTML(items){
  return items.map((item,i)=>`
    <div class="step">
      <strong>${i+1}-қадам</strong>
      ${math(item)}
    </div>
  `).join("");
}

function selfHTML(items,noteIndex){
  return items.map((task,i)=>{
    const id=`self_${noteIndex}_${i}`;

    return `<section class="self-task">
      <h3>✏️ ${i+1}-өзіндік есеп</h3>
      ${math(task.q)}
      <p>Алдымен есепті дәптерге шығарыңдар.</p>

      <button class="action" data-toggle="${id}">
        Шешу жолы мен жауапты көрсету
      </button>

      <div class="solution" id="${id}" hidden>
        ${stepsHTML(task.steps)}
        <h3>Дұрыс жауап</h3>
        ${math(task.answer)}
      </div>
    </section>`;
  }).join("");
}

// ==================================
// КІРІСПЕ
// ==================================

function renderIntro(){
  return `<div class="slide">
    <div class="eyebrow">МАТЕМАТИКА • 1 КУРС • 80 МИНУТ</div>
    <h1 class="gradient">§13. ${safe(lesson.title)}</h1>

    ${card("blue","Сабақ мақсаты",
      `<p>${safe(lesson.goal)}</p>`)}

    ${card("gold","Негізгі ереже",
      math(M`a^{f(x)}=a^{g(x)}\iff f(x)=g(x)`))}

    ${card("green","Сабақ құрылымы",`
      <p>5 толық теориялық түсіндірме</p>
      <p>10 конспект және 20 өзіндік есеп</p>
      <p>4 деңгейдегі 20 есеп</p>
      <p>3 топқа арналған 15 сұрақ</p>
      <p>Үй жұмысы және қорытынды</p>
    `)}

    ${card("purple","80 минуттық жоспар",`
      <p>Кіріспе — 5 минут</p>
      <p>Теория — 20 минут</p>
      <p>Конспект және өзіндік жұмыстар — 15 минут</p>
      <p>4 деңгейлік тапсырма — 20 минут</p>
      <p>Топтық ойын — 15 минут</p>
      <p>Қорытынды — 5 минут</p>
    `)}
  </div>`;
}

// ==================================
// ТЕОРИЯ — ӨЗІНДІК ЖҰМЫС ЖОҚ
// ==================================

function renderTheory(i){
  const t=theory[i];

  return `<div class="slide">
    <div class="eyebrow">ТҮСІНДІРМЕ ${i+1} / 5</div>
    <h2>${safe(t.title)}</h2>

    ${card("blue","Анықтама",
      `<p>${safe(t.definition)}</p>`)}
    ${card("purple","Қарапайым түсіндірме",
      `<p>${safe(t.explain)}</p>`)}
    ${card("green","Ереже",
      `<p>${safe(t.rule)}</p>`)}
    ${card("gold","Формула",math(t.formula))}
    ${card("green","Толық шығарылған мысал",
      stepsHTML(t.worked))}
    ${card("red","Маңызды ескерту",
      `<p>${safe(t.warning)}</p>`)}
  </div>`;
}

// ==================================
// КОНСПЕКТ — 2 ӨЗІНДІК ЕСЕП
// ==================================

function renderNote(i){
  const n=notes[i];

  return `<div class="slide">
    <div class="eyebrow">КОНСПЕКТ ${i+1} / 10</div>
    <h2>${safe(n.title)}</h2>

    <div class="notebook">
      <h3>✍ Дәптерге жазып алыңдар</h3>
      <p>${safe(n.text)}</p>
    </div>

    ${card("gold","Негізгі формула",math(n.formula))}
    ${card("green","Шығарылған мысал",
      stepsHTML(n.example))}

    <div class="eyebrow">ӨЗІНДІК ЖҰМЫС</div>
    <h2>Екі есеп</h2>
    ${selfHTML(n.self,i)}
  </div>`;
}

// ==================================
// ДЕҢГЕЙЛІК ЕСЕПТЕР
// ==================================

function renderLevel(i){
  const level=levels[i];

  return `<div class="slide">
    <div class="eyebrow">ДЕҢГЕЙ ${i+1} / 4</div>
    <h2>📐 ${safe(level.name)}</h2>

    <div class="level-header">
      <span>5 есеп</span>
      <span>Дұрыс жауап +${level.points} ұпай</span>
    </div>

    <p>
      ${i===3
        ?"Теңдеулер жүйесін шешіп, x+y қосындысын енгізіңдер."
        :"Теңдеуді шығарып, x мәнін енгізіңдер."}
      Жауапты сан немесе бөлшек түрінде жазуға болады.
    </p>

    <div class="level-grid">
      ${level.tasks.map((task,j)=>{
        const key=`${i}_${j}`;
        const done=solved.has(key);

        return `<section class="level-task">
          <h3>${j+1}-есеп</h3>
          ${math(task.q)}

          <div class="answer-row">
            <input id="answer_${key}"
              type="text"
              placeholder="${task.system?"x+y":"x"} мәні"
              ${done?"disabled":""}>

            <button data-check="${key}"
              ${done?"disabled":""}>
              ${done?"✓ Дұрыс":"Тексеру"}
            </button>
          </div>

          <p class="feedback ${done?"correct":""}"
             id="feedback_${key}">
            ${done?`✓ +${level.points} ұпай`:"Жауабыңды енгіз."}
          </p>

          <button class="action"
            data-toggle="solution_${key}">
            Шешу жолын көрсету
          </button>

          <div class="solution"
               id="solution_${key}" hidden>
            ${stepsHTML(task.steps)}
            <h3>Дұрыс жауап</h3>
            ${math(task.system
              ?`x+y=${task.value}`
              :`x=${task.value}`)}
          </div>
        </section>`;
      }).join("")}
    </div>
  </div>`;
}

// ==================================
// 3 ТОПТЫҚ ОЙЫН
// ==================================

function renderGame(i){
  const question=quiz[i];
  const team=i%3;
  const chosen=gameAnswers.get(i);

  return `<div class="slide">
    <div class="eyebrow">ТОПТЫҚ ОЙЫН ${i+1} / 15</div>
    <h2>🏆 ${team+1}-топ жауап береді</h2>

    <div class="scores">
      ${teamScores.map((points,j)=>`
        <div class="team ${team===j?"current":""}">
          ${j+1}-топ
          <strong>${points}</strong>
        </div>`).join("")}
    </div>

    ${card("gold",`${i+1}-сұрақ`,`
      <p>${safe(question.q)}</p>

      <div class="answers">
        ${question.options.map((option,j)=>{
          let cls="";
          if(chosen!==undefined){
            if(j===question.correct)cls="correct";
            else if(j===chosen)cls="wrong";
          }

          return `<button class="${cls}"
            data-choice="${j}"
            ${chosen!==undefined?"disabled":""}>
            ${"ABCD"[j]}. ${safe(option)}
          </button>`;
        }).join("")}
      </div>

      <p>${chosen===undefined
        ?"Төрт жауаптың біреуін таңдаңдар."
        :chosen===question.correct
          ?"✓ Дұрыс! +10 ұпай."
          :"Дұрыс жауап: "+safe(question.options[question.correct])}
      </p>
    `)}

    ${card("blue","Ереже",`
      <p>1-топ → 2-топ → 3-топ кезектеседі.</p>
      <p>Дұрыс жауапқа 10 ұпай.</p>
      <p>Жауаптан соң «Келесі» батырмасын басыңдар.</p>
    `)}
  </div>`;
}

// ==================================
// ҮЙ ЖҰМЫСЫ ЖӘНЕ ҚОРЫТЫНДЫ
// ==================================

function renderHomework(){
  return `<div class="slide">
    <div class="eyebrow">ҮЙ ТАПСЫРМАСЫ</div>
    <h2>📚 Үй жұмысы</h2>

    ${homework.map((item,i)=>card(
      ["blue","gold","green"][i],
      item.title,
      `<p>${safe(item.text)}</p>`+
      item.formulas.map(math).join("")
    )).join("")}
  </div>`;
}

function renderFinish(){
  const max=Math.max(...teamScores);
  const winners=teamScores
    .map((v,i)=>v===max?`${i+1}-топ`:null)
    .filter(Boolean);

  return `<div class="slide">
    <div class="eyebrow">ҚОРЫТЫНДЫ</div>
    <h1 class="gradient">Сабақ аяқталды!</h1>

    <div class="scores">
      ${teamScores.map((score,i)=>`
        <div class="team">${i+1}-топ
          <strong>${score}</strong>
        </div>`).join("")}
    </div>

    ${card("green","Ойын нәтижесі",`
      <p>${winners.join(", ")}
        ${winners.length===1?"— жеңімпаз!":"— бірдей ұпай жинады!"}
      </p>
    `)}

    ${card("blue","Жеке есептер",`
      <p>Дұрыс шығарылған есеп: ${solved.size} / 20</p>
      <p>Жеке ұпай: ${personalScore}</p>
    `)}

    ${card("gold","Бүгінгі сабақ",`
      <p>Көрсеткіштік теңдеулерді шештік.</p>
      <p>Ортақ көбейткішті жақша сыртына шығардық.</p>
      <p>Жаңа айнымалы енгіздік.</p>
      <p>Көрсеткіштік теңдеулер жүйесін шештік.</p>
    `)}

    <h2>Сау болыңыздар!</h2>
  </div>`;
}

// ==================================
// ФОРМУЛАЛАРДЫ КӨРСЕТУ
// ==================================

let mathQueue=Promise.resolve();
let viewVersion=0;

function typesetMath(){
  if(!window.MathJax)return;

  const version=viewVersion;

  mathQueue=mathQueue.then(async()=>{
    await MathJax.startup.promise;
    if(version!==viewVersion)return;

    await MathJax.typesetPromise([$("content")]);
  }).catch(e=>console.warn("MathJax:",e));
}

// ==================================
// СЛАЙДТЫ КӨРСЕТУ
// ==================================

function render(){
  const slide=slides[page];
  const views={
    intro:()=>renderIntro(),
    theory:()=>renderTheory(slide.index),
    note:()=>renderNote(slide.index),
    level:()=>renderLevel(slide.index),
    game:()=>renderGame(slide.index),
    homework:()=>renderHomework(),
    finish:()=>renderFinish()
  };

  viewVersion++;

  if(window.MathJax?.typesetClear){
    try{MathJax.typesetClear([$("content")]);}
    catch(e){console.warn(e);}
  }

  $("content").innerHTML=views[slide.type]();
  $("content").scrollTop=0;

  $("pageCounter").textContent=
    `${page+1} / ${slides.length}`;
  $("pageTitle").textContent=slide.title;
  $("pageProgress").style.width=
    `${(page+1)/slides.length*100}%`;

  $("prevPage").disabled=page===0;
  $("nextPage").disabled=page===slides.length-1;

  document.querySelectorAll("[data-section]").forEach(btn=>{
    btn.classList.toggle(
      "active",btn.dataset.section===slide.type
    );
  });

  updateScore();
  typesetMath();
}

function updateScore(){
  $("totalScore").textContent=
    personalScore+teamScores.reduce((a,b)=>a+b,0);
}

// ==================================
// БАТЫРМАЛАР
// ==================================

$("nextPage").onclick=()=>{
  if(page<slides.length-1){
    page++;
    render();
  }
};

$("prevPage").onclick=()=>{
  if(page>0){
    page--;
    render();
  }
};

document.querySelectorAll("[data-section]").forEach(btn=>{
  btn.onclick=()=>{
    const index=slides.findIndex(s=>s.type===btn.dataset.section);
    if(index>=0){
      page=index;
      render();
    }
  };
});

$("content").addEventListener("click",event=>{
  const toggle=event.target.closest("[data-toggle]");
  if(toggle){
    const element=$(toggle.dataset.toggle);
    if(element)element.hidden=!element.hidden;
    return;
  }

  const check=event.target.closest("[data-check]");
  if(check){
    checkLevel(check.dataset.check);
    return;
  }

  const choice=event.target.closest("[data-choice]");
  if(choice)answerGame(Number(choice.dataset.choice));
});

// ==================================
// ДЕҢГЕЙЛІК ЕСЕПТІ ТЕКСЕРУ
// ==================================

function checkLevel(key){
  if(solved.has(key))return;

  const [levelIndex,taskIndex]=key.split("_").map(Number);
  const level=levels[levelIndex];
  const task=level.tasks[taskIndex];

  const input=$("answer_"+key);
  const feedback=$("feedback_"+key);

  if(!input.value.trim()){
    feedback.textContent="Алдымен жауап енгіз.";
    return;
  }

  let result;
  try{
    result=calculate(input.value);
  }catch(e){
    feedback.textContent="Сан немесе бөлшек түрінде жаз.";
    return;
  }

  const tolerance=1e-7*Math.max(1,Math.abs(task.value));

  if(Math.abs(result-task.value)<=tolerance){
    solved.add(key);
    personalScore+=level.points;

    input.disabled=true;

    const button=document.querySelector(`[data-check="${key}"]`);
    if(button){
      button.disabled=true;
      button.textContent="✓ Дұрыс";
    }

    feedback.textContent=`✓ Дұрыс! +${level.points} ұпай`;
    feedback.classList.add("correct");
    updateScore();
  }else{
    feedback.textContent="Қате. Шешу жолын қайта тексер.";
  }
}

// ==================================
// ТОПТЫҚ ОЙЫН
// ==================================

function answerGame(choice){
  const slide=slides[page];
  if(slide.type!=="game")return;
  if(gameAnswers.has(slide.index))return;

  gameAnswers.set(slide.index,choice);

  if(choice===quiz[slide.index].correct){
    teamScores[slide.index%3]+=10;
  }
  render();
}

$("resetGame").onclick=()=>{
  teamScores=[0,0,0];
  gameAnswers.clear();
  render();
};

// ==================================
// ТОЛЫҚ ЭКРАН
// ==================================

$("fullscreenBtn").onclick=async()=>{
  try{
    if(document.fullscreenElement){
      await document.exitFullscreen();
    }else{
      await document.documentElement.requestFullscreen();
    }
  }catch(e){console.warn(e);}
};

// ==================================
// 80 МИНУТТЫҚ ТАЙМЕР
// ==================================

function formatTime(sec){
  return String(Math.floor(sec/60)).padStart(2,"0")+
         ":"+String(sec%60).padStart(2,"0");
}

function updateTimer(){
  $("remaining").textContent=formatTime(secondsLeft);
  $("elapsed").textContent=formatTime(4800-secondsLeft);
  $("timeProgress").style.width=
    `${(4800-secondsLeft)/4800*100}%`;
}

function startTimer(){
  if(timerInterval!==null||secondsLeft<=0)return;

  timerDeadline=Date.now()+secondsLeft*1000;

  timerInterval=setInterval(()=>{
    secondsLeft=Math.max(
      0,Math.ceil((timerDeadline-Date.now())/1000)
    );
    updateTimer();
    if(secondsLeft===0)pauseTimer();
  },250);
}

function pauseTimer(){
  if(timerInterval!==null)clearInterval(timerInterval);
  timerInterval=null;
}

function resetTimer(){
  pauseTimer();
  secondsLeft=4800;
  updateTimer();
}

$("timerStart").onclick=startTimer;
$("timerPause").onclick=pauseTimer;
$("timerReset").onclick=resetTimer;

// ==================================
// АЛМАТЫ УАҚЫТЫ
// ==================================

function updateClock(){
  $("clock").textContent=
    new Intl.DateTimeFormat("kk-KZ",{
      timeZone:"Asia/Almaty",
      hour:"2-digit",
      minute:"2-digit",
      second:"2-digit",
      hour12:false
    }).format(new Date());
}

updateClock();
setInterval(updateClock,1000);

// ==================================
// КАЛЬКУЛЯТОР БАТЫРМАЛАРЫ
// ==================================

const calcValues={basic:"",science:""};

const calcKeys={
  basic:[
    "C","⌫","(",")",
    "7","8","9","÷",
    "4","5","6","×",
    "1","2","3","−",
    "%","0",".","+","="
  ],
  science:[
    "C","⌫","(",")",
    "sin","cos","tg","ctg",
    "√","∛","x²","xʸ",
    "log","ln","π","e",
    "7","8","9","÷",
    "4","5","6","×",
    "1","2","3","−",
    "%","0",".","+","="
  ]
};

const calcMap={
  "×":"*","÷":"/","−":"-",
  "sin":"sin(","cos":"cos(",
  "tg":"tan(","ctg":"ctg(",
  "√":"sqrt(","∛":"cbrt(",
  "log":"log(","ln":"ln(",
  "π":"pi","x²":"^2","xʸ":"^"
};

function createCalc(type){
  const grid=$("keys-"+type);

  calcKeys[type].forEach(key=>{
    const btn=document.createElement("button");
    btn.type="button";
    btn.textContent=key;

    if(key==="C")btn.classList.add("clear");
    if(key==="=")btn.classList.add("equal");

    if(["sin","cos","tg","ctg","log","ln"].includes(key)){
      btn.classList.add("trig");
    }

    if(["+","−","×","÷","√","∛","x²","xʸ"].includes(key)){
      btn.classList.add("op");
    }

    btn.onclick=()=>pressCalc(type,key);
    grid.appendChild(btn);
  });
}

function pressCalc(type,key){
  let value=calcValues[type];

  if(key==="C"){
    value="";
  }else if(key==="⌫"){
    value=value.slice(0,-1);
  }else if(key==="="){
    try{
      value=String(Number(calculate(value).toPrecision(12)));
    }catch(e){
      value="Қате";
    }
  }else{
    if(value==="Қате")value="";
    value+=calcMap[key]??key;
  }

  calcValues[type]=value;
  const display=$("display-"+type);
  display.textContent=value||"0";
  display.scrollLeft=display.scrollWidth;
}

// ==================================
// МАТЕМАТИКАЛЫҚ ЕСЕПТЕУ
// eval() қолданылмайды.
// ==================================

function calculate(input){
  const source=String(input)
    .replace(/\s+/g,"")
    .replace(/,/g,".");

  let pos=0;
  const rad=x=>x*Math.PI/180;

  const funcs={
    sin:x=>Math.sin(rad(x)),
    cos:x=>Math.cos(rad(x)),
    tan:x=>{
      if(Math.abs(Math.cos(rad(x)))<1e-12){
        throw Error("Тангенс анықталмаған");
      }
      return Math.tan(rad(x));
    },
    ctg:x=>{
      if(Math.abs(Math.sin(rad(x)))<1e-12){
        throw Error("Котангенс анықталмаған");
      }
      return Math.cos(rad(x))/Math.sin(rad(x));
    },
    sqrt:Math.sqrt,
    cbrt:Math.cbrt,
    log:Math.log10,
    ln:Math.log
  };

  function take(symbol){
    if(source[pos]===symbol){
      pos++;
      return true;
    }
    return false;
  }

  function atom(){
    if(take("(")){
      const value=expression();
      if(!take(")"))throw Error("Жақша жабылмаған");
      return value;
    }

    const rest=source.slice(pos);
    const number=rest.match(/^(?:\d+\.?\d*|\.\d+)/);

    if(number){
      pos+=number[0].length;
      return Number(number[0]);
    }

    if(rest.startsWith("pi")){
      pos+=2;
      return Math.PI;
    }

    if(rest.startsWith("e")){
      pos++;
      return Math.E;
    }

    for(const name of Object.keys(funcs)){
      if(rest.startsWith(name+"(")){
        pos+=name.length+1;
        const value=expression();
        if(!take(")"))throw Error("Жақша жабылмаған");
        return funcs[name](value);
      }
    }

    throw Error("Қате өрнек");
  }

  function percent(){
    let value=atom();
    while(take("%"))value/=100;
    return value;
  }

  function power(){
    let value=percent();
    if(take("^"))value=Math.pow(value,unary());
    return value;
  }

  function unary(){
    if(take("+"))return unary();
    if(take("-"))return -unary();
    return power();
  }

  function term(){
    let value=unary();
    while(true){
      if(take("*")){
        value*=unary();
      }else if(take("/")){
        const d=unary();
        if(d===0)throw Error("Нөлге бөлу");
        value/=d;
      }else{
        break;
      }
    }
    return value;
  }

  function expression(){
    let value=term();

    while(true){
      if(take("+"))value+=term();
      else if(take("-"))value-=term();
      else break;
    }

    return value;
  }

  if(!source)throw Error("Бос өрнек");

  const result=expression();

  if(pos!==source.length||!Number.isFinite(result)){
    throw Error("Есептеу қатесі");
  }

  return Math.abs(result)<1e-12?0:result;
}

// ==================================
// АШУ ЖӘНЕ ЖАБУ
// ==================================

function toggleCalc(type){
  const el=$("calc-"+type);
  const other=type==="basic"?"science":"basic";
  const opening=!el.classList.contains("visible");

  $("calc-"+other).classList.remove("visible");
  el.classList.toggle("visible",opening);

  if(opening){
    const rect=el.getBoundingClientRect();
    const maxX=Math.max(0,innerWidth-el.offsetWidth);
    const maxY=Math.max(0,innerHeight-el.offsetHeight);

    el.style.left=Math.max(0,Math.min(maxX,rect.left))+"px";
    el.style.top=Math.max(0,Math.min(maxY,rect.top))+"px";
  }
}

$("basicOpen").onclick=()=>toggleCalc("basic");
$("scienceOpen").onclick=()=>toggleCalc("science");

document.querySelectorAll("[data-close]").forEach(btn=>{
  btn.onclick=()=>{
    $("calc-"+btn.dataset.close).classList.remove("visible");
  };
});

// ==================================
// ЖЫЛЖЫМАЛЫ КАЛЬКУЛЯТОР
// ==================================

function draggable(el){
  const handle=el.querySelector(".calc-head");
  let drag=null;

  handle.addEventListener("pointerdown",e=>{
    if(e.target.closest("button"))return;
    if(e.pointerType==="mouse"&&e.button!==0)return;

    const rect=el.getBoundingClientRect();

    drag={
      id:e.pointerId,
      x:e.clientX,
      y:e.clientY,
      left:rect.left,
      top:rect.top
    };

    handle.setPointerCapture(e.pointerId);
  });

  handle.addEventListener("pointermove",e=>{
    if(!drag||e.pointerId!==drag.id)return;

    const dx=e.clientX-drag.x;
    const dy=e.clientY-drag.y;

    const maxX=Math.max(0,innerWidth-el.offsetWidth);
    const maxY=Math.max(0,innerHeight-el.offsetHeight);

    el.style.left=
      Math.max(0,Math.min(maxX,drag.left+dx))+"px";

    el.style.top=
      Math.max(0,Math.min(maxY,drag.top+dy))+"px";
  });

  handle.addEventListener("pointerup",()=>drag=null);
  handle.addEventListener("pointercancel",()=>drag=null);
}

// ==================================
// САЙТТЫ ІСКЕ ҚОСУ
// ==================================

createCalc("basic");
createCalc("science");

draggable($("calc-basic"));
draggable($("calc-science"));

updateTimer();
render();
