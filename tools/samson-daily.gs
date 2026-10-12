/**
 * Samson's Daily Email to Grangie
 * Paste into script.google.com while signed in as samson.the.munchkin@gmail.com.
 * Project timezone must be Asia/Singapore (see SETUP.md).
 * Run setup() once, then sendWelcome() once. sendTestToGabriel() previews the next story.
 */

// ---------- Config ----------
const TO = 'angie@framingangie.com';
const BCC = 'thedanon@gmail.com';
const GABRIEL = 'thedanon@gmail.com';
const SENDER_NAME = 'Samson';
const IMG_BASE = 'https://raw.githubusercontent.com/mentatdgt/img-assets/main/s/';
const TZ = 'Asia/Singapore';
const START_HOUR = 7;   // earliest send (inclusive)
const END_HOUR = 12;   // latest send (noon)
const BIRTHDAY = { month: 10, day: 7 }; // 7 October
const SIGN_OFF = 'Love, Samson 🐾';

// ---------- Content ----------
const WELCOME = {
  file: '00_welcome_wave.gif',
  subject: 'Big News from Samson: I Have an Email Now! 📬🐾',
  // Trusted HTML paragraphs (from welcome_final.html); not escaped.
  htmlParagraphs: [
  "Hi Grangie! 👋🐾",
  "It's me, Samson. Yes, really me. I've been sitting on your table, leaning on my basket and watching you type on that computer for so long that I finally worked out how emails happen. You press the little buttons and words fly away to people. So I got myself my very own email address. Please don't tell Yati, she'll want to see my licence. 🚓",
  "Here is my big announcement: <b>from now on, I'm going to send you an email every single day.</b> 📬 Every day there'll be a new little story about what I've been up to, plus a special picture of me that you haven't seen before. I've got a whole collection, and I promise never to send you the same one twice.",
  "But here's the tricky part. 🤫 I won't tell you <i>when</i> it's coming. It might arrive at 7 in the morning while I'm still waiting by my bowl, sure that breakfast is late. It might come after lunch, when the flat is warm and I'm pretending not to nap. It might be late at night, after Ruby has said goodnight and I'm sitting in the dark, thinking about fish. 🐟 So keep your eyes open, Grangie. You'll be surprised every day.",
  "What will I write about? Important cat business, of course. The fishy smells coming from the kitchen and why they're obviously for me. 😋 My lint roller massages, which are the best thing that's ever happened to anyone. 💆 Life in the cone (some days I'm a serious philosopher, some days I'm a lampshade). The times the cone comes off and I turn into a zoomies machine. 🌀 Ruby, my second mummy, who understands me. 💕 And Yati, the policewoman, who always seems to know exactly when it's time to catch me. 👮‍♀️",
  "One small favour, Grangie. Some computers don't recognise a new cat yet, so my emails might end up in the \"Spam\" folder. 🙈 If you find me there, please click <b>\"Not spam\"</b> and add me to your contacts so my stories come straight to you. A cat must not be kept in the wrong box. Unless it's my basket. That box is fine.",
  "I can't wait to start. See you tomorrow, at a time only I know. 😼",
  "Love you lots,<br><b>Samson</b> 🐾<br><span style=\"color:#888;font-size:14px\">Chief Table Supervisor and Professional Lint Roller Tester</span>"
]
};

const BIRTHDAY_STORY = {
  "file": "28_birthday.png",
  "subject": "Happy Birthday, Grangie!!! 🎂🎉",
  "paragraphs": [
    "HAPPY BIRTHDAY, GRANGIE!!! 🎂🎉🎈 Today is the most important day of the whole year, even more important than smelly fish day. It's YOUR day!",
    "I've been planning this for weeks. Well, I've been thinking about it during my naps, which is the same thing. I wanted to bake you a cake but my paws are too short to reach the oven, and Ruby said cats don't bake. So I'm sending you this picture of me with a cake instead. Imagine it's made of tuna. That's the best kind. 🐟🍰",
    "This morning I gave you an extra slow blink and sat extra close to you on your table. Did you notice? That was my birthday hug. I also promise not to knock anything off your table today. Not even one pen. That's my present to you. 🎁",
    "Thank you for all the lint roller massages, all the chin scratches, and for letting me lean on my basket and watch you every single day. You're the best Grangie in the whole world, and I'm the luckiest cat in Singapore. 💛",
    "I hope your day is full of cake, love, and absolutely no Yati-style surprises. Happy birthday! 🥳"
  ]
};

