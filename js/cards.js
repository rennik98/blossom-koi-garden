/* ============================================================
   CARDS.JS — Final Version (Illus property only on Activity Cards)
   Sequence 1-53 with correct titles, descriptions, and points.
============================================================ */

const ACTIVITY_CARDS = [
  // ── BODY (1-16) ──
  { id: 'b01', illus: 1, category: 'body', title: 'Morning Stretch', titleTh: 'ยืดเหยียดเช้า', time: 30, points: 1, diff: 'Easy', scoring: 'Timer + voting', instruction: 'Stand tall, reach arms up. Stretch left then right. Hold 10 seconds each side.', instructionTh: 'ยืนตัวตรง ยกแขนขึ้น ยืดซ้าย-ขวา ค้างข้างละ 10 วิ' },
  { id: 'b02', illus: 2, category: 'body', title: 'Toe Tapper', titleTh: 'เคาะเท้า', time: 30, points: 1, diff: 'Easy', scoring: 'Timer + voting', instruction: 'Tap toes 20 times then heels 20 times. Feel the rhythm!', instructionTh: 'นั่งเคาะปลายเท้า 20 ครั้ง ส้นเท้า 20 ครั้ง' },
  { id: 'b03', illus: 3, category: 'body', title: 'Shoulder Rolls', titleTh: 'หมุนไหล่', time: 30, points: 1, diff: 'Easy', scoring: 'Timer + voting', instruction: 'Roll shoulders forward 10 times, then backward 10 times.', instructionTh: 'หมุนไหล่ข้างหน้า 10 ครั้ง ข้างหลัง 10 ครั้ง' },
  { id: 'b04', illus: 4, category: 'body', title: 'Hand Squeeze', titleTh: 'บีบมือ', time: 30, points: 1, diff: 'Easy', scoring: 'Timer + voting', instruction: 'Make fists, hold 5 seconds, spread fingers wide. Repeat 10 times.', instructionTh: 'กำมือ 5 วิ กางนิ้ว ทำ 10 ครั้ง' },
  { id: 'b05', illus: 5, category: 'body', title: 'Ankle Circles', titleTh: 'หมุนข้อเท้า', time: 30, points: 1, diff: 'Easy', scoring: 'Timer + voting', instruction: 'Lift foot, draw 10 circles clockwise, 10 counter. Switch feet!', instructionTh: 'ยกเท้า วาดวงกลม 10 รอบตามเข็ม 10 ทวนเข็ม สลับเท้า' },
  { id: 'b06', illus: 6, category: 'body', title: 'Deep Breaths', titleTh: 'หายใจลึก', time: 45, points: 1, diff: 'Easy', scoring: 'Timer + voting', instruction: 'Breathe in 4 counts, hold 4, breathe out 6. Repeat 5 times.', instructionTh: 'หายใจเข้า 4 กลั้น 4 ออก 6 ทำ 5 รอบ' },
  { id: 'b07', illus: 7, category: 'body', title: 'Chair Stand', titleTh: 'ลุก-นั่ง', time: 45, points: 2, diff: 'Medium', scoring: 'Timer + voting', instruction: 'Stand without using hands, sit back slowly. Repeat 5 times.', instructionTh: 'ลุกจากเก้าอี้ไม่ใช้มือ นั่งช้าๆ 5 ครั้ง' },
  { id: 'b08', illus: 8, category: 'body', title: 'Flamingo Stand', titleTh: 'ยืนขาเดียว', time: 45, points: 2, diff: 'Medium', scoring: 'Timer + voting', instruction: 'Hold a chair and stand on one foot 15 seconds. Switch feet.', instructionTh: 'จับเก้าอี้ ยืนขาเดียว 15 วิ สลับ' },
  { id: 'b09', illus: 9, category: 'body', title: 'Walk & Count', titleTh: 'เดินนับก้าว', time: 60, points: 2, diff: 'Medium', scoring: 'Timer + voting', instruction: 'Walk around the room counting. Try to reach exactly 50 steps.', instructionTh: 'เดินรอบห้อง นับ 50 ก้าวพอดี' },
  { id: 'b10', illus: 10, category: 'body', title: 'Gentle Twist', titleTh: 'บิดตัว', time: 30, points: 2, diff: 'Medium', scoring: 'Timer + voting', instruction: 'Sit tall, twist to look over shoulder. Hold 10 sec. Switch sides.', instructionTh: 'นั่งตรง บิดตัวมองข้ามไหล่ ค้าง 10 วิ สลับ' },
  { id: 'b11', illus: 11, category: 'body', title: 'Arm Windmill', titleTh: 'กังหันแขน', time: 45, points: 2, diff: 'Medium', scoring: 'Timer + voting', instruction: 'Arms wide, make circles. Gradually bigger. 15 each direction.', instructionTh: 'กางแขน หมุนวงกลมเล็ก→ใหญ่ 15 รอบ' },
  { id: 'b12', illus: 12, category: 'body', title: 'Heel Raises', titleTh: 'ยกส้นเท้า', time: 45, points: 2, diff: 'Medium', scoring: 'Timer + voting', instruction: 'Hold chair, rise on toes. Hold 3 sec. Lower slowly. 10 times.', instructionTh: 'จับเก้าอี้ เขย่งขึ้น ค้าง 3 วิ ลงช้าๆ 10 ครั้ง' },
  { id: 'b13', illus: 13, category: 'body', title: 'Marching Band', titleTh: 'เดินสวนสนาม', time: 60, points: 3, diff: 'Hard', scoring: 'Timer + voting', instruction: 'March in place 1 minute, knees high. Swing your arms!', instructionTh: 'เดินอยู่กับที่ 1 นาที ยกเข่าสูง แกว่งแขน' },
  { id: 'b14', illus: 14, category: 'body', title: 'Wall Push-Up', titleTh: 'วิดพื้นผนัง', time: 60, points: 3, diff: 'Hard', scoring: 'Timer + voting', instruction: 'Hands on wall at shoulder height. Do 10 slow push-ups.', instructionTh: 'วางมือบนผนัง ดันตัว 10 ครั้ง' },
  { id: 'b15', illus: 15, category: 'body', title: 'Side Steps', titleTh: 'ก้าวข้าง', time: 60, points: 3, diff: 'Hard', scoring: 'Timer + voting', instruction: '5 big steps right, then 5 left. Repeat 3 times.', instructionTh: 'ก้าวขวา 5 ซ้าย 5 ทำ 3 รอบ' },
  { id: 'b16', illus: 16, category: 'body', title: 'Dance Break', titleTh: 'เต้นอิสระ', time: 60, points: 3, diff: 'Hard', scoring: 'Timer + voting', instruction: 'Dance freely for 1 full minute. Just move!', instructionTh: 'เต้นตามใจ 1 นาที!' },

  // ── BRAIN (17-33) ──
  { id: 'br01', illus: 17, category: 'brain', title: 'Color Count', titleTh: 'นับสี', time: 45, points: 1, diff: 'Easy', scoring: 'Self + timer', instruction: 'Count all BLUE things in the room. Now try RED!', instructionTh: 'นับของสีฟ้าในห้อง แล้วลองสีแดง!' },
  { id: 'br02', illus: 18, category: 'brain', title: 'Backward Spelling', titleTh: 'สะกดถอยหลัง', time: 45, points: 1, diff: 'Easy', scoring: 'Self + timer', instruction: 'Pick a 5-letter word and spell it backward. Try 3 words!', instructionTh: 'คำ 5 ตัวอักษร สะกดย้อน 3 คำ' },
  { id: 'br03', illus: 19, category: 'brain', title: 'Number Chain', titleTh: 'นับถอยหลัง', time: 45, points: 1, diff: 'Easy', scoring: 'Self + timer', instruction: 'Start at 100, count backward by 3s. How far without a mistake?', instructionTh: 'จาก 100 นับถอยทีละ 3' },
  { id: 'br04', illus: 20, category: 'brain', title: 'Animal ABCs', titleTh: 'สัตว์ ก-ฮ', time: 60, points: 1, diff: 'Easy', scoring: 'Self + timer', instruction: 'Name an animal for each letter. A = Ant, B = Bear...', instructionTh: 'บอกชื่อสัตว์ตาม ก ข ค...' },
  { id: 'br05', illus: 21, category: 'brain', title: 'Pattern Finder', titleTh: 'หาแพทเทิร์น', time: 30, points: 1, diff: 'Easy', scoring: 'Self + timer', instruction: 'What comes next? 2, 4, 8, 16, ___? Make 3 number patterns!', instructionTh: '2,4,8,16,___? แต่งโจทย์ 3 ข้อ' },
  { id: 'br06', illus: 22, category: 'brain', title: 'Odd One Out', titleTh: 'ตัวไหนไม่เข้าพวก', time: 30, points: 1, diff: 'Easy', scoring: 'Self + timer', instruction: 'Rose, Tulip, Carrot, Daisy — which doesn\'t belong?', instructionTh: 'กุหลาบ ทิวลิป แครอท เดซี่ — อันไหนไม่เข้าพวก?' },
  { id: 'br07', illus: 23, category: 'brain', title: 'Story Builder', titleTh: 'แต่งเรื่อง', time: 60, points: 2, diff: 'Medium', scoring: 'Self + timer', instruction: 'Look at 3 objects near you. Make a short story connecting all three.', instructionTh: 'ของ 3 ชิ้น แต่งเรื่องเชื่อมกัน' },
  { id: 'br08', illus: 24, category: 'brain', title: 'Memory Tray', titleTh: 'จำของ', time: 60, points: 2, diff: 'Medium', scoring: 'Self + timer', instruction: 'Look at the table 30 seconds. Close eyes. Name everything.', instructionTh: 'มองโต๊ะ 30 วิ หลับตา บอกของทุกชิ้น' },
  { id: 'br09', illus: 25, category: 'brain', title: 'Rhyme Time', titleTh: 'คำคล้องจอง', time: 60, points: 2, diff: 'Medium', scoring: 'Self + timer', instruction: 'Find as many rhyming words as you can in 1 minute.', instructionTh: 'หาคำคล้องจองมากที่สุดใน 1 นาที' },
  { id: 'br10', illus: 26, category: 'brain', title: 'Word Bridge', titleTh: 'สะพานคำ', time: 60, points: 2, diff: 'Medium', scoring: 'Self + timer', instruction: 'Change one letter at a time: CAT to COT to COG to DOG.', instructionTh: 'เปลี่ยนคำทีละตัวอักษร เช่น CAT→DOG' },
  { id: 'br11', illus: 27, category: 'brain', title: '5 Senses Check', titleTh: '5 สัมผัส', time: 60, points: 2, diff: 'Medium', scoring: 'Self + timer', instruction: 'Name: 5 things you see, 4 hear, 3 touch, 2 smell, 1 taste.', instructionTh: '5 เห็น 4 เสียง 3 สัมผัส 2 กลิ่น 1 รส' },
  { id: 'br12', illus: 28, category: 'brain', title: 'Map Memory', titleTh: 'จำแผนที่', time: 60, points: 2, diff: 'Medium', scoring: 'Self + timer', instruction: 'Name as many countries in Asia as you can from memory.', instructionTh: 'บอกชื่อประเทศในเอเชียให้มากที่สุด' },
  { id: 'br13', illus: 29, category: 'brain', title: 'Time Traveler', titleTh: 'นักเดินทางเวลา', time: 45, points: 2, diff: 'Medium', scoring: 'Self + timer', instruction: 'Name 5 things that exist today but didn\'t when you were 10.', instructionTh: '5 สิ่งที่มีวันนี้แต่ไม่มีตอนเด็ก' },
  { id: 'br14', illus: 30, category: 'brain', title: 'Mental Math', titleTh: 'คณิตในหัว', time: 45, points: 3, diff: 'Hard', scoring: 'Self + timer', instruction: 'Solve in your head: 17 + 25 - 8 + 13 - 6 = ?', instructionTh: '17+25-8+13-6=? แต่งอีก 2 ข้อ' },
  { id: 'br15', illus: 31, category: 'brain', title: 'Category Sprint', titleTh: 'บอกให้ไว', time: 60, points: 3, diff: 'Hard', scoring: 'Self + timer', instruction: '60 seconds: name as many COUNTRIES as you can!', instructionTh: '60 วิ บอกชื่อประเทศให้มาก!' },
  { id: 'br16', illus: 32, category: 'brain', title: 'Sudoku Starter', titleTh: 'ซูโดกุเริ่มต้น', time: 60, points: 3, diff: 'Hard', scoring: 'Self + timer', instruction: 'Draw a 4×4 grid. Fill 1-4 so no row or column repeats.', instructionTh: 'ตาราง 4×4 ใส่เลข 1-4 ไม่ซ้ำ' },
  { id: 'br17', illus: 33, category: 'brain', title: '20 Questions', titleTh: '20 คำถาม', time: 60, points: 3, diff: 'Hard', scoring: 'Self + timer', instruction: 'Think of a famous person. Others ask yes/no questions to guess.', instructionTh: 'คิดถึงบุคคลชื่อดัง ให้คนอื่นถามได้ 20 ข้อ' },

  // ── SOCIAL (34-43) ──
  { id: 's01', illus: 34, category: 'social', title: 'Give a Compliment', titleTh: 'ชมเชย', time: null, points: 1, diff: 'Easy', scoring: 'Group vote', instruction: 'Think of 3 kind things to say and tell the person next to you!', instructionTh: 'คิดคำชม 3 ข้อ บอกคนข้างๆ!' },
  { id: 's02', illus: 35, category: 'social', title: 'Childhood Memory', titleTh: 'ความทรงจำวัยเด็ก', time: null, points: 1, diff: 'Easy', scoring: 'Group vote', instruction: 'Share your favourite childhood memory with the group.', instructionTh: 'เล่าความทรงจำวัยเด็กที่ชอบที่สุด' },
  { id: 's03', illus: 36, category: 'social', title: 'Tell a Joke', titleTh: 'เล่ามุก', time: null, points: 1, diff: 'Easy', scoring: 'Group vote', instruction: 'Share the funniest joke you know. Make everyone laugh!', instructionTh: 'เล่ามุกตลกที่สุด!' },
  { id: 's04', illus: 37, category: 'social', title: 'High Five!', titleTh: 'ไฮไฟว์!', time: null, points: 1, diff: 'Easy', scoring: 'Group vote', instruction: 'High five everyone and share one good thing from this week.', instructionTh: 'ไฮไฟว์ทุกคน เล่าเรื่องดีสัปดาห์นี้' },
  { id: 's05', illus: 38, category: 'social', title: 'Thankful Moment', titleTh: 'สิ่งที่ขอบคุณ', time: null, points: 1, diff: 'Easy', scoring: 'Group vote', instruction: 'Share one thing you are grateful for today.', instructionTh: 'บอกสิ่งหนึ่งที่รู้สึกขอบคุณในวันนี้' },
  { id: 's06', illus: 39, category: 'social', title: '2 Truths 1 Lie', titleTh: 'จริง2โกหก1', time: null, points: 2, diff: 'Medium', scoring: 'Group vote', instruction: 'Share 2 true things and 1 lie. Let others guess the lie!', instructionTh: 'เล่า 2 จริง 1 โกหก ให้ทาย!' },
  { id: 's07', illus: 40, category: 'social', title: 'Teach Something', titleTh: 'สอนอะไรสักอย่าง', time: 120, points: 2, diff: 'Medium', scoring: 'Group vote', instruction: 'Teach the group a skill or recipe in 2 minutes!', instructionTh: 'สอนทักษะหรือสูตรอาหารใน 2 นาที' },
  { id: 's08', illus: 41, category: 'social', title: 'Desert Island', titleTh: 'เกาะร้าง', time: null, points: 2, diff: 'Medium', scoring: 'Group vote', instruction: 'You can bring 3 things to a desert island. What do you choose?', instructionTh: 'เอาของได้ 3 ชิ้น จะเอาอะไร?' },
  { id: 's09', illus: 42, category: 'social', title: 'Life Lesson', titleTh: 'บทเรียนชีวิต', time: null, points: 2, diff: 'Medium', scoring: 'Group vote', instruction: 'Share the most important lesson you have learned in life.', instructionTh: 'แชร์บทเรียนที่สำคัญที่สุดในชีวิต' },
  { id: 's10', illus: 43, category: 'social', title: 'Wisdom Circle', titleTh: 'วงปัญญา', time: null, points: 3, diff: 'Hard', scoring: 'Group vote', instruction: 'Share your best tip for living a happy life with the group.', instructionTh: 'แชร์วิธีมีความสุขกับกลุ่ม' },

  // ── HEAD TO HEAD (44-53) ──
  { id: 'h01', illus: 44, category: 'h2h', title: 'Rhyme Duel', titleTh: 'ต่อคำคล้องจอง', time: null, points: 3, diff: 'Medium', scoring: 'Winner takes all', instruction: 'Take turns saying rhyming words. Can\'t rhyme in 5 seconds? You lose!', instructionTh: 'สลับกันพูด คิดไม่ออกแพ้!' },
  { id: 'h02', illus: 45, category: 'h2h', title: 'Memory Battle', titleTh: 'ดวลความจำ', time: 20, points: 3, diff: 'Medium', scoring: 'Winner takes all', instruction: 'Look at the room for 20 seconds. Who remembers more items?', instructionTh: 'ดูห้อง 20 วิ จำมากกว่าชนะ' },
  { id: 'h03', illus: 46, category: 'h2h', title: 'Stretch Race', titleTh: 'แข่งยืดเหยียด', time: null, points: 4, diff: 'Medium', scoring: 'Winner takes all', instruction: 'Race: arm circles + shoulder rolls + toe taps. Fastest wins!', instructionTh: 'แข่งหมุนแขน+หมุนไหล่+เคาะเท้า ใครเสร็จก่อน' },
  { id: 'h04', illus: 47, category: 'h2h', title: 'Word Chain', titleTh: 'ต่อคำ', time: null, points: 4, diff: 'Hard', scoring: 'Winner takes all', instruction: 'Say a word. Next player says a word starting with the last letter. 5 sec each!', instructionTh: 'พูดคำ คู่แข่งพูดคำขึ้นต้นตัวสุดท้าย 5วิ/คำ' },
  { id: 'h05', illus: 48, category: 'h2h', title: 'Quiz Duel', titleTh: 'ดวลตอบปัญหา', time: 45, points: 5, diff: 'Hard', scoring: 'Winner takes all', instruction: 'Answer 5 questions. Most correct answers wins!', instructionTh: 'ถาม 5 ข้อ ถูกมากกว่าชนะ' },
  { id: 'h06', illus: 49, category: 'h2h', title: 'Number Duel', titleTh: 'ดวลตัวเลข', time: null, points: 3, diff: 'Medium', scoring: 'Winner takes all', instruction: 'Both players write a number 1-10. Closest to the secret number wins!', instructionTh: 'เขียนเลข 1-10 ใครใกล้เลขลับที่สุดชนะ' },
  { id: 'h07', illus: 50, category: 'h2h', title: 'Thumb War', titleTh: 'ดวลนิ้วโป้ง', time: 30, points: 3, diff: 'Medium', scoring: 'Winner takes all', instruction: 'Classic thumb war! Best of 3 rounds wins.', instructionTh: 'ดวลนิ้วโป้ง 3 ครั้ง ชนะ 2 ครั้งชนะ' },
  { id: 'h08', illus: 51, category: 'h2h', title: 'Story Duel', titleTh: 'ดวลแต่งเรื่อง', time: 60, points: 4, diff: 'Hard', scoring: 'Winner takes all', instruction: 'Each player adds one sentence to a story. Funniest contribution wins!', instructionTh: 'ผลัดกันเพิ่มประโยค เรื่องตลกที่สุดชนะ' },
  { id: 'h09', illus: 52, category: 'h2h', title: 'Rock Paper Scissors', titleTh: 'เป่ายิ้งฉุบ', time: null, points: 2, diff: 'Easy', scoring: 'Winner takes all', instruction: 'Best of 5 rounds of rock paper scissors!', instructionTh: 'เป่ายิ้งฉุบ 5 ครั้ง ชนะมากกว่าชนะ' },
  { id: 'h10', illus: 53, category: 'h2h', title: 'Dance Off', titleTh: 'ดวลเต้น', time: 60, points: 5, diff: 'Hard', scoring: 'Winner takes all', instruction: 'Each player dances for 30 seconds. Group votes for the best dancer!', instructionTh: 'เต้น 30 วินาที กลุ่มโหวตว่าใครเต้นดีสุด' },
];

