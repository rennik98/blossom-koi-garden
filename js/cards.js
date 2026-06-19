/* ============================================================
   CARDS.JS — 54 activity cards from PDF (illus matched by name)
============================================================ */

const ACTIVITY_CARDS = [
  // ── BODY & MOVEMENT (1-16) ──
  { id:'b01', illus:'Morning Stretch',  category:'body', title:'Morning Stretch',        titleTh:'ยืดแล้วเหยียด',              points:1, diff:'Easy',   instruction:'Stand tall and reach both arms up. Lean your body to the left and hold for 15 seconds, then switch and lean to the right for 15 seconds.',                                                                         instructionTh:'ยืนตัวตรงและยกแขนทั้งสองข้างขึ้นฟ้า เอียงตัวไปทางซ้ายค้างไว้ 15 วินาที แล้วสลับเอียงไปทางขวาค้างไว้ 15 วินาที' },
  { id:'b02', illus:'Toe Tapper',       category:'body', title:'Toe Tapper',              titleTh:'เคาะโป้ง เคาะส้น',           points:1, diff:'Easy',   instruction:'Starting seated, tap your toes on the floor 10 times, then alternate with tapping your heels on the floor 10 more times. Keep the rhythm!',                                                              instructionTh:'เริ่มต้นในท่านั่ง เคาะนิ้วโป้งเท้าลงพื้น 10 ครั้ง สลับด้วยเคาะส้นเท้าลงพื้นอีก 10 ครั้ง ทำให้เป็นจังหวะ' },
  { id:'b03', illus:'Shoulder Rolls',   category:'body', title:'Shoulder Rolls',          titleTh:'หัว_ไหล่_หมุน',              points:1, diff:'Easy',   instruction:'Roll your shoulders forward 10 times, then backward 10 times.',                                                                                               instructionTh:'หมุนไหล่ไปข้างหน้า 10 ครั้ง และข้างหลังอีก 10 ครั้ง' },
  { id:'b04', illus:'Hand Squeeze',     category:'body', title:'Hand Squeeze',            titleTh:'กำแล้วแบ',                    points:1, diff:'Easy',   instruction:'Make tight fists, hold for 5 seconds, then release. Repeat 10 times.',                                                                                        instructionTh:'กำมือทั้งสองข้างให้แน่น 5 วินาที แล้วปล่อย ทำซ้ำ 10 ครั้ง' },
  { id:'b05', illus:'Ankle Circles',    category:'body', title:'Ankle Circles',           titleTh:'แกว่งเท้าหาเสี้ยน',          points:1, diff:'Easy',   instruction:'Lift both feet and draw circles with your toes — 10 clockwise and 10 counter-clockwise.',                                                                    instructionTh:'ยกเท้าทั้งสองข้างขึ้นจากพื้น ใช้ปลายเท้าวาดวงกลมตามเข็มนาฬิกา 10 ครั้ง และหมุนกลับอีก 10 ครั้ง' },
  { id:'b06', illus:'Deep Breaths',     category:'body', title:'Deep Breaths',            titleTh:'หายใจเข้าลึกลึ๊กกก',        points:1, diff:'Easy',   instruction:'Breathe in deeply, hold your breath for 5 seconds, then breathe out slowly. Repeat 5 times in total.',                                                                           instructionTh:'หายใจเข้าลึกๆ กลั้นหายใจไว้ 5 วินาที แล้วหายใจออกยาวๆ ทำซ้ำทั้งหมด 5 ครั้ง' },
  { id:'b07', illus:'Chair Stand',      category:'body', title:'Chair Stand',             titleTh:'ลุกให้ไว ก้าวให้ถึง',        points:2, diff:'Medium', instruction:'Stand up from your chair with your hands on your hips, then step forward 2 steps. Complete this within 5 seconds.',                                           instructionTh:'ลุกขึ้นจากเก้าอี้โดยแขนทั้งสองข้างเท้าเอว แล้วก้าวไปข้างหน้า 2 ก้าว ทำให้สำเร็จภายใน 5 วินาที' },
  { id:'b08', illus:'Flamingo Stand',   category:'body', title:'Flamingo Stand',          titleTh:'ฟลามิงโก้ขาเดียว',           points:2, diff:'Medium', instruction:'Hold onto a chair and stand on one foot for 5 seconds. Switch and hold the other foot for 5 seconds.',                                                         instructionTh:'จับเก้าอี้ไว้แล้วยืนขาข้างเดียวเป็นเวลา 5 วินาที จากนั้นสลับอีกข้างค้างไว้ 5 วินาที เช่นกัน' },
  { id:'b09', illus:'Walk & Count',     category:'body', title:'Walk & Count',            titleTh:'จงกรม 30 ก้าว',              points:2, diff:'Medium', instruction:'Walk around the room and count your steps. Sit down once you reach 30 steps.',                                                                               instructionTh:'เดินไปรอบๆ นับจำนวนก้าวให้ครบ 30 ก้าวแล้วจึงนั่งลง' },
  { id:'b10', illus:'Gentle Twist',     category:'body', title:'Gentle Twist',            titleTh:'หมุนตัว (ไม่ตึง)',           points:2, diff:'Medium', instruction:'Sit tall, place your right hand on your left knee, and twist your body as far left as you can. Hold for 10 seconds, then switch — place your left hand on your right knee and twist right, holding for 10 seconds.',                                       instructionTh:'นั่งตัวตรง เอามือขวาแตะเข่าซ้าย บิดตัวไปทางซ้ายให้สุด ค้างไว้ 10 วินาที จากนั้นสลับเอามือซ้ายแตะเข่าขวา บิดตัวไปทางขวาค้างไว้ 10 วินาที' },
  { id:'b11', illus:'Arm Windmill',     category:'body', title:'Arm Windmill',            titleTh:'กังหันมนุษย์',               points:2, diff:'Medium', instruction:'Extend both arms out to the sides. Circle your arms forward 10 times, then circle backward 10 more times — all while sticking your tongue out.',                                             instructionTh:'กางแขนสองข้างออกด้านข้าง หมุนแขนเป็นวงกลมไปข้างหน้า 10 ครั้ง และหมุนไปข้างหลังอีก 10 ครั้ง ทำพร้อมกับแลบลิ้น' },
  { id:'b12', illus:'Heel Raises',      category:'body', title:'Heel Raises',             titleTh:'ขยับกาย เขย่งก้าว',          points:2, diff:'Medium', instruction:'Place your hands on your hips, rise up onto your toes and hold for 3 seconds, then lower your heels back down. Repeat 10 times.',                                                                  instructionTh:'เอามือเท้าเอว เขย่งปลายเท้าขึ้นค้างไว้ 3 วินาที แล้วเอาส้นเท้าลง ทำซ้ำ 10 ครั้ง' },
  { id:'b13', illus:'Marching Band',    category:'body', title:'Marching Band',           titleTh:'ย่ำ ย่ำ ย่ำ',                points:3, diff:'Hard',   instruction:'March in place for 1 minute, lifting your knees as high as possible while swinging your arms.',                                                             instructionTh:'เดินย่ำเท้าอยู่กับที่ 1 นาที โดยยกเข่าขึ้นให้สูงที่สุดเท่าที่จะทำได้ พร้อมแกว่งแขนไปด้วย' },
  { id:'b14', illus:'Invisible Chair',  category:'body', title:'Invisible Chair',         titleTh:'เก้าอี้ล่องหน',              points:3, diff:'Hard',   instruction:'Stand leaning against a wall with both hands flat against it. Lower yourself as if sitting in a chair, bending your knees to a 90-degree angle, and hold for at least 10 seconds.',                                           instructionTh:'ยืนพิงกำแพง วางมือทั้งสองข้างแนบกำแพง ย่อตัวลงเหมือนนั่งเก้าอี้ ให้เข่างอเป็นมุม 90 องศา ค้างไว้อย่างน้อย 10 วินาที' },
  { id:'b15', illus:'Side Steps',       category:'body', title:'Side Steps',              titleTh:'สเต็ปก้าวนาฬิกา',            points:3, diff:'Hard',   instruction:'Step sideways to the right 2 steps, then step back to center. Then step to the left 2 steps, clapping your hands with every step.',                          instructionTh:'ก้าวข้างไปทางขวา 2 ก้าว แล้วก้าวกลับมาตรงกลาง จากนั้นก้าวไปทางซ้าย 2 ก้าว โดยให้ปรบมือทุกครั้งที่ก้าว' },
  { id:'b16', illus:'Dance Break',      category:'body', title:'Dance Break',             titleTh:'มาเต้นกันเถอะ',              points:3, diff:'Hard',   instruction:'Put on your favorite song and perform at least 3 different dance moves within 1 minute.',                                                                 instructionTh:'เปิดเพลงโปรดหรือฮัมเพลง แล้วเต้นท่าเต้นที่แตกต่างกันออกไปอย่างน้อย 3 ท่า ใน 1 นาที' },

  // ── BRAIN POWER (17-32) ──
  { id:'br01', illus:'Color Hunter',    category:'brain', title:'Color Hunter',           titleTh:'สีไหนใกล้ฉัน',               points:1, diff:'Easy',   manualKey:'color',     instruction:'Look around — how many <strong class="manual-val">{manual}</strong> things can you spot? Count them all!',                    instructionTh:'มองสำรวจไปรอบๆ นับของสี<strong class="manual-val">{manual}</strong>ทั้งหมดว่ามีกี่ชิ้น!' },
  { id:'br02', illus:'Flip-Flop Words', category:'brain', title:'Flip-Flop Words',        titleTh:'กลับหน้ากลับหลัง',           points:1, diff:'Easy',   manualKey:'word',      instruction:'Spell the word in its normal order, then spell it again in reverse, letter by letter: <strong class="manual-val">{manual}</strong>',                              instructionTh:'ทำการสะกดคำตามลำดับตัวอักษรตามปกติ และสะกดย้อนกลับจากหลังมาหน้าตามลำดับ: <strong class="manual-val">{manual}</strong>' },
  { id:'br03', illus:'Minus Memory',    category:'brain', title:'Minus Memory',           titleTh:'ลบไม่ได้ช่วยให้ลืม',        points:1, diff:'Easy',   instruction:'Starting from 20, count down by subtracting 3 each time, in order, until you reach the number 2.',                                                                                                  instructionTh:'เริ่มต้นนับจาก 20 โดยลดจำนวนลงทีละ 3 ลำดับ จนกระทั่งสิ้นสุดที่เลข 2' },
  { id:'br04', illus:'Animal ABCs',     category:'brain', title:'Animal ABCs',            titleTh:'ตัวนี้คำไหน',                points:1, diff:'Medium', manualKey:'letters',   instruction:'Name 3 animals for each letter: <strong class="manual-val">{manual}</strong>',                                                   instructionTh:'คิดชื่อสัตว์มาอย่างละ 3 ชื่อ สำหรับตัวอักษร: <strong class="manual-val">{manual}</strong>' },
  { id:'br05', illus:'Pattern Master',  category:'brain', title:'Pattern Master',         titleTh:'นึกให้ออก บอกให้ถูก',        points:1, diff:'Easy',   manualKey:'sequence',  instruction:'Correctly state the next 2 numbers in the sequence: <strong class="manual-val">{manual}</strong>',                                                    instructionTh:'จงระบุผลลัพธ์ใน 2 ลำดับถัดไปให้ถูกต้อง: <strong class="manual-val">{manual}</strong>' },
  { id:'br06', illus:'Odd One Out',     category:'brain', title:'Odd One Out',            titleTh:'อะไรเอ่ย ไม่เข้าพวก',       points:1, diff:'Easy',   manualKey:'oddOneOut', instruction:'From the following: <strong class="manual-val">{manual}</strong> — which one doesn\'t belong, and why?',                                              instructionTh:'จากสิ่งที่กำหนดให้ดังต่อไปนี้ <strong class="manual-val">{manual}</strong> อะไรที่ไม่เข้าพวกเพราะเหตุใด?' },
  { id:'br07', illus:'The Storyteller', category:'brain', title:'The Storyteller',        titleTh:'นักเล่าเรื่อง',              points:2, diff:'Medium', instruction:'As a group, choose words together under the categories Place, Food, and Plant, then weave the chosen words into an imaginative story.',                                                                               instructionTh:'ให้สมาชิกภายในกลุ่มร่วมกันคัดเลือกคำศัพท์ภายใต้หัวข้อ สถานที่, อาหาร, และพรรณไม้ จากนั้นจึงนำชุดคำที่กำหนดมาร้อยเรียงเป็นเรื่องราวตามจินตนาการ' },
  { id:'br08', illus:'Snapshot Recall', category:'brain', title:'Snapshot Recall',        titleTh:'จะจำได้ไหม จำได้หรือเปล่า', points:2, diff:'Medium', instruction:'Observe your surroundings for 10 seconds, then close your eyes and name as many things as you can remember within 10 seconds.',                                                     instructionTh:'จงสำรวจสภาพแวดล้อมรอบตัวเป็นเวลา 10 วินาที จากนั้นให้ปิดตาลง และระบุสิ่งที่ท่านจดจำได้มากที่สุดภายในระยะเวลา 10 วินาที' },
  { id:'br09', illus:'Rhyme Time',      category:'brain', title:'Rhyme Time',             titleTh:'ภาษาไทยวันละหลายคำ',        points:2, diff:'Medium', instruction:'Name as many words as you can that share the same vowel and final consonant pattern, within the 30-second time limit.',                                                                  instructionTh:'จงระบุคำที่มีสระและตัวสะกดในรูปแบบเดียวกัน ให้ได้จำนวนมากที่สุดภายใต้ระยะเวลาที่กำหนด 30 วินาที' },
  { id:'br10', illus:'The Opposites',   category:'brain', title:'The Opposites',          titleTh:'คำตรงข้าม',                  points:2, diff:'Easy',   instruction:'Name as many opposite word pairs as possible in 30 seconds. (e.g. hot–cold)',                                                                               instructionTh:'พูดคำตรงข้ามกันให้ได้มากที่สุดในเวลา 30 วินาที (เช่น เปรี้ยว-หวาน)' },
  { id:'br11', illus:'5 Senses Check',  category:'brain', title:'5 Senses Check',         titleTh:'ประสาทสัมผัสทั้ง 5',         points:2, diff:'Medium', instruction:'List 5 things you saw, 4 you heard, 3 you touched, 2 you smelled, and 1 you tasted today.',                                                                  instructionTh:'จงระบุสิ่งที่เห็น 5 อย่าง, ได้ยิน 4 อย่าง, สัมผัส 3 อย่าง, ได้กลิ่น 2 อย่าง, ลิ้มรส 1 อย่าง ที่ผ่านมาในวันนี้' },
  { id:'br12', illus:'Thailand Explorer',category:'brain',title:'Thailand Explorer',      titleTh:'เมืองไทย ไม่ไปไม่รู้',      points:2, diff:'Medium', instruction:'Name as many provinces in Thailand as you can within 30 seconds.',                                                                                          instructionTh:'บอกชื่อจังหวัดในประเทศไทยให้ได้มากที่สุด ในเวลา 30 วินาที' },
  { id:'br13', illus:'Time Capsule',    category:'brain', title:'Time Capsule',           titleTh:'เจาะเวลาหาอดีต',             points:2, diff:'Medium', instruction:'Name 5 objects or items that have vanished or are no longer used today.',                                                                                  instructionTh:'จงระบุชื่อวัตถุหรือสิ่งของที่สาบสูญไปหรือไม่มีการใช้งานแล้วในปัจจุบันมาให้ครบ 5 รายการ' },
  { id:'br14', illus:'Flash Math',      category:'brain', title:'Flash Math',             titleTh:'คณิตคิดเร็ว',                points:3, diff:'Hard',   manualKey:'math',      instruction:'Solve in your head — no paper, no fingers, no whispering! <strong class="manual-val">{manual} = ?</strong>',               instructionTh:'คิดเลขในใจ ห้ามใช้กระดาษ ห้ามนับนิ้ว ห้ามพึมพำ! <strong class="manual-val">{manual} = ?</strong>' },
  { id:'br15', illus:'Local Gems',      category:'brain', title:'Local Gems',             titleTh:'ของดีประจำถิ่น',             points:3, diff:'Hard',   instruction:'Pick one province and name as many things related to it as possible in 30 seconds.',                                                                       instructionTh:'ให้เลือก 1 จังหวัดแล้วบอกสิ่งที่นึกถึงในจังหวัดนั้นให้ได้มากที่สุดใน 30 วินาที' },
  { id:'br16', illus:'Location Guess',  category:'brain', title:'Location Guess',         titleTh:'พิกัดลับ 120 วิ',            points:3, diff:'Hard',   instruction:'Think of a place. Others can only ask "Yes/No" questions. You have 2 minutes.',                                                                          instructionTh:'คิดสถานที่ 1 ที่ไว้ในใจ แล้วตอบคำถามคนในทีมได้แค่ "ไม่ใช่" กับ "ใช่" ในเวลา 2 นาที' },

  // ── HEART & SOUL (33-47) ──
  { id:'s01', illus:'Left-Side Cheer',  category:'social', title:'Left-Side Cheer',       titleTh:'ชวนชม',                       points:1, diff:'Easy',   instruction:'Say 3 compliments or words of encouragement to the person sitting on your left.',                                                                       instructionTh:'บอกคำชมหรือให้กำลังใจ คนข้างซ้ายของคุณมา 3 อย่าง' },
  { id:'s02', illus:'Childhood Gems',   category:'social', title:'Childhood Gems',        titleTh:'เรื่องนี้ที่คิดถึง',         points:1, diff:'Easy',   instruction:'Share a favorite childhood memory and explain why it is so special to you.',                                                                           instructionTh:'เล่าความทรงจำในวัยเด็กที่ประทับใจ แล้วอะไรที่ทำให้รู้สึกประทับใจเป็นพิเศษ?' },
  { id:'s03', illus:'Daily Gratitude',  category:'social', title:'Daily Gratitude',       titleTh:'ขอบคุณด้วยหัวใจ',            points:1, diff:'Easy',   instruction:'Think of 3 good things that happened today, and say thank you for them out loud.',                                                                                       instructionTh:'นึกถึง 3 เรื่องดีๆ ในวันนี้ แล้วพูดขอบคุณออกมาดังๆ' },
  { id:'s04', illus:'My Melody',        category:'social', title:'My Melody',             titleTh:'เพลงนี้ที่ฉันรัก',           points:1, diff:'Easy',   instruction:'Choose a song you like and sing 2-3 lines of it, then explain why this song is special to you.',                                                                  instructionTh:'เลือกร้องเพลงที่ชอบมา 2-3 ท่อน แล้วบอกเหตุผลว่าเพลงนี้พิเศษสำหรับคุณยังไง' },
  { id:'s05', illus:"Joker's Moment",   category:'social', title:"Joker's Moment",        titleTh:'ฮ่า ฮ่า ฮ่า',               points:1, diff:'Easy',   instruction:'Pick one funny story you like to tell, share it with the group, then briefly explain why it\'s funny to you.',                                                           instructionTh:'เลือกเรื่องตลกที่ชอบเล่าในกลุ่มมา 1 เรื่อง แล้วบอกสั้นๆว่าทำไมมันถึงตลกสำหรับคุณ' },
  { id:'s06', illus:'Season of You',    category:'social', title:'Season of You',         titleTh:'ฤดูกาลแสนรัก',               points:1, diff:'Medium', instruction:'Compare the person on your left to a season — which season would you pick, and why?',                                                            instructionTh:'เปรียบคนข้างซ้ายเป็น 1 ฤดูกาล คุณจะเลือกฤดูไหน เพราะอะไร?' },
  { id:'s07', illus:'2 Truths, 1 Lie',  category:'social', title:'2 Truths, 1 Lie',       titleTh:'ความจริงมีเพียงหนึ่งเดียว',   points:2, diff:'Medium', instruction:'Tell 3 stories about yourself — 2 true and 1 made up — and let your teammates guess which one is the lie.',                                                                   instructionTh:'เล่า 3 เรื่อง โดยจริง 2 หลอก 1 เรื่องเกี่ยวกับตัวของคุณ แล้วให้เพื่อนในทีมเดาว่าเรื่องไหนคือเรื่องโกหก' },
  { id:'s08', illus:"Tomorrow's Dream", category:'social', title:"Tomorrow's Dream",      titleTh:'พรุ่งนี้เที่ยวไหน',          points:2, diff:'Easy',   instruction:'If you could go anywhere tomorrow, where would it be? Describe your perfect day there.',                                                               instructionTh:'ถ้าสามารถไปที่ไหนก็ได้ในวันพรุ่งนี้จะไปที่ไหน บรรยายเรื่องราวในวันพรุ่งนี้' },
  { id:'s09', illus:'Hidden Talent',    category:'social', title:'Hidden Talent',         titleTh:'สอนหนูหน่อย',                points:2, diff:'Medium', instruction:'Share a skill of yours that others might not know about — it should be something that surprises your teammates.',                                                                   instructionTh:'บอกความถนัดของคุณ ที่คนอื่นอาจจะยังไม่รู้ โดยต้องทำให้เพื่อนในทีมคาดไม่ถึง' },
  { id:'s10', illus:'If I Were',        category:'social', title:'If I Were...',           titleTh:'ถ้าฉันเป็น...ฉันจะ…',        points:2, diff:'Medium', manualKey:'ifIWere',   instruction:'If you were a <strong class="manual-val">{manual}</strong>, what kind would you be and why?',                               instructionTh:'ถ้าตัวเองเป็น<strong class="manual-val">{manual}</strong> จะเป็นแบบไหน เพราะอะไร?' },
  { id:'s11', illus:'Name Origins',     category:'social', title:'Name Origins',          titleTh:'ชื่อนี้ท่านได้แต่ใดมา',      points:2, diff:'Medium', instruction:'Share the story behind your real name.',                                                                                                               instructionTh:'เล่าที่มาที่ไปของชื่อจริง' },
  { id:'s12', illus:'Island Survival',  category:'social', title:'Island Survival',       titleTh:'ฉันต้องรอด',                 points:2, diff:'Medium', instruction:'If stranded on a deserted island and you could only bring 3 things, what would they be and why?',                                                      instructionTh:'ถ้าติดอยู่บนเกาะร้าง แล้วจำเป็นต้องพกของไปแค่ 3 อย่าง จะเป็นอะไร เพราะอะไร?' },
  { id:'s13', illus:"Life's Lesson",    category:'social', title:"Life's Lesson",         titleTh:'บทเรียนชีวิต',               points:2, diff:'Hard',   instruction:'What is the most valuable lesson you\'ve learned in life, and what would you want to tell yourself back then?',                                                         instructionTh:'อะไรคือบทเรียนที่มีค่าที่สุดในชีวิตที่คุณได้เรียนรู้มา และอยากบอกอะไรกับตัวเองในช่วงเวลานั้น' },
  { id:'s14', illus:'100-Year Capsule', category:'social', title:'100-Year Capsule',      titleTh:'ของปริศนา กับเวลาในขวดแก้ว', points:2, diff:'Hard',   instruction:'Put 3 items in a time capsule for people 100 years from now. What and why?',                                                                          instructionTh:'ถ้าต้องใส่สิ่งของ 3 อย่างลงในแคปซูลเพื่อคนในอีก 100 ปีข้างหน้า จะใส่อะไร เพราะอะไร' },
  { id:'s15', illus:'Key to Happiness', category:'social', title:'Key to Happiness',      titleTh:'สุขใดไหนเล่า',               points:2, diff:'Hard',   instruction:'Share your personal advice on "How to stay happy."',                                                                                                   instructionTh:'เจ้าของการ์ดแชร์ "วิธีที่จะอยู่อย่างมีความสุข"' },

  // ── HEAD-TO-HEAD (48-54) ──
  { id:'h01', illus:'Category Race',    category:'h2h', title:'Category Race',            titleTh:'อย่าหยุดพูด!',               points:3, diff:'Medium', manualKey:'category',  instruction:'Category: <strong class="manual-val">{manual}</strong>! Take turns answering within the category — whoever can\'t think of an answer first loses this round!',                     instructionTh:'หมวด: <strong class="manual-val">{manual}</strong>! ผู้เล่นสลับกันตอบคำถามตามหมวดหมู่ที่กำหนด หากผู้เล่นฝ่ายใดฝ่ายหนึ่งไม่สามารถคิดคำตอบต่อไปได้จะเป็นฝ่ายพ่ายแพ้ในรอบนี้' },
  { id:'h02', illus:'Object Recall',    category:'h2h', title:'Object Recall',            titleTh:'ลับสมอง ประลองความจำ',       points:3, diff:'Medium', instruction:'Both players study the room for 20 seconds, then close eyes. Who can name more objects?',                                                               instructionTh:'ผู้เล่นทั้งสองคนสำรวจห้องเป็นเวลา 20 วินาที จากนั้นหลับตา ใครบอกชื่อสิ่งของในห้องได้มากกว่ากัน?' },
  { id:'h03', illus:'Triple Challenge', category:'h2h', title:'Triple Challenge 5-5-5',   titleTh:'หมุน หมุน แตะ',              points:4, diff:'Hard',   instruction:'Race to finish: 5 arm circles + 5 shoulder rolls + 5 toe taps. First to finish wins!',                                                               instructionTh:'แข่งกันทำท่าทาง หมุนแขน 5 ครั้ง หมุนไหล่ 5 ครั้ง แตะปลายเท้า 5 ครั้ง ใครทำเสร็จก่อนชนะ' },
  { id:'h04', illus:'The Color Match',  category:'h2h', title:'The Color Match',          titleTh:'สีนี้ สิ่งไหน',              points:4, diff:'Hard',   instruction:'Players take turns: one names a "color", and the other must answer with the name of a natural object that everyone agrees truly represents that color.',                                              instructionTh:'ผู้เล่นสลับกันตอบ โดยฝ่ายหนึ่งเป็นผู้กำหนด "ชื่อสี" และอีกฝ่ายต้องตอบ "ชื่อสิ่งของตามธรรมชาติที่มีสีนั้นเด่นชัดเป็นสากล" สลับกันไปเรื่อยๆ' },
  { id:'h05', illus:'Trivia Battle',    category:'h2h', title:'Trivia Battle',            titleTh:'ใครคือผู้รอบรู้',            points:5, diff:'Hard',   instruction:'Team members ask trivia questions. The player who answers faster and more correctly wins!',                                                         instructionTh:'สมาชิกในทีมถามคำถามความรู้รอบตัว คนที่เหลือใครตอบได้เร็วและมากกว่าชนะ' },
  { id:'h06', illus:'Chain Memory',     category:'h2h', title:'Chain Memory',             titleTh:'พูดของฉัน จำของเธอ',         points:4, diff:'Hard',   instruction:'Pick a category. The challenger names one item, then the other player must repeat all previous items in order before adding one new item of their own. Whoever forgets or gets the order wrong loses immediately.',                                                          instructionTh:'เลือกหมวดหมู่ ผู้ท้าชิงบอกชื่อสิ่งของ 1 อย่าง จากนั้นผู้พูดแข่งขันพูดทวนสิ่งของทั้งหมดก่อนหน้าตามลำดับ แล้วเติมสิ่งของใหม่ของตนเองเพิ่มเข้าไปอีก 1 อย่าง วนสลับกันไปเรื่อยๆ หากผู้เล่นฝ่ายใดจำไม่ได้หรือระบุลำดับผิดพลาดจะเป็นฝ่ายพ่ายแพ้ทันที' },
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
  { id:'r01', title:'Lucky Clover',        titleTh:'โคลเวอร์นำโชค',      space:3,  effect:'points',      value:2, description:'+2 bonus points!',                          descriptionTh:'รับ +2 คะแนนโบนัส!' },
  { id:'r03', title:'Friendship Fountain', titleTh:'น้ำพุแห่งมิตรภาพ',  space:18, effect:'sharePoints',  value:2, description:'Compliment someone → both get +2 pts!',     descriptionTh:'ชมใครสักคน → ทั้งคู่รับ +2 คะแนน!' },
  { id:'r04', title:'Golden Star',         titleTh:'ดาวทอง',             space:29, effect:'extraTurn',   value:0, description:'Take an extra turn immediately!',            descriptionTh:'รับตาพิเศษทันที!' },
  { id:'r05', title:'Victory Boost',       titleTh:'พลังแห่งชัยชนะ',    space:36, effect:'move',        value:2, description:'Move forward +2 extra spaces!',              descriptionTh:'เดินไปข้างหน้าอีก +2 ช่อง!' },
];