const STORIES = [
  {
    "file": "01_canonical.webp",
    "subject": "Just Me, Being Magnificent 😼",
    "paragraphs": [
      "Good morning Grangie! 🌞 Today I would like to present myself in my most official pose. Sitting up straight, tail curled just so, cone fluffed like a sunflower. I practised it on your work table while you were reading something very long on the computer. You didn't look up, so I practised it again. And again. A professional never gives up.",
      "Ruby says I look like a little lion in my yellow cone. I think she means a very handsome lion who has excellent manners and only sometimes knocks pens off the table. 🦁 I accepted the compliment by blinking slowly at her, which is cat for \"you may continue.\"",
      "After lunch the rain came down on the corridor and the whole flat went cool and grey. 🌧️ I sat by the window and watched the drops race each other. I picked a winner every time. I am very good at this game because nobody else is allowed to play.",
      "Tomorrow I will be magnificent again. It's a lot of work but someone has to do it. 💛"
    ]
  },
  {
    "file": "02_laughing.webp",
    "subject": "I Laughed So Hard My Cone Wobbled 😹",
    "paragraphs": [
      "Grangie, something very funny happened today and I need to tell you before I forget. 😹 Ruby was folding the laundry and a sock jumped off the pile all by itself. It just flopped onto the floor like a sleepy fish. I watched it for a long time to make sure it was not alive.",
      "Then Ruby bent down to get it and another sock fell off the other side! Two socks escaping at once! I laughed so much my cone wobbled from side to side. Ruby laughed too, and called me a cheeky boy, which I am. 🧦🧦",
      "Later I tried to make a sock jump off the pile myself, to see if I could do the magic. I pushed one very gently with my paw. It did not jump. It just lay there. Some socks have no sense of humour.",
      "I am still giggling a little bit now, sitting next to my basket. If you hear a strange happy noise from the table tomorrow, that is me remembering the socks. 🐾"
    ]
  },
  {
    "file": "03_sleeping.webp",
    "themes": ["cozy"],
    "subject": "Professional Napper, Reporting In 😴",
    "paragraphs": [
      "Dear Grangie, I have very important news. I slept for most of today, and it was excellent. 💤 I started on the sofa, moved to the cool floor near the aircon, then finished in my basket on your table. Three locations. Very ambitious.",
      "The best nap was the afternoon one. The flat was quiet, the fan was humming, and I could hear your typing going click click click like gentle rain. It is the perfect music for sleeping. I curled up so tight my cone became a little yellow pillow. 🌼",
      "At one point I dreamed about a giant fish that lived in my food bowl and kept saying my name. I woke up very hungry and went to check the bowl. No giant fish. Only normal kibble. I was a little disappointed, but I ate it anyway because I am a reasonable cat.",
      "Now it is evening and I am feeling very refreshed. Refreshed enough for another nap, probably. Goodnight, or good morning, or whatever time it is when you read this. 😴🐾"
    ]
  },
  {
    "file": "04_waving.webp",
    "subject": "Hello Hello Hello! 👋",
    "paragraphs": [
      "Hi Grangie! 👋 I'm waving at you right now. Can you feel it? I learned this wave by watching you on your video calls. You lift your hand and say hello to the little people in the computer. So today when you were on a call I sat right next to the screen and lifted my paw too.",
      "I don't think the little people saw me, but you laughed and moved me a bit to the side. That's okay. I waved from the side instead. A good greeting can be done from anywhere. 🐾",
      "Later I waved at Ruby when she came back from the market with a bag that smelled strongly of fish. 🐟 She waved back! Then she put the fish in the fridge, which was not what my wave was asking for. I will need to practise my wave so it says \"hello, please share\" more clearly.",
      "Anyway, this is my wave for you today. Hello hello hello. I'll wave again tomorrow. 💛"
    ]
  },
  {
    "file": "05_love.png",
    "subject": "My Heart Is Full (and So Is My Tummy) ❤️",
    "paragraphs": [
      "Grangie, today I want to tell you how much I love you. ❤️ It's a lot. It's bigger than my basket. It might even be bigger than the whole flat, including the corridor.",
      "This morning you gave me a lint roller massage before you started working. You rolled it down my back and over my shoulders, and I made my special happy face with my eyes half closed. Then you did my cheeks. Nobody does the cheeks like you. I purred so loudly that Ruby came to check if the washing machine was broken. 💆",
      "After that I sat on your table and leaned on my basket and watched you work all morning. You kept saying \"Samson, move your tail\" because it was on the keyboard. But I could tell you were happy I was there. A tail on the keyboard is a sign of love. 💕",
      "So that's my news. I love you. Also, I love fish. But you first. Mostly. 🐟❤️"
    ]
  },
  {
    "file": "06_crying.png",
    "subject": "A Very Sad Moment (It Was About Tuna) 😿",
    "paragraphs": [
      "Dear Grangie, I am writing to you with a heavy heart. 😿 This afternoon I heard the sound. You know the sound. The click of a tin being opened. I ran to the kitchen so fast my cone bumped the door frame.",
      "But it was not for me. It was for a sandwich. A sandwich for a human. Ruby made tuna sandwiches and I sat at her feet and looked up with my biggest, wettest eyes. I let one tear form. Maybe two. I am very good at this. 🥺",
      "Ruby said \"Aiyo, Samson, this one got mayo, not for you.\" I don't know what mayo is, but I am now its enemy. I went back to my basket and sat facing the wall for quite a while so everyone would know how I felt.",
      "Later Ruby gave me a little bit of my own fishy food, the smelly kind, and I forgave everyone. My heart is mended now. But I will never forget the sandwich. 🥪💧"
    ]
  },
  {
    "file": "07_angry.png",
    "subject": "I Am Not Amused. At All. 😾",
    "paragraphs": [
      "Grangie, I need to file a complaint. 😾 Today Yati appeared out of nowhere with that look on her face. The policewoman look. 👮‍♀️ I knew immediately what it meant. Cream time.",
      "I tried to hide under the dining chair. I made myself very small and very flat. But my cone sticks out, Grangie. It is yellow. It is not good for hiding. Yati picked me up in one smooth move, like she has done this a hundred times. Because she has.",
      "She put the cream on my skin and said \"good boy, good boy\" but I was not a good boy. I was a grumpy boy. I made my angriest face and my ears went sideways and I did a little growl that sounded mostly like a squeak.",
      "Then she gave me a treat and I ate it, but I want it on record that I was still angry while chewing. I am mostly over it now. Mostly. Tell Yati I'm watching her. 👀🐾"
    ]
  },
  {
    "file": "08_shocked.png",
    "subject": "You Will Not BELIEVE What I Saw 😱",
    "paragraphs": [
      "Grangie! Grangie! 😱 Something incredible happened today. I was sitting on the windowsill, minding my business, and a gecko walked across the outside of the window. Right there! A whole tiny dinosaur with feet that stick to glass!",
      "I jumped so high my cone went up and came down slightly crooked. I put my paws up and my mouth fell open. The gecko looked at me. I looked at the gecko. Neither of us knew what to do. 🦎",
      "I called Ruby with my loudest meow, the one I usually save for empty food bowls. She came and said \"ah, cicak only lah\" and went back to the kitchen. ONLY? Ruby, there was a dinosaur on our window!",
      "The gecko is gone now but I have been checking the window every ten minutes just in case. Somebody has to keep watch. I will report back if it returns. 🫡🐾"
    ]
  },
  {
    "file": "09_thumbs_up.png",
    "subject": "Everything Is Going Great 👍",
    "paragraphs": [
      "Hello Grangie! 👍 Today was a good day, and I want to give it a big paws up. I know I don't have thumbs, but I'm doing my best.",
      "Breakfast was on time. That's already a good start. Then the sun came through the window and made a warm square on the floor, exactly cat-sized. I lay in it until it moved, and then I moved with it. Teamwork. ☀️",
      "In the afternoon you sat at your table and I sat next to you on my basket, and you scratched under my chin between emails. I gave each of your emails a little approval blink. I don't know what they said, but they felt like good emails.",
      "Then in the evening Ruby gave me my dinner and it was the smelly fishy one. 🐟 Honestly, Grangie, I can't think of anything I'd change about today. Five stars. Would live again. 😸"
    ]
  },
  {
    "file": "10_eating.png",
    "subject": "Dinner Review: Delicious, Fishy, Not Enough 😋",
    "paragraphs": [
      "Dear Grangie, I am writing to you as a food critic today. 😋 I have eaten many meals in my life. Two whole years of meals! So I feel qualified.",
      "Breakfast: crunchy kibble. Reliable. A bit plain. Three paws out of four. Lunch: there was no lunch, which I think is a mistake that needs looking into. 📝",
      "Dinner: the smelly fishy food. Oh, Grangie. The smell came out of the tin and filled the whole kitchen and I started making little chirping noises before Ruby even picked up the spoon. I ate so fast that I had to stop halfway to breathe. Then I licked the bowl until it shone. Then I licked it again just to be sure. 🐟✨",
      "Overall, dinner gets four paws out of four, plus my tail. My only feedback is about the size of the portion. It could be bigger. It could always be bigger. Please pass this on to the kitchen management. 🍽️🐾"
    ]
  },
  {
    "file": "11_thinking.png",
    "subject": "Deep Thoughts from Inside the Cone 🤔",
    "paragraphs": [
      "Grangie, today I was a philosopher. 🤔 When I wear my cone I get very calm and thoughtful, and today I had a lot of thinking to do.",
      "First question: why does the fridge make food cold when food is better warm and close to my mouth? Second question: where does the red dot from the laser go when it disappears? Does it go to sleep? Does it have a family? 🔴",
      "Third question, the biggest one: when you look at the computer for hours, what are you looking at? I sat on the table and leaned on my basket and looked at the screen too. There were lots of little black shapes. No fish. No birds. I think you might need better shows. 💻",
      "I didn't find any answers today but that's okay. A real philosopher just enjoys the questions. Also the snacks. Mostly the snacks. I'll keep thinking and let you know. 🐾"
    ]
  },
  {
    "file": "12_party.png",
    "themes": ["energy"],
    "subject": "Cone Off = Party Time!!! 🎉",
    "paragraphs": [
      "GRANGIE!!! 🎉🎉 The cone came off today for a little break and I have been PARTYING. You know what happens. I turn into a completely different cat.",
      "First I did zoomies from the living room to the bedroom and back. Twice. Then I attacked my own tail, which was very surprised. Then I jumped onto the sofa, off the sofa, onto the sofa again, just because I could. 🌀 Ruby laughed and said I was like a little tornado.",
      "I found the shiny crinkle ball that rolled under the cupboard weeks ago. I don't know how I found it. I think it called me. I batted it all over the floor and it made the best noise in the world. 🎊",
      "Now the cone is back on and I am calm again, sitting by my basket like a gentleman. But inside my heart, the party continues. Thank you for the cone break. Best day ever. 🥳🐾"
    ]
  },
  {
    "file": "13_coffee.png",
    "themes": ["cozy"],
    "subject": "Morning Kopi with Grangie ☕",
    "paragraphs": [
      "Good morning, Grangie. ☕ Today I joined you for your morning kopi. Well, you had the kopi. I had the very serious job of sitting next to it and smelling the steam.",
      "It smells nice, your kopi. Warm and dark and a bit sweet. Not as nice as fish, of course. Nothing is as nice as fish. But it's a cosy smell, and it means the day is starting and you're about to sit at your table, which means I'm about to sit at your table too. 😌",
      "I pretended I had my own little cup and sipped very slowly with my eyes half closed, like you do. I think I looked very grown up. Ruby walked past and said \"wah, Samson so atas today.\" I'm not sure what atas means but I think it means handsome. 💁",
      "Tomorrow, same time, same table? I'll bring my basket. You bring the kopi. 🐾"
    ]
  },
  {
    "file": "14_laptop.png",
    "subject": "Working Very Hard at the Office 💻",
    "paragraphs": [
      "Dear Grangie, I have been working very hard today. 💻 I watched you so carefully for so long that I decided to try your job myself.",
      "When you went to make a drink, I sat right in front of your computer. I put my paws on the keyboard. I pressed lots of buttons. The screen did something interesting. I pressed more buttons. I think I wrote a whole report. It said \"jjjjjjjjjjjkkkkkkk\" which is a very important message in cat language. 📝",
      "When you came back you said \"SAMSON!\" in your surprised voice and moved me back to my basket. I think you were impressed. I leaned on my basket and watched you delete my report, which was a bit hurtful, but I understand. Not everyone is ready for my ideas.",
      "Being in the office is tiring. I'll take a nap now and maybe do some more typing tomorrow. Same rates as usual: one lint roller massage per hour. 💼🐾"
    ]
  },
  {
    "file": "15_sorry.png",
    "subject": "I'm Sorry (About the Pen) 🙏",
    "paragraphs": [
      "Grangie, I have something to tell you and I hope you won't be cross. 🙏 It's about the pen.",
      "You know the pen that was on the edge of your table? The blue one? It was very close to the edge. Dangerously close. I just touched it a tiny bit with my paw to check if it was safe. And then it was on the floor. And then it rolled under the cabinet. 🖊️💨",
      "I didn't mean for it to go that far. I sat and stared at the gap under the cabinet for a long time, feeling very guilty and also a bit curious about what else is under there. Yati came and got it out with a broom. She gave me the policewoman look but she didn't arrest me, so I think I'm on probation.",
      "I'm very sorry. I'll try to leave your pens alone. Probably. Most days. Please accept this apology and one slow blink. 😔💛"
    ]
  },
  {
    "file": "16_shy.png",
    "subject": "Feeling a Little Bit Shy Today 😊",
    "paragraphs": [
      "Hi Grangie... 😊 Today I was feeling a little shy. Someone came to the flat to fix something in the kitchen, and there were new sounds and new smells and a new pair of shoes by the door.",
      "I did what I always do. I went straight into my basket and made myself into a round loaf. I peeked out over the edge a few times, just my eyes and ears and the top of my cone. Then I ducked back down. You know how I am with new people. Outside things are for outside. 🧺",
      "Ruby came to check on me and gave me a little scratch behind the ears and told me I was safe. She always knows. 💕 After the visitor left, I came out slowly, sniffed the whole kitchen very carefully to make sure everything was still ours, and then I was fine again.",
      "Being shy is okay. Baskets are there for a reason. Thank you for always letting me hide when I need to. 🐾"
    ]
  },
  {
    "file": "17_yawn_stretch.png",
    "subject": "The Big Stretch of the Day 🥱",
    "paragraphs": [
      "Good morning, Grangie! 🥱 I woke up today and did the biggest stretch of my whole life. Front paws way out, bottom way up in the air, tail high like a flag. I held it for a long time. I think I grew a little bit.",
      "Then I did a yawn so big you could see all my teeth and my tongue curled up at the end. Ruby saw it and said \"wah, so big mouth!\" I was proud. A good yawn takes practice. 😮",
      "I did more stretches throughout the day. A stretch after breakfast. A stretch after my nap. A stretch on your table that pushed your notebook a little bit to the side. Sorry. It was necessary. 🧘",
      "Stretching is very important for a cat of my build. I'm short in the legs but long in the heart. That's what I tell myself. See you after my next stretch. 🐾"
    ]
  },
  {
    "file": "18_box_peek.png",
    "subject": "The New Box Has Arrived 📦",
    "paragraphs": [
      "Grangie! 📦 A box came to the flat today! A brand new cardboard box, right there by the door. I don't know what was inside and I don't care. The box itself is the present.",
      "As soon as Ruby emptied it, I jumped in. It was the perfect size, Grangie. Snug on all sides. I could just peek my head over the top like a little periscope. I sat in it and watched the whole world from my box kingdom. 👑",
      "Yati tried to fold it up for the recycling. I gave her my most serious look and did not move. She sighed and left it. Victory for the box people! 🙌 It is now sitting next to the sofa and it is officially mine.",
      "I spent most of the afternoon in it. I'm thinking of moving in permanently. Please send all my mail to: Samson, The Box, Living Room. 📬🐾"
    ]
  },
  {
    "file": "19_yarn_play.png",
    "subject": "Me vs. The Yarn: A Battle Report 🧶",
    "paragraphs": [
      "Dear Grangie, I fought a terrible beast today. 🧶 It was red and round and it tried to get away from me. But I am brave. I chased it.",
      "It started when the cone came off for my break. Ruby rolled the red yarn ball across the floor and it was ON. I pounced, I rolled, I kicked it with my back legs. The yarn fought back. It wrapped around my paw. It wrapped around my other paw. Then somehow it wrapped around my tummy. 😵",
      "By the end I was lying on my back, tangled up like a present, and very proud of myself. Ruby had to come and untangle me while laughing so much she had to sit on the floor. I think I won. The yarn was not moving anymore. 🏆",
      "Now the cone is back on and I'm calm and resting. But I'm keeping one eye on the yarn ball. It knows what it did. 🐾"
    ]
  },
  {
    "file": "20_dancing.png",
    "themes": ["energy"],
    "subject": "Shake Your Tail, Grangie! 🎶",
    "paragraphs": [
      "Grangie, today I discovered music. 🎶 Ruby put on her songs while she was cleaning the kitchen, and something happened to my paws. They started moving all by themselves!",
      "First a little sway. Then a little hop. Then I lifted my paws and did a spin, which was harder with the cone, but I managed. Ruby turned around and screamed \"SAMSON DANCING!\" and started dancing too. We had a little party in the kitchen, just the two of us. 💃🐱",
      "I'm not sure if I was really dancing or just trying to catch the mop. Either way, it was a lot of fun. I think I have natural rhythm. Probably from my mixed heritage. British, Ragdoll, Munchkin, and now apparently disco. 🪩",
      "If you want, next time you can join our dance party. I'll teach you my best move. It's called \"The Tail Shake.\" You'll love it. 🐾✨"
    ]
  },
  {
    "file": "21_running_late.png",
    "subject": "Sorry I'm Late, I Was Busy 🏃",
    "paragraphs": [
      "Grangie, I'm sorry this email is late! 🏃 Well, I don't know if it's late, because I never tell you when it's coming. But it feels late to me, because I had a very busy day.",
      "First I had to check every room to see if anything had changed. Nothing had changed. But you have to check. Then I had to run to the kitchen because I heard a crinkle that might have been a treat bag. It was a bread bag. Very disappointing. 🍞",
      "Then I heard the door open and I ran to see who it was. It was Yati back from the shops, and I ran away again just in case she was in police mode. Then I ran back because she had a shopping bag. Then I ran away again. My little legs worked so hard today. 💨",
      "So that's why this email is a bit rushed. Running a household is hard work. I'll try to be more organised tomorrow. Maybe. 😅🐾"
    ]
  },
  {
    "file": "22_confused.png",
    "subject": "Wait... What? ❓",
    "paragraphs": [
      "Hello Grangie. I am very confused today. ❓❓ Something mysterious happened and I need your help to understand it.",
      "This morning, my food bowl was in its usual spot. After my nap, it was moved over a little to the left! Just a little. But I noticed. I always notice. Who moved it? Why? Is it a trick? 🤨",
      "Also, Ruby put a new mat by the door and it smells like the shop, not like home. I sat next to it for a long time with my head tilted. Then I sniffed it. Then I tilted my head the other way. I still don't know what it's for. Is it for me? Is it a bed? Is it an enemy?",
      "Life is full of mysteries when you're a cat. I'll keep investigating. Please let me know if you have any information about the bowl. 🕵️🐾"
    ]
  },
  {
    "file": "23_cool.png",
    "subject": "Too Cool for School 😎",
    "paragraphs": [
      "Hey Grangie. 😎 Today I'm feeling extra cool. Like, sunglasses cool. Ice cold. Smooth as fish skin.",
      "I spent the day lying right under the aircon in the bedroom. The cold air came down and ruffled my fur and I just lay there being chill. Literally. ❄️ Ruby walked past and said I looked like a boss. I didn't even turn my head. That's how cool I was.",
      "When you came into the room I gave you one slow, casual blink. No big fuss. No meowing. Just a cool cat acknowledging his favourite human. You laughed and said \"ok la, Mr Cool.\" I accept this title.",
      "Being cool is a lifestyle, Grangie. I don't expect everyone to understand. But you do. That's why you're cool too. 😎🐾"
    ]
  },
  {
    "file": "24_hug.png",
    "subject": "Sending You a Big Hug 🤗",
    "paragraphs": [
      "Grangie! 🤗 This email is a hug. Close your eyes and imagine my paws stretched out wide, coming in for the biggest squeeze.",
      "I've been thinking about hugs because Ruby gave me one today. She picked me up, held me close, and rocked me side to side while she hummed a song. I put my head on her shoulder and closed my eyes. She's my second mummy and her hugs are very soft and warm. 💕",
      "Then later you gave me a lint roller massage and I leaned into it so hard I nearly fell off your table. That's my kind of hug. Rolling down my back, round my cheeks, under my chin. Bliss. 💆",
      "So I'm sending all of that back to you now. One big hug from me, with extra fluff. Hold it as long as you like. 🐾💛"
    ]
  },
  {
    "file": "25_gift.png",
    "subject": "I Have a Present for You 🎁",
    "paragraphs": [
      "Dear Grangie, I have a present for you. 🎁 It's not wrapped, because paws are bad at tape. But it's from the heart.",
      "I wanted to give you something special, so I looked all around the flat. I found a hair tie under the sofa. I found a crumpled receipt by the door. I found a little feather that must have floated in from the corridor. 🪶 I collected them all and put them next to your chair on the table. You probably thought it was just mess. It was not mess. It was a gift.",
      "The real present though is me. I'm going to sit on your table and keep you company all day while you work. I'll lean on my basket and look at you with my big eyes and make sure you take breaks to pet me. That's a very valuable service. 😇",
      "I hope you like your present. You don't need to say thank you. A few treats would be fine. 🐟🐾"
    ]
  },
  {
    "file": "26_sick.png",
    "themes": ["rain", "cold"],
    "subject": "Feeling a Bit Sorry for Myself 🤒",
    "paragraphs": [
      "Grangie, I'm writing to you from under my blanket today. 🤒 I'm not really sick, I just did one big sneeze this morning and decided to be very dramatic about it.",
      "The aircon was a bit cold and I got a tickle in my nose. AH-CHOO! My cone bounced. Ruby said \"bless you\" and I decided that if people were going to bless me, I should lie down and receive more blessings. 🛌",
      "I curled up in the soft blanket on the sofa and made my most pitiful face. Ruby tucked me in and gave me head scratches. Yati turned the aircon down a little. You came and sat with me for a bit. Honestly, Grangie, being a bit sniffly is very nice when everyone takes care of you. 💕",
      "I'm completely fine now. I ate all my dinner, which proves it. But I might pretend to sneeze again tomorrow, just to see what happens. 🤧🐾"
    ]
  },
  {
    "file": "27_facepalm.png",
    "subject": "Oh No, Not Again 🤦",
    "paragraphs": [
      "Grangie, I made a silly mistake today. 🤦 You know how my cone makes things a bit tricky? Well, I forgot about it. Again.",
      "I saw a crumb on the floor and went to eat it. But the cone got there first and the crumb ended up inside the cone with me, just out of reach. I turned my head left. I turned my head right. The crumb just sat there, laughing at me. 😩",
      "Then I tried to walk through the gap between the sofa and the side table and my cone went bonk. I backed up and tried again. Bonk. Ruby watched the whole thing and laughed so hard she had to hold onto the wall.",
      "I put my paw on my face and just sat there for a while. Some days the cone wins. But tomorrow I'll be smarter. Probably. Maybe. Let's see. 🙈🐾"
    ]
  },
  {
    "file": "29_reading.png",
    "themes": ["cozy"],
    "subject": "Samson's Book Club 📖",
    "paragraphs": [
      "Good afternoon, Grangie. 📖 I've started reading. I put on my imaginary reading glasses and I sat with a newspaper Ruby left on the dining table. Very intellectual.",
      "I read it very carefully. I think it was about the weather, because there was a picture of clouds. Then I read the next page. I think it was about food, because I sat on it and it smelled faintly of chicken rice. 🍗 Then I lay down on the whole thing. That's how you finish a newspaper. Everybody knows that.",
      "Later, you were reading something on your computer and I leaned on my basket and read it with you. I didn't understand much, but I nodded at the right times. I think we have a lot in common. We both like quiet afternoons and long stories.",
      "If you have any good book recommendations, let me know. Preferably ones about fish. Or boxes. Or fish in boxes. 🐟📦🐾"
    ]
  },
  {
    "file": "30_pleading.png",
    "subject": "Please? Pretty Please? 🥺",
    "paragraphs": [
      "Grangie... 🥺 I have a small request. Just a tiny one. Please hear me out.",
      "You know the smelly fishy food? The one in the little tin? Well, I was wondering if maybe, just maybe, I could have it every day. And twice on Sundays. And maybe a little bit for breakfast too. 🐟🐟🐟",
      "I have been a very good boy. I wore my cone without complaining (much). I let Yati put the cream on (eventually). I kept you company at your table all week and only knocked over one thing. Maybe two. I think that deserves a reward. 🙏",
      "I'm looking at you right now with my biggest, roundest eyes and my paws together. You can't say no to this face. Nobody can. Please, Grangie? Pretty please with fish on top? 🥺🐾"
    ]
  },
  {
    "file": "31_drooling_nap.png",
    "subject": "I Napped So Hard I Made a Puddle 💤💦",
    "paragraphs": [
      "Grangie, I have to confess something a little bit embarrassing. 😳 This afternoon I had the deepest nap of my whole life, flat on my back on the cool floor, paws up in the air like a dead cockroach. Ruby says that is not a nice comparison but it is accurate.",
      "I was dreaming about the smelly fishy food. In my dream, Ruby opened the tin and the smell floated all the way to my nose and I opened my mouth to eat it. In real life I also opened my mouth. And then I drooled. A lot. 🐟💦",
      "When I woke up there was a small puddle next to my cone. Ruby wiped it up and said \"Aiyo, Samson, you flooding the house ah?\" I pretended it was somebody else's puddle. There is nobody else here, so it did not work.",
      "I feel very rested though. A good nap should leave a mark. Mine left a wet one. 😴🐾"
    ]
  },
  {
    "file": "32_proud_strut.png",
    "subject": "Look at Me Go! 😼✨",
    "paragraphs": [
      "Good morning, Grangie! ✨ Today I walked across the living room like I owned it. Chin up, chest out, tail high, cone shining like a crown. Because I do own it. Mostly.",
      "It started because I finished my whole breakfast in record time and Ruby clapped and said \"Wah, clever boy!\" A cat who hears \"clever boy\" must walk proudly afterwards. That is the rule. So I strutted from the kitchen to the sofa, and then from the sofa to your table, very slowly so everyone could see. 👑",
      "You looked up from your computer and said \"Yes, Samson, very handsome.\" I gave you a slow blink, which means \"I know, thank you.\" Then I sat down next to my basket like a celebrity resting after a parade.",
      "I might strut again after lunch. Talent like this should not be wasted. 😌🐾"
    ]
  },
  {
    "file": "33_karate_kick.png",
    "themes": ["energy"],
    "subject": "Samson the Karate Master 🥋",
    "paragraphs": [
      "HI-YAH! 🥋 Grangie, I have been training in secret. I tied an imaginary headband around my head and I am now a black belt in Cat-rate.",
      "My enemy today was the scary plastic bag that rustles by the kitchen door. It moved when the fan blew on it. I could not allow that. I stood on my back legs, made my fiercest face, and did a flying kick. 💥 The bag flew one whole step away. Victory!",
      "Ruby clapped and said I was like Bruce Lee but fluffier. Yati said \"Careful, later he kick me when I put the cream.\" Yati, I would never. Probably. A true master only fights plastic bags.",
      "I'm resting now, but my paws are ready if any bag tries anything again tonight. 🐾💪"
    ]
  },
  {
    "file": "34_melting_heat.png",
    "themes": ["hot"],
    "subject": "I Am Melting, Grangie 🫠☀️",
    "paragraphs": [
      "Grangie, today was so hot that I turned into a puddle of cat. 🫠 Singapore afternoon, sun on the window, no breeze in the corridor. I lay flat on the floor and spread out as far as my short legs would go.",
      "I tried every cool spot in the flat. The kitchen tiles: warm. The bathroom floor: a bit wet, not acceptable. Under the dining table: okay, but the sun found me there too. I could feel my fur getting floppy and my cone getting sticky. 🥵",
      "Ruby saw me and switched on the aircon in the bedroom and called my name. I have never moved so fast on such a hot day. I lay right under the cold air and let it blow on my tummy until I became a solid cat again. ❄️",
      "Thank you to whoever invented aircon. I would like to give them a lint roller massage. 🐾"
    ]
  },
  {
    "file": "35_snug_teacup.png",
    "themes": ["cozy"],
    "subject": "Just a Cat in a Cup ☕🐱",
    "paragraphs": [
      "Good afternoon, Grangie. ☕ Today I found the perfect seat. It's round, it's snug, and it fits me exactly. Well, almost exactly. My tail is hanging out the side. 🫖",
      "You left a big mug on the table and I decided it was mine. I climbed in bottom first and wiggled until I was comfy. My cone sat on the rim like a little yellow saucer. Ruby laughed and said \"Samson teh tarik!\" and took a photo.",
      "I don't know why people put drinks in cups when they could put cats in them instead. Cats are warmer and much more interesting. Also I don't spill, unless someone tries to move me.",
      "I'm still in the cup now, leaning against your basket. Please don't pour anything in. I am the drink. 😌🐾"
    ]
  },
  {
    "file": "36_lifting_dumbbells.png",
    "themes": ["energy"],
    "subject": "Getting Strong for Snack Time 🏋️",
    "paragraphs": [
      "Grangie, I've started going to the gym! 🏋️ Well, the gym is the living room floor, and the dumbbell is very tiny, but I am working very hard. Look at my face. That is the face of effort.",
      "I watched Ruby doing exercises with her video in the morning and I thought, if I get stronger, maybe I can open the treat cupboard myself. So I lifted. One. Two. Then I had a rest. Then I did three. My arms were shaking. My cone was sweating. 💦",
      "Yati walked past and said \"Wah, Samson want to become policeman also?\" No, Yati. I'm training so I can run away faster when it's cream time. But I didn't tell her that. 🤫",
      "I think I'm already a little bit stronger. Strong enough for a big dinner, anyway. Please tell Ruby I need extra protein. Fish protein. 🐟💪🐾"
    ]
  },
  {
    "file": "37_beach_holiday.png",
    "themes": ["hot"],
    "subject": "Greetings from Samson's Beach Club 🏖️",
    "paragraphs": [
      "Hello Grangie! 🏖️ I'm writing to you from my holiday. I put on my sunglasses, lay down on my striped towel, and had a coconut drink with a little umbrella in it. Very relaxing.",
      "Okay, the beach was actually the bathmat, and the sun was the patch of light near the window, and the coconut was Ruby's empty cup. But if you squint, it's exactly like Sentosa. 😎🥥",
      "I lay there for hours with my tummy up, listening to the waves. The waves were the washing machine, but they sounded very nice. Ruby came past and called me \"tai tai\" and asked if I wanted anything. I wanted fish. She said holiday is no fish. I said that sounds like a terrible holiday.",
      "Anyway, I hope you're having a nice day too. Wish you were here. You are here, actually. You're in the next room. Come and lie on the towel with me. 🌴🐾"
    ]
  },
  {
    "file": "38_pillow_kneading.png",
    "themes": ["cozy"],
    "subject": "Making Biscuits on Your Pillow 🥐",
    "paragraphs": [
      "Grangie, I've been very busy in the bakery today. 🥐 By bakery I mean your pillow, and by baking I mean kneading it with my paws while purring very loudly.",
      "Push with the left paw, push with the right paw. Left, right, left, right. The pillow got softer and softer and I got happier and happier. My eyes closed by themselves. There were little hearts floating around me. I could feel them. 💕",
      "Ruby came in to make the bed and said \"Samson, you making roti prata ah?\" I didn't stop. A good baker never stops in the middle. She waited until I finished, then fluffed the pillow, which undid all my hard work.",
      "That's okay. I'll make more biscuits tomorrow. It's my calling. 🐾"
    ]
  },
  {
    "file": "39_spicy_chili.png",
    "subject": "I Tried a Chili. Big Mistake. 🌶️🔥",
    "paragraphs": [
      "GRANGIE. 🔥 I have learned a very important lesson today and I want you to learn from my pain.",
      "Ruby was cooking sambal in the kitchen. It smelled strong and exciting, and there was a little red thing on the counter that fell on the floor. I thought it might be a special treat. I gave it a big lick. 🌶️",
      "Grangie, my mouth turned into a volcano. My eyes watered. My face went red. I think fire came out of my nose. I ran around in a circle and Ruby picked me up and gave me some water and said \"Aiyo, who ask you to eat chili!\" Nobody asked me. That was the problem.",
      "I'm okay now. I've decided chilies are not food. They are enemies in disguise. I'll stick to my smelly fish from now on, thank you very much. 🐟💧🐾"
    ]
  },
  {
    "file": "40_cash_counting.png",
    "subject": "Samson Is Rich Now 💸",
    "paragraphs": [
      "Grangie, I have big money news. 💸 I found a pile of paper on your table today and I've decided it belongs to me now. I counted it very carefully. I got to \"many\".",
      "I don't know exactly what money does, but I've seen you give it to people and they give you things back. So I have a plan. I'm going to use my money to buy a whole fish. A big one. And a new basket with a cushion. And more lint rollers. 🐟🧺",
      "Ruby saw me holding it and said \"Wah, Samson, you rich man now ah? Belanja me lunch.\" I said I'd think about it. Rich people have to be careful.",
      "Then you took it back and said it was receipts, not money. Grangie, I don't know what receipts are, but I still felt rich for about ten minutes. That counts. 😏🐾"
    ]
  },
  {
    "file": "41_freezing_scarf.png",
    "themes": ["cold"],
    "subject": "Brrr, the Aircon Got Me 🥶",
    "paragraphs": [
      "Dear Grangie, I'm writing to you from the North Pole. 🥶 Okay, it's the bedroom, but somebody set the aircon very low and I'm freezing.",
      "At first I liked it. Cool air on my fur, very nice. Then I stayed there too long and my whiskers went stiff and my toes got cold. I started shivering inside my cone. Ruby saw me and wrapped a little knitted scarf around me. 🧣",
      "I looked like an old uncle waiting for the bus in winter. Very serious, very wrapped up, slightly grumpy. Yati laughed so hard she had to sit down. I gave her my policewoman-is-not-funny face.",
      "Now I'm warm again, sitting on your table where the sun comes in. I might keep the scarf. It goes well with my cone, don't you think? 🐾❄️"
    ]
  },
  {
    "file": "42_fish_heist.png",
    "subject": "The Great Fish Heist 🐟🏃",
    "paragraphs": [
      "Grangie, I need to tell you something before Ruby does. 🐟 Today I may have committed a small crime.",
      "Ruby came home from the wet market with a bag of fish. She put it on the counter and turned around for just one second. ONE second, Grangie. The smell was so strong and so beautiful that my body moved by itself. I jumped up, grabbed a whole little fish in my mouth, and ran. 🏃",
      "I didn't get very far. My cone hit the kitchen door, and the fish was bigger than I thought, and Yati appeared like a policewoman from nowhere. 👮‍♀️ She caught me in the corridor with the evidence still in my mouth. I tried looking innocent. It didn't work.",
      "They took the fish back. But they gave me a small cooked piece later, so honestly I think crime pays a little bit. Don't tell them I said that. 🤫🐾"
    ]
  },
  {
    "file": "43_fish_pillow_hug.png",
    "subject": "Me and My Best Friend Fishy 🐟💕",
    "paragraphs": [
      "Grangie, I'd like to introduce you to my best friend. 💕 He's big, he's soft, he's orange, and he's shaped like a fish. His name is Fishy. I named him myself.",
      "Ruby found him at the shop and brought him home for me. He's almost as big as I am. I hugged him straight away and haven't let go much since. I wrap my paws around his tummy and rest my cone on his head and we nap together. 🐟",
      "Sometimes I bite his tail a little, just to check he's not real. He's never real. That's both a good thing and a bad thing. A real fish would be delicious, but then I'd have no best friend.",
      "Fishy says hi, by the way. He's very quiet but he means it. 🥰🐾"
    ]
  },
  {
    "file": "44_blowing_kiss.png",
    "subject": "Mwah! A Kiss for Grangie 😘",
    "paragraphs": [
      "Hi Grangie! 😘 This email comes with a very special delivery. Hold out your hand. Ready? MWAH! That's a kiss. It's flying to you right now.",
      "I learned to blow kisses from watching Ruby on the phone with her family. She always ends the call with \"mwah mwah\" and a big smile. So today I practised. Paw to mouth, then push it out. It's harder with a cone, but I believe in myself. 💋",
      "I blew one at you while you were working, and you didn't notice, so I blew another one. Then you looked up and smiled and said \"What are you doing, Samson?\" I was blowing kisses, Grangie. Obviously.",
      "Here's one more for good luck. Mwah! Catch it before it lands in your coffee. ❤️🐾"
    ]
  },
  {
    "file": "45_bubble_bath.png",
    "subject": "Bath Time Was a Crime 🛁😾",
    "paragraphs": [
      "Grangie, I'm writing to report a terrible injustice. 😾 Today I had a bath. A BATH. With water. And bubbles.",
      "I knew something was wrong when Yati came out of the bathroom with her sleeves rolled up and her policewoman face on. 👮‍♀️ I tried to hide behind the sofa but she caught me like she always does. Next thing I knew, I was sitting in a tub with bubbles on my head.",
      "I made my grumpiest face and kept it on the whole time. I wanted everyone to know I did not consent to this. Ruby said I looked like a little old grandpa in a hot spring. I did not find this funny. 🛁",
      "After, they dried me with a fluffy towel and I smelled like flowers instead of me. Flowers, Grangie! I've been rolling on the carpet ever since to get my real smell back. 😤🐾"
    ]
  },
  {
    "file": "46_banana_slip.png",
    "subject": "Ambushed by a Banana 🍌",
    "paragraphs": [
      "Grangie, I was attacked today. 🍌 By a banana peel. I didn't even see it coming.",
      "I was doing a small run from the kitchen to the living room, very fast, very elegant, and there was a banana peel on the floor where Ruby had dropped it. My front paw landed on it and my whole body went up into the air. Paws up, tail out, mouth open. I was flying for about one second. 😱",
      "I landed on my back with a little thump. My cone made a funny sound. Ruby rushed over and said \"Aiyo! Samson, okay or not?\" I was okay. But my dignity was not. I lay there for a while pretending I'd planned it.",
      "I've been glaring at bananas all afternoon. If you see one, please keep it away from my runway. 🐾"
    ]
  },
  {
    "file": "47_food_coma.png",
    "subject": "Food Coma, Do Not Disturb 😵🍽️",
    "paragraphs": [
      "Dear Grangie, I can't move. 😵 I ate too much and now I'm lying on the floor with my tummy out like a big round dumpling.",
      "Ruby gave me my smelly fishy dinner and I ate it all. Then there was some fish left on the plate from lunch, and somehow that also went into me. Then I licked the plate until only the bones were left. Now my tummy is so full my cone is resting on it like a shelf. 🍽️",
      "Ruby rubbed my tummy and said \"Wah, Samson, you eat until boom ah.\" Grangie, it was worth it. I'm not sorry. A greedy cat is a happy cat.",
      "I'll just lie here for a few hours and think about what I've done. Then maybe a little snack. 🐟😴🐾"
    ]
  },
  {
    "file": "48_big_sneeze.png",
    "themes": ["rain", "cold"],
    "subject": "AH-AH-AH-CHOO! 🤧",
    "paragraphs": [
      "Grangie! 🤧 I did the biggest sneeze in the history of cats today. It was so big my cone flew forward and back. My whole body shook.",
      "It happened when Ruby was dusting the shelf. Little fluffy bits came floating down into the sunshine and one went right up my nose. I felt it coming. Ah... ah... AH-CHOO! 💨 A tiny rain cloud came out. Ruby jumped. I jumped. Everyone jumped.",
      "Then I did two more small ones, achoo achoo, like little after-shocks. Ruby said \"Bless you, bless you, bless you.\" I felt very blessed by the end.",
      "I'm fine, don't worry. My nose is just very sensitive. It's the same nose that can smell fish from three rooms away, so it has to be powerful. 👃🐾"
    ]
  },
  {
    "file": "49_toilet_paper_mess.png",
    "subject": "It Wasn't Me (It Was the Toilet Paper) 🧻",
    "paragraphs": [
      "Grangie, before you go into the bathroom, I'd like to explain. 🧻 There was an accident. Involving the toilet roll. And me. But mostly the toilet roll.",
      "I was walking past and the end of the roll was hanging down, swinging a bit. It was asking for it. I touched it once. It came down a little. I touched it again. Then it was a game and I was winning, and suddenly the whole roll was unrolled all over the floor and wrapped around me like a mummy. 😳",
      "Yati found me sitting in the middle of it all with my eyes very big. She gave me the policewoman look. I gave her my \"I don't know how this happened\" look. Nobody believed me.",
      "They rolled most of it back up. It doesn't look as nice as before. I think it looks better with a bit of personality. 🐾"
    ]
  },
  {
    "file": "50_cheerleader.png",
    "subject": "Go Grangie Go! 📣",
    "paragraphs": [
      "GO GRANGIE GO! 📣🎉 Today I'm your cheerleader. I've got my pom-poms, I've got my moves, and I've got a lot of energy because I just had breakfast.",
      "I saw you sitting at your table working very hard on something with lots of numbers, and you made a tired sigh. So I decided you needed support. I jumped next to your basket, waved my paws, and cheered with my loudest meow. Give me an S! Give me an A! Give me an M! That's all I know. ✨",
      "You laughed and gave me a scratch behind the ears and said \"Okay, okay, I'll finish this.\" And you did! I think that was because of me. Ruby agreed. She said I'm a good motivator.",
      "Whatever you're doing today, Grangie, you can do it. I'll be cheering from the basket. 🏆🐾"
    ]
  },
  {
    "file": "51_pounce_ready.png",
    "subject": "Ready... Set... POUNCE! 🎯",
    "paragraphs": [
      "Grangie, I'm on a mission. 🎯 Look at me. Bum up. Wiggle wiggle. Eyes focused. Something is about to get pounced.",
      "The target was a fluff ball under the dining chair. It was just sitting there, being fluffy, thinking it was safe. I crouched down low, low, lower. My cone made it a bit tricky to hide but I was very quiet. Then I wiggled my bottom for exactly the right amount of time. 🍑",
      "POUNCE! I flew through the air and landed right on top of it. Then I looked under my paws and it was gone. It had stuck to my cone instead. Ruby laughed and pulled it off and said I'm a very good hunter, just slightly confused.",
      "I'm practising more pounces today. If you see me wiggling, please stand very still. 🐾"
    ]
  },
  {
    "file": "52_table_flip.png",
    "subject": "I Have Had ENOUGH 😤",
    "paragraphs": [
      "GRANGIE. 😤 I need to tell you about my bad moment today. It was not my finest hour.",
      "I wanted the treats. The treats were in the cupboard. The cupboard was closed. I meowed. Nobody came. I meowed louder. Ruby said \"Later, Samson.\" LATER? There is no later for treats, Grangie. There is only now.",
      "So I went to my little play table and I flipped it. Papers flew. A toy mouse went sailing. I stood there with my paws in the air like a very angry tiny lion. 🦁 It was very dramatic. Ruby came running and I think she was trying not to laugh.",
      "She gave me two treats to calm down. I was calm after that. Very calm. I'm sorry about the mess. I'll be more patient next time. Probably. 🙏🐾"
    ]
  },
  {
    "file": "53_hairbrush_karaoke.png",
    "subject": "Samson's Karaoke Night 🎤",
    "paragraphs": [
      "Grangie! 🎤🎶 Tonight I'm a superstar. I found Ruby's hairbrush and now it's my microphone, and I'm singing my greatest hits.",
      "Ruby put on her songs while she cleaned and I grabbed the brush and gave it everything. MEEEEOW, MEOW MEOW, MEEEEEEOW. My voice is very powerful, especially the high notes. I closed my eyes and felt the music in my cone. 🎵",
      "Yati covered her ears and said \"Aiyo, so loud!\" but I think she secretly enjoyed it. Ruby sang along with me. We sounded like the best duet in Singapore. Maybe the world.",
      "My next song is called \"Where Is My Fish Dinner\". It's a slow ballad. I'll perform it for you tonight at feeding time. 🐟🎶🐾"
    ]
  },
  {
    "file": "54_shrug.png",
    "subject": "Don't Look at Me 🤷",
    "paragraphs": [
      "Hi Grangie. 🤷 Something happened in the flat today and everyone keeps asking me about it. I have only one answer: I don't know.",
      "Ruby came home and found her slippers in different rooms. One in the kitchen. One in the bedroom. Both a little bit chewed on the corner. She looked at me. I looked at her. I lifted my paws and shrugged. Who knows how slippers move, Ruby? Maybe they walk at night. 🩴",
      "Yati asked \"Samson, you do this?\" with her policewoman eyes. I shrugged again. Very relaxed. A cat with nothing to hide. My whiskers were slightly guilty, but my face was strong.",
      "Anyway, it's a mystery. We may never know. Let's change the subject. How's your day? 😼🐾"
    ]
  },
  {
    "file": "55_popcorn_movie.png",
    "themes": ["cozy"],
    "subject": "Movie Night with Popcorn 🍿🎬",
    "paragraphs": [
      "Grangie, tonight was movie night! 🎬 Ruby put a cartoon on the TV and made a big bowl of popcorn, and I sat right next to it like a VIP.",
      "The movie had birds in it. Lots of birds. Flapping and tweeting all over the screen. I stared with my eyes very wide. I didn't blink once. I was completely hooked. 🐦",
      "The popcorn smelled very buttery and Ruby said cats don't eat popcorn. So I just held one piece very carefully in my paws, like a fancy snack, while I watched. I think I looked very cinema. 🍿",
      "I think I'd like movie night every night. Next time, can we watch a fish documentary? I'll bring my basket. 🐟🐾"
    ]
  },
  {
    "file": "56_alarm_snooze.png",
    "themes": ["cozy"],
    "subject": "Five More Minutes, Please ⏰😴",
    "paragraphs": [
      "Good morning, Grangie... ⏰ well, good morning to everyone except me. I'm still sleeping. This email was written with one eye closed.",
      "The alarm clock in your room went off this morning. RING RING RING. Very loud. Very rude. I was right next to it in my sleepy spot. I didn't even open my eyes. I just reached out my paw and smacked it. BONK. Silence. 😌",
      "Then I put my head back down on the floor and went back to sleep. My cone made a perfect pillow. I heard you laughing and saying \"Samson, you don't even have to wake up!\" Exactly, Grangie. That's why I'm so good at it.",
      "I'll wake up properly at breakfast time. Breakfast is my real alarm clock. 🐟😴🐾"
    ]
  },
  {
    "file": "57_wizard_magic.png",
    "subject": "Samson the Great Wizard 🧙✨",
    "paragraphs": [
      "Grangie, I have magical powers now. 🧙✨ I'm wearing a wizard hat with stars on it and I have a magic wand, and I'm ready to cast spells.",
      "My first spell was on the fridge. I waved my wand and said \"Fishium Openium!\" The fridge did not open. I think the fridge has strong protection. 🪄 Then I tried on Ruby. I waved my wand at her and she gave me a treat! The magic works on humans!",
      "Then I tried a spell on Yati to make her forget about cream time. I waved my wand very hard. She still remembered. Some people are immune to magic. Policewomen, mostly. 👮‍♀️",
      "Tomorrow I'm going to try a spell to make your computer show fish videos. Stand back. Wizard at work. ⭐🐾"
    ]
  },
  {
    "file": "58_sleepy_nightcap.png",
    "themes": ["cozy"],
    "subject": "Bedtime for Samson 🌙",
    "paragraphs": [
      "Goodnight Grangie. 🌙 I've put on my sleepy cap and I'm already half in dreamland. A bubble just came out of my nose, which means I'm almost asleep.",
      "Today was a long day of important cat work. I supervised breakfast, napped in three places, watched you type on your table, and chased one moth. That's a lot for a cat with short legs. 💤",
      "Ruby turned off the lights in the living room and whispered \"Goodnight, Samson\" and I gave her a sleepy blink. The flat is quiet now. The fan is going round. I can hear the cars far away on the road.",
      "I'll dream about fish and lint rollers and you. See you in the morning, at breakfast time sharp. 😴🐾"
    ]
  },
  {
    "file": "59_meditation.png",
    "subject": "Finding My Inner Peace 🧘",
    "paragraphs": [
      "Namaste, Grangie. 🧘 Today I'm very calm. I'm sitting with my eyes closed, paws on my knees, and my cone glowing softly like a sun. I'm meditating.",
      "When I wear the cone, I become very peaceful. I can't chase things as easily, so I chase thoughts instead. Today I thought about the sound of the fan, the smell of your coffee, and the feeling of the lint roller on my back. Ohhhhmmm. 🌸",
      "Ruby tiptoed past and whispered \"Shhh, Samson is doing yoga.\" I didn't open my eyes. That's how deep I was. Then the treat bag rustled in the kitchen and my eyes opened by themselves. Meditation is very hard.",
      "I'll try again tomorrow. Maybe after a snack. Peace and fish to you, Grangie. 🐟☮️🐾"
    ]
  },
  {
    "file": "60_finger_heart.png",
    "subject": "A Little Heart for You 🫶",
    "paragraphs": [
      "Grangie! 🫶 I learned a new trick. I watched Ruby doing it in her selfies and now I can do it too. It's a little heart with my paws. Look!",
      "It's harder for cats because we don't have proper fingers, but I squished my toes together and made it work. Then lots of tiny hearts started floating around my head. I think that's what happens when you really mean it. 💕",
      "I showed it to you while you were having lunch and you said \"Aww, Samson!\" and gave me a little piece of your fish. So now I know: a heart gets fish. This is very useful information. 🐟",
      "This heart is just for you, though. No fish needed. Okay, a little fish would be nice. But mainly love. ❤️🐾"
    ]
  },
  {
    "file": "61_pizza_feast.png",
    "subject": "Pizza Night (Mostly the Cheese) 🍕",
    "paragraphs": [
      "Grangie, last night there was pizza in the flat. 🍕 I want to tell you all about it because it was very exciting.",
      "The pizza came in a big flat box, which I also loved. When the box opened, the cheese smell filled the whole flat. I sat right next to Ruby and looked at her with my biggest eyes. I didn't blink for a full minute. 😋",
      "She said \"No, Samson, not for cats.\" Then, when nobody was looking, a little bit of cheese fell on the floor. It was an accident. A happy accident. I ate it so fast it barely touched the ground. Then I stretched it out like a long string and it was the best moment of my week.",
      "I've decided I would like pizza with fish on top. Ruby says that exists. My dream is real, Grangie. 🐟🍕🐾"
    ]
  },
  {
    "file": "62_grumpy_back_turn.png",
    "subject": "I'm Not Talking to Anyone 😒",
    "paragraphs": [
      "Hello Grangie. 😒 I'm writing to you with my back turned. Look at me over my shoulder. That's how upset I am.",
      "Today was a vet-check day. Yati put me in the carrier and took me outside. OUTSIDE, Grangie. With cars and noises and strange smells. 🚗 The vet poked me and looked in my ears and said I was a very good boy. I was not a good boy. I was a hostage.",
      "When I got home I sat facing the wall in the corner. Ruby tried to talk to me. I didn't turn around. You came and scratched my back and I still didn't turn around. But I purred a little bit by accident. Please ignore that.",
      "I'll forgive everyone by dinner time. If dinner is fishy. If it's not fishy, it might take until breakfast. 😾🐾"
    ]
  },
  {
    "file": "63_belly_laugh.png",
    "subject": "I Laughed Until I Rolled Over 🤣",
    "paragraphs": [
      "Grangie! 🤣 I laughed so hard today I fell over onto my back and couldn't get up for a while.",
      "Ruby was trying to put the bedsheet on the bed. She threw it up in the air and it came down on top of her, and she was walking around like a ghost saying \"Where is the corner? Where is the corner?\" I watched from the floor and it was the funniest thing I've ever seen. 👻",
      "I started laughing and rolling around with my paws in the air. My cone wobbled. My tummy shook. Ruby came out from under the sheet and saw me and started laughing too, and then we were both laughing on the floor.",
      "Sometimes life in the flat is better than TV. I'm still giggling now. 😹🐾"
    ]
  },
  {
    "file": "64_brain_freeze.png",
    "themes": ["hot", "cold"],
    "subject": "Ice Cream Attack! 🍦🥶",
    "paragraphs": [
      "OW OW OW, Grangie! 🥶 Something cold just hurt my head. I have learned a new thing today and it's called brain freeze.",
      "Ruby was eating an ice cream cone in the living room and she let me have one tiny lick, just to try. It was cold and sweet and creamy. I liked it a lot, so I took another lick. A bigger one. Then a much bigger one. 🍦",
      "Then my head went ZING. Like a cold lightning bolt between my ears. I squeezed my eyes shut and held my head and my whole body shook. Ruby laughed and said \"Aiyo, slowly lah, Samson!\" Slowly? Nobody told me ice cream had rules.",
      "I'm better now. I've decided ice cream is a beautiful but dangerous friend. Like Yati. 🍨🐾"
    ]
  },
  {
    "file": "65_giddy_excited.png",
    "themes": ["energy"],
    "subject": "I'm SO Excited I Could Burst 🤩",
    "paragraphs": [
      "Grangie Grangie Grangie! 🤩 I'm so excited I can barely type. My paws are clapping by themselves.",
      "Ruby told me she bought a new flavour of my smelly fishy food. A NEW one. Tuna AND salmon together. In one tin! I didn't know that was allowed. I've been bouncing around the flat all morning and I keep going to the kitchen to check if it's time yet. 🐟🐟",
      "It's not time yet. Ruby says it's for dinner. Dinner is SO far away, Grangie. I've already sat by my bowl four times. I've done my happy squeak. I've rubbed my cone on Ruby's legs. Nothing works. Time is very slow when you're excited.",
      "I'll tell you how it tastes tomorrow. I already know it will be the best day of my life. 🥳🐾"
    ]
  },
  {
    "file": "66_laser_chase.png",
    "themes": ["energy"],
    "subject": "The Red Dot Is Back 🔴",
    "paragraphs": [
      "Grangie, it's back. 🔴 The red dot. The little red light that runs across the floor and up the walls. I have been chasing it all evening.",
      "Ruby pressed the button on her little pen and there it was, sitting on the floor right in front of me. I crouched. It moved. I jumped. It moved again. I ran across the living room, slid on the floor, and bumped my cone into the sofa. Still no dot. 🏃💨",
      "This went on for a long time. I never caught it, but I came very close at least fifteen times. Ruby says nobody has ever caught the red dot. I say nobody has tried as hard as me.",
      "I'm lying on the floor now, panting a little, but happy. If you see the dot, please tell it I'll be ready tomorrow. 🐾"
    ]
  },
  {
    "file": "67_peeking_over_edge.png",
    "subject": "Peekaboo, Grangie! 👀",
    "paragraphs": [
      "Peekaboo! 👀 Can you see me, Grangie? I'm peeking over the edge of your table. Just my big eyes, my ears, and my cone, like a little sunflower coming up for air.",
      "I sat on the chair next to you while you were working and slowly, slowly lifted my head over the table top. I wanted to see what you were doing. Then I wanted you to notice me. So I stared. And stared. And stared. 🌻",
      "It took you about two minutes, and then you looked down and said \"Oh! Samson! How long you been there?\" Long enough, Grangie. Long enough. Then you laughed and picked me up and put me next to my basket where I belong.",
      "I'll peek again tomorrow. You won't know when. That's what makes it fun. 😼🐾"
    ]
  },
  {
    "file": "68_panic_scream.png",
    "subject": "The Vacuum Is Coming!!! 😱",
    "paragraphs": [
      "GRANGIE, HELP! 😱 I'm writing to you in a panic. The monster has come out of the cupboard again. The big loud one. The VACUUM.",
      "Ruby pulled it out this morning and I knew immediately what it meant. Then she switched it on. VRRRRRRRMMMMMM! My eyes went huge. My mouth fell open. I held my face with both paws like the scary painting. 😨",
      "I ran and hid under your table, right under your feet. You said \"Samson, it's just the vacuum,\" but Grangie, you don't understand. It eats things. It ate a sock once. I saw it.",
      "It's gone back to its cupboard now and I'm feeling a bit better. But I'm keeping one eye on that cupboard door. Forever. 👀🐾"
    ]
  },
  {
    "file": "69_rolling_zoomies.png",
    "themes": ["energy"],
    "subject": "Zoomies Gone Wild 🌀",
    "paragraphs": [
      "Grangie! 🌀 I had the zoomies today and they were so big that I ended up upside down. I'm still not sure which way is up.",
      "The cone came off for a little break this afternoon and my body just went. Kitchen, living room, bedroom, back to kitchen. Then I tried to turn a corner too fast and rolled right over, head over tail, paws everywhere. Little dust clouds came up. 💨",
      "I lay there on my back for a second with my eyes wide open, thinking \"Was that on purpose?\" Then I decided yes, it was a special move, and I did it again. Ruby cheered. Yati said \"This cat crazy already.\"",
      "The cone's back on and I'm calm now, like a gentleman. But inside I'm still rolling. 😹🐾"
    ]
  },
  {
    "file": "70_tired_panting.png",
    "themes": ["hot"],
    "subject": "Too Tired to Even Lie Down Properly 😮‍💨",
    "paragraphs": [
      "Dear Grangie, I'm exhausted. 😮‍💨 I'm lying flat on the floor with my tongue sticking out a bit. That's how hard I worked today.",
      "I chased a moth for a very long time. It flew up, I jumped up. It flew to the curtain, I ran to the curtain. It flew to the ceiling, I sat and glared at the ceiling for twenty minutes. Glaring is surprisingly tiring. 🦋",
      "Then I had to check on everyone in the flat. I followed Ruby to the kitchen, Yati to the door, and you to your table. Back and forth, back and forth. With my short legs, that's like running a marathon.",
      "I'm going to stay right here on the cool floor until dinner. Please bring it to me. I don't think I can walk. 🐟🐾"
    ]
  },
  {
    "file": "71_noodle_slurp.png",
    "themes": ["cozy"],
    "subject": "Slurp Slurp, Noodle Time 🍜",
    "paragraphs": [
      "Grangie, I tried to eat noodles today. 🍜 I don't know if cats are supposed to eat noodles, but nobody told me no fast enough.",
      "Ruby made a bowl of fishball noodles for lunch and put it down on the table for just a moment to get her chopsticks. The smell was incredible. Fish AND noodles! I stuck my face in and grabbed one long noodle and slurped. It went on forever. SSSSSLLLLURRRP. 😋",
      "Ruby came back and saw half a noodle hanging out of my mouth and the other half still in the bowl. She shouted \"SAMSON!\" and I slurped even faster. It was a good noodle.",
      "She gave me a fishball after that, cut up very small, so I think she's not too angry. I'm now a big fan of noodles. Please put them on the menu. 🐟🍜🐾"
    ]
  },
  {
    "file": "72_king_on_cushion.png",
    "subject": "All Hail King Samson 👑",
    "paragraphs": [
      "Greetings, my loyal Grangie. 👑 Today I'm the King of the Flat. I'm sitting on a red velvet cushion with a golden crown on my head and I'm accepting all compliments.",
      "I found the cushion on the sofa and decided it was my throne. Ruby said it was for decoration. I said I am decoration. Very royal decoration. I sat with my chin up and my tummy out and looked at everyone like a king looks at his people. 😌",
      "My royal orders for today: more fish at dinner. A lint roller massage every hour. Nobody is allowed to put cream on the king. Yati said \"Okay, Your Majesty\" and then put the cream on anyway. A king's life is very hard.",
      "You may visit the throne any time, Grangie. Bring snacks. 🐟👑🐾"
    ]
  },
  {
    "file": "73_exhausted_sigh.png",
    "subject": "It's Been a Long Day 😩",
    "paragraphs": [
      "Grangie... 😩 I'm so tired. I'm dragging my paws and sighing like an old uncle at the end of a long day.",
      "Today was too busy. In the morning there was a delivery man at the door, so I had to hide. Then Yati was doing cleaning, so I had to supervise. Then the neighbour's drilling started next door, so I had to be worried about it for an hour. 🔨",
      "By the afternoon my eyes were half closed and my tongue was out. I walked to your table so slowly Ruby thought I was sick. I wasn't sick. I just had no more energy. Being a cat is a full-time job.",
      "I'm going to lean on my basket now and sleep until dinner. Please wake me up only for fish. 🐟😴🐾"
    ]
  },
  {
    "file": "74_detective.png",
    "subject": "Detective Samson on the Case 🔍",
    "paragraphs": [
      "Grangie, I've opened an investigation. 🔍🕵️ I'm wearing my detective hat and holding my big magnifying glass. Nothing escapes me.",
      "The case: The Mystery of the Missing Treat. Yesterday there were treats in the treat bag. Today the treat bag is lighter. Somebody has been eating my treats, and it wasn't me. Well, it might have been me. But I need proof. 🧐",
      "I searched the kitchen floor. I found a crumb. I examined it closely. It was a rice grain. Then I checked under the sofa and found a hair tie, two coins, and one of my old toy mice. Not the treats, but a good haul.",
      "The case remains open. My main suspect is Yati. She's always suspicious. I'll keep watching her. 👮‍♀️🐾"
    ]
  },
  {
    "file": "75_phone_scrolling.png",
    "subject": "Just Checking My Phone 📱",
    "paragraphs": [
      "Hi Grangie. 📱 Today I'm lying on the floor looking at a phone with my serious face. Very busy. Very important. Don't disturb.",
      "Ruby left her phone on the floor and the screen lit up, and I decided to see what humans keep looking at all the time. I put my chin down next to it and stared. There were pictures of food. There were pictures of other cats. One cat had a funny hat. 😐",
      "I scrolled with my nose. The screen did something. Then a video of a fish swimming came on and I nearly tried to eat the phone. Ruby took it back very quickly and said \"No, Samson, phone not for you.\" Hmph.",
      "I understand now why you all look at phones so much. But I still think watching birds from the window is better. 🐦🐾"
    ]
  },
  {
    "file": "76_flower_bouquet.png",
    "subject": "Flowers for My Favourite Grangie 💐",
    "paragraphs": [
      "Grangie! 💐 These flowers are for you. I picked them myself. Well, I picked them from the vase on the dining table, but my heart was in it.",
      "I saw the pretty pink and orange flowers this morning and thought, these would look lovely on Grangie's table. So I carefully took a few out with my paws and my mouth. Some petals fell off. Some water spilled. But I got a nice bunch. 🌸",
      "Ruby found the wet table and gave me a look, but then she saw I was trying to bring them to you and said \"Aww, so sweet\" and put them in a little cup next to your computer. Teamwork!",
      "So when you sit down at your table today, look for my flowers. They mean I love you. And maybe they mean fish later, if you're feeling generous. 🌷🐟🐾"
    ]
  },
  {
    "file": "77_splat_flat.png",
    "subject": "Splat. I Am a Pancake Now 🥞",
    "paragraphs": [
      "Grangie, I'm a pancake. 🥞 I tried to jump from the sofa to your table today and it did not go to plan. I'm currently flat on the floor with all four paws out.",
      "I think the problem was my short munchkin legs. I looked at the jump, I wiggled my bum, I leapt with all my power, and then halfway there I realised I was not going to make it. SPLAT. Right on my tummy. My cone went bonk on the floor. 😣",
      "Ruby rushed over and checked me and said \"Aiyo, Samson, use the chair lah!\" I didn't want to use the chair. Chairs are for cats who can't fly. Apparently I am one of those cats.",
      "I'm okay, just a bit embarrassed. I'll use the chair tomorrow. Please don't tell anyone. 🙈🐾"
    ]
  },
  {
    "file": "78_superhero_flying.png",
    "themes": ["energy"],
    "subject": "Super Samson to the Rescue! 🦸",
    "paragraphs": [
      "Never fear, Grangie! 🦸 Super Samson is here! I'm wearing my red cape and flying through the flat to save the day.",
      "Today's emergency: a sock was stuck under the bed and Ruby couldn't reach it. I zoomed in, paws out, cape flying, and squeezed under the bed with my super short legs. My cone got a bit stuck, but superheroes don't give up. I pushed the sock out with my nose. 🧦",
      "Ruby clapped and said \"Wah, my hero!\" Yati said \"Hero also must take medicine later.\" Even superheroes have a policewoman, Grangie. That's life.",
      "If you ever need saving, just call my name. I'll fly to your table at once. Unless I'm napping. Then I'll fly a bit later. 💪🐾"
    ]
  },
  {
    "file": "79_mind_blown.png",
    "subject": "My Brain Just Exploded 🤯",
    "paragraphs": [
      "GRANGIE. 🤯 I just found out something that blew my mind and I need to share it immediately.",
      "I always thought the fishy food came from the cupboard. The cupboard makes it. That's what I believed for my whole life. But today Ruby came home with a big shopping bag and inside were the tins! The tins come from OUTSIDE! There's a place outside that has fish tins! 💥",
      "I sat there with my paws on my head and my mouth open for a long time. If there's a shop full of fish tins, why aren't we living there? Why do we live in a flat with no fish shop inside it? I have so many questions.",
      "Ruby said it's called a supermarket. I would like to visit it. Under very strict conditions. No Yati. 🐟🛒🐾"
    ]
  },
  {
    "file": "80_selfie_peace.png",
    "subject": "Selfie Time! ✌️📸",
    "paragraphs": [
      "Hi Grangie! ✌️📸 I took a selfie! Look at my wink. Look at my peace sign. I think I'm a natural.",
      "Ruby was taking selfies in the living room and I jumped up next to her and gave my best face. Then she let me hold the phone (she held it really, but I helped). Click! Click! We took about twenty photos. In every one, I'm the most handsome. 😉",
      "Ruby says she's going to send them to her family. So now I'm famous in another country. I'll need to practise my autograph. It's just a paw print. Very easy to do.",
      "I'll send you my best one. You can put it on your computer screen. Then I'll be there even when I'm napping. 💛🐾"
    ]
  },
  {
    "file": "81_cucumber_scare.png",
    "subject": "CUCUMBER!!! 🥒😱",
    "paragraphs": [
      "Grangie, I nearly died today. 😱 There was a CUCUMBER on the floor behind me. A cucumber! Just sitting there! Being green!",
      "I was eating my breakfast very peacefully and when I turned around, there it was. I don't know how it got there. I jumped straight up into the air, all four paws off the ground, and my cone flew up around my ears. I think I screamed a little bit. 🥒",
      "Ruby was laughing so hard in the kitchen doorway that I'm starting to suspect she knows something. She said \"Sorry, sorry, Samson, it fell from the bag.\" FELL, Grangie. Very suspicious.",
      "I've checked behind me every two minutes since then. If you see any vegetables lurking, please warn me first. 👀🐾"
    ]
  },
  {
    "file": "82_dizzy.png",
    "subject": "Everything Is Spinning 😵‍💫",
    "paragraphs": [
      "Grangie... 😵‍💫 the room is going round and round. There are little stars around my head. I think I spun too much.",
      "I was chasing my tail. It was going really well. I almost caught it maybe ten times. Each time it got away, I spun faster. Round and round and round. Then I stopped and the whole flat kept spinning without me. 🌀",
      "I tried to walk to my basket in a straight line and I went sideways into the sofa. Ruby picked me up and said \"Aiyo, drunk cat!\" I'm not drunk. I'm just very dedicated to my tail.",
      "I'll sit very still on your table for a while until the stars go away. I still haven't caught the tail. One day. ⭐🐾"
    ]
  },
  {
    "file": "83_fan_breeze.png",
    "themes": ["hot"],
    "subject": "Me and My Best Friend the Fan 🌬️",
    "paragraphs": [
      "Ahhh, Grangie. 🌬️ I've found my happy place. It's right in front of the little blue fan, with the wind blowing in my face and my ears flapping.",
      "It was another hot Singapore afternoon and Ruby put the fan on the floor in the living room. I sat right in front of it with my eyes closed. The breeze came through my fur and under my cone and it felt like the seaside. Not that I've been to the seaside. But I imagine it's like this. 🌊",
      "I opened my mouth a little to feel the wind on my tongue. Ruby said I looked like a dog in a car window. I am not a dog, Ruby. I am a refined cat enjoying the air.",
      "I'll be here all afternoon if you need me. Just follow the sound of the fan. 😌🐾"
    ]
  },
  {
    "file": "84_rainy_umbrella.png",
    "themes": ["rain", "cold"],
    "subject": "Rain, Rain, Go Away ☔",
    "paragraphs": [
      "Grangie, it rained today and I am not happy about it. ☔ Look at my face. That's my rainy day face.",
      "It started with big thunder. BOOM. I jumped. Then the rain came down so hard it splashed through the window gap and landed on my favourite windowsill spot. My spot! Wet! My fur got a few drops on it and my cone got splashed. 🌧️",
      "Ruby gave me a little umbrella to hold for a joke. I held it with a very grumpy expression. She laughed and took a photo. I did not laugh. A cat with wet whiskers has nothing to laugh about.",
      "The rain stopped in the evening and the flat smelled like wet leaves. I'm drying off on your table now, leaning on my basket. Please make the sun come back tomorrow. ☀️🐾"
    ]
  },
  {
    "file": "85_cheeky_giggle.png",
    "subject": "Hehehe, I Know a Secret 🤭",
    "paragraphs": [
      "Grangie... 🤭 hehehe. I'm holding my cheeks with my paws because I'm trying not to laugh. I know something you don't know.",
      "This morning I saw Ruby hiding a little packet behind the rice cooker. It's a new treat packet. A new one! She thinks I didn't see. But I see everything. I'm a cat. Watching is my main job. 👀",
      "Now every time she walks past the rice cooker I make my cheeky face and she says \"What? Why you smiling like that?\" And I just look at her. Hehe. She has no idea that I know.",
      "Don't tell her, Grangie. This is our secret. I'll let you know when I get the treats. 🤫🐾"
    ]
  },
  {
    "file": "86_blanket_burrito.png",
    "themes": ["cold", "cozy"],
    "subject": "Samson Burrito, Extra Fluffy 🌯",
    "paragraphs": [
      "Hi Grangie. 🌯 Today I'm a burrito. I'm wrapped up in the soft minty blanket from head to toe and only my face and cone are poking out.",
      "The aircon was on high and I was a bit cold, so I climbed onto the bed and started digging at the blanket. Ruby saw and wrapped me up in it like a big parcel. I felt like a precious present. Warm and snuggly and very, very sleepy. 😌",
      "You walked past and said \"Samson burrito!\" and patted my head through the blanket. It was perfect. I closed my eyes and purred so loudly the blanket was vibrating.",
      "I don't want to come out. Please deliver all meals to the burrito. Fish filling preferred. 🐟💤🐾"
    ]
  },
  {
    "file": "87_lazy_lounge.png",
    "subject": "Living My Best Lazy Life 😌",
    "paragraphs": [
      "Grangie, today I did nothing. 😌 Absolutely nothing. And it was wonderful.",
      "I lay on my back on the sofa with one paw behind my head and my tummy in the air, like a holiday uncle on a deckchair. I watched the ceiling fan go round. I listened to Ruby singing in the kitchen. I didn't move for two whole hours. 🛋️",
      "Yati came past and said \"Wah, this cat got life ah.\" Yes, Yati. I do. I have the best life. Food, naps, a sofa, and a Grangie with a lint roller. What more could a cat want?",
      "Tomorrow I plan to do even less. I'm getting very good at it. 😴🐾"
    ]
  },
  {
    "file": "88_scheming.png",
    "subject": "I Have a Plan... 😈",
    "paragraphs": [
      "Grangie... 😈 I have a plan. Look at my face. Look at my paws rubbing together. Something is about to happen.",
      "The plan is this: tonight, when Ruby opens the fridge to get the milk, I'll be waiting right next to her leg. When the door opens, I'll slip in my head and find the fish that I KNOW is in there. I smelled it this morning. It's on the second shelf. 🐟",
      "Step two: grab the fish. Step three: run very fast to my basket. Step four: eat the fish before Yati arrives in police mode. I've thought about this all day. It's a very good plan. 🗺️",
      "The only problem is my cone might get stuck in the fridge door. I'll work on that part. Wish me luck. I'll report back tomorrow. 🤫🐾"
    ]
  },
  {
    "file": "89_upside_down_pillows.png",
    "themes": ["cozy"],
    "subject": "Upside Down in the Pillow Fort 🙃",
    "paragraphs": [
      "Hi Grangie! 🙃 I'm writing to you upside down. My head is on the floor, my tail is in the air, and I'm surrounded by pillows. It's a very good way to see the world.",
      "Ruby took all the cushions off the sofa to clean it, and they ended up in a big pile. I dived straight into the middle. Then I rolled. Then somehow I ended up upside down with my cone resting on the floor and my paws sticking up. 🛋️",
      "Everything looks funny from here. The ceiling fan is under me. Ruby's feet are at the top. You're upside down too, Grangie, sitting at your table. You still look nice though.",
      "I'll turn the right way round eventually. For now, I'm very comfy. Please don't put the cushions back yet. 🐾"
    ]
  },
  {
    "file": "90_pirate.png",
    "subject": "Ahoy, Captain Samson! 🏴‍☠️",
    "paragraphs": [
      "AHOY, Grangie! 🏴‍☠️ I'm Captain Samson now, the fiercest pirate in all of Singapore. I have a pirate hat, an eye patch, and a shiny sword. Arrr!",
      "My ship is the laundry basket. My crew is Fishy, my fish pillow. My treasure is anything that smells of fish. Today I sailed across the living room and raided the kitchen for treasure. Arrr! 🦜",
      "Unfortunately, the coast guard caught me. The coast guard was Yati, of course. She took my sword (a chopstick) and put me back in my basket. Pirates always get caught by the policewoman in the end.",
      "But I'll be back on the high seas tomorrow. If you hear me shouting \"Arrr!\" from the laundry basket, that's just Captain Samson on patrol. 🐟⚓🐾"
    ]
  }
];

