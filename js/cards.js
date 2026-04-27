/* ============================================================
   CARDS.JS — 54 activity cards from PDF (illus matched by name)
============================================================ */

const ACTIVITY_CARDS = [
  // ── BODY & MOVEMENT (1-16) ──
  { id:'b01', illus:'Morning Stretch',  category:'body', title:'Morning Stretch',        titleTh:'ยืดแล้วเหยียด',              points:1, diff:'Easy',   instruction:'Stand tall and reach both arms up. Stretch left, then right. Hold each side for 15 seconds.',                                                                         instructionTh:'ยืนตัวตรงและยกแขนทั้งสองข้างขึ้นฟ้า ยืดไปทางซ้ายก่อน แล้วค่อยยืดไปทางขวา ค้างไว้ข้างละ 15 วินาที' },
  { id:'b02', illus:'Toe Tapper',       category:'body', title:'Toe Tapper',              titleTh:'เคาะโป้ง เคาะส้น',           points:1, diff:'Easy',   instruction:'While seated, tap your toes on the floor 10 times, then tap your heels 10 times. Keep the rhythm!',                                                              instructionTh:'เริ่มต้นในท่านั่ง เคาะนิ้วโป้งเท้าลงพื้น 10 ครั้ง และเคาะส้นเท้าลงพื้น 10 ครั้ง ทำให้เป็นจังหวะ' },
  { id:'b03', illus:'Shoulder Rolls',   category:'body', title:'Shoulder Rolls',          titleTh:'หัว_ไหล่_หมุน',              points:1, diff:'Easy',   instruction:'Roll your shoulders forward 10 times, then backward 10 times.',                                                                                               instructionTh:'หมุนไหล่ไปข้างหน้า 10 ครั้ง และข้างหลังอีก 10 ครั้ง' },
  { id:'b04', illus:'Hand Squeeze',     category:'body', title:'Hand Squeeze',            titleTh:'กำแล้วแบ',                    points:1, diff:'Easy',   instruction:'Make tight fists, hold for 5 seconds, then release. Repeat 10 times.',                                                                                        instructionTh:'กำมือทั้งสองข้างให้แน่น 5 วินาที แล้วปล่อย ทำซ้ำ 10 ครั้ง' },
  { id:'b05', illus:'Ankle Circles',    category:'body', title:'Ankle Circles',           titleTh:'แกว่งเท้าหาเสี้ยน',          points:1, diff:'Easy',   instruction:'Lift both feet and draw circles with your toes — 10 clockwise and 10 counter-clockwise.',                                                                    instructionTh:'ยกเท้าทั้งสองข้างขึ้นจากพื้น ใช้ปลายเท้าวาดวงกลมตามเข็มนาฬิกา 10 ครั้ง และหมุนกลับอีก 10 ครั้ง' },
  { id:'b06', illus:'Deep Breaths',     category:'body', title:'Deep Breaths',            titleTh:'หายใจเข้าลึกลึ๊กกก',        points:1, diff:'Easy',   instruction:'Breathe in deeply, hold for 5 seconds, and breathe out slowly. Repeat 5 times.',                                                                           instructionTh:'หายใจเข้าลึก ค้างไว้ 5 วินาที หายใจออกยาว ทำซ้ำ 5 รอบลมหายใจ' },
  { id:'b07', illus:'Chair Stand',      category:'body', title:'Chair Stand',             titleTh:'ลุกให้ไว ก้าวให้ถึง',        points:2, diff:'Medium', instruction:'Stand up from your chair with your hands on your hips, then step forward 2 steps. Complete this within 5 seconds.',                                           instructionTh:'ลุกขึ้นจากเก้าอี้โดยแขนทั้งสองข้างเท้าเอว แล้วก้าวไปข้างหน้า 2 ก้าว ทำให้สำเร็จภายใน 5 วินาที' },
  { id:'b08', illus:'Flamingo Stand',   category:'body', title:'Flamingo Stand',          titleTh:'ฟลามิงโก้ขาเดียว',           points:2, diff:'Medium', instruction:'Hold onto a chair and stand on one foot for 5 seconds. Switch and hold the other foot for 5 seconds.',                                                         instructionTh:'จับเก้าอี้ไว้แล้วยืนขาข้างเดียวเป็นเวลา 5 วินาที จากนั้นสลับอีกข้างค้างไว้ 5 วินาที เช่นกัน' },
  { id:'b09', illus:'Walk & Count',     category:'body', title:'Walk & Count',            titleTh:'จงกรม 30 ก้าว',              points:2, diff:'Medium', instruction:'Walk around the room and count your steps. Sit down once you reach 30 steps.',                                                                               instructionTh:'เดินไปรอบๆ นับจำนวนก้าวให้ครบ 30 ก้าวแล้วจึงนั่งลง' },
  { id:'b10', illus:'Gentle Twist',     category:'body', title:'Gentle Twist',            titleTh:'หมุนตัว (ไม่ตึง)',           points:2, diff:'Medium', instruction:'Sit tall, place your right hand on your left knee, and fully twist your body. Hold for 10 seconds, then switch sides.',                                       instructionTh:'นั่งตัวตรง วางมือขวาบนเข่าซ้ายและบิดตัวเต็มที่ค้างไว้ 10 วินาที จากนั้นทำสลับอีกข้าง' },
  { id:'b11', illus:'Arm Windmill',     category:'body', title:'Arm Windmill',            titleTh:'กังหันมนุษย์',               points:2, diff:'Medium', instruction:'Extend your arms to the sides. Rotate forward 10 times, then backward 10 times while sticking your tongue out.',                                             instructionTh:'กางแขนทั้งสองออกไปด้านข้าง หมุนไปข้างหน้า 10 ที แล้วหมุนข้างหลัง 10 ที พร้อมแลบลิ้น' },
  { id:'b12', illus:'Heel Raises',      category:'body', title:'Heel Raises',             titleTh:'ขยับกาย เขย่งก้าว',          points:2, diff:'Medium', instruction:'Rise up on your toes with your hands on your hips. Hold for 3 seconds. Repeat 10 times.',                                                                  instructionTh:'เขย่งปลายเท้าขึ้นพร้อมเอามือทั้งสองข้างเท้าเอว ค้างไว้ 3 วินาที ทำซ้ำ 10 ครั้ง' },
  { id:'b13', illus:'Marching Band',    category:'body', title:'Marching Band',           titleTh:'ย่ำ ย่ำ ย่ำ',                points:3, diff:'Hard',   instruction:'March in place for 1 minute, lifting your knees as high as possible while swinging your arms.',                                                             instructionTh:'เดินย่ำเท้าอยู่กับที่ 1 นาที โดยยกเข่าขึ้นให้สูงที่สุดเท่าที่จะทำได้ พร้อมแกว่งแขนไปด้วย' },
  { id:'b14', illus:'Invisible Chair',  category:'body', title:'Invisible Chair',         titleTh:'เก้าอี้ล่องหน',              points:3, diff:'Hard',   instruction:'Stand with your back and hands against the wall. Lower into a 90-degree squat and hold for at least 10 seconds.',                                           instructionTh:'ยืนหันหลังชิดกำแพง วางมือทั้งสองข้างแนบกับกำแพง ย่อตัวลงจนเข่าอยู่ในมุม 90 องศา ค้างไว้อย่างน้อย 10 วินาที' },
  { id:'b15', illus:'Side Steps',       category:'body', title:'Side Steps',              titleTh:'สเต็ปก้าวนาฬิกา',            points:3, diff:'Hard',   instruction:'Step to 3 o\'clock (right) 2 steps, then return to center. Step to 9 o\'clock (left) 2 steps, clapping along with every step.',                          instructionTh:'ก้าวไปที่ 3 นาฬิกา (ขวา) 2 ก้าว แล้วกลับมาตรงกลาง จากนั้นก้าวไปที่ 9 นาฬิกา (ซ้าย) 2 ก้าวพร้อมปรบมือไปกับทุกจังหวะที่ก้าว' },
  { id:'b16', illus:'Dance Break',      category:'body', title:'Dance Break',             titleTh:'มาเต้นกันเถอะ',              points:3, diff:'Hard',   instruction:'Put on your favorite song and perform at least 3 different dance moves within 1 minute.',                                                                 instructionTh:'เปิดเพลงโปรดหรือฮัมเพลง แล้วเต้นท่าเต้นที่แตกต่างกันออกไปอย่างน้อย 3 ท่า ใน 1 นาที' },

  // ── BRAIN POWER (17-32) ──
  { id:'br01', illus:'Color Hunter',    category:'brain', title:'Color Hunter',           titleTh:'สีไหนใกล้ฉัน',               points:1, diff:'Easy',   manualKey:'color',     instruction:'Look around — how many <strong class="manual-val">{manual}</strong> things can you spot? Count them all!',                    instructionTh:'มองสำรวจไปรอบๆ นับของสี<strong class="manual-val">{manual}</strong>ทั้งหมดว่ามีกี่ชิ้น!' },
  { id:'br02', illus:'Flip-Flop Words', category:'brain', title:'Flip-Flop Words',        titleTh:'กลับหน้ากลับหลัง',           points:1, diff:'Easy',   manualKey:'word',      instruction:'Spell this word forward, then spell it backward: <strong class="manual-val">{manual}</strong>',                              instructionTh:'สะกดคำนี้จากหน้าไปหลัง แล้วสะกดย้อนกลับหลังมาหน้า: <strong class="manual-val">{manual}</strong>' },
  { id:'br03', illus:'Minus Memory',    category:'brain', title:'Minus Memory',           titleTh:'ลบไม่ได้ช่วยให้ลืม',        points:1, diff:'Easy',   instruction:'Start at 20 and count backward by 3s until you reach 2.',                                                                                                  instructionTh:'เริ่มต้นที่ 20 นับถอยหลังทีละ 3 จนสิ้นสุดที่เลข 2 ให้ได้' },
  { id:'br04', illus:'Animal ABCs',     category:'brain', title:'Animal ABCs',            titleTh:'ตัวนี้คำไหน',                points:1, diff:'Medium', manualKey:'letters',   instruction:'Name 3 animals for each letter: <strong class="manual-val">{manual}</strong>',                                                   instructionTh:'คิดชื่อสัตว์มาอย่างละ 3 ชื่อ สำหรับตัวอักษร: <strong class="manual-val">{manual}</strong>' },
  { id:'br05', illus:'Pattern Master',  category:'brain', title:'Pattern Master',         titleTh:'นึกให้ออก บอกให้ถูก',        points:1, diff:'Easy',   manualKey:'sequence',  instruction:'What are the next 2 numbers? <strong class="manual-val">{manual}</strong>',                                                    instructionTh:'ต่อไปคืออะไรอีก 2 ตำแหน่ง? <strong class="manual-val">{manual}</strong>' },
  { id:'br06', illus:'Odd One Out',     category:'brain', title:'Odd One Out',            titleTh:'อะไรเอ่ย ไม่เข้าพวก',       points:1, diff:'Easy',   manualKey:'oddOneOut', instruction:'Which one doesn\'t belong, and why? <strong class="manual-val">{manual}</strong>',                                              instructionTh:'อะไรไม่เข้าพวก เพราะอะไร? <strong class="manual-val">{manual}</strong>' },
  { id:'br07', illus:'The Storyteller', category:'brain', title:'The Storyteller',        titleTh:'นักเล่าเรื่อง',              points:2, diff:'Medium', instruction:'As a group, pick a Location, Food, and Flower. Tell a story connecting them.',                                                                               instructionTh:'ให้สมาชิกในกลุ่มร่วมกันกำหนดคำในหมวดหมู่ สถานที่, ของกิน, ดอกไม้ และให้แต่งเรื่องจากคำเหล่านั้น' },
  { id:'br08', illus:'Snapshot Recall', category:'brain', title:'Snapshot Recall',        titleTh:'จะจำได้ไหม จำได้หรือเปล่า', points:2, diff:'Medium', instruction:'Look around for 10 seconds, then close your eyes. Name as many things as you remember within 10 seconds.',                                                     instructionTh:'มองไปรอบๆเป็นเวลา 10 วินาที แล้วหลับตาลง พูดสิ่งที่จำได้มากที่สุดภายใน 10 วินาที' },
  { id:'br09', illus:'Rhyme Time',      category:'brain', title:'Rhyme Time',             titleTh:'ภาษาไทยวันละหลายคำ',        points:2, diff:'Medium', instruction:'Find as many words with the same vowel and final consonant as possible within 30 seconds.',                                                                  instructionTh:'พูดคำที่มีสระและตัวสะกดเหมือนกัน ในเวลา 30 วินาที ให้ได้มากที่สุด' },
  { id:'br10', illus:'The Opposites',   category:'brain', title:'The Opposites',          titleTh:'คำตรงข้าม',                  points:2, diff:'Easy',   instruction:'Name as many opposite word pairs as possible in 30 seconds. (e.g. hot–cold)',                                                                               instructionTh:'พูดคำตรงข้ามกันให้ได้มากที่สุดในเวลา 30 วินาที (เช่น เปรี้ยว-หวาน)' },
  { id:'br11', illus:'5 Senses Check',  category:'brain', title:'5 Senses Check',         titleTh:'ประสาทสัมผัสทั้ง 5',         points:2, diff:'Medium', instruction:'List 5 things you saw, 4 you heard, 3 you touched, 2 you smelled, and 1 you tasted today.',                                                                  instructionTh:'จงระบุสิ่งที่เห็น 5 อย่าง, ได้ยิน 4 อย่าง, สัมผัส 3 อย่าง, ได้กลิ่น 2 อย่าง, ลิ้มรส 1 อย่าง ที่ผ่านมาในวันนี้' },
  { id:'br12', illus:'Thailand Explorer',category:'brain',title:'Thailand Explorer',      titleTh:'เมืองไทย ไม่ไปไม่รู้',      points:2, diff:'Medium', instruction:'Name as many provinces in Thailand as you can within 30 seconds.',                                                                                          instructionTh:'บอกชื่อจังหวัดในประเทศไทยให้ได้มากที่สุด ในเวลา 30 วินาที' },
  { id:'br13', illus:'Time Capsule',    category:'brain', title:'Time Capsule',           titleTh:'เจาะเวลาหาอดีต',             points:2, diff:'Medium', instruction:'Name 5 items that existed in the past but no longer exist in the present.',                                                                                  instructionTh:'จงระบุสิ่งของที่มีในอดีตแต่ไม่มีแล้วในปัจจุบันมา 5 อย่าง' },
  { id:'br14', illus:'Flash Math',      category:'brain', title:'Flash Math',             titleTh:'คณิตคิดเร็ว',                points:3, diff:'Hard',   manualKey:'math',      instruction:'Solve in your head — no paper, no fingers, no whispering! <strong class="manual-val">{manual} = ?</strong>',               instructionTh:'คิดเลขในใจ ห้ามใช้กระดาษ ห้ามนับนิ้ว ห้ามพึมพำ! <strong class="manual-val">{manual} = ?</strong>' },
  { id:'br15', illus:'Local Gems',      category:'brain', title:'Local Gems',             titleTh:'ของดีประจำถิ่น',             points:3, diff:'Hard',   instruction:'Pick one province and name as many things related to it as possible in 30 seconds.',                                                                       instructionTh:'ให้เลือก 1 จังหวัดแล้วบอกสิ่งที่นึกถึงในจังหวัดนั้นให้ได้มากที่สุดใน 30 วินาที' },
  { id:'br16', illus:'Location Guess',  category:'brain', title:'Location Guess',         titleTh:'พิกัดลับ 120 วิ',            points:3, diff:'Hard',   instruction:'Think of a place. Others can only ask "Yes/No" questions. You have 2 minutes.',                                                                          instructionTh:'คิดสถานที่ 1 ที่ไว้ในใจ แล้วตอบคำถามคนในทีมได้แค่ "ไม่ใช่" กับ "ใช่" ในเวลา 2 นาที' },

  // ── HEART & SOUL (33-47) ──
  { id:'s01', illus:'Left-Side Cheer',  category:'social', title:'Left-Side Cheer',       titleTh:'ชวนชม',                       points:1, diff:'Easy',   instruction:'Think of 3 genuine compliments or encouraging words for the person on your left.',                                                                       instructionTh:'คิดคำชมหรือให้กำลังใจคนที่อยู่ซ้ายมือ 3 ข้อ' },
  { id:'s02', illus:'Childhood Gems',   category:'social', title:'Childhood Gems',        titleTh:'เรื่องนี้ที่คิดถึง',         points:1, diff:'Easy',   instruction:'Share a favorite childhood memory and explain why it is so special to you.',                                                                           instructionTh:'เล่าความทรงจำในวัยเด็กที่ประทับใจ แล้วอะไรที่ทำให้รู้สึกประทับใจเป็นพิเศษ?' },
  { id:'s03', illus:'Daily Gratitude',  category:'social', title:'Daily Gratitude',       titleTh:'ขอบคุณด้วยหัวใจ',            points:1, diff:'Easy',   instruction:'Name 3 things you are grateful for today and say them out loud!',                                                                                       instructionTh:'บอกสิ่งที่อยากขอบคุณ 3 อย่างในวันนี้ แล้วพูดออกมาดังๆ' },
  { id:'s04', illus:'My Melody',        category:'social', title:'My Melody',             titleTh:'เพลงนี้ที่ฉันรัก',           points:1, diff:'Easy',   instruction:'Pick a song you like, sing or hum a few lines, and share why it\'s special to you.',                                                                  instructionTh:'เลือกเพลงที่ชอบแล้วลองร้องซักสองสามท่อน แล้วบอกด้วยว่าทำไมเพลงนั้นถึงพิเศษสำหรับคุณ' },
  { id:'s05', illus:"Joker's Moment",   category:'social', title:"Joker's Moment",        titleTh:'ฮ่า ฮ่า ฮ่า',               points:1, diff:'Easy',   instruction:'Share a funny story or joke that you like to tell your friends, and explain why it\'s funny.',                                                           instructionTh:'เลือกเรื่องที่ตลกที่คุณชอบเล่าให้เพื่อนในกลุ่มฟัง แล้วบอกเหตุผลว่าทำไมถึงตลก' },
  { id:'s06', illus:'Season of You',    category:'social', title:'Season of You',         titleTh:'ฤดูกาลแสนรัก',               points:1, diff:'Medium', instruction:'If you were to compare the person on your left to a season, which one would they be and why?',                                                            instructionTh:'ถ้าให้เปรียบเทียบคนซ้ายมือเป็นฤดูกาล จะเปรียบเป็นฤดูกาลอะไร เพราะอะไร' },
  { id:'s07', illus:'2 Truths, 1 Lie',  category:'social', title:'2 Truths, 1 Lie',       titleTh:'ความจริงมีเพียงหนึ่งเดียว',   points:2, diff:'Medium', instruction:'Tell 2 true things and 1 made-up thing about yourself. Can the team guess the lie?',                                                                   instructionTh:'บอก 2 เรื่องจริง 1 เรื่องแต่งเกี่ยวกับตัวคุณ แล้วให้เพื่อนในทีมเดาว่าเรื่องไหนคือเรื่องโกหก' },
  { id:'s08', illus:"Tomorrow's Dream", category:'social', title:"Tomorrow's Dream",      titleTh:'พรุ่งนี้เที่ยวไหน',          points:2, diff:'Easy',   instruction:'If you could go anywhere tomorrow, where would it be? Describe your perfect day there.',                                                               instructionTh:'ถ้าสามารถไปที่ไหนก็ได้ในวันพรุ่งนี้จะไปที่ไหน บรรยายเรื่องราวในวันพรุ่งนี้' },
  { id:'s09', illus:'Hidden Talent',    category:'social', title:'Hidden Talent',         titleTh:'สอนหนูหน่อย',                points:2, diff:'Medium', instruction:'Share a skill you are good at — specifically one that would surprise your teammates.',                                                                   instructionTh:'แบ่งปันทักษะที่คิดว่าทำได้ดี โดยต้องเป็นทักษะที่ทำให้เพื่อนในทีมคาดไม่ถึง' },
  { id:'s10', illus:'If I Were',        category:'social', title:'If I Were...',           titleTh:'ถ้าฉันเป็น...ฉันจะ…',        points:2, diff:'Medium', manualKey:'ifIWere',   instruction:'If you were a <strong class="manual-val">{manual}</strong>, what kind would you be and why?',                               instructionTh:'ถ้าตัวเองเป็น<strong class="manual-val">{manual}</strong> จะเป็นแบบไหน เพราะอะไร?' },
  { id:'s11', illus:'Name Origins',     category:'social', title:'Name Origins',          titleTh:'ชื่อนี้ท่านได้แต่ใดมา',      points:2, diff:'Medium', instruction:'Share the story behind your real name.',                                                                                                               instructionTh:'เล่าที่มาที่ไปของชื่อจริง' },
  { id:'s12', illus:'Island Survival',  category:'social', title:'Island Survival',       titleTh:'ฉันต้องรอด',                 points:2, diff:'Medium', instruction:'If stranded on a deserted island and you could only bring 3 things, what would they be and why?',                                                      instructionTh:'ถ้าติดอยู่บนเกาะร้าง แล้วจำเป็นต้องพกของไปแค่ 3 อย่าง จะเป็นอะไร เพราะอะไร?' },
  { id:'s13', illus:"Life's Lesson",    category:'social', title:"Life's Lesson",         titleTh:'บทเรียนชีวิต',               points:2, diff:'Hard',   instruction:'What is the most important lesson life has taught you? What would you tell your younger self?',                                                         instructionTh:'บทเรียนที่สำคัญที่สุดในชีวิต และอยากบอกอะไรกับตัวเองในช่วงเวลานั้น' },
  { id:'s14', illus:'100-Year Capsule', category:'social', title:'100-Year Capsule',      titleTh:'ของปริศนา กับเวลาในขวดแก้ว', points:2, diff:'Hard',   instruction:'Put 3 items in a time capsule for people 100 years from now. What and why?',                                                                          instructionTh:'ถ้าต้องใส่สิ่งของ 3 อย่างลงในแคปซูลเพื่อคนในอีก 100 ปีข้างหน้า จะใส่อะไร เพราะอะไร' },
  { id:'s15', illus:'Key to Happiness', category:'social', title:'Key to Happiness',      titleTh:'สุขใดไหนเล่า',               points:2, diff:'Hard',   instruction:'Share your personal advice on "How to stay happy."',                                                                                                   instructionTh:'เจ้าของการ์ดแชร์ "วิธีที่จะอยู่อย่างมีความสุข"' },

  // ── HEAD-TO-HEAD (48-54) ──
  { id:'h01', illus:'Category Race',    category:'h2h', title:'Category Race',            titleTh:'อย่าหยุดพูด!',               points:3, diff:'Medium', manualKey:'category',  instruction:'Category: <strong class="manual-val">{manual}</strong>! Take turns naming items. First to blank loses!',                     instructionTh:'หมวด: <strong class="manual-val">{manual}</strong>! ผลัดกันพูด ใคร blank ก่อนแพ้!' },
  { id:'h02', illus:'Object Recall',    category:'h2h', title:'Object Recall',            titleTh:'ลับสมอง ประลองความจำ',       points:3, diff:'Medium', instruction:'Both players study the room for 20 seconds, then close eyes. Who can name more objects?',                                                               instructionTh:'ผู้เล่นทั้งสองคนสำรวจห้องเป็นเวลา 20 วินาที จากนั้นหลับตา ใครบอกชื่อสิ่งของในห้องได้มากกว่ากัน?' },
  { id:'h03', illus:'Triple Challenge', category:'h2h', title:'Triple Challenge 5-5-5',   titleTh:'หมุน หมุน แตะ',              points:4, diff:'Hard',   instruction:'Race to finish: 5 arm circles + 5 shoulder rolls + 5 toe taps. First to finish wins!',                                                               instructionTh:'แข่งกันทำท่าทาง หมุนแขน 5 ครั้ง หมุนไหล่ 5 ครั้ง แตะปลายเท้า 5 ครั้ง ใครทำเสร็จก่อนชนะ' },
  { id:'h04', illus:'The Color Match',  category:'h2h', title:'The Color Match',          titleTh:'สีนี้ สิ่งไหน',              points:4, diff:'Hard',   instruction:'One player names a color; the other must name a natural object that is the "standard" for that color.',                                              instructionTh:'ฝ่ายหนึ่งพูดชื่อ "สี" อีกฝ่ายต้องตอบชื่อ "สิ่งของที่มีสีนั้นตามธรรมชาติและเป็นสิ่งที่เข้าใจตรงกันว่าสิ่งนั้นคือสีนี้จริงๆ"' },
  { id:'h05', illus:'Trivia Battle',    category:'h2h', title:'Trivia Battle',            titleTh:'ใครคือผู้รอบรู้',            points:5, diff:'Hard',   instruction:'Team members ask trivia questions. The player who answers faster and more correctly wins!',                                                         instructionTh:'สมาชิกในทีมถามคำถามความรู้รอบตัว คนที่เหลือใครตอบได้เร็วและมากกว่าชนะ' },
  { id:'h06', illus:'Chain Memory',     category:'h2h', title:'Chain Memory',             titleTh:'พูดของฉัน จำของเธอ',         points:4, diff:'Hard',   instruction:'Pick a category. Each player repeats the previous items in order before adding a new one.',                                                          instructionTh:'เลือกมา 1 หมวดหมู่แล้วผู้ท้าชิงบอกชื่อของ 1 อย่าง ผู้แข่งขันอีกคนต้องพูดชื่อของผู้ท้าชิงแล้วเติมของตัวเองลงไป 1 อย่าง (วนไปเรื่อยๆจนกว่าจะมีคนลืม)' },
  { id:'h07', illus:'Reverse Touch',    category:'h2h', title:'Reverse Touch',            titleTh:'ขอสัมผัสได้มั้ยคะ',          points:5, diff:'Hard',   instruction:'One player names a body part. The other must touch a DIFFERENT part. Touch the named part and you lose!',                                           instructionTh:'ฝ่ายหนึ่งพูดชื่อ "อวัยวะ" อีกฝ่ายต้อง "เอาไปแตะอวัยวะอื่น" โดยห้ามแตะอวัยวะที่ตรงตามคำสั่ง ใครแตะตามคำสั่งก่อนแพ้' },
];