const PUNISH_CARDS = [
  { id:'p01', title:'Foggy Path',      titleTh:'ทางหมอก',      space:7,  effect:'moveBack',   value:2, description:'Go back 2 spaces.',                                                    descriptionTh:'ถอยหลัง 2 ช่อง' },
  { id:'p03', title:'Canyon Trap',     titleTh:'กับดักหุบเขา', space:23, effect:'givePoints', value:2, description:'Give 2 pts to the last-place player.',                                 descriptionTh:'ให้ 2 คะแนนแก่ผู้เล่นที่อยู่ท้ายสุด' },
  { id:'p05', title:'Boss Challenge',  titleTh:'บอสท้าทาย',   space:38, effect:'bossCard',   value:0, description:'Draw a Hard card. Succeed = +5 pts! Fail = go back 3 spaces.',         descriptionTh:'จั่วไพ่ Hard ถ้าสำเร็จ +5 คะแนน ถ้าล้มเหลวถอย 3 ช่อง' },
];

const EVENT_CARDS = [
  { id:'e01', title:'Swap Places!',       titleTh:'สลับที่!',                type:'Chaos',  effect:'swap',            description:'Swap board positions with the player ahead of you.',               descriptionTh:'สลับตำแหน่งกับผู้เล่นที่อยู่ข้างหน้า' },
  { id:'e02', title:'Double or Nothing',  titleTh:'คูณสองหรือศูนย์',         type:'Gamble', effect:'doubleOrNothing', description:'Coin flip: heads = +3 pts, tails = -2 pts.',                       descriptionTh:'โยนเหรียญ: หัว +3 คะแนน ก้อย -2 คะแนน' },
  { id:'e03', title:'Gift of Kindness',   titleTh:'ของขวัญแห่งความดี',       type:'Reward', effect:'giveAndGet',      description:'Give +2 to any player, you get +1.',                               descriptionTh:'ให้ +2 คะแนนแก่ผู้เล่นใดก็ได้ คุณรับ +1' },
  { id:'e04', title:'Reverse!',           titleTh:'กลับทาง!',                type:'Chaos',  effect:'reverse',         description:'Turn order goes counter-clockwise for 2 rounds!',                 descriptionTh:'ลำดับการเล่นสวนทางเป็นเวลา 2 รอบ!' },
  { id:'e05', title:'Everybody Dance!',   titleTh:'เต้นกันทุกคน!',           type:'Group',  effect:'groupDance',      description:'All players dance for 15 seconds — all get +1 pt!',               descriptionTh:'ทุกคนเต้น 15 วินาที ทุกคนรับ +1 คะแนน!' },
  { id:'e06', title:'Steal a Star',       titleTh:'ขโมยดาว',                 type:'Punish', effect:'steal',           description:'Steal 2 pts from the player in 1st place!',                       descriptionTh:'ขโมย 2 คะแนนจากผู้เล่นที่อยู่อันดับ 1!' },
  { id:'e07', title:'Time Warp',          titleTh:'บิดเวลา',                 type:'Chaos',  effect:'timeWarp',        description:'Return to nearest mini-game space and replay it!',                 descriptionTh:'กลับไปที่ช่องมินิเกมที่ใกล้ที่สุดและเล่นใหม่!' },
  { id:'e08', title:'Lucky Break',        titleTh:'โชคดี',                   type:'Reward', effect:'luckyMove',       description:'Roll the die, move that many extra spaces forward!',               descriptionTh:'โยนลูกเต๋า เดินไปข้างหน้าเพิ่มตามผลลูกเต๋า!' },
  { id:'e09', title:'Freeze!',            titleTh:'แข็งตัว!',                type:'Punish', effect:'freeze',          description:'Cannot move next turn (but still draw a card/score).',            descriptionTh:'ไม่สามารถเดินในรอบถัดไป แต่ยังจั่วไพ่และรับคะแนนได้' },
  { id:'e10', title:'Bonus Round',        titleTh:'รอบโบนัส',               type:'Group',  effect:'bonusRound',      description:'Trigger a random mini-game for ALL players!',                      descriptionTh:'เปิดมินิเกมสุ่มสำหรับผู้เล่นทุกคน!' },
  { id:'e11', title:'Point Earthquake',   titleTh:'แผ่นดินไหวคะแนน',         type:'Chaos',  effect:'quake',           description:'Players with 10+ pts lose 3. Players under 10 gain 2.',            descriptionTh:'ผู้ที่มี 10+ คะแนนเสีย 3 ผู้ที่ต่ำกว่า 10 ได้ 2' },
];