// ---------- Public entry points ----------

/** One-time setup: shuffle order, reset state, create watchdog + first send trigger. */
function setup() {
  const p = props_();
  if (!p.getProperty('order')) {
    const order = shuffle_(STORIES.map(function (_, i) { return i; }));
    p.setProperties({ order: JSON.stringify(order), nextIndex: '0', sentLog: '[]' });
  }
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'watchdog') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('watchdog').timeBased().everyDays(1).atHour(6).nearMinute(0).inTimezone(TZ).create();
  scheduleNext();
  Logger.log('Setup done. Next send: ' + p.getProperty('nextSendAt'));
}

/** Sends the welcome email once. */
function sendWelcome() {
  const p = props_();
  if (p.getProperty('welcomeSent')) { Logger.log('Welcome already sent.'); return; }
  const html = WELCOME.htmlParagraphs.map(function (h) { return '<p>' + h + '</p>'; }).join('\n');
  const text = WELCOME.htmlParagraphs.map(stripHtml_).join('\n\n');
  sendMail_(TO, BCC, WELCOME.subject, WELCOME.file, html, text);
  p.setProperty('welcomeSent', new Date().toISOString());
}

/** Sends the next story only to Gabriel with [TEST] prefix. Does not mark as sent. */
function sendTestToGabriel() {
  const s = isBirthday_() ? BIRTHDAY_STORY : pickStory_();
  if (!s) { Logger.log('No stories left.'); return; }
  sendStory_(s, GABRIEL, '', '[TEST] ');
}