// ── REWARD / PUNISH / EVENT / MINIGAME CARDS (No illus property) ──

const REWARD_CARDS = [
  { id:'r01', title:'Lucky Clover', titleTh:'โคลเวอร์นำโชค', space:3, effect:'points', value:2, description:'+2 bonus points!', descriptionTh:'รับ +2 คะแนนโบนัส!' },
  { id:'r02', title:'Treasure Chest', titleTh:'หีบสมบัติ', space:10, effect:'draw2', value:0, description:'Draw 2 cards, pick 1 to play next turn.', descriptionTh:'จั่ว 2 ใบ เลือก 1 ใบเพื่อเล่นในรอบถัดไป' },
  { id:'r03', title:'Friendship Fountain', titleTh:'น้ำพุแห่งมิตรภาพ', space:18, effect:'sharePoints', value:2, description:'Compliment someone → both get +2 pts!', descriptionTh:'ชมใครสักคน → ทั้งคู่รับ +2 คะแนน!' },
  { id:'r04', title:'Golden Star', titleTh:'ดาวทอง', space:29, effect:'extraTurn', value:0, description:'Take an extra turn immediately!', descriptionTh:'รับตาพิเศษทันที!' },
  { id:'r05', title:'Victory Boost', titleTh:'พลังแห่งชัยชนะ', space:36, effect:'move', value:2, description:'Move forward +2 extra spaces!', descriptionTh:'เดินไปข้างหน้าอีก +2 ช่อง!' },
];

