/* ============================================================
   CARDS.JS — All card data for Blossom & Koi Garden
   4 activity types + reward + punish + event + minigame
============================================================ */

// ── ACTIVITY CARDS (normal spaces — random from all 4 categories) ──
const ACTIVITY_CARDS = [
  // BODY
  { id:'b01', category:'body',   title:'Morning Stretch',   titleTh:'ยืดเส้นยืดสาย',    time:30, points:1, diff:'Easy',   scoring:'Voting',   instruction:'Reach both arms overhead and stretch as tall as you can for 30 seconds!',             instructionTh:'ยืดแขนทั้งสองข้างขึ้นเหนือศีรษะ 30 วินาที' },
  { id:'b02', category:'body',   title:'Toe Tapper',        titleTh:'เขย่งเท้า',          time:30, points:1, diff:'Easy',   scoring:'Count',    instruction:'Tap your toes as fast as you can for 30 seconds!',                                      instructionTh:'แตะปลายเท้าให้เร็วที่สุด 30 วินาที' },
  { id:'b03', category:'body',   title:'Shoulder Rolls',    titleTh:'หมุนไหล่',           time:30, points:1, diff:'Easy',   scoring:'Voting',   instruction:'Roll shoulders forward 5 times, then backward 5 times. Smooth and controlled!',         instructionTh:'หมุนไหล่ไปข้างหน้า 5 ครั้ง แล้วข้างหลัง 5 ครั้ง' },
  { id:'b04', category:'body',   title:'Hand Squeeze',      titleTh:'บีบมือ',             time:30, points:1, diff:'Easy',   scoring:'Voting',   instruction:'Make tight fists and squeeze for 5 seconds, release. Repeat 5 times each hand.',         instructionTh:'กำมืออย่างแน่น 5 วินาที ทำซ้ำ 5 ครั้งต่อมือ' },
  { id:'b05', category:'body',   title:'Ankle Circles',     titleTh:'หมุนข้อเท้า',       time:30, points:1, diff:'Easy',   scoring:'Voting',   instruction:'Lift one foot and draw circles with your ankle. 5 each direction, then switch!',         instructionTh:'ยกเท้าแล้ววาดวงกลมด้วยข้อเท้า 5 ครั้งทั้งสองทิศ' },
  { id:'b06', category:'body',   title:'Deep Breaths',      titleTh:'หายใจลึกๆ',         time:30, points:1, diff:'Easy',   scoring:'Voting',   instruction:'Take 5 deep belly breaths — inhale 4 counts, hold 2, exhale 6. Lead the group!',        instructionTh:'หายใจลึก 5 ครั้ง เข้า 4 กลั้น 2 ออก 6' },
  { id:'b07', category:'body',   title:'Chair Stand',       titleTh:'ลุกนั่งเก้าอี้',    time:30, points:2, diff:'Medium', scoring:'Count',    instruction:'Stand up from your chair and sit back down as many times as you can in 30 seconds!',    instructionTh:'ลุกนั่งจากเก้าอี้ให้ได้มากที่สุดใน 30 วินาที' },
  { id:'b08', category:'body',   title:'Flamingo Stand',    titleTh:'ยืนขาเดียว',        time:30, points:2, diff:'Medium', scoring:'Voting',   instruction:'Balance on one leg for 15 seconds without holding anything. Then switch legs!',          instructionTh:'ยืนขาเดียว 15 วินาทีโดยไม่จับอะไร' },
  { id:'b09', category:'body',   title:'Walk & Count',      titleTh:'เดินและนับ',         time:30, points:1, diff:'Easy',   scoring:'Count',    instruction:'March in place counting steps out loud. How many in 30 seconds?',                        instructionTh:'เดินอยู่กับที่และนับก้าวออกเสียง' },
  { id:'b10', category:'body',   title:'Arm Windmill',      titleTh:'หมุนแขน',           time:30, points:1, diff:'Easy',   scoring:'Voting',   instruction:'Swing both arms in big windmill circles — forward 10 times, backward 10 times!',         instructionTh:'แกว่งแขนเป็นวงกลม ไปหน้า 10 ครั้ง หลัง 10 ครั้ง' },
  { id:'b11', category:'body',   title:'Heel Raises',       titleTh:'ยกส้นเท้า',         time:30, points:2, diff:'Medium', scoring:'Count',    instruction:'Stand and raise up onto your toes, then lower. As many as you can in 30 seconds!',       instructionTh:'ยืนยกปลายเท้าแล้วลดลง ทำให้มากที่สุดใน 30 วินาที' },
  { id:'b12', category:'body',   title:'Dance Break',       titleTh:'เต้นสักหน่อย',      time:30, points:2, diff:'Fun',    scoring:'Voting',   instruction:'Put on your best dance moves for 30 seconds. Group votes for the best dancer!',           instructionTh:'แสดงท่าเต้นที่ดีที่สุด 30 วินาที กลุ่มโหวต!' },

  // BRAIN
  { id:'br01', category:'brain', title:'Color Count',       titleTh:'นับสี',             time:30, points:1, diff:'Easy',   scoring:'Count',    instruction:'How many RED objects can you spot in the room in 30 seconds? Name them all!',            instructionTh:'มีวัตถุสีแดงกี่ชิ้นในห้อง บอกชื่อทั้งหมด!' },
  { id:'br02', category:'brain', title:'Backward Spelling', titleTh:'สะกดถอยหลัง',      time:30, points:2, diff:'Medium', scoring:'Voting',   instruction:'Spell your full name backward, out loud, as fast as you can!',                           instructionTh:'สะกดชื่อเต็มของคุณถอยหลังออกเสียง!' },
  { id:'br03', category:'brain', title:'Number Chain',      titleTh:'ลูกโซ่ตัวเลข',     time:30, points:2, diff:'Hard',   scoring:'Count',    instruction:'Count backward from 50 by 3s (50, 47, 44…). How far in 30 seconds?',                    instructionTh:'นับถอยหลังจาก 50 ลด 3 ไปได้ไกลแค่ไหนใน 30 วินาที?' },
  { id:'br04', category:'brain', title:'Animal ABCs',       titleTh:'สัตว์ A ถึง Z',    time:60, points:3, diff:'Hard',   scoring:'Count',    instruction:'Name an animal for every letter of the alphabet. How many letters can you get?',           instructionTh:'บอกชื่อสัตว์สำหรับทุกตัวอักษร A-Z ผ่านได้กี่ตัว?' },
  { id:'br05', category:'brain', title:'Pattern Finder',    titleTh:'หาลวดลาย',         time:30, points:2, diff:'Medium', scoring:'Correct',  instruction:'What comes next? 2, 4, 8, 16, __ ? Explain your reasoning to earn the point!',           instructionTh:'อะไรตามมา? 2, 4, 8, 16, __ อธิบายเหตุผลเพื่อรับคะแนน!' },
  { id:'br06', category:'brain', title:'Story Builder',     titleTh:'สร้างเรื่องราว',   time:45, points:2, diff:'Medium', scoring:'Voting',   instruction:'Make up a story using: elephant, umbrella, midnight. You have 45 seconds!',               instructionTh:'แต่งเรื่องโดยใช้: ช้าง ร่ม เที่ยงคืน ใน 45 วินาที!' },
  { id:'br07', category:'brain', title:'5 Senses Check',    titleTh:'5 ประสาทสัมผัส',   time:60, points:3, diff:'Medium', scoring:'Count',    instruction:'5 things you see, 4 touch, 3 hear, 2 smell, 1 taste. Go!',                               instructionTh:'บอก 5 สิ่งที่เห็น 4 สัมผัส 3 ได้ยิน 2 ดมได้ 1 ลิ้มรส!' },
  { id:'br08', category:'brain', title:'Mental Math',       titleTh:'คณิตศาสตร์ในใจ',   time:30, points:3, diff:'Hard',   scoring:'Correct',  instruction:'What is 17 × 8 − 36 ÷ 4? Calculate in your head — no writing!',                          instructionTh:'17 × 8 − 36 ÷ 4 เท่ากับเท่าไหร่? คำนวณในใจเท่านั้น!' },
  { id:'br09', category:'brain', title:'Category Sprint',   titleTh:'วิ่งหมวดหมู่',     time:30, points:2, diff:'Easy',   scoring:'Count',    instruction:'Name as many types of fruit as you can in 30 seconds. No repeats!',                       instructionTh:'บอกชื่อผลไม้ให้ได้มากที่สุดใน 30 วินาที ห้ามซ้ำ!' },
  { id:'br10', category:'brain', title:'20 Questions',      titleTh:'20 คำถาม',          time:120,points:3, diff:'Medium', scoring:'Voting',   instruction:'Think of a famous person. Everyone else asks yes/no questions to guess who it is!',       instructionTh:'คิดถึงบุคคลที่มีชื่อเสียง คนอื่นถามใช่/ไม่ใช่เพื่อทาย!' },

  // SOCIAL
  { id:'s01', category:'social', title:'Give a Compliment', titleTh:'ให้คำชม',           time:60, points:2, diff:'Easy',   scoring:'Voting',   instruction:'Give a genuine, specific compliment to each person at the table. Make it meaningful!',    instructionTh:'ให้คำชมที่จริงใจแก่ทุกคนที่โต๊ะ ทำให้มีความหมาย!' },
  { id:'s02', category:'social', title:'Childhood Memory',  titleTh:'ความทรงจำวัยเด็ก', time:60, points:2, diff:'Easy',   scoring:'Voting',   instruction:'Share your happiest childhood memory in under 60 seconds. Make the group feel it!',        instructionTh:'แบ่งปันความทรงจำที่มีความสุขในวัยเด็กภายใน 60 วินาที' },
  { id:'s03', category:'social', title:'Tell a Joke',       titleTh:'เล่าเรื่องตลก',    time:45, points:2, diff:'Easy',   scoring:'Voting',   instruction:'Tell the funniest joke you know! Group votes — most laughs wins the point.',              instructionTh:'เล่าเรื่องตลก กลุ่มโหวต ใครทำให้หัวเราะมากสุดชนะ!' },
  { id:'s04', category:'social', title:'2 Truths 1 Lie',    titleTh:'ความจริง 2 คำโกหก 1',time:60,points:2, diff:'Easy',  scoring:'Voting',   instruction:'Tell 2 true facts and 1 lie about yourself. Everyone guesses the lie!',                   instructionTh:'บอก 2 ความจริงและ 1 คำโกหกเกี่ยวกับตัวคุณ ทุกคนเดา!' },
  { id:'s05', category:'social', title:'Teach Something',   titleTh:'สอนบางอย่าง',      time:60, points:3, diff:'Medium', scoring:'Voting',   instruction:'Teach the group one skill most people don\'t know. Be clear and fun!',                    instructionTh:'สอนกลุ่มทักษะที่คนส่วนใหญ่ไม่รู้ ให้ชัดเจนและสนุก!' },
  { id:'s06', category:'social', title:'Life Lesson',       titleTh:'บทเรียนชีวิต',     time:60, points:3, diff:'Medium', scoring:'Voting',   instruction:'Share the most valuable life lesson you\'ve ever learned. Make it memorable!',             instructionTh:'แบ่งปันบทเรียนชีวิตที่มีค่าที่สุดที่เคยเรียนรู้!' },
  { id:'s07', category:'social', title:'Thankful Moment',   titleTh:'ช่วงเวลาขอบคุณ',  time:45, points:2, diff:'Easy',   scoring:'Voting',   instruction:'Name 3 specific things you\'re grateful for TODAY. Share why each one matters.',          instructionTh:'บอก 3 สิ่งที่รู้สึกขอบคุณในวันนี้ และทำไมแต่ละอย่างสำคัญ' },

  // H2H
  { id:'h01', category:'h2h',   title:'Rhyme Duel',        titleTh:'ดวลสัมผัส',         time:60, points:2, diff:'Medium', scoring:'Win/Lose',  instruction:'You and one opponent alternate rhyming words. First to hesitate or repeat LOSES!',        instructionTh:'สลับกันพูดคำสัมผัส ใครลังเลหรือซ้ำก่อนแพ้!' },
  { id:'h02', category:'h2h',   title:'Memory Battle',     titleTh:'ดวลความจำ',          time:45, points:3, diff:'Hard',   scoring:'Win/Lose',  instruction:'Both players study the same 10 words for 15 sec. Who remembers more?',                   instructionTh:'ดูรายการ 10 คำ 15 วินาที ใครจำได้มากกว่าชนะ!' },
  { id:'h03', category:'h2h',   title:'Word Chain',        titleTh:'ลูกโซ่คำ',          time:60, points:2, diff:'Medium', scoring:'Win/Lose',  instruction:'Say a word. Opponent says one starting with your last letter. First to fail loses!',      instructionTh:'พูดคำที่เริ่มต้วยตัวอักษรสุดท้ายของคำก่อนหน้า ใครพลาดแพ้!' },
  { id:'h04', category:'h2h',   title:'Rock Paper Scissors',titleTh:'เป่ายิ้งฉุบ',      time:60, points:1, diff:'Easy',   scoring:'Win/Lose',  instruction:'Best of 5 rounds of Rock Paper Scissors — but name a country with each move!',            instructionTh:'ดีที่สุด 5 รอบเป่ายิ้งฉุบ แต่ต้องบอกชื่อประเทศด้วย!' },
  { id:'h05', category:'h2h',   title:'Story Duel',        titleTh:'ดวลเรื่อง',         time:60, points:2, diff:'Medium', scoring:'Win/Lose',  instruction:'Both tell a 30-sec story on the same topic. Group votes for the better story!',           instructionTh:'เล่าเรื่อง 30 วินาทีในหัวข้อเดียวกัน กลุ่มโหวต!' },
  { id:'h06', category:'h2h',   title:'Dance Off',         titleTh:'ดวลเต้น',           time:40, points:2, diff:'Fun',    scoring:'Win/Lose',  instruction:'Each player has 20 seconds for their best dance move. Group votes for the winner!',       instructionTh:'ผู้เล่นแต่ละคนมี 20 วินาทีแสดงท่าเต้นที่ดีที่สุด กลุ่มโหวต!' },
];