/** Trigger handler: sends today's story, then schedules tomorrow. */
function sendDaily() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    const p = props_();
    const today = todayKey_();
    if (p.getProperty('lastSentDate') !== today) {
      if (isBirthday_()) {
        if (p.getProperty('birthdaySentYear') !== today.slice(0, 4)) {
          sendStory_(BIRTHDAY_STORY, TO, BCC, '');
          p.setProperty('birthdaySentYear', today.slice(0, 4));
          logSent_(BIRTHDAY_STORY.file);
        }
        p.setProperty('lastSentDate', today);
      } else {
        const s = pickStory_();
        if (s) {
          sendStory_(s, TO, BCC, '');
          p.setProperty('nextIndex', String(Number(p.getProperty('nextIndex') || 0) + 1)); // informational count
          p.setProperty('lastSentDate', today);
          logSent_(s.file);
        } else {
          notifyRunOut_();
          return; // stop: no more scheduling
        }
      }
    }
  } finally {
    lock.releaseLock();
  }
  scheduleNext();
}

/** Deletes pending sendDaily triggers and creates a one-off trigger at a random time tomorrow (START_HOUR-END_HOUR SGT, i.e. 07:00-12:00). */
/** Schedules the next sendDaily. Pass fixedIso (e.g. '2026-10-13T08:00:00+08:00') for a one-off time; otherwise random tomorrow 07:00–12:00 SGT. */
function scheduleNext(fixedIso) {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'sendDaily') ScriptApp.deleteTrigger(t);
  });
  if (!peekNext_() && !hasUpcomingBirthday_()) { notifyRunOut_(); return; }
  var at;
  if (fixedIso) {
    at = new Date(fixedIso);
  } else {
    const tomorrow = new Date(Date.now() + 24 * 3600 * 1000);
    const ymd = Utilities.formatDate(tomorrow, TZ, 'yyyy-MM-dd');
    const minutes = START_HOUR * 60 + Math.floor(Math.random() * (END_HOUR - START_HOUR) * 60);
    const hh = ('0' + Math.floor(minutes / 60)).slice(-2), mm = ('0' + (minutes % 60)).slice(-2);
    at = new Date(ymd + 'T' + hh + ':' + mm + ':00+08:00');
  }
  ScriptApp.newTrigger('sendDaily').timeBased().at(at).create();
  props_().setProperty('nextSendAt', Utilities.formatDate(at, TZ, 'yyyy-MM-dd HH:mm') + ' SGT');
}