const PUNISH_CARDS = [
  { id:'p01', title:'Foggy Path', titleTh:'ทางหมอก', space:7, effect:'moveBack', value:2, description:'Go back 2 spaces.', descriptionTh:'ถอยหลัง 2 ช่อง' },
  { id:'p02', title:'Slippery Slope', titleTh:'ทางลื่น', space:14, effect:'skipDraw', value:0, description:'Skip your next card draw.', descriptionTh:'ข้ามการจั่วไพ่ในรอบถัดไป' },
  { id:'p03', title:'Canyon Trap', titleTh:'กับดักหุบเขา', space:23, effect:'givePoints', value:2, description:'Give 2 pts to the last-place player.', descriptionTh:'ให้ 2 คะแนนแก่ผู้เล่นที่อยู่ท้ายสุด' },
  { id:'p04', title:'Trickster Ghost', titleTh:'ผีซุกซน', space:31, effect:'loseStreak', value:0, description:'Lose your streak bonus.', descriptionTh:'เสียโบนัสสตรีค' },
  { id:'p05', title:'Boss Challenge', titleTh:'บอสท้าทาย', space:38, effect:'bossCard', value:0, description:'Draw a Hard card. Succeed = +5pts! Fail = go back 3 spaces.', descriptionTh:'จั่วไพ่ Hard ถ้าสำเร็จ +5 คะแนน ถ้าล้มเหลวถอย 3 ช่อง' },
];