// ── REWARD CARDS (5 reward spaces) ──
const REWARD_CARDS = [
  { id:'r01', title:'Lucky Clover',       titleTh:'โคลเวอร์นำโชค',     space:3,  effect:'points',   value:2,  description:'+2 bonus points!',                        descriptionTh:'รับ +2 คะแนนโบนัส!' },
  { id:'r02', title:'Treasure Chest',     titleTh:'หีบสมบัติ',          space:10, effect:'draw2',    value:0,  description:'Draw 2 cards, pick 1 to play next turn.',  descriptionTh:'จั่ว 2 ใบ เลือก 1 ใบเพื่อเล่นในรอบถัดไป' },
  { id:'r03', title:'Friendship Fountain',titleTh:'น้ำพุแห่งมิตรภาพ',  space:18, effect:'sharePoints',value:2, description:'Compliment someone → both get +2 pts!',    descriptionTh:'ชมใครสักคน → ทั้งคู่รับ +2 คะแนน!' },
  { id:'r04', title:'Golden Star',        titleTh:'ดาวทอง',             space:29, effect:'extraTurn', value:0, description:'Take an extra turn immediately!',          descriptionTh:'รับตาพิเศษทันที!' },
  { id:'r05', title:'Victory Boost',      titleTh:'พลังแห่งชัยชนะ',    space:36, effect:'move',     value:2,  description:'Move forward +2 extra spaces!',            descriptionTh:'เดินไปข้างหน้าอีก +2 ช่อง!' },
];

