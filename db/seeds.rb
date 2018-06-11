# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Topic.destroy_all
Question.destroy_all
QuestionTopicLink.destroy_all
Comment.destroy_all
Answer.destroy_all


users = User.create([
  {username: "Marcus",
password: "password"},{username: "Aiden",
password: "password"},{username: "Mary",
password: "password"},{username: "Cindy",
password: "password"},{username: "Bernice",
password: "password"},{username: "Tom",
password: "password"},{username: "Chris",
password: "password"},{username: "Karen",
password: "password"},{username:"Guest", password:"password"}])

topics = Topic.create([
  {name: "General"},{name: "Career"},{name: "Real Estate"},{name: "Psychology"},{name: "Children"},{name: "Food"},{name:"Nature"},{name:"Health"},{name:"Astronomy"}])

  questions = Question.create([
    {
      title: "How many days should I spend in China?",
      description: "",
      author_id: users[0].id,
      topic_ids: [topics[0].id]
    },
    {
      title: "I'm 35 years old. Am I too old to join Google, Facebook, Microsoft or Apple as a software engineer?",
      description: "",
      author_id: users[1].id,
      topic_ids: [topics[1].id]
    },
    {
      title: "What are some tips for someone looking to buy a starter home in the Bay Area in 2016?",
      description: "",
      author_id: users[4].id,
      topic_ids: [topics[2].id]
    },
    {
      title: "What is the most complex thing in psychology you have learned?",
      description: "",
      author_id: users[5].id,
      topic_ids: [topics[3].id]
    },
    {
      title: "What motivates children?",
      description: "",
      author_id: users[2].id,
      topic_ids: [topics[3].id, topics[4].id]
    },
    {
      title: "What did you eat, only to regret it moments later?",
      description: "",
      author_id: users[2].id,
      topic_ids: [topics[5].id]
    },
    {
      title: "What has been your best career decision(s)?",
      description: "",
      author_id: users[4].id,
      topic_ids: [topics[1].id]
    },
    {
      title: "Why are people from the future not time traveling to our period, assuming time travel technology is available in the future?",
      description: "",
      author_id: users[1].id,
      topic_ids: [topics[0].id]
    },
    {
      title: "What are some things a new Tesla owner needs to know?",
      description: "",
      author_id: users[2].id,
      topic_ids: [topics[0].id]
    },
    {
      title: "How can I decide which career to pursue?",
      description: "",
      author_id: users[6].id,
      topic_ids: [topics[1].id]
    },
    {
      title: "How can I start a real estate business?",
      description: "",
      author_id: users[6].id,
      topic_ids: [topics[2].id]
    },
    {
      title: "What are some psychological facts that people don't know?",
      description: "",
      author_id: users[6].id,
      topic_ids: [topics[3].id]
    },
    {
      title: "What can adults learn from children?",
      description: "",
      author_id: users[6].id,
      topic_ids: [topics[4].id]
    },
    {
      title: "What are the best, simplest toys for kids?",
      description: "",
      author_id: users[6].id,
      topic_ids: [topics[4].id]
    },
    {
      title: "What is the most overrated and over-praised food?",
      description: "",
      author_id: users[6].id,
      topic_ids: [topics[5].id]
    },
    {
      title: "What are some of the most mind-blowing facts about plants and trees?",
      description: "",
      author_id: users[6].id,
      topic_ids: [topics[6].id]
    },
    {
      title: "What are the differences between nature and its society?",
      description: "",
      author_id: users[6].id,
      topic_ids: [topics[6].id]
    },
    {
      title: "Is milk good or bad for health?",
      description: "",
      author_id: users[6].id,
      topic_ids: [topics[7].id]
    },
    {
      title: "What are the health benefits of smiling?",
      description: "",
      author_id: users[6].id,
      topic_ids: [topics[7].id]
    },
    {
      title: "What are some cool facts about the Universe?",
      description: "",
      author_id: users[6].id,
      topic_ids: [topics[8].id]
    },
    {
      title: "Is there really an hypothesis explaining the origin of the solar system?",
      description: "",
      author_id: users[6].id,
      topic_ids: [topics[8].id]
    }
  ])

  answers= Answer.create ([
  {
    author_id: users[1].id,
    text: "No.

Google frequently hires people who are much older than that, in both junior and senior positions. The main reasons Google engineers skew slightly younger, on average, are that Google was much smaller 10 years ago; many of its hires are made at the entry level; and for more senior positions, many older engineers are too well-established in their companies to transfer. None of these reasons would be a major obstacle to your joining Google.

In fact, interviewers are trained to avoid unconscious bias, including ageism.

For the record, I started working at Google at 33. And didn’t even feel close to too old to join.",
    question_id: questions[1].id

  },
  {
    author_id: users[2].id,
    text: "Actually, it all depends.

If you just want to visit some modern cities in china, 3 weeks is enough. You can choose to go Beijing, shanghai, Shenzhen and Hong Kong. In some ways, these four cities cover the political center and economic center of china and can be the symbol of modern china.

Similarly, if you just want to know some traditional customs of china, you can also choose several cities, such as Xishuangbanna, Dali, Dunhuang, as your destination. And traveling these cities won’t take you long time.

If you want to have a comprehensive understanding of Chinese culture, you should stay in china for at least 2 years, I suppose. On the one hand, china is a big country and every province, even those adjacent provinces, has their unique cultural customs which constitute the whole Chinese culture. On the other hand, in order to have a deep understanding of the culture in one country, you need to live there to experience the culture by yourself and communicate with local people.",
    question_id: questions[0].id

  },
  {
    author_id: users[5].id,
    text: "As Loooooong as you can! You will never regret starying there for a longer period of time. Last time I went there, I stayed for two month and only find that's too short the time to even cover the four first-tier cities: Beijing, Shanghai, Guangzhou and Shenzhen. Therefor I would recommand anyone to stay as loog as they can in China if they have the time.",
    question_id: questions[0].id
  },
  {
    author_id: users[4].id,
    text: "Personally, I think a full 365 days would give you a good handle on what China has to offer. I've been here around 3 years and the list of things I want to see is continually growing, even as I check things off. Ironically, I’ve seen more of China than most of my Chinese friends have!

If your question is really “how many vacation days should I request for my trip to China?” then I’d suggest a minimum of two weeks if you don’t think you’ll have an opportunity to come back.",
    question_id: questions[0].id
  },
  {
    author_id: users[2].id,
    text: "I started at Google when I was 46, and I’ve been working there for seven years now. Two things to keep in mind:

The interviewing process is more geared towards hiring people fresh out of school than experienced engineers, and more geared to hiring backend folks than frontend folks. Getting past that has been a major obstacle for many talented people I know.
Although ageism is rare, you may feel out of place at times since most of your coworkers will be much younger than you are. This comes up more often in social situations than in technical ones.",
    question_id: questions[1].id
  },
  {
    author_id: users[3].id,
    text: "There’s only one tip that matters, regardless of the year in the Bay Area: get a good real estate broker.

When the market is tight, you need somebody who can help you navigate and find good deals. This means your real estate broker will tell you the fair market value and stick to it as if he’s spending his own money. Some will just get you to bid high to win competitive bids, which works but doesn't always serve your best interests.

You may not have the big downpayment or sterling credit, but your real estate broker (sometimes called a Realtor) will help you figure out a way to still compete.

As for the rest of the transaction, there are so many moving parts from inspections, repairs, financing, insurance, and escrow/title that your real estate broker should help you handle from end to end, making sure you come to the optimal decision.

As for how to find a good real estate broker, talk to a few that your friends have used and trusted. Go with the one you feel most comfortable.",
    question_id: questions[2].id
  },
  {
    author_id: users[5].id,
    text: "Need to understand what a starter home is and what your needs are.

Do you want to be in a good school area? Especially if you are going to raise a family.

Do you want want new construction or do you want to do fix up a place?

Get pre-approved from a lender in the area and your agent should be able to assist here. When you get approved, make sure that you are indeed ready to purchase a home. Homes will go fast once listed and many times a seller wants to close quickly.

You will need all your paperwork and finance in order and ready to go. Chances are they will get multiple bids on a home. If you want to take this part of buying out of the equation, go for a new development as little easier to deal with. Have your paperwork ready though and complete. Your lender can give you a list of everything needed.

Make sure you calculate all the other cost associated with owning a home as well. Can’t tell you how many folks say “my rent will be what I pay for a mortgage” They are forgetting taxes, HOA/Mello-roos, repairs, upkeep, maintenance, appliances, furniture, utilities, insurance, downpayment and other expenses you have.

Get inspections if you don’t feel right about something. Many sellers will provide a home inspection and will call out any areas needing attention. Anything that feels funny around electrical, plumbing, structure and other big ticket items could require a second inspection by a licensed professional. Keep in mind that the home inspection is done on cursory glance and he only has so much knowledge. You don’t want to buy that house that needs 20K to reinforce the structure when you buy it. The catch though is most folks have money to fix these issues and sellers in the Bay Area will go no contingencies. You need to decide if you want to run a negotiation on this. A $250 inspection can save a lot of money in the future, so don’t go cheap.

Just a few thoughts from the home buying experience I have and sure there are more that others will post. Happy to provide more info if you connect with me.",
    question_id: questions[2].id
  },
  {
    author_id: users[2].id,
    text: "Gaslighting
Gaslighting is a term used when a wrong-doer manipulates a victim, making the victim question their thoughts and sanity. A dialogue between a girlfriend and a boyfriend
Her: You said you were coming home at 7 pm for my birthday! You forgot!
Him: I told you I was coming at 9 pm. Gosh! you never listen to me. I always tell you something and you always forget.
Her: I'm sorry, I didn't mean to hurt you. I remember you saying 9 pm.
Him: Yeah, you should be sorry. I really can't believe you right now.
Even though she did say 7 pm and he couldn't make it, he lied. He made her question her own thoughts . Can she really trust her own thoughts when the person she loves edits them?

It's basically toying with someone's emotions. This happens to so many people and most people don't even realize it since it’s based on a subconscious level. It's very scary and this is a problem that needs to be brought to light. ( or gaslight. No pun intended)
Edit: Thank you to everyone for reading my answer! If you have time, you guys should check out my blog AboutBossMidset. It would really mean a lot to me if you guys checked it out. I worked so hard on this and it's my first time doing business besides my business class freshman year. It would also help to get some feedback and improvement from this Community. Thank you so much.
P.S Please Subscribe to me too because that would mean the world to me :)
",
    question_id: questions[3].id
  },
  {
    author_id: users[3].id,
    text: "A lot of times they just do what feels natural.  One of the best ways to motivate is to have it just, happen.  Forced motivation nearly always seems like an action of another person.

Examples: Bruce Wayne is motivated to overcome his fear of bats and use this for good.  In middle school, some inspiring teachers showed my class a physics video; ever since, I've become interested in the phenomena of subatomic and astronomical worlds.",
    question_id: questions[4].id
  },
  {
    author_id: users[5].id,
    text: "Attention.
Scientists find that a child who is watched by parents on the scene is more likely to complete the building blocks task, even if they cannot get any help from the parents. Sometimes attention is the biggest help for a child.",
    question_id: questions[4].id
  },
  {
    author_id: users[4].id,
    text: "There's a preserved fish dish in South Korea called Hongeohoe. I was warned off it, but decided I should show my host my willingness to try local food and be more than just a tourist.

It tasted like ammonia. And being preserved, it was rubbery. The more I chewed, the stronger the ammonia taste got. It was like chewing an eraser that had been impregnated with floor cleaner. I choked the piece down, but the flavor stayed with me, the fumes rising into my nose.

My host said kindly, 'A lot of Koreans don't like it either.' Now he tells me!",
    question_id: questions[5].id
  },
  {
    author_id: users[2].id,
    text: "I was a hardcore gamer & used to play 8 hours of gaming daily even without proper food. I used to take money with my parents for college related expenses, exam fees etc. But I never use to go for college & used to have fun by playing.

Actually we where a team of 5 people & we where sponsored by a company & used to participate in gaming tournaments within India & used to win lot of prices. But the prices was been taken by the sponsors & we use to get very small amount out of it. Since I was winning most of the tournaments, I had decided to make this as my profession (this may sound crazy), Since I had the confidence of becoming a popular gamer. I was actually addicted to it so I didn't have a choice also.

All was going smooth, Unfortunately Since I was not attending my college regularly my parents came to know about it & they didn't even ask or scolded me anything. That silence really made me feel so sad.

After this what my tough days also started, I was losing most of my games & was losing the identity of gamer due to bad gaming skills & also lost my position from my team & there was no one to help me out to recover back to gaming.

At this time I didn't realize.

Everything happens for good

Days just passed & I came to know some other person has been replaced to my position & I realized that in reality through gaming I cannot be financially good & it is not a profession also and decided to quit gaming.

One good thing that helped me was, Since I used to spent more time in computer, I had the craze in software gaming development work, Finally I joined a coaching center & Learnt programming language within less time & completed my graduation. Joined a startup for a very basic salary without any expectations & Due to my hardwork and struggle. Now I'm successfully working as a Software engineer in a MNC earning a decent salary & also play games at free time. Right choice at right moment made me successful.

Sometimes in life you have to make a decision and make sacrifices.",
    question_id: questions[6].id
  },
  {
    author_id: users[0].id,
    text: "This time period isn't nearly as interesting to travel to as you might think. It is well documented, possibly dangerous, and takes up a tiny sliver of the interesting history of Planet Earth. Time travel is impossible. (Various reasons listed.) Because time travel is dangerous, due to paradox worries or the need to simultaneously teleport on a galactic scale (because the Solar System moves), or very expensive. These options result in only limited trips being made. Which relates back to the first issue; our time period may not be worth the risk. Time travelers are undetectable by choice. There are no people left in the future to travel to other times. They either died or technologically regressed before time travel was invented.",
    question_id: questions[7].id
  },
  {
    author_id: users[4].id,
    text: "I was a new Tesla owner (Model S) about 3 years ago, so my experience may not be the same as current new owners, but my thoughts are:

Model S door handles get very hot in afternoon summer sun. Park your car with the driver's side door handles in the shade when you can.
When you take off from a stop light (and you know you will), watch out for people turning right on red in front of you. A Tesla will get across the intersection way faster than most drivers expect. Don't run into them.
Driving a Tesla to work gives you something to look forward all day; driving home in a Tesla. Every day in a Tesla is better than the days you're not in a Tesla.
If you're married, make sure you share your Tesla. Don't want a jealous spouse. They will appreciate it.",
    question_id: questions[8].id
  },
])

comments = Comment.create([
  {
    author_id: users[5].id,
    answer_id: answers[6].id,
    text: "Wow, that's very helpful!"
  },
  {
    author_id: users[1].id,
    answer_id: answers[7].id,
    text: "Thank you for writing this. I have encountered this in a Psych article in one of my books. I came to realize that people around me are like this and I thought something was wrong with me the whole time. Turned out, they are the ones who got issues."
  },
  {
    author_id: users[5].id,
    answer_id: answers[10].id,
    text: "That's interesting, I would propably try that if get a chance : )"
  }

])
