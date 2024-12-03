import { ForumThread } from '../types/forum';

export const forumThreads: ForumThread[] = [
  {
    id: 1,
    title: "Need advice regarding property inheritance dispute",
    content: "My father passed away recently without leaving a will. There's a dispute between my siblings regarding the distribution of his property. What are my legal rights in this situation?",
    author: "Sarah_M",
    date: "2024-03-15",
    category: "Property Law",
    views: 156,
    replies: [
      {
        id: 1,
        content: "Under Sri Lankan law, when a person dies intestate (without a will), the distribution of property is governed by personal laws depending on the deceased's religion and ethnicity. I would need more information about your specific situation to provide detailed advice.",
        author: "Rajitha Perera",
        isLawyer: true,
        date: "2024-03-15",
        likes: 12
      },
      {
        id: 2,
        content: "I went through a similar situation last year. The best approach is to get all siblings to sit together with a lawyer and discuss the matter openly.",
        author: "Kumar123",
        isLawyer: false,
        date: "2024-03-15",
        likes: 5
      },
      {
        id: 3,
        content: "According to the Muslim Law of Inheritance, if applicable in your case, there are specific shares prescribed for each heir. I recommend consulting a lawyer specializing in Muslim personal law for accurate guidance.",
        author: "Fathima Hussain",
        isLawyer: true,
        date: "2024-03-16",
        likes: 8
      }
    ]
  },
  {
    id: 2,
    title: "Workplace discrimination question",
    content: "I believe I'm being discriminated against at my workplace due to my ethnicity. What legal actions can I take?",
    author: "concerned_employee",
    date: "2024-03-14",
    category: "Employment Law",
    views: 234,
    replies: [
      {
        id: 1,
        content: "Document everything - dates, times, incidents, and witnesses. This will be crucial for your case. You can file a complaint with the Human Rights Commission of Sri Lanka.",
        author: "Amali Silva",
        isLawyer: true,
        date: "2024-03-14",
        likes: 15
      },
      {
        id: 2,
        content: "Have you tried discussing this with your HR department first?",
        author: "worklife_balance",
        isLawyer: false,
        date: "2024-03-14",
        likes: 3
      },
      {
        id: 3,
        content: "Under the Constitution of Sri Lanka, discrimination based on ethnicity is prohibited. You have grounds for legal action under Article 12. I suggest first gathering evidence and then seeking legal representation.",
        author: "Nimal Ferdinando",
        isLawyer: true,
        date: "2024-03-15",
        likes: 20
      }
    ]
  },
  {
    id: 3,
    title: "Traffic accident compensation claim",
    content: "I was involved in a traffic accident last week. The other driver was clearly at fault but their insurance company is being difficult. How should I proceed?",
    author: "driver_99",
    date: "2024-03-13",
    category: "Traffic Law",
    views: 189,
    replies: [
      {
        id: 1,
        content: "First, ensure you have filed a police report. Take photographs of the damage and gather witness statements if possible. Medical reports are crucial if there were injuries.",
        author: "Lakshman Perera",
        isLawyer: true,
        date: "2024-03-13",
        likes: 10
      },
      {
        id: 2,
        content: "I had a similar experience. Don't accept any initial offers without consulting a lawyer.",
        author: "roaduser123",
        isLawyer: false,
        date: "2024-03-14",
        likes: 4
      },
      {
        id: 3,
        content: "Under Sri Lankan law, you can claim both property damage and personal injury compensation. The insurance company's initial reluctance is common. I recommend sending a formal letter of demand through a lawyer.",
        author: "Dilshan Wijesinghe",
        isLawyer: true,
        date: "2024-03-14",
        likes: 18
      }
    ]
  },
  {
    id: 4,
    title: "Starting a small business - Legal requirements",
    content: "Planning to start a small online business. What are the legal requirements and registrations needed?",
    author: "future_entrepreneur",
    date: "2024-03-12",
    category: "Business Law",
    views: 312,
    replies: [
      {
        id: 1,
        content: "For an online business, you'll need to register with the Registrar of Companies, obtain a TIN, and comply with consumer protection laws. Consider trademark protection for your brand.",
        author: "Priyantha Silva",
        isLawyer: true,
        date: "2024-03-12",
        likes: 25
      },
      {
        id: 2,
        content: "Don't forget about the tax implications. I learned this the hard way.",
        author: "business_newbie",
        isLawyer: false,
        date: "2024-03-13",
        likes: 7
      },
      {
        id: 3,
        content: "If you're planning to handle customer data, you need to comply with data protection regulations. Also consider whether you need any specific licenses depending on your business type.",
        author: "Chamari Gunasekara",
        isLawyer: true,
        date: "2024-03-13",
        likes: 15
      }
    ]
  }
];