/** Daily ~06:00 safety net: reschedule if the chain broke. */
function watchdog() {
  const p = props_();
  if (p.getProperty('ranOutNotified')) return;
  const pending = ScriptApp.getProjectTriggers().some(function (t) { return t.getHandlerFunction() === 'sendDaily'; });
  if (pending || p.getProperty('lastSentDate') === todayKey_()) return;
  // No trigger and nothing sent today: schedule a random time later today.
  const now = new Date();
  const ymd = todayKey_();
  const minutes = START_HOUR * 60 + Math.floor(Math.random() * (END_HOUR - START_HOUR) * 60);
  let at = new Date(ymd + 'T' + ('0' + Math.floor(minutes / 60)).slice(-2) + ':' + ('0' + (minutes % 60)).slice(-2) + ':00+08:00');
  if (at <= now) at = new Date(now.getTime() + 5 * 60 * 1000);
  ScriptApp.newTrigger('sendDaily').timeBased().at(at).create();
  p.setProperty('nextSendAt', Utilities.formatDate(at, TZ, 'yyyy-MM-dd HH:mm') + ' SGT (watchdog)');
}

/** Reshuffle after adding new stories: clears queue state (keeps welcomeSent), then runs setup(). */
function resetQueue() {
  const p = props_();
  ['order', 'nextIndex', 'sentLog', 'ranOutNotified'].forEach(function (k) { p.deleteProperty(k); });
  // setup() shuffles and schedules a random tomorrow; we override to 8am Tue 13 Oct if still ahead.
  setup();
  const first = new Date('2026-10-13T08:00:00+08:00');
  if (Date.now() < first.getTime()) {
    scheduleNext('2026-10-13T08:00:00+08:00');
    Logger.log('Queue reset: ' + STORIES.length + ' stories. First send fixed: 2026-10-13 08:00 SGT.');
  } else {
    Logger.log('Queue reset: ' + STORIES.length + ' stories shuffled. Next: ' + p.getProperty('nextSendAt'));
  }
}