// ── Manual reference data (randomly picked for cards with manualKey) ──
const MANUAL_DATA = {
  color: [
    {en:'Red',th:'แดง'},{en:'Blue',th:'น้ำเงิน'},{en:'Green',th:'เขียว'},
    {en:'Yellow',th:'เหลือง'},{en:'White',th:'ขาว'},{en:'Black',th:'ดำ'},
    {en:'Pink',th:'ชมพู'},{en:'Orange',th:'ส้ม'},{en:'Purple',th:'ม่วง'},
    {en:'Brown',th:'น้ำตาล'},{en:'Grey',th:'เทา'},{en:'Cream',th:'ครีม'},
    {en:'Sky Blue',th:'ฟ้า'},{en:'Light Green',th:'เขียวอ่อน'},
    {en:'Dark Red',th:'แดงเข้ม'},{en:'Silver',th:'เงิน'},
    {en:'Gold',th:'ทอง'},{en:'Olive',th:'เขียวขี้ม้า'},{en:'Navy',th:'กรมท่า'},
  ],
  word: [
    'มะนาว','ปากกา','ตะกร้า','กางเกง','นาฬิกา','ตะเกียบ','กระเป๋า',
    'ทุเรียน','มังคุด','แตงโม','สับปะรด','จักรยาน','โทรศัพท์','อุปกรณ์',
    'พลาสติก','โรงเรียน','ก้อนเมฆ','ท้องฟ้า','แสงแดด','หนังสือ',
    'กระดาษ','ตะเกียง','หน้าต่าง','ประตู','ช้อนส้อม',
  ],
  letters: [
    'ก, น, ป','ม, ล, ส','ค, ช, พ','ต, ห, ร','บ, จ, อ',
    'ข, ฟ, ย','ด, ผ, ง','ซ, ณ, ธ','ฮ, ก, ม','ฉ, ท, ว',
  ],
  sequence: [
    '3, 6, 9, ...','5, 10, 15, ...','2, 4, 6, ...','10, 20, 30, ...',
    '50, 45, 40, ...','100, 90, 80, ...','1, 3, 5, ...','11, 22, 33, ...',
    '2, 4, 8, ...','1, 4, 9, ...','1, 2, 4, 7, ...','20, 18, 16, ...',
    '1, 1, 2, 2, ...','5, 4, 3, ...','10, 8, 6, ...','3, 7, 11, ...',
    '100, 50, 25, ...','0, 5, 0, 10, ...','12, 24, 36, ...','7, 14, 21, ...',
    '1, 10, 100, ...','9, 18, 27, ...','15, 30, 45, ...','2, 5, 8, ...','80, 70, 60, ...',
  ],
  oddOneOut: [
    'หมา, แมว, หนู, ปลา','กุหลาบ, ทิวลิป, แครอท, เดซี่',
    'รถ, เรือ, เครื่องบิน, บ้าน','มะม่วง, แตงโม, กะหล่ำ, ลำไย',
    'น้ำเปล่า, นม, น้ำส้ม, ข้าว','พ่อ, แม่, ครู, น้อง',
    'แขน, ขา, เสื้อ, ตา','โต๊ะ, เก้าอี้, ตู้เย็น, เตียง',
    'เขียว, แดง, เสียง, เหลือง','ไทย, ญี่ปุ่น, ปารีส, จีน',
    'ช้อน, ส้อม, มีดโกน, ตะเกียบ','จันทร์, อังคาร, มกราคม, พุธ',
    'กีตาร์, เปียโน, วิทยุ, กลอง','วิ่ง, กระโดด, นอน, เดิน',
    'หู, จมูก, ปาก, เล็บ','ยางลบ, ไม้บรรทัด, กระทะ, ดินสอ',
    'ไก่, เป็ด, เสือ, นก','วงกลม, สามเหลี่ยม, ลูกเต๋า, สี่เหลี่ยม',
    'มะลิ, หญ้า, เข็ม, พิกุล','ขนมปัง, เค้ก, ส้มตำ, คุกกี้',
    'เพชร, ทอง, ถ่าน, เงิน','หนัง, เพลง, การบ้าน, เกม',
    'ร้อน, หนาว, สวย, ฝนตก','อาทิตย์, ดาวหาง, ดาวเสาร์, ดาวอังคาร',
    'นก, แมลงปอ, ค้างคาว, ผีเสื้อ',
  ],
  math: [
    '9+3+4+1−5','10+10−5+2','8+2+7−3','15+5−10+3','20−5−5+10',
    '12+13−5','6+6+6−2','25−10+4','7+7+7+7','50−20−10+5',
    '11+11−2','30+20−40','9+9−8+1','14+6−5+2','100−50+10',
    '2+2+2+2+2','18−9+4','40+10−25','5+4+3+2+1','22+8−10',
    '35−5+20','8+8−6','17+3−10','60−30+5','1+2+3+4+5',
  ],
  ifIWere: [
    {en:'Mirror',th:'กระจก'},{en:'Papaya Salad',th:'ส้มตำ'},{en:'Internet',th:'อินเทอร์เน็ต'},
    {en:'Cat',th:'แมว'},{en:'Eraser',th:'ยางลบ'},{en:'Air Conditioner',th:'เครื่องปรับอากาศ'},
    {en:'Cloud',th:'ก้อนเมฆ'},{en:'Running Shoes',th:'รองเท้าวิ่ง'},{en:'Big Tree',th:'ต้นไม้ใหญ่'},
    {en:'Alarm Clock',th:'นาฬิกาปลุก'},{en:'Million Baht',th:'เงินล้าน'},{en:'Camera',th:'กล้องถ่ายรูป'},
    {en:'Umbrella',th:'ร่ม'},{en:'The Moon',th:'ดวงจันทร์'},{en:'Refrigerator',th:'ตู้เย็น'},
    {en:'Pigeon',th:'นกพิราบ'},{en:'Eyeglasses',th:'แว่นตา'},{en:'Cutlery',th:'ช้อนส้อม'},
    {en:'Pencil',th:'ดินสอ'},{en:'Guitar',th:'กีตาร์'},{en:'Suitcase',th:'กระเป๋าเดินทาง'},
    {en:'The Sun',th:'ดวงอาทิตย์'},{en:'Map',th:'แผนที่'},{en:'Lamp',th:'โคมไฟ'},{en:'Door',th:'ประตู'},
  ],
  category: [
    {en:'Pets',th:'สัตว์เลี้ยง'},{en:'Trip to the Beach',th:'การไปเที่ยวทะเล'},
    {en:'Thai Language',th:'ภาษาไทย'},{en:'Smartphones',th:'โทรศัพท์มือถือ'},
    {en:'Bangkok',th:'กรุงเทพมหานคร'},{en:'Exercise',th:'การออกกำลังกาย'},
    {en:'Important Breakfast',th:'อาหารเช้าที่สำคัญ'},{en:'Global Warming',th:'ภาวะโลกร้อน'},
    {en:'Future Dreams',th:'ความฝันในอนาคต'},{en:'Reading Books',th:'การอ่านหนังสือ'},
    {en:'Favorite Movies',th:'ภาพยนตร์ที่ชอบ'},{en:'Rainy Season',th:'ฤดูฝนในเมืองไทย'},
    {en:'Music & Songs',th:'ดนตรีและเสียงเพลง'},{en:'Favorite Coffee',th:'กาแฟแก้วโปรด'},
    {en:'Friendship',th:'มิตรภาพ'},{en:'Online Shopping',th:'การซื้อของออนไลน์'},
    {en:'Thai Desserts',th:'ขนมไทย'},{en:'Saving Money',th:'การประหยัดอดออม'},
    {en:'My Happiness',th:'ความสุขของฉัน'},{en:'Electricity',th:'พลังงานไฟฟ้า'},
    {en:'Teamwork',th:'การทำงานเป็นทีม'},{en:'Favorite Colors',th:'สีที่ชอบ'},
    {en:'Benefits of Veggies',th:'ประโยชน์ของผักผลไม้'},{en:'World in 100 Years',th:'โลกในอีก 100 ปี'},
  ],
};

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