const MINIGAME_CARDS = [
  { id:'mg01', title:'Brain Duel',         titleTh:'รู้หมือไร่',       diff:'Medium', time:60,  points:3, description:'1 rapid trivia question. First correct answer scores!',                                                                                    descriptionTh:'ถามความรู้รอบตัว 1 ข้อ คนตอบถูกก่อนรับคะแนน!' },
  { id:'mg02', title:'Stretch Race',       titleTh:'ยืดไม่ยั้ง',       diff:'Easy',   time:45,  points:2, description:'Race: 10 arm circles + 5 shoulder rolls + 10 toe taps. Fastest wins!',                                                                    descriptionTh:'แข่ง: หมุนแขน 10 ครั้ง + หมุนไหล่ 5 ครั้ง + เคาะนิ้วโป้งเท้า 10 ครั้ง ใครทำได้เร็วที่สุดชนะ!' },
  { id:'mg03', title:'Story Slam',         titleTh:'เล่า ลืม ลา',      diff:'Hard',   time:120, points:4, description:'Each player tells a 30-sec story on the same topic. Group votes best!',                                                                    descriptionTh:'เปิดเล่มคู่มือ เลือกมา 1 หัวข้อ แต่ละคนเล่าเรื่อง 30 วินาทีในหัวข้อเดียวกัน กลุ่มโหวตว่าเรื่องใครเจ๋งสุด คนนั้นชนะ' },
  { id:'mg04', title:'Memory Mayhem',      titleTh:'ดวลความจำ',         diff:'Hard',   time:90,  points:4, description:'Memorize 5 words in 30 s. Most recalled wins!',                                                                                          descriptionTh:'เลือกชุดคำจากเล่มคู่มือ จำ 5 คำ ใน 30 วินาที ใครจำได้มากสุดชนะ!' },
  { id:'mg05', title:'Word Chain',         titleTh:'ต่อปากต่อคำ',       diff:'Hard',   time:120, points:4, description:'Province category: Repeat all provinces before you, then add one more. Miss or mix up any = you\'re out. Last one standing wins!',         descriptionTh:'คำแรกเอ่ยชื่อจังหวัด คนต่อไปต้องทวนจังหวัดของคนก่อนหน้าทุกครั้ง ก่อนจะพูดชื่อจังหวัดถัดไป พูดผิดแพ้ เหลือใครคนสุดท้ายชนะ' },
  { id:'mg06', title:'Finger Gymnastics',  titleTh:'ยิมนาสติกนิ้ว',    diff:'Medium', time:45,  points:3, description:'Take turns mirroring opposite hand gestures — one does "pinch", the other does "L". Switch each round. Mix it up = you\'re out!',          descriptionTh:'สลับกันทำท่าทางนิ้วเป็น "จีบ" และ "L" โดยแต่ละคนทำท่าทางตรงข้ามกับอีกฝ่าย ใครทำผิดแพ้' },
  { id:'mg07', title:'Hum That Tune',      titleTh:'ฮัมมา ทายไป',      diff:'Medium', time:180, points:3, description:'Hum famous songs. Others guess the title. Most correct guesses wins!',                                                                     descriptionTh:'ร้องเพลงฮิตติดหู ให้คนอื่นทายชื่อเพลง คนที่ทายถูกมากสุดชนะ!' },
  { id:'mg08', title:'Number Crunch',      titleTh:'คณิตคิดเร็ว',       diff:'Medium', time:60,  points:3, description:'Mental math race — 1 problem. Most correct wins!',                                                                                        descriptionTh:'แข่งคิดเลขในใจ 1 ข้อ ใครตอบถูกและเร็วที่สุดชนะ!' },
];

// ── Dev: validate every manualKey reference against MANUAL_DATA ──
(function validateManualKeys() {
  const allCards = [
    ...ACTIVITY_CARDS,
    ...REWARD_CARDS,
    ...PUNISH_CARDS,
    ...EVENT_CARDS,
    ...MINIGAME_CARDS,
  ];
  allCards.forEach(card => {
    if (card.manualKey && !(card.manualKey in MANUAL_DATA)) {
      console.error(
        `[BrainBlooming] ❌ Card "${card.id}" ("${card.title}") uses manualKey "${card.manualKey}" but it is MISSING from MANUAL_DATA!`
      );
    }
  });
})();