/** Handy: log current state. */
function showStatus() {
  const p = props_().getProperties();
  Logger.log(JSON.stringify(p, null, 2));
}

// ---------- Helpers ----------

function props_() { return PropertiesService.getScriptProperties(); }

function todayKey_() { return Utilities.formatDate(new Date(), TZ, 'yyyy-MM-dd'); }

function isBirthday_() {
  const md = Utilities.formatDate(new Date(), TZ, 'M-d');
  return md === BIRTHDAY.month + '-' + BIRTHDAY.day;
}

/** True if the birthday story hasn't been sent this year yet (keeps scheduling alive only for it). */
function hasUpcomingBirthday_() { return false; } // stop entirely when daily stories run out

/** Stories in shuffled order that have never been sent (scans sentLog, so nothing repeats). */
function unusedStories_() {
  const p = props_();
  const order = JSON.parse(p.getProperty('order') || '[]');
  const sent = {};
  JSON.parse(p.getProperty('sentLog') || '[]').forEach(function (e) { sent[e.file] = true; });
  return order.map(function (i) { return STORIES[i]; })
    .filter(function (s) { return s && !sent[s.file]; });
}

/** Next unused story in shuffled order (no weather); used for scheduling checks and tests. */
function peekNext_() {
  const u = unusedStories_();
  return u.length ? u[0] : null;
}