const EVENT_CARDS = [
  { id:'e01', title:'Swap Places!', titleTh:'สลับที่!', type:'Chaos', effect:'swap', description:'Swap board positions with the player ahead of you.', descriptionTh:'สลับตำแหน่งกับผู้เล่นที่อยู่ข้างหน้า' },
  { id:'e02', title:'Double or Nothing', titleTh:'คูณสองหรือศูนย์', type:'Gamble', effect:'doubleOrNothing', description:'Coin flip: heads = +3 pts, tails = -2 pts.', descriptionTh:'โยนเหรียญ: หัว +3 คะแนน ก้อย -2 คะแนน' },
  { id:'e03', title:'Gift of Kindness', titleTh:'ของขวัญแห่งความดี', type:'Reward', effect:'giveAndGet', description:'Give +2 to any player, you get +1.', descriptionTh:'ให้ +2 คะแนนแก่ผู้เล่นใดก็ได้ คุณรับ +1' },
  { id:'e04', title:'Reverse!', titleTh:'กลับทาง!', type:'Chaos', effect:'reverse', description:'Turn order goes counter-clockwise for 2 rounds!', descriptionTh:'ลำดับการเล่นสวนทางเป็นเวลา 2 รอบ!' },
  { id:'e05', title:'Everybody Dance!', titleTh:'เต้นกันทุกคน!', type:'Group', effect:'groupDance', description:'All players dance for 15 seconds — all get +1 pt!', descriptionTh:'ทุกคนเต้น 15 วินาที ทุกคนรับ +1 คะแนน!' },
  { id:'e06', title:'Steal a Star', titleTh:'ขโมยดาว', type:'Punish', effect:'steal', description:'Steal 2 pts from the player in 1st place!', descriptionTh:'ขโมย 2 คะแนนจากผู้เล่นที่อยู่อันดับ 1!' },
  { id:'e07', title:'Time Warp', titleTh:'บิดเวลา', type:'Chaos', effect:'timeWarp', description:'Return to nearest mini-game space and replay it!', descriptionTh:'กลับไปที่ช่องมินิเกมที่ใกล้ที่สุดและเล่นใหม่!' },
  { id:'e08', title:'Lucky Break', titleTh:'โชคดี', type:'Reward', effect:'luckyMove', description:'Roll the die, move that many extra spaces forward!', descriptionTh:'โยนลูกเต๋า เดินไปข้างหน้าเพิ่มตามผลลูกเต๋า!' },
  { id:'e09', title:'Freeze!', titleTh:'แข็งตัว!', type:'Punish', effect:'freeze', description:'Cannot move next turn (but still draw a card and score).', descriptionTh:'ไม่สามารถเดินในรอบถัดไป แต่ยังจั่วไพ่และรับคะแนนได้' },
  { id:'e10', title:'Bonus Round', titleTh:'รอบโบนัส', type:'Group', effect:'bonusRound', description:'Trigger a random mini-game for ALL players!', descriptionTh:'เปิดมินิเกมสุ่มสำหรับผู้เล่นทุกคน!' },
  { id:'e11', title:'Point Earthquake', titleTh:'แผ่นดินไหวคะแนน', type:'Chaos', effect:'quake', description:'Players with 10+ pts lose 3. Players under 10 gain 2.', descriptionTh:'ผู้ที่มี 10+ คะแนนเสีย 3 ผู้ที่ต่ำกว่า 10 ได้ 2' },
  { id:'e12', title:'Shield Bubble', titleTh:'ฟองกันภัย', type:'Reward', effect:'shield', description:'Block the next punishment or negative event card!', descriptionTh:'บล็อกการ์ดลงโทษหรืออีเวนต์ลบถัดไป!' },
];