// ── PUNISH CARDS (4 punish spaces) ──
const PUNISH_CARDS = [
  { id:'p01', title:'Foggy Path',        titleTh:'ทางหมอก',          space:7,  effect:'moveBack',  value:2, description:'Go back 2 spaces.',                       descriptionTh:'ถอยหลัง 2 ช่อง' },
  { id:'p02', title:'Slippery Slope',    titleTh:'ทางลื่น',          space:14, effect:'skipDraw',  value:0, description:'Skip your next card draw.',               descriptionTh:'ข้ามการจั่วไพ่ในรอบถัดไป' },
  { id:'p03', title:'Canyon Trap',       titleTh:'กับดักหุบเขา',     space:23, effect:'givePoints',value:2, description:'Give 2 pts to the last-place player.',    descriptionTh:'ให้ 2 คะแนนแก่ผู้เล่นที่อยู่ท้ายสุด' },
  { id:'p04', title:'Trickster Ghost',   titleTh:'ผีซุกซน',          space:31, effect:'loseStreak',value:0, description:'Lose your streak bonus.',                 descriptionTh:'เสียโบนัสสตรีค' },
  { id:'p05', title:'Boss Challenge',    titleTh:'บอสท้าทาย',        space:38, effect:'bossCard',  value:0, description:'Draw a Hard card. Succeed = +5pts! Fail = go back 3 spaces.', descriptionTh:'จั่วไพ่ Hard ถ้าสำเร็จ +5 คะแนน ถ้าล้มเหลวถอย 3 ช่อง' },
];