/** Current Singapore weather from Open-Meteo (no key). Returns {temp, code} or null on failure. */
function fetchWeather_() {
  try {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=1.35&longitude=103.82' +
      '&current=temperature_2m,weather_code&timezone=Asia%2FSingapore';
    const res = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
    if (res.getResponseCode() !== 200) return null;
    const cur = JSON.parse(res.getContentText()).current || {};
    if (typeof cur.temperature_2m !== 'number' || typeof cur.weather_code !== 'number') return null;
    return { temp: cur.temperature_2m, code: cur.weather_code };
  } catch (e) {
    Logger.log('fetchWeather_ failed: ' + e);
    return null;
  }
}

/** Maps weather to theme tiers (best first), or null for "no preference". WMO codes. */
function desiredThemes_(w) {
  if (!w) return null;
  const c = w.code;
  const rainy = (c >= 51 && c <= 67) || (c >= 80 && c <= 82) || c >= 95; // drizzle, rain, showers, thunder
  if (rainy) return [['rain', 'cold'], ['cozy']];
  if (w.temp >= 32 || (c <= 1 && w.temp >= 30)) return [['hot']];          // scorching or clear & very warm
  if (w.temp < 26 || c === 3 || c === 45 || c === 48) return [['cozy', 'cold']]; // cool / overcast / fog
  return null;
}

