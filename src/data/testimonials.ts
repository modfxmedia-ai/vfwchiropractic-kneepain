export type Testimonial = {
  name: string;
  location: string;
  text: string;
  accent: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Mike S.",
    location: "Canton, MI",
    text: "I came to Vital Flow after a car accident left me with constant neck and back pain. The team was so caring and professional, they took the time to explain everything and created a treatment plan that worked perfectly for me.",
    accent: "from-[#3EC2D1] to-[#0C5D98]",
  },
  {
    name: "Emily R.",
    location: "Plymouth, MI",
    text: "I had been dealing with neuropathy for years, and it was affecting my daily life. After a few sessions, I noticed a significant improvement in my pain and mobility. I highly recommend Vital Flow.",
    accent: "from-[#0C5D98] to-[#07407D]",
  },
  {
    name: "John D.",
    location: "Northville, MI",
    text: "I was skeptical about PRP therapy, but the team explained everything so clearly and made me feel at ease. I decided to give it a try for my knee pain, and the results have been amazing.",
    accent: "from-[#3EC2D1] to-[#2DA44E]",
  },
];