// ── EVENT CARDS (12 random surprises) ──
const EVENT_CARDS = [
  { id:'e01', title:'Swap Places!',       titleTh:'สลับที่!',           type:'Chaos',  effect:'swap',         description:'Swap board positions with the player ahead of you.',            descriptionTh:'สลับตำแหน่งกับผู้เล่นที่อยู่ข้างหน้า' },
  { id:'e02', title:'Double or Nothing',  titleTh:'คูณสองหรือศูนย์',    type:'Gamble', effect:'doubleOrNothing',description:'Coin flip: heads = +3 pts, tails = -2 pts.',                    descriptionTh:'โยนเหรียญ: หัว +3 คะแนน ก้อย -2 คะแนน' },
  { id:'e03', title:'Gift of Kindness',   titleTh:'ของขวัญแห่งความดี',  type:'Reward', effect:'giveAndGet',   description:'Give +2 to any player, you get +1.',                            descriptionTh:'ให้ +2 คะแนนแก่ผู้เล่นใดก็ได้ คุณรับ +1' },
  { id:'e04', title:'Reverse!',           titleTh:'กลับทาง!',           type:'Chaos',  effect:'reverse',      description:'Turn order goes counter-clockwise for 2 rounds!',               descriptionTh:'ลำดับการเล่นสวนทางเป็นเวลา 2 รอบ!' },
  { id:'e05', title:'Everybody Dance!',   titleTh:'เต้นกันทุกคน!',      type:'Group',  effect:'groupDance',   description:'All players dance for 15 seconds — all get +1 pt!',             descriptionTh:'ทุกคนเต้น 15 วินาที ทุกคนรับ +1 คะแนน!' },
  { id:'e06', title:'Steal a Star',       titleTh:'ขโมยดาว',            type:'Punish', effect:'steal',        description:'Steal 2 pts from the player in 1st place!',                    descriptionTh:'ขโมย 2 คะแนนจากผู้เล่นที่อยู่อันดับ 1!' },
  { id:'e07', title:'Time Warp',          titleTh:'บิดเวลา',            type:'Chaos',  effect:'timeWarp',     description:'Return to nearest mini-game space and replay it!',              descriptionTh:'กลับไปที่ช่องมินิเกมที่ใกล้ที่สุดและเล่นใหม่!' },
  { id:'e08', title:'Lucky Break',        titleTh:'โชคดี',              type:'Reward', effect:'luckyMove',    description:'Roll the die, move that many extra spaces forward!',            descriptionTh:'โยนลูกเต๋า เดินไปข้างหน้าเพิ่มตามผลลูกเต๋า!' },
  { id:'e09', title:'Freeze!',            titleTh:'แข็งตัว!',           type:'Punish', effect:'freeze',       description:'Cannot move next turn (but still draw a card and score).',     descriptionTh:'ไม่สามารถเดินในรอบถัดไป แต่ยังจั่วไพ่และรับคะแนนได้' },
  { id:'e10', title:'Bonus Round',        titleTh:'รอบโบนัส',           type:'Group',  effect:'bonusRound',   description:'Trigger a random mini-game for ALL players!',                  descriptionTh:'เปิดมินิเกมสุ่มสำหรับผู้เล่นทุกคน!' },
  { id:'e11', title:'Point Earthquake',   titleTh:'แผ่นดินไหวคะแนน',   type:'Chaos',  effect:'quake',        description:'Players with 10+ pts lose 3. Players under 10 gain 2.',         descriptionTh:'ผู้ที่มี 10+ คะแนนเสีย 3 ผู้ที่ต่ำกว่า 10 ได้ 2' },
  { id:'e12', title:'Shield Bubble',      titleTh:'ฟองกันภัย',          type:'Reward', effect:'shield',       description:'Block the next punishment or negative event card!',             descriptionTh:'บล็อกการ์ดลงโทษหรืออีเวนต์ลบถัดไป!' },
];