const MINIGAME_CARDS = [
  { id:'mg01', title:'Quick Quiz', titleTh:'ควิซด่วน', time:60, points:3, description:'3 rapid trivia questions. First correct answer scores!', descriptionTh:'คำถามไตรเวีย 3 ข้อ คนตอบถูกก่อนรับคะแนน!' },
  { id:'mg02', title:'Stretch Race', titleTh:'แข่งยืดเส้น', time:45, points:3, description:'Race: 10 arm circles + 5 shoulder rolls + 10 toe taps. Fastest wins!', descriptionTh:'แข่ง: วนแขน 10 ครั้ง + หมุนไหล่ 5 + แตะเท้า 10 เร็วที่สุดชนะ!' },
  { id:'mg03', title:'Story Slam', titleTh:'ประกวดเรื่องเล่า', time:120, points:4, description:'Each player tells a 30-sec story on the same topic. Group votes best!', descriptionTh:'แต่ละคนเล่าเรื่อง 30 วินาทีในหัวข้อเดียวกัน กลุ่มโหวต!' },
  { id:'mg04', title:'Memory Mayhem', titleTh:'ดวลความจำ', time:90, points:4, description:'Memorize 10 objects in 30s. Most recalled wins!', descriptionTh:'จำวัตถุ 10 ชิ้นใน 30 วินาที ใครจำได้มากสุดชนะ!' },
  { id:'mg05', title:'Final Showdown', titleTh:'ศึกชิงชัย', time:120, points:5, description:'Rhyme elimination! Go around — hesitate or repeat and you\'re out. Last one wins!', descriptionTh:'แข่งสัมผัส ใครลังเลหรือซ้ำออก คนสุดท้ายชนะ!' },
  { id:'mg06', title:'Finger Gymnastics', titleTh:'ยิมนาสติกนิ้ว', time:45, points:2, description:'Copy the hand patterns shown. Gets harder each round. Most correct wins!', descriptionTh:'เลียนแบบรูปแบบมือ ยากขึ้นเรื่อยๆ ถูกมากสุดชนะ!' },
  { id:'mg07', title:'Hum That Tune', titleTh:'ฮัมเพลง', time:180, points:3, description:'Hum famous songs. Others guess the title. Most correct guesses wins!', descriptionTh:'ฮัมเพลงดัง คนอื่นทาย คนทายถูกมากสุดชนะ!' },
  { id:'mg08', title:'Number Crunch', titleTh:'ประลองตัวเลข', time:60, points:3, description:'Mental math race — 5 problems. Most correct wins!', descriptionTh:'แข่งคณิตศาสตร์ในใจ 5 ข้อ ถูกมากสุดชนะ!' },
];