/** Picks today's non-birthday story: weather-matched unused story if any, else next shuffled unused. */
function pickStory_() {
  const unused = unusedStories_();
  if (!unused.length) return null;
  const w = fetchWeather_();
  const tiers = desiredThemes_(w);
  if (tiers) {
    for (let t = 0; t < tiers.length; t++) {
      const want = tiers[t];
      const matches = unused.filter(function (s) {
        return (s.themes || []).some(function (x) { return want.indexOf(x) !== -1; });
      });
      if (matches.length) {
        const s = matches[Math.floor(Math.random() * matches.length)];
        Logger.log('Weather ' + JSON.stringify(w) + ' -> ' + want.join('/') + ' -> ' + s.file);
        return s;
      }
    }
  }
  Logger.log('Weather ' + JSON.stringify(w) + ' -> no match, shuffled ' + unused[0].file);
  return unused[0];
}

/** Handy: log what the weather picker would choose right now (sends nothing, marks nothing). */
function testWeatherPick() {
  const w = fetchWeather_();
  Logger.log('Weather: ' + JSON.stringify(w) + ' themes: ' + JSON.stringify(desiredThemes_(w)));
  const s = pickStory_();
  Logger.log('Would pick: ' + (s ? s.file + ' — ' + s.subject : 'none'));
}

function logSent_(file) {
  const p = props_();
  const log = JSON.parse(p.getProperty('sentLog') || '[]');
  log.push({ date: todayKey_(), file: file });
  p.setProperty('sentLog', JSON.stringify(log));
}

function notifyRunOut_() {
  const p = props_();
  if (p.getProperty('ranOutNotified')) return;
  MailApp.sendEmail({
    to: GABRIEL,
    subject: 'Samson has run out of stickers 🐾',
    body: 'All ' + STORIES.length + ' daily stories have been sent to Grangie. ' +
          'Samson has stopped sending. Add new stickers and stories to Code.gs, then run setup() again ' +
          '(after clearing the "order", "nextIndex" and "ranOutNotified" script properties).',
    name: SENDER_NAME
  });
  p.setProperty('ranOutNotified', new Date().toISOString());
}

function sendStory_(s, to, bcc, subjectPrefix) {
  const html = s.paragraphs.map(function (t) { return '<p>' + escapeHtml_(t) + '</p>'; }).join('\n') +
    '\n<p>' + escapeHtml_(SIGN_OFF).replace(', ', ',<br>') + '</p>';
  const text = s.paragraphs.join('\n\n') + '\n\n' + SIGN_OFF.replace(', ', ',\n');
  sendMail_(to, bcc, subjectPrefix + s.subject, s.file, html, text);
}

function sendMail_(to, bcc, subject, file, innerHtml, text) {
  const blob = fetchImage_(file);
  const htmlBody =
    '<div style="font-family:Georgia,serif;font-size:17px;line-height:1.7;color:#333;max-width:600px;margin:auto">' +
    '<p style="text-align:center"><img src="cid:sticker" alt="Samson" ' +
    'style="width:100%;max-width:420px;height:auto;display:block;margin:0 auto"></p>' +
    innerHtml + '</div>';
  const msg = { to: to, subject: subject, htmlBody: htmlBody, body: text, name: SENDER_NAME, inlineImages: { sticker: blob } };
  if (bcc) msg.bcc = bcc;
  MailApp.sendEmail(msg);
}

function fetchImage_(file) {
  const res = UrlFetchApp.fetch(IMG_BASE + encodeURIComponent(file), { muteHttpExceptions: true });
  if (res.getResponseCode() !== 200) throw new Error('Image fetch failed (' + res.getResponseCode() + '): ' + file);
  const ext = file.split('.').pop().toLowerCase();
  const mime = { png: 'image/png', gif: 'image/gif', webp: 'image/webp', jpg: 'image/jpeg', jpeg: 'image/jpeg' }[ext] || 'image/png';
  return res.getBlob().setContentType(mime).setName(file);
}

function escapeHtml_(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function stripHtml_(h) {
  return h.replace(/<br\s*\/?>/g, '\n').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&');
}

/** Fisher-Yates shuffle. */
function shuffle_(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

/** Sends the welcome email to Gabriel only, as a test. */
function testWelcome() {
  const html = WELCOME.htmlParagraphs.map(function (h) { return '<p>' + h + '</p>'; }).join('\n');
  const text = WELCOME.htmlParagraphs.map(stripHtml_).join('\n\n');
  sendMail_(GABRIEL, '', '[TEST] ' + WELCOME.subject, WELCOME.file, html, text);
}