// ── MINI-GAMES (triggered on minigame space — all players compete) ──
const MINIGAME_CARDS = [
  { id:'mg01', title:'Quick Quiz',       titleTh:'ควิซด่วน',         time:60,  points:3, description:'3 rapid trivia questions. First correct answer scores!',                descriptionTh:'คำถามไตรเวีย 3 ข้อ คนตอบถูกก่อนรับคะแนน!' },
  { id:'mg02', title:'Stretch Race',     titleTh:'แข่งยืดเส้น',      time:45,  points:3, description:'Race: 10 arm circles + 5 shoulder rolls + 10 toe taps. Fastest wins!', descriptionTh:'แข่ง: วนแขน 10 ครั้ง + หมุนไหล่ 5 + แตะเท้า 10 เร็วที่สุดชนะ!' },
  { id:'mg03', title:'Story Slam',       titleTh:'ประกวดเรื่องเล่า',  time:120, points:4, description:'Each player tells a 30-sec story on the same topic. Group votes best!',  descriptionTh:'แต่ละคนเล่าเรื่อง 30 วินาทีในหัวข้อเดียวกัน กลุ่มโหวต!' },
  { id:'mg04', title:'Memory Mayhem',    titleTh:'ดวลความจำ',         time:90,  points:4, description:'Memorize 10 objects in 30s. Most recalled wins!',                       descriptionTh:'จำวัตถุ 10 ชิ้นใน 30 วินาที ใครจำได้มากสุดชนะ!' },
  { id:'mg05', title:'Final Showdown',   titleTh:'ศึกชิงชัย',         time:120, points:5, description:'Rhyme elimination! Go around — hesitate or repeat and you\'re out. Last one wins!', descriptionTh:'แข่งสัมผัส ใครลังเลหรือซ้ำออก คนสุดท้ายชนะ!' },
  { id:'mg06', title:'Finger Gymnastics',titleTh:'ยิมนาสติกนิ้ว',    time:45,  points:2, description:'Copy the hand patterns shown. Gets harder each round. Most correct wins!', descriptionTh:'เลียนแบบรูปแบบมือ ยากขึ้นเรื่อยๆ ถูกมากสุดชนะ!' },
  { id:'mg07', title:'Hum That Tune',    titleTh:'ฮัมเพลง',           time:180, points:3, description:'Hum famous songs. Others guess the title. Most correct guesses wins!',   descriptionTh:'ฮัมเพลงดัง คนอื่นทาย คนทายถูกมากสุดชนะ!' },
  { id:'mg08', title:'Number Crunch',    titleTh:'ประลองตัวเลข',      time:60,  points:3, description:'Mental math race — 5 problems. Most correct wins!',                     descriptionTh:'แข่งคณิตศาสตร์ในใจ 5 ข้อ ถูกมากสุดชนะ!' },
];

// ── End of